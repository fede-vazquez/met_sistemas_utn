import { Point } from "../shared/types";

export interface BehaviorEnemy {
    newPosition(
        position: Point,
        speed: number,
        dt: number,
        playerPosition: Point
    ): Point;
}
