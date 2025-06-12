import { createMDX } from "fumadocs-mdx/next";

const withMDX = createMDX();

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "bundui-images.netlify.app"
      }
    ]
  },
  async redirects() {
    return [
      {
        source: "/docs/components/:slug*",
        destination: "/components/:slug*",
        permanent: true
      }
    ];
  }
};

export default withMDX(nextConfig);
