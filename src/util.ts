import { Entity } from "./types";

export function logEntity(entity: Entity): void {
  console.log();

  console.log(`Entity: ${entity.name}`);
  console.log(`Stats`);

  console.log(`\n`);

  for (const { "1": stat } of entity.stats) {
    console.log(`${stat.name}: ${stat.CalculateValue()}`);
  }
}
