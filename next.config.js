/** @type {import('next').NextConfig} */
const path = require('path')
const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'styles')],
      },
      images: {
        domains: ["cdn.esan.mn", "images.ctfassets.net"],
      },
}

module.exports = nextConfig
