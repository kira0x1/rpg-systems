import { IntillectStat, StaminaStat, Stat } from "./types/stats/Stat";

class Entity {
  name: string;
  stats: Stat[];

  constructor(name: string, stats: Stat[] = []) {
    this.name = name;
    this.stats = stats;
  }
}

const testEntity = new Entity("test_character", [
  new IntillectStat(),
  new StaminaStat(),
]);

console.log(`Entity: ${testEntity.name}`);
console.log(`Stats`);
for (const stat of testEntity.stats) {
  console.log(`${stat.name}: ${stat.CalculateValue()}`);
}
