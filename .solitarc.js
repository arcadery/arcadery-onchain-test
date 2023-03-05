const path = require("path");
const programDir = path.join(__dirname, "..", "arcadery-onchain");
const idlDir = path.join(__dirname, "idl");
const sdkDir = path.join(__dirname, "src", "generated");
const binaryInstallDir = path.join(__dirname, ".crates");

module.exports = {
  idlGenerator: "shank",
  programName: "arcadery_onchain",
  idlDir,
  sdkDir,
  binaryInstallDir,
  programDir,
};
