import { Amman } from "@metaplex-foundation/amman-client";

import { PROGRAM_ADDRESS } from "../../src/arcadery";

export const amman = Amman.instance({
  knownLabels: { [PROGRAM_ADDRESS]: "Arcadery" },
});
