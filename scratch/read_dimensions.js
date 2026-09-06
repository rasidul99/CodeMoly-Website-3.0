const fs = require('fs');
const path = require('path');

function getPngDimensions(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    // PNG IHDR chunk starts at byte 12. Width starts at byte 16, Height starts at byte 20 (both are 4-byte big-endian integers).
    const width = buffer.readInt32BE(16);
    const height = buffer.readInt32BE(20);
    return { width, height };
  } catch (err) {
    return { error: err.message };
  }
}

const portfolioDir = path.join(__dirname, '..', 'public', 'portfolio');
const images = ['logo-design.png', 'website-design.png', 'tailored-solutions.png'];

images.forEach(img => {
  const filePath = path.join(portfolioDir, img);
  const dims = getPngDimensions(filePath);
  console.log(`${img}: ${dims.width}x${dims.height} px`);
});
