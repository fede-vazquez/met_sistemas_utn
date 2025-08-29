import { Point } from "../shared/types";

export interface EnemyBehavior {
    newPosition(
        position: Point,
        speed: number,
        dt: number,
        playerPosition: Point
    ): Point;
}
