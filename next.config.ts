/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages
  output: 'export',
  // Update this to match your GitHub repository name
  basePath: '/public-site',
  // Disable image optimization since GitHub Pages doesn't support it
  images: {
    unoptimized: true,
  },
}

export default nextConfig
