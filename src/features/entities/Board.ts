import BlackBishop from "../../app/media/pieces/black/BlackBishop";
import BlackKing from "../../app/media/pieces/black/BlackKing";
import BlackKnight from "../../app/media/pieces/black/BlackKnight";
import BlackPawn from "../../app/media/pieces/black/BlackPawn";
import BlackQueen from "../../app/media/pieces/black/BlackQueen";
import BlackRook from "../../app/media/pieces/black/BlackRook";
import WhiteBishop from "../../app/media/pieces/white/WhiteBishop";
import WhiteKing from "../../app/media/pieces/white/WhiteKing";
import WhiteKnight from "../../app/media/pieces/white/WhiteKnight";
import WhitePawn from "../../app/media/pieces/white/WhitePawn";
import WhiteQueen from "../../app/media/pieces/white/WhiteQueen";
import WhiteRook from "../../app/media/pieces/white/WhiteRook";
import { Piece } from "../contracts/Piece";
import { BoardType } from "../types/BoardType";
import Bishop from "./Bishop";
import King from "./King";
import Knight from "./Knight";
import Pawn from "./Pawn";
import Player from "./Player";
import Queen from "./Queen";
import Rook from "./Rook";

class Board {
    board: BoardType = [] 
    white: Player;
    black: Player;

    constructor(whiteName: string, blackName: string) {
        this.board = this.initializeBoard();
        this.white = new Player(whiteName, this.getPiecesBetweenRows(6, 7));
        this.black = new Player(blackName, this.getPiecesBetweenRows(0, 1));
    }

    private initializeBoard = () => {
        return [
            [new Rook([0, 0], this.black, BlackRook()), new Knight([0, 1], this.black, BlackKnight()), new Bishop([0, 2], this.black, BlackBishop()), new Queen([0, 3], this.black, BlackQueen()), new King([0, 4], this.black, BlackKing()), new Bishop([0, 5], this.black, BlackBishop()), new Knight([0, 6], this.black, BlackKnight()), new Rook([0, 7], this.black, BlackRook())],
            [new Pawn([1, 0], this.black, BlackPawn()), new Pawn([1, 1], this.black, BlackPawn()), new Pawn([1, 2], this.black, BlackPawn()), new Pawn([1, 3], this.black, BlackPawn()), new Pawn([1, 4], this.black, BlackPawn()), new Pawn([1, 5], this.black, BlackPawn()), new Pawn([1, 6], this.black, BlackPawn()), new Pawn([1, 7], this.black, BlackPawn())],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
            [undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined],
            [new Pawn([6, 0], this.white, WhitePawn()), new Pawn([6, 1], this.white, WhitePawn()), new Pawn([6, 2], this.white, WhitePawn()), new Pawn([6, 3], this.white, WhitePawn()), new Pawn([6, 4], this.white, WhitePawn()), new Pawn([6, 5], this.white, WhitePawn()), new Pawn([6, 6], this.white, WhitePawn()), new Pawn([6, 7], this.white, WhitePawn())],
            [new Rook([7, 0], this.white, WhiteRook()), new Knight([7, 1], this.white, WhiteKnight()), new Bishop([7, 2], this.white, WhiteBishop()), new Queen([7, 3], this.white, WhiteQueen()), new King([7, 4], this.white, WhiteKing()), new Bishop([7, 5], this.white, WhiteBishop()), new Knight([7, 6], this.white, WhiteKnight()), new Rook([7, 7], this.white, WhiteRook())]
        ]
    }
    
    /* Inclusive */
    private getPiecesBetweenRows = (start: number, end: number): Piece[] => {
        const pieces: Piece[] = [];

        for (let i = start; i <= end; i++) {
            for (let j = 0; j < 7; j++) {
                if (this.board[i][j] != undefined) {
                    pieces.push(this.board[i][j]!)
                }
            }
        }

        return pieces;
    }
}

export default Board;