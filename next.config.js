/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // TODO: Phần này để định nghĩa truy cập bên ngoài, sau này sẽ thay đổi hoặc xóa
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'flowbite.com',
        port: '',
        pathname: '/docs/images/people/**',
      },
    ],
  },
  experimental: {
    // TODO: Cái này cho phép force render trên server, đang alpha thôi xài cẩn thận
    // serverActions: true,
  },
}

module.exports = nextConfig


