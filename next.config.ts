import { withPayload } from '@payloadcms/next/withPayload'
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: process.env.PORT === '3005' ? '.next-3005' : '.next',
  devIndicators: false,
  allowedDevOrigins: [
    '192.168.68.89',
    '192.168.68.89:3001',
    '192.168.68.84',
    '192.168.68.53',
    '192.168.68.51',
    '192.168.*.*',
    'localhost:3001',
    'localhost:3005',
    '192.168.68.89:3005'
  ],
};

export default withPayload(nextConfig);
