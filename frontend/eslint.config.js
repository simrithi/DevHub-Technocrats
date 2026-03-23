const { defineConfig } = require("eslint/config");
const nextVitals = require("eslint-config-next/core-web-vitals");

module.exports = defineConfig([...nextVitals]);
