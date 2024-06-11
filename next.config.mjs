//  @type {import('next').NextConfig}
const nextConfig = {
  env: {
    NEXT_PUBLIC_EMAILJS_TEMPLATE_ID:
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    NEXT_PUBLIC_EMAILJS_PUBLIC_KEY: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    NEXT_PUBLIC_EMAILJS_SERVICE_ID: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  },

  images: {
    unoptimized: true,
    domains: ["cdn.sanity.io"],
    loader: "akamai",
    path: "",
  },
  assetPrefix: "./",
  output: "export",
};

export default nextConfig;
