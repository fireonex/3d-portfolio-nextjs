import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias["@"] = path.resolve(__dirname, "src");

    config.module.rules.push({
      test: /\.glb$/,
      type: "asset/resource",
    });

    return config;
  },
};

export default nextConfig;
