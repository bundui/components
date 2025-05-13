import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import { remarkCodeHike } from "@code-hike/mdx";

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ["js", "jsx", "ts", "tsx", "md", "mdx"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cosmic.shadcnuikit.com",
      },
      {
        protocol: "https",
        hostname: "bundui-images.netlify.app",
      },
    ],
  },
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm, [remarkCodeHike, { theme: "css-variables" }]],
  },
});

export default withMDX(nextConfig);
