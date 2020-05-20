pm2="node_modules/.bin/pm2"

function cleanup {
  ${pm2} stop all;
  ${pm2} kill;
}
trap cleanup EXIT

mkdir -p build/server
echo "console.info('placeholder...')" > build/server/api.js

${pm2} stop all
${pm2} kill
${pm2} flush
${pm2} start dev/ecosystem.config.js
${pm2} logs
