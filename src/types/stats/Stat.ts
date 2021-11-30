import { StatMod } from "./StatMod";

export abstract class Stat {
  name: string;
  baseValue: number;
  currentValue: number;
  mods: StatMod[] = [];

  constructor(name: string, baseValue: number = 10) {
    this.name = name;
    this.baseValue = baseValue;
    this.currentValue = baseValue;
  }

  public CalculateValue(): number {
    let val = this.baseValue;

    for (const mod of this.mods) {
      val += mod.flatAmount;
    }

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
