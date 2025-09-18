// metro.config.js
const { getDefaultConfig } = require("@expo/metro-config");

const config = getDefaultConfig(__dirname);

config.resolver.assetExts = [
  ...config.resolver.assetExts, // mantém os padrões
  "STEP", // adicione sua extensão custom
  "pdf",
];

module.exports = config;
