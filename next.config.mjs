/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'res.cloudinary.com',
             
          },
          {
            protocol: 'https',
            hostname: 'utfs.io',
             
          },
        ],
      },
    }


export default nextConfig;
