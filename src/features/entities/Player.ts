import { Piece } from "../contracts/Piece";

class Player {
    private name: string;
    public pieces: Piece[];

    constructor(name: string, pieces: Piece[]) {
        this.name = name;
        this.pieces = pieces;
    }

    
}

export default Player;