"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.amman = void 0;
const amman_client_1 = require("@metaplex-foundation/amman-client");
const arcadery_1 = require("../../src/arcadery");
exports.amman = amman_client_1.Amman.instance({
    knownLabels: { [arcadery_1.PROGRAM_ADDRESS]: "Arcadery" },
});
//# sourceMappingURL=amman.js.map