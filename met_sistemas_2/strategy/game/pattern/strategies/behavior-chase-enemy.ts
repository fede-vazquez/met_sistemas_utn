import {
    Point,
    subtractVectors,
    normalizeVector,
    addVectors,
    scaleVector,
} from "../shared/types";
import { EnemyBehavior } from "./enemy-behavior";

export class EnemyChaseBehavior implements EnemyBehavior {
    newPosition(
        position: Point,
        speed: number,
        dt: number,
        playerPosition: Point
    ): Point {
        const toPlayer = subtractVectors(playerPosition, position);
        const direction = normalizeVector(toPlayer);
        // Un poco más rápido en “chase”
        return addVectors(position, scaleVector(direction, speed * 1.25 * dt));
    }
}
