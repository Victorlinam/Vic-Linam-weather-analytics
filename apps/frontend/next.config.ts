import type { NextConfig } from 'next';

const isGithubPages = process.env.GITHUB_ACTIONS === 'true';

const nextConfig: NextConfig = {
  experimental: { typedRoutes: true },
  output: 'export',
  trailingSlash: true,
  images: { unoptimized: true },
  basePath: isGithubPages ? '/Vic-Linam-weather-analytics' : '',
  assetPrefix: isGithubPages ? '/Vic-Linam-weather-analytics/' : '',
};

export default nextConfig;
