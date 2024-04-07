"use strict";

var _fs = _interopRequireDefault(require("fs"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function myPlugin() {
  var manifestPath = "./assets/.vite/manifest.json";

  if (_fs["default"].existsSync(manifestPath)) {
    var manifestContent = _fs["default"].readFileSync(manifestPath, "utf8");

    var manifest = JSON.parse(manifestContent);
    var existingFiles = Object.values(manifest).map(function (entry) {
      return entry.file;
    });
    var assetsFolderPath = "./assets";
    existingFiles.forEach(function (filename) {
      var filePath = "".concat(assetsFolderPath, "/").concat(filename);

      if (_fs["default"].existsSync(filePath)) {
        _fs["default"].unlinkSync(filePath);

        console.log("\u0423\u0434\u0430\u043B\u0435\u043D \u0444\u0430\u0439\u043B ".concat(filename));
      }
    });
  } else {
    console.log("Нету манифеста");
  }
}

myPlugin();