import { Point } from "../shared/types";
import { BehaviorEnemy } from "./behavior-enemy";

export class BehaviorIdleEnemy implements BehaviorEnemy {
    newPosition(position: Point): Point {
        return position;
    }
}
