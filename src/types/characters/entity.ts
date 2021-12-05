import { Stat, StatMod, StatType } from "../stats";

export class Entity {
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
