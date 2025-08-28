import {
    clampPoint,
    subtractVectors,
    vectorLength,
    type Point,
} from "../shared/types";

import { World } from "../engine/world";
import { Player } from "./player";

import { BehaviorEnemy } from "../strategies/behavior-enemy";
import { BehaviorIdleEnemy } from "../strategies/behavior-idle-enemy";
import { BehaviorChaseEnemy } from "../strategies/behavior-chase-enemy";
import { BehaviorPatrolEnemy } from "../strategies/behavior-patrol-enemy";

export class Enemy {
    position: Point = { x: 80, y: 60 };
    speed: number = 30;

    private timeAccum: number = 0;

    private behaviorMode: BehaviorEnemy = new BehaviorPatrolEnemy();

    changeBehaviorMode(newBehavior: BehaviorEnemy) {
        this.behaviorMode = newBehavior;
    }

    constructor(initialPos?: Point) {
        if (initialPos) this.position = { ...initialPos };
    }

    // API clara: “actualizar IA”
    updateAI(dt: number, world: World, player: Player) {
        // 1) Reglas de transición de modo (timer / proximidad)
        this.timeAccum += dt;
        this.maybeToggleIdlePatrolByTimer();
        this.maybeSwitchChaseByDistanceToPlayer(player);

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

    // ===== Reglas de cambio de modo =====
    private maybeToggleIdlePatrolByTimer() {
        // Alterna entre idle y patrol cada ~6s (a modo de ejemplo)
        if (this.timeAccum > 6) {
            this.timeAccum = 0;
            if (typeof this.behaviorMode == typeof BehaviorIdleEnemy) {
                this.changeBehaviorMode(new BehaviorPatrolEnemy());
            } else if (typeof this.behaviorMode == typeof BehaviorPatrolEnemy) {
                this.changeBehaviorMode(new BehaviorIdleEnemy());
            }
        }
    }

    private maybeSwitchChaseByDistanceToPlayer(player: Player) {
        const distanceToPlayer = vectorLength(
            subtractVectors(player.position, this.position)
        );
        const isNear = distanceToPlayer < 40;

        if (isNear && typeof this.behaviorMode !== typeof BehaviorChaseEnemy) {
            this.changeBehaviorMode(new BehaviorChaseEnemy());
        }

        // Si está lejos por un rato, vuelve a patrullar
        if (
            !isNear &&
            this.timeAccum > 3 &&
            typeof this.behaviorMode === typeof BehaviorChaseEnemy
        ) {
            this.timeAccum = 0;
            this.changeBehaviorMode(new BehaviorPatrolEnemy());
        }
    }
}
