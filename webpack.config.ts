import path from "path";
import type { Configuration } from "webpack";
import type { Configuration as DevServerConfiguration } from "webpack-dev-server";

interface WebpackConfiguration extends Configuration {
  devServer?: DevServerConfiguration;
}

const config: WebpackConfiguration = {
  mode: "development",

  entry: "./src/main.ts",

  devServer: {
    port: 9000,
    static: {
      directory: __dirname,
      serveIndex: true,
    },
  },

  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },

  resolve: {
    extensions: [".ts", ".js"],
  },

  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};

export default config;