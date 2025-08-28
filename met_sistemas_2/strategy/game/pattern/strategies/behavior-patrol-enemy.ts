import {
    Point,
    vectorLength,
    subtractVectors,
    normalizeVector,
    scaleVector,
    addVectors,
} from "../shared/types";
import { BehaviorEnemy } from "./behavior-enemy";

export class BehaviorPatrolEnemy implements BehaviorEnemy {
    private patrolWaypoints: Point[] = [
        { x: 20, y: 20 },
        { x: 120, y: 20 },
        { x: 120, y: 90 },
        { x: 20, y: 90 },
    ];

    private currentWaypointIndex = -1;

    private findClosestWaypointIndex(position: Point): number {
        let idx = 0;
        let best = Number.POSITIVE_INFINITY;
        for (let i = 0; i < this.patrolWaypoints.length; i++) {
            const d = vectorLength(
                subtractVectors(this.patrolWaypoints[i], position)
            );
            if (d < best) {
                best = d;
                idx = i;
            }
        }
        return idx;
    }

    newPosition(position: Point, speed: number, dt: number): Point {
        // No me gusta esta solución
        if (this.currentWaypointIndex == -1)
            this.currentWaypointIndex = this.findClosestWaypointIndex(position);

        const target = this.patrolWaypoints[this.currentWaypointIndex];
        const toTarget = subtractVectors(target, position);
        const direction = normalizeVector(toTarget);
        const step = scaleVector(direction, speed * dt);
        const candidate = addVectors(position, step);

        // ¿Llegamos al waypoint?
        if (vectorLength(toTarget) < 1.5) {
            this.currentWaypointIndex =
                (this.currentWaypointIndex + 1) % this.patrolWaypoints.length;
        }

        return candidate;
    }
}
