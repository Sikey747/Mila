"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vite = require("vite");

var _vitePluginShopify = _interopRequireDefault(require("vite-plugin-shopify"));

var _vitePluginPageReload = _interopRequireDefault(require("vite-plugin-page-reload"));

var _vitePluginShopifyClean = _interopRequireDefault(require("@by-association-only/vite-plugin-shopify-clean"));

var _vitePluginClean = _interopRequireDefault(require("vite-plugin-clean"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var _default = (0, _vite.defineConfig)({
  plugins: [(0, _vitePluginShopify["default"])(), (0, _vitePluginPageReload["default"])("/tmp/theme.update")],
  build: {
    emptyOutDir: false
  }
});

exports["default"] = _default;