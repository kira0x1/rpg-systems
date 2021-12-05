import { StatMod, StatType } from "./";

export abstract class Stat {
  name: StatType;
  baseValue: number;
  currentValue: number;
  mods: StatMod[] = [];

  constructor(statType: StatType, baseValue: number = 10) {
    this.baseValue = baseValue;
    this.currentValue = baseValue;
    this.name = statType;
  }

  public CalculateValue(): number {
    let val = this.baseValue;

    this.mods.filter((m) => m.type === "Flat").map((m) => (val += m.amount));

    this.mods
      .filter((m) => m.type === "Percentage")
      .map((m) => (val *= m.amount));

    this.currentValue = val;
    return this.currentValue;
  }
}

export class StaminaStat extends Stat {
  constructor() {
    super("Stamina", 50);
  }
}

export class IntillectStat extends Stat {
  constructor() {
    super("Intillect", 20);
  }
}
