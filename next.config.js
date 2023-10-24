/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/api/auth/:path*",
        destination: "/api/auth/:path*", // this will ensure that /api/auth/* paths remain unchanged
      },
      {
        source: "/api/:path*",
        destination: "https://qappauth.azurewebsites.net/:path*", // other /api/* paths get rewritten
      },
    ];
  },
  images: {
    domains: [
      "katalog.svkul.cz",
      "obalkyknih.cz",
      "nazornavyuka.cz",
      "ftp.nazornavyuka.cz",
      "uuapp.plus4u.net",
      "s3.amazonaws.com",
      "img.youtube.com",
      "this-person-does-not-exist.com",
    ],
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  output: "standalone",
};

module.exports = nextConfig;
