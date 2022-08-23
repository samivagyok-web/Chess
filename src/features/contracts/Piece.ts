import Player from "../entities/Player"

export interface Piece {
    position: [Number, Number],
    getAvailableMoves: () => [Number, Number][]
    move: () => void
    player: Player,
    SVG: JSX.Element
}