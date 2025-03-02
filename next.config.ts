import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  distDir: 'build',
  // Ensure the following options are set
  generateBuildId: async () => {
    return 'my-build-id'; // You can use any unique identifier here
  },
  exportTrailingSlash: true,
  // Add any other necessary configuration options here
};

export default nextConfig;
