import { PublicKey } from "@solana/web3.js";
import { PROGRAM_ID } from "../arcadery";

export async function pdaForGame(game: PublicKey): Promise<PublicKey> {
  const [pda] = PublicKey.findProgramAddressSync(
    [Buffer.from("arcadery"), game.toBuffer()],
    PROGRAM_ID
  );
  return pda;
}
