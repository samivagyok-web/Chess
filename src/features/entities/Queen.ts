import { Piece } from "../contracts/Piece";
import Player from "./Player";

class Queen implements Piece {
    position: [Number, Number] = [0, 0]
    player: Player;
    SVG: JSX.Element;

    constructor(position: [Number, Number], player: Player, SVG: JSX.Element) {
        this.position = position;
        this.player = player;
        this.SVG = SVG;
    }

    getAvailableMoves() {
        return []
    }

    move() {

    }
}

export default Queen;