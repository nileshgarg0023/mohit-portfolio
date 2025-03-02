/** @type {import('next').NextConfig} */
const nextConfig = {
  // Ensure the routes-manifest.json file is generated
  generateBuildId: async () => {
    return "my-build-id";
  },
  // Other custom configurations can be added here
};

module.exports = nextConfig;
