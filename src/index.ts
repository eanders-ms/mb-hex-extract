import { separateUniversalHex } from "@microbit/microbit-universal-hex";
import * as fs from "fs";
import * as path from "path";

const hexfilename = "microbit-untitled.hex";

const parts = path.parse(hexfilename);
const f = fs.readFileSync(hexfilename, "utf8");

const hexes = separateUniversalHex(f);

hexes.forEach(hex => {
    fs.writeFileSync(`${parts.name}-0x${hex.boardId.toString(16)}.hex`, hex.hex, "utf8");
});
