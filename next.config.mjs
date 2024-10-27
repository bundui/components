import remarkGfm from "remark-gfm";
import createMDX from "@next/mdx";
import { remarkCodeHike } from "@code-hike/mdx";
import { hostname } from "os";

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
