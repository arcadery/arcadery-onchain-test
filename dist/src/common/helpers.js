"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pdaForGame = void 0;
const web3_js_1 = require("@solana/web3.js");
const arcadery_1 = require("../arcadery");
async function pdaForGame(game) {
    const [pda] = web3_js_1.PublicKey.findProgramAddressSync([Buffer.from("arcadery"), game.toBuffer()], arcadery_1.PROGRAM_ID);
    return pda;
}
exports.pdaForGame = pdaForGame;
//# sourceMappingURL=helpers.js.map