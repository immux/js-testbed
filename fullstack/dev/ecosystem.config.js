module.exports = {
  apps : [
    {
      name: "tsc-for-server",
      script: "node_modules/.bin/tsc",
      args: "--project tsconfig.dev.server.json --watch",
      cwd: ".",
    },
    {
      name: "fe-dev-server",
      script: "node_modules/.bin/webpack-dev-server --config src/client/web/webpack.config.js",
      args: "",
      cwd: ".",
    },
    {
      name: "proxy",
      script: "proxy.js",
      args: "",
      cwd: "dev",
    },
    {
      name: "api",
      script: "server/api.js",
      cwd: "build",

      autorestart: true,
      watch: `${process.cwd()}/build/server`,
      max_memory_restart: "1G",
    },
  ],
};
