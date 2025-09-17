import { clampPoint, type Point } from "../shared/types";

import { World } from "../engine/world";
import { Player } from "./player";
import {
    EnemyMutablePatrolBehavior,
    MutableEnemyBehavior,
} from "../strategies/mutable-enemy-behavior";

export class Enemy {
    position: Point = { x: 80, y: 60 };
    speed: number = 30;

    private timeAccum: number = 0;

    private behaviorMode: MutableEnemyBehavior =
        new EnemyMutablePatrolBehavior();

    changeBehaviorMode(newBehavior: MutableEnemyBehavior) {
        this.behaviorMode = newBehavior;
    }

    constructor(initialPos?: Point) {
        if (initialPos) this.position = { ...initialPos };
    }

    // API clara: “actualizar IA”
    updateAI(dt: number, world: World, player: Player) {
        // 1) Reglas de transición de modo (timer / proximidad)
        this.timeAccum += dt;

        const maybeNewBehavior: MutableEnemyBehavior =
            this.behaviorMode.changeBehavior(
                this.timeAccum,
                this.position,
                player.position
            );

        if (maybeNewBehavior !== this.behaviorMode) {
            this.timeAccum = 0;
            this.changeBehaviorMode(maybeNewBehavior);
        }

        // 2) Decidir siguiente posición según modo
        let nextPos = this.behaviorMode.newPosition(
            this.position,
            this.speed,
            dt,
            player.position
        );

        // 3) Aplicar límites del mundo
        this.position = clampPoint(nextPos, world.min, world.max);
    }
}
