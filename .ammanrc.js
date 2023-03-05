// @ts-check
"use strict";
const path = require("path");
const { LOCALHOST, tmpLedgerDir } = require("@metaplex-foundation/amman");
const PROGRAM_ID = require("./idl/arcadery_onchain.json").metadata.address;

const localDeployPath = path.join(
  __dirname,
  "..",
  "arcadery-onchain",
  "target",
  "deploy"
);

module.exports = {
  validator: {
    killRunningValidators: true,
    programs: [
      {
        label: "Arcadery Program",
        programId: PROGRAM_ID,
        deployPath: path.join(localDeployPath, "arcadery_onchain.so"),
      },
    ],
    jsonRpcUrl: LOCALHOST,
    ledgerDir: tmpLedgerDir(),
    resetLedger: true,
  },
  storage: {
    enabled: false,
  },
};
