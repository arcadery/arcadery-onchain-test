"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const amman_client_1 = require("@metaplex-foundation/amman-client");
const web3_js_1 = require("@solana/web3.js");
const generated_1 = require("../src/generated");
const arcadery_1 = require("../src/arcadery");
const tape_1 = __importDefault(require("tape"));
const utils_1 = require("./utils");
(0, utils_1.killStuckProcess)();
async function setupPlayer() {
    // 1. Create a connection to the local test validator
    const connection = new web3_js_1.Connection(amman_client_1.LOCALHOST, "confirmed");
    // 2. Generate a keypair for the first player and have amman label it for us
    const [player, playerPair] = await utils_1.amman.addr.genLabeledKeypair("player");
    await utils_1.amman.airdrop(connection, player, 2);
    // 3. Create a transaction handler that will use the first player as signer
    const transactionHandler = utils_1.amman.payerTransactionHandler(connection, playerPair);
    return {
        playerHandler: transactionHandler,
        connection,
        player,
        playerPair,
    };
}
(0, tape_1.default)("tx: init game and add player x", async (t) => {
    // 1. Setup the player and its transaction handler
    const { playerHandler, player, playerPair } = await setupPlayer();
    // 2. Generate public key for our game and derive the game PDA
    const [game] = utils_1.amman.addr.genKeypair();
    const gamePda = await (0, arcadery_1.pdaForGame)(game);
    // 3. Label the game PDA so we can identify it in the Amman Explorer
    await utils_1.amman.addr.addLabels({ gamePda });
    const ix = (0, generated_1.createInitializeGameInstruction)({
        player,
        gamePda,
    });
    const tx = new web3_js_1.Transaction().add(ix);
    await playerHandler
        .sendAndConfirmTransaction(tx, [playerPair], "tx: init game")
        .assertSuccess(t, [/IX: initialize_game/]);
});
//# sourceMappingURL=arcadery.js.map