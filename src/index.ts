import { IntillectStat, StaminaStat, Stat } from "./types/stats/Stat";
import { StatMod, StatType } from "./types/stats/StatMod";

class Entity {
  name: string;
  stats: Map<StatType, Stat> = new Map();

  constructor(name: string, stats: Stat[] = []) {
    this.name = name;
    stats.map((s) => this.stats.set(s.name, s));
  }

  addMod(mod: StatMod) {
    const s = this.stats.get(mod.statType);
    s?.mods.push(mod);
  }
}

const testEntity = new Entity("test_character", [
  new IntillectStat(),
  new StaminaStat(),
]);

console.log();

console.log(`Entity: ${testEntity.name}`);
console.log(`Stats`);

console.log(`\n`);

for (const { "1": stat } of testEntity.stats) {
  console.log(`${stat.name}: ${stat.CalculateValue()}`);
}

const staminaBuff: StatMod = {
  amount: 10,
  type: "Percentage",
  statType: "Stamina",
};

testEntity.addMod(staminaBuff);
console.log(`\n\n`);

for (const { "1": stat } of testEntity.stats) {
  console.log(`${stat.name}: ${stat.CalculateValue()}`);
}

console.log();
