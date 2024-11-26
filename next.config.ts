/** @type {import('next').NextConfig} */
const nextConfig = {
  // Required for GitHub Pages
  output: 'export',
  // For username.github.io repositories, basePath should be empty
  basePath: '',
  // Disable image optimization since GitHub Pages doesn't support it
  images: {
    unoptimized: true,
  },
}

export default nextConfig
