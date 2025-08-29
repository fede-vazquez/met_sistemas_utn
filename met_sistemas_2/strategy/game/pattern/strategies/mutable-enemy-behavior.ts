import { Point, subtractVectors, vectorLength } from "../shared/types";
import { EnemyChaseBehavior } from "./behavior-chase-enemy";
import { EnemyPatrolBehavior } from "./behavior-patrol-enemy";
import { EnemyBehavior } from "./enemy-behavior";

export interface MutableEnemyBehavior extends EnemyBehavior {
    changeBehavior(
        timeAccum: number,
        position: Point,
        playerPosition: Point
    ): MutableEnemyBehavior;
}

export class EnemyMutableIdleBehavior
    extends EnemyChaseBehavior
    implements MutableEnemyBehavior
{
    changeBehavior(timeAccum: number): MutableEnemyBehavior {
        if (timeAccum > 6) {
            return new EnemyMutablePatrolBehavior();
        }

        return this;
    }
}

export class EnemyMutablePatrolBehavior
    extends EnemyChaseBehavior
    implements MutableEnemyBehavior
{
    changeBehavior(timeAccum: number): MutableEnemyBehavior {
        if (timeAccum > 6) {
            return new EnemyMutableIdleBehavior();
        }

        return this;
    }
}

export class EnemyMutableChaseBehavior
    extends EnemyChaseBehavior
    implements MutableEnemyBehavior
{
    changeBehavior(
        timeAccum: number,
        position: Point,
        playerPosition: Point
    ): MutableEnemyBehavior {
        const distanceToPlayer = vectorLength(
            subtractVectors(playerPosition, position)
        );
        const isNear = distanceToPlayer < 40;

        // Si está lejos por un rato, vuelve a patrullar
        if (!isNear && timeAccum > 3) {
            return new EnemyMutablePatrolBehavior();
        }

        return this;
    }
}
