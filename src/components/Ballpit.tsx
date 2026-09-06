"use client";

import React, { useEffect, useRef } from 'react';
import {
  Vector3,
  MeshPhysicalMaterial,
  InstancedMesh,
  Clock,
  AmbientLight,
  SphereGeometry,
  ShaderChunk,
  Scene,
  Color,
  Object3D,
  SRGBColorSpace,
  MathUtils,
  PMREMGenerator,
  Vector2,
  WebGLRenderer,
  PerspectiveCamera,
  PointLight,
  ACESFilmicToneMapping,
  Plane,
  Raycaster
} from 'three';
// @ts-ignore
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';

class ThreeApp {
  private config: any;
  canvas!: HTMLCanvasElement;
  camera!: PerspectiveCamera;
  cameraMinAspect?: number;
  cameraMaxAspect?: number;
  cameraFov!: number;
  maxPixelRatio?: number;
  minPixelRatio?: number;
  scene!: Scene;
  renderer!: WebGLRenderer;
  private _postprocessing: any;
  size = { width: 0, height: 0, wWidth: 0, wHeight: 0, ratio: 0, pixelRatio: 0 };
  render = this._renderDefault;
  onBeforeRender = (time: { elapsed: number; delta: number }) => {};
  onAfterRender = (time: { elapsed: number; delta: number }) => {};
  onAfterResize = (size: any) => {};
  private _isIntersecting = false;
  private _isRendering = false;
  isDisposed = false;
  private _intersectionObserver?: IntersectionObserver;
  private _resizeObserver?: ResizeObserver;
  private _resizeTimeout: any;
  private _clock = new Clock();
  private _time = { elapsed: 0, delta: 0 };
  private _animationFrameId?: number;

  constructor(config: any) {
    this.config = { ...config };
    this._initCamera();
    this._initScene();
    this._initRenderer();
    this.resize();
    this._initObservers();
  }

  private _initCamera() {
    this.camera = new PerspectiveCamera();
    this.cameraFov = this.camera.fov;
  }

  private _initScene() {
    this.scene = new Scene();
  }

  private _initRenderer() {
    if (this.config.canvas) {
      this.canvas = this.config.canvas;
    } else if (this.config.id) {
      this.canvas = document.getElementById(this.config.id) as HTMLCanvasElement;
    } else {
      console.error('Three: Missing canvas or id parameter');
    }
    this.canvas.style.display = 'block';
    const rendererOptions = {
      canvas: this.canvas,
      powerPreference: 'high-performance',
      ...(this.config.rendererOptions ?? {})
    };
    this.renderer = new WebGLRenderer(rendererOptions);
    this.renderer.outputColorSpace = SRGBColorSpace;
  }

  private _initObservers() {
    if (!(this.config.size instanceof Object)) {
      window.addEventListener('resize', this._handleResize.bind(this));
      if (this.config.size === 'parent' && this.canvas.parentNode) {
        this._resizeObserver = new ResizeObserver(this._handleResize.bind(this));
        this._resizeObserver.observe(this.canvas.parentNode as Element);
      }
    }
    this._intersectionObserver = new IntersectionObserver(this._handleIntersection.bind(this), {
      root: null,
      rootMargin: '0px',
      threshold: 0
    });
    this._intersectionObserver.observe(this.canvas);
    document.addEventListener('visibilitychange', this._handleVisibilityChange.bind(this));
  }

  private _removeObservers() {
    window.removeEventListener('resize', this._handleResize.bind(this));
    this._resizeObserver?.disconnect();
    this._intersectionObserver?.disconnect();
    document.removeEventListener('visibilitychange', this._handleVisibilityChange.bind(this));
  }

  private _handleIntersection(entries: IntersectionObserverEntry[]) {
    this._isIntersecting = entries[0].isIntersecting;
    this._isIntersecting ? this._startLoop() : this._stopLoop();
  }

  private _handleVisibilityChange() {
    if (this._isIntersecting) {
      document.hidden ? this._stopLoop() : this._startLoop();
    }
  }

  private _handleResize() {
    if (this._resizeTimeout) clearTimeout(this._resizeTimeout);
    this._resizeTimeout = setTimeout(this.resize.bind(this), 100);
  }

  resize() {
    let width, height;
    if (this.config.size instanceof Object) {
      width = this.config.size.width;
      height = this.config.size.height;
    } else if (this.config.size === 'parent' && this.canvas.parentNode) {
      width = (this.canvas.parentNode as HTMLElement).offsetWidth;
      height = (this.canvas.parentNode as HTMLElement).offsetHeight;
      if (width === 0 || height === 0) {
        width = window.innerWidth;
        height = window.innerHeight;
      }
    } else {
      width = window.innerWidth;
      height = window.innerHeight;
    }
    this.size.width = width;
    this.size.height = height;
    this.size.ratio = width / height;
    this._updateCameraAspect();
    this._updateRendererSize();
    this.onAfterResize(this.size);
  }

  private _updateCameraAspect() {
    this.camera.aspect = this.size.width / this.size.height;
    if (this.camera.isPerspectiveCamera && this.cameraFov) {
      if (this.cameraMinAspect && this.camera.aspect < this.cameraMinAspect) {
        this._adjustFov(this.cameraMinAspect);
      } else if (this.cameraMaxAspect && this.camera.aspect > this.cameraMaxAspect) {
        this._adjustFov(this.cameraMaxAspect);
      } else {
        this.camera.fov = this.cameraFov;
      }
    }
    this.camera.updateProjectionMatrix();
    this.updateWorldSize();
  }

  private _adjustFov(aspectLimit: number) {
    const fovRad = Math.tan(MathUtils.degToRad(this.cameraFov / 2)) / (this.camera.aspect / aspectLimit);
    this.camera.fov = 2 * MathUtils.radToDeg(Math.atan(fovRad));
  }

  updateWorldSize() {
    if (this.camera.isPerspectiveCamera) {
      const fovRad = (this.camera.fov * Math.PI) / 180;
      this.size.wHeight = 2 * Math.tan(fovRad / 2) * this.camera.position.length();
      this.size.wWidth = this.size.wHeight * this.camera.aspect;
    }
  }

  private _updateRendererSize() {
    this.renderer.setSize(this.size.width, this.size.height);
    this._postprocessing?.setSize(this.size.width, this.size.height);
    let pixelRatio = window.devicePixelRatio;
    if (this.maxPixelRatio && pixelRatio > this.maxPixelRatio) {
      pixelRatio = this.maxPixelRatio;
    } else if (this.minPixelRatio && pixelRatio < this.minPixelRatio) {
      pixelRatio = this.minPixelRatio;
    }
    this.renderer.setPixelRatio(pixelRatio);
    this.size.pixelRatio = pixelRatio;
  }

  get postprocessing() {
    return this._postprocessing;
  }

  set postprocessing(val: any) {
    this._postprocessing = val;
    this.render = val.render.bind(val);
  }

  private _startLoop() {
    if (this._isRendering) return;
    const animate = () => {
      this._animationFrameId = requestAnimationFrame(animate);
      this._time.delta = this._clock.getDelta();
      this._time.elapsed += this._time.delta;
      this.onBeforeRender(this._time);
      this.render();
      this.onAfterRender(this._time);
    };
    this._isRendering = true;
    this._clock.start();
    animate();
  }

  private _stopLoop() {
    if (this._isRendering) {
      if (this._animationFrameId !== undefined) {
        cancelAnimationFrame(this._animationFrameId);
      }
      this._isRendering = false;
      this._clock.stop();
    }
  }

  private _renderDefault() {
    this.renderer.render(this.scene, this.camera);
  }

  clear() {
    this.scene.traverse((child: any) => {
      if (child.isMesh && typeof child.material === 'object' && child.material !== null) {
        Object.keys(child.material).forEach(key => {
          const matProp = child.material[key];
          if (matProp !== null && typeof matProp === 'object' && typeof matProp.dispose === 'function') {
            matProp.dispose();
          }
        });
        child.material.dispose();
        child.geometry.dispose();
      }
    });
    this.scene.clear();
  }

  dispose() {
    this._removeObservers();
    this._stopLoop();
    this.clear();
    this._postprocessing?.dispose();
    this.renderer.dispose();
    this.renderer.forceContextLoss();
    this.isDisposed = true;
  }
}

const interactionRegistry = new Map<HTMLElement, any>();
const globalPointerPos = new Vector2();
let isGlobalListenerActive = false;

function setupInteraction(config: any) {
  const state = {
    position: new Vector2(),
    nPosition: new Vector2(),
    hover: false,
    touching: false,
    onEnter: () => {},
    onMove: () => {},
    onClick: () => {},
    onLeave: () => {},
    ...config
  };

  _registerElement(config.domElement, state);

  state.dispose = () => {
    const el = config.domElement;
    interactionRegistry.delete(el);
    if (interactionRegistry.size === 0) {
      document.body.removeEventListener('pointermove', _onPointerMove);
      document.body.removeEventListener('pointerleave', _onPointerLeave);
      document.body.removeEventListener('click', _onClick);

      document.body.removeEventListener('touchstart', _onTouchStart);
      document.body.removeEventListener('touchmove', _onTouchMove);
      document.body.removeEventListener('touchend', _onTouchEnd);
      document.body.removeEventListener('touchcancel', _onTouchEnd);

      isGlobalListenerActive = false;
    }
  };
  return state;
}

function _registerElement(el: HTMLElement, state: any) {
  if (!interactionRegistry.has(el)) {
    interactionRegistry.set(el, state);
    if (!isGlobalListenerActive) {
      document.body.addEventListener('pointermove', _onPointerMove);
      document.body.addEventListener('pointerleave', _onPointerLeave);
      document.body.addEventListener('click', _onClick);

      document.body.addEventListener('touchstart', _onTouchStart, { passive: false });
      document.body.addEventListener('touchmove', _onTouchMove, { passive: false });
      document.body.addEventListener('touchend', _onTouchEnd, { passive: false });
      document.body.addEventListener('touchcancel', _onTouchEnd, { passive: false });

      isGlobalListenerActive = true;
    }
  }
}

function _onPointerMove(e: PointerEvent) {
  globalPointerPos.x = e.clientX;
  globalPointerPos.y = e.clientY;
  _processInteraction();
}

function _processInteraction() {
  for (const [elem, t] of interactionRegistry) {
    const i = elem.getBoundingClientRect();
    if (_isPointerInsideRect(i)) {
      _updateLocalCoordinates(t, i);
      if (!t.hover) {
        t.hover = true;
        t.onEnter(t);
      }
      t.onMove(t);
    } else if (t.hover && !t.touching) {
      t.hover = false;
      t.onLeave(t);
    }
  }
}

function _onClick(e: MouseEvent) {
  globalPointerPos.x = e.clientX;
  globalPointerPos.y = e.clientY;
  for (const [elem, t] of interactionRegistry) {
    const i = elem.getBoundingClientRect();
    _updateLocalCoordinates(t, i);
    if (_isPointerInsideRect(i)) t.onClick(t);
  }
}

function _onPointerLeave() {
  for (const t of interactionRegistry.values()) {
    if (t.hover) {
      t.hover = false;
      t.onLeave(t);
    }
  }
}

function _onTouchStart(e: TouchEvent) {
  if (e.touches.length > 0) {
    globalPointerPos.x = e.touches[0].clientX;
    globalPointerPos.y = e.touches[0].clientY;

    for (const [elem, t] of interactionRegistry) {
      const rect = elem.getBoundingClientRect();
      if (_isPointerInsideRect(rect)) {
        t.touching = true;
        _updateLocalCoordinates(t, rect);
        if (!t.hover) {
          t.hover = true;
          t.onEnter(t);
        }
        t.onMove(t);
      }
    }
  }
}

function _onTouchMove(e: TouchEvent) {
  if (e.touches.length > 0) {
    globalPointerPos.x = e.touches[0].clientX;
    globalPointerPos.y = e.touches[0].clientY;

    for (const [elem, t] of interactionRegistry) {
      const rect = elem.getBoundingClientRect();
      _updateLocalCoordinates(t, rect);

      if (_isPointerInsideRect(rect)) {
        if (!t.hover) {
          t.hover = true;
          t.touching = true;
          t.onEnter(t);
        }
        t.onMove(t);
      } else if (t.hover && t.touching) {
        t.onMove(t);
      }
    }
  }
}

function _onTouchEnd() {
  for (const [, t] of interactionRegistry) {
    if (t.touching) {
      t.touching = false;
      if (t.hover) {
        t.hover = false;
        t.onLeave(t);
      }
    }
  }
}

function _updateLocalCoordinates(e: any, rect: DOMRect) {
  const { position, nPosition } = e;
  position.x = globalPointerPos.x - rect.left;
  position.y = globalPointerPos.y - rect.top;
  nPosition.x = (position.x / rect.width) * 2 - 1;
  nPosition.y = (-position.y / rect.height) * 2 + 1;
}

function _isPointerInsideRect(rect: DOMRect) {
  const { x, y } = globalPointerPos;
  const { left, top, width, height } = rect;
  return x >= left && x <= left + width && y >= top && y <= top + height;
}

const { randFloat, randFloatSpread } = MathUtils;
const vecA = new Vector3();
const vecB = new Vector3();
const vecC = new Vector3();
const vecD = new Vector3();
const vecE = new Vector3();
const vecF = new Vector3();
const vecG = new Vector3();
const vecH = new Vector3();
const vecI = new Vector3();
const vecJ = new Vector3();

class PhysicsSystem {
  config: any;
  positionData: Float32Array;
  velocityData: Float32Array;
  sizeData: Float32Array;
  center = new Vector3();

  constructor(config: any) {
    this.config = config;
    this.positionData = new Float32Array(3 * config.count).fill(0);
    this.velocityData = new Float32Array(3 * config.count).fill(0);
    this.sizeData = new Float32Array(config.count).fill(1);
    this._initPositions();
    this.setSizes();
  }

  private _initPositions() {
    const { config, positionData } = this;
    this.center.toArray(positionData, 0);
    for (let i = 1; i < config.count; i++) {
      const s = 3 * i;
      positionData[s] = randFloatSpread(2 * config.maxX);
      positionData[s + 1] = randFloatSpread(2 * config.maxY);
      positionData[s + 2] = randFloatSpread(2 * config.maxZ);
    }
  }

  setSizes() {
    const { config, sizeData } = this;
    sizeData[0] = config.size0;
    for (let i = 1; i < config.count; i++) {
      sizeData[i] = randFloat(config.minSize, config.maxSize);
    }
  }

  update(time: { delta: number }) {
    const { config, center, positionData, sizeData, velocityData } = this;
    let offset = 0;
    if (config.controlSphere0) {
      offset = 1;
      vecA.fromArray(positionData, 0);
      vecA.lerp(center, 0.1).toArray(positionData, 0);
      vecD.set(0, 0, 0).toArray(velocityData, 0);
    }
    for (let idx = offset; idx < config.count; idx++) {
      const base = 3 * idx;
      vecB.fromArray(positionData, base);
      vecE.fromArray(velocityData, base);
      vecE.y -= time.delta * config.gravity * sizeData[idx];
      vecE.multiplyScalar(config.friction);
      vecE.clampLength(0, config.maxVelocity);
      vecB.add(vecE);
      vecB.toArray(positionData, base);
      vecE.toArray(velocityData, base);
    }
    for (let idx = offset; idx < config.count; idx++) {
      const base = 3 * idx;
      vecB.fromArray(positionData, base);
      vecE.fromArray(velocityData, base);
      const radius = sizeData[idx];
      for (let jdx = idx + 1; jdx < config.count; jdx++) {
        const otherBase = 3 * jdx;
        vecC.fromArray(positionData, otherBase);
        vecF.fromArray(velocityData, otherBase);
        const otherRadius = sizeData[jdx];
        vecG.copy(vecC).sub(vecB);
        const dist = vecG.length();
        const sumRadius = radius + otherRadius;
        if (dist < sumRadius) {
          const overlap = sumRadius - dist;
          vecH.copy(vecG)
            .normalize()
            .multiplyScalar(0.5 * overlap);
          vecI.copy(vecH).multiplyScalar(Math.max(vecE.length(), 1));
          vecJ.copy(vecH).multiplyScalar(Math.max(vecF.length(), 1));
          vecB.sub(vecH);
          vecE.sub(vecI);
          vecB.toArray(positionData, base);
          vecE.toArray(velocityData, base);
          vecC.add(vecH);
          vecF.add(vecJ);
          vecC.toArray(positionData, otherBase);
          vecF.toArray(velocityData, otherBase);
        }
      }
      if (config.controlSphere0) {
        vecG.copy(vecA).sub(vecB);
        const dist = vecG.length();
        const sumRadius0 = radius + sizeData[0];
        if (dist < sumRadius0) {
          const diff = sumRadius0 - dist;
          vecH.copy(vecG.normalize()).multiplyScalar(diff);
          vecI.copy(vecH).multiplyScalar(Math.max(vecE.length(), 2));
          vecB.sub(vecH);
          vecE.sub(vecI);
        }
      }
      if (Math.abs(vecB.x) + radius > config.maxX) {
        vecB.x = Math.sign(vecB.x) * (config.maxX - radius);
        vecE.x = -vecE.x * config.wallBounce;
      }
      if (config.gravity === 0) {
        if (Math.abs(vecB.y) + radius > config.maxY) {
          vecB.y = Math.sign(vecB.y) * (config.maxY - radius);
          vecE.y = -vecE.y * config.wallBounce;
        }
      } else if (vecB.y - radius < -config.maxY) {
        vecB.y = -config.maxY + radius;
        vecE.y = -vecE.y * config.wallBounce;
      }
      const maxBoundary = Math.max(config.maxZ, config.maxSize);
      if (Math.abs(vecB.z) + radius > maxBoundary) {
        vecB.z = Math.sign(vecB.z) * (config.maxZ - radius);
        vecE.z = -vecE.z * config.wallBounce;
      }
      vecB.toArray(positionData, base);
      vecE.toArray(velocityData, base);
    }
  }
}

class ScatteringMaterial extends MeshPhysicalMaterial {
  uniforms: any;
  onBeforeCompile2?: (shader: any) => void;

  constructor(parameters: any) {
    super(parameters);
    this.uniforms = {
      thicknessDistortion: { value: 0.1 },
      thicknessAmbient: { value: 0 },
      thicknessAttenuation: { value: 0.1 },
      thicknessPower: { value: 2 },
      thicknessScale: { value: 10 }
    };
    this.defines = this.defines || {};
    this.defines.USE_UV = '';
    
    this.onBeforeCompile = (shader) => {
      Object.assign(shader.uniforms, this.uniforms);
      shader.fragmentShader =
        '\n        uniform float thicknessPower;\n        uniform float thicknessScale;\n        uniform float thicknessDistortion;\n        uniform float thicknessAmbient;\n        uniform float thicknessAttenuation;\n      ' +
        shader.fragmentShader;
      shader.fragmentShader = shader.fragmentShader.replace(
        'void main() {',
        '\n        void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {\n          vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));\n          float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;\n          #ifdef USE_COLOR\n            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * vColor.rgb;\n          #else\n            vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * diffuse;\n          #endif\n          reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;\n        }\n\n        void main() {\n      '
      );
      const replacement = ShaderChunk.lights_fragment_begin.replaceAll(
        'RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );',
        '\n          RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );\n          RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);\n        '
      );
      shader.fragmentShader = shader.fragmentShader.replace('#include <lights_fragment_begin>', replacement);
      if (this.onBeforeCompile2) this.onBeforeCompile2(shader);
    };
  }
}

const DEFAULT_CONFIG = {
  count: 200,
  colors: [0, 0, 0],
  ambientColor: 16777215,
  ambientIntensity: 1,
  lightIntensity: 200,
  materialParams: {
    metalness: 0.5,
    roughness: 0.5,
    clearcoat: 1,
    clearcoatRoughness: 0.15
  },
  minSize: 0.5,
  maxSize: 1,
  size0: 1,
  gravity: 0.5,
  friction: 0.9975,
  wallBounce: 0.95,
  maxVelocity: 0.15,
  maxX: 5,
  maxY: 5,
  maxZ: 2,
  controlSphere0: false,
  followCursor: true
};

const dummyObject = new Object3D();

class InstancedSpheres extends InstancedMesh {
  config: any;
  physics: PhysicsSystem;
  ambientLight!: AmbientLight;
  light!: PointLight;

  constructor(renderer: WebGLRenderer, options = {}) {
    const config = { ...DEFAULT_CONFIG, ...options };
    const roomEnv = new RoomEnvironment();
    const envMap = new PMREMGenerator(renderer).fromScene(roomEnv).texture;
    const geometry = new SphereGeometry();
    const material = new ScatteringMaterial({ envMap, ...config.materialParams });
    material.envMapRotation.x = -Math.PI / 2;
    
    super(geometry, material, config.count);
    
    this.config = config;
    this.physics = new PhysicsSystem(config);
    this._initLights();
    this.setColors(config.colors);
  }

  private _initLights() {
    this.ambientLight = new AmbientLight(this.config.ambientColor, this.config.ambientIntensity);
    this.add(this.ambientLight);
    this.light = new PointLight(this.config.colors[0], this.config.lightIntensity);
    this.add(this.light);
  }

  setColors(colors: any[]) {
    if (Array.isArray(colors) && colors.length > 1) {
      const gradient = (() => {
        let colsList: any[], cachedColors: Color[];
        function buildColors(list: any[]) {
          colsList = list;
          cachedColors = [];
          colsList.forEach(col => {
            cachedColors.push(new Color(col));
          });
        }
        buildColors(colors);
        return {
          getColorAt: (ratio: number, out = new Color()) => {
            const scaled = Math.max(0, Math.min(1, ratio)) * (colsList.length - 1);
            const idx = Math.floor(scaled);
            const start = cachedColors[idx];
            if (idx >= colsList.length - 1) return start.clone();
            const alpha = scaled - idx;
            const end = cachedColors[idx + 1];
            out.r = start.r + alpha * (end.r - start.r);
            out.g = start.g + alpha * (end.g - start.g);
            out.b = start.b + alpha * (end.b - start.b);
            return out;
          }
        };
      })();

      for (let idx = 0; idx < this.count; idx++) {
        this.setColorAt(idx, gradient.getColorAt(idx / this.count));
        if (idx === 0) {
          this.light.color.copy(gradient.getColorAt(idx / this.count));
        }
      }
      if (this.instanceColor) {
        this.instanceColor.needsUpdate = true;
      }
    }
  }

  update(time: { elapsed: number; delta: number }) {
    this.physics.update(time);
    for (let idx = 0; idx < this.count; idx++) {
      dummyObject.position.fromArray(this.physics.positionData, 3 * idx);
      if (idx === 0) {
        dummyObject.scale.setScalar(0);
      } else {
        dummyObject.scale.setScalar(this.physics.sizeData[idx]);
      }
      dummyObject.updateMatrix();
      this.setMatrixAt(idx, dummyObject.matrix);
      if (idx === 0) this.light.position.copy(dummyObject.position);
    }
    this.instanceMatrix.needsUpdate = true;
  }
}

function createBallpit(canvas: HTMLCanvasElement, options = {}) {
  const app = new ThreeApp({
    canvas,
    size: 'parent',
    rendererOptions: { antialias: true, alpha: true }
  });
  let spheresInstance: InstancedSpheres;
  app.renderer.toneMapping = ACESFilmicToneMapping;
  app.camera.position.set(0, 0, 20);
  app.camera.lookAt(0, 0, 0);
  app.cameraMaxAspect = 1.5;
  app.resize();
  
  initialize(options);
  
  const raycaster = new Raycaster();
  const plane = new Plane(new Vector3(0, 0, 1), 0);
  const intersectionPoint = new Vector3();
  let isPaused = false;

  canvas.style.touchAction = 'none';
  canvas.style.userSelect = 'none';
  canvas.style.webkitUserSelect = 'none';

  const interaction = setupInteraction({
    domElement: canvas,
    onMove() {
      raycaster.setFromCamera(interaction.nPosition, app.camera);
      app.camera.getWorldDirection(plane.normal);
      raycaster.ray.intersectPlane(plane, intersectionPoint);
      spheresInstance.physics.center.copy(intersectionPoint);
      spheresInstance.config.controlSphere0 = true;
    },
    onLeave() {
      spheresInstance.config.controlSphere0 = false;
    }
  });

  function initialize(config: any) {
    if (spheresInstance) {
      app.clear();
      app.scene.remove(spheresInstance);
    }
    spheresInstance = new InstancedSpheres(app.renderer, config);
    app.scene.add(spheresInstance);
  }

  app.onBeforeRender = (time) => {
    if (!isPaused) spheresInstance.update(time);
  };

  app.onAfterResize = (size) => {
    spheresInstance.config.maxX = size.wWidth / 2;
    spheresInstance.config.maxY = size.wHeight / 2;
  };

  return {
    three: app,
    get spheres() {
      return spheresInstance;
    },
    setCount(count: number) {
      initialize({ ...spheresInstance.config, count });
    },
    togglePause() {
      isPaused = !isPaused;
    },
    dispose() {
      interaction.dispose();
      app.dispose();
    }
  };
}

interface BallpitProps {
  className?: string;
  count?: number;
  gravity?: number;
  friction?: number;
  wallBounce?: number;
  followCursor?: boolean;
  colors?: any[];
  ambientColor?: number;
  ambientIntensity?: number;
  lightIntensity?: number;
  minSize?: number;
  maxSize?: number;
  size0?: number;
  maxVelocity?: number;
  maxX?: number;
  maxY?: number;
  maxZ?: number;
}

const Ballpit: React.FC<BallpitProps> = ({ className = '', followCursor = true, ...props }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const spheresInstanceRef = useRef<any>(null);
  const [isSupported, setIsSupported] = React.useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    try {
      // Check WebGL support on a temporary canvas so we don't lock the context on the actual canvas
      const tempCanvas = document.createElement('canvas');
      const gl = tempCanvas.getContext('webgl2') || tempCanvas.getContext('webgl');
      if (!gl) {
        console.warn('WebGL is not supported in this environment. Ballpit background disabled.');
        setIsSupported(false);
        return;
      }
      spheresInstanceRef.current = createBallpit(canvas, { followCursor, ...props });
    } catch (e) {
      console.warn('WebGL context creation failed. Ballpit background disabled.', e);
      setIsSupported(false);
    }

    return () => {
      if (spheresInstanceRef.current) {
        spheresInstanceRef.current.dispose();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!isSupported) return null;

  return <canvas className={className} ref={canvasRef} style={{ width: '100%', height: '100%' }} />;
};

export default Ballpit;
