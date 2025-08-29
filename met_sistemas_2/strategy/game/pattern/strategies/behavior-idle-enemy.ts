import { Point } from "../shared/types";
import { EnemyBehavior } from "./enemy-behavior";

export class EnemyIdleBehavior implements EnemyBehavior {
    newPosition(position: Point): Point {
        return position;
    }
}
