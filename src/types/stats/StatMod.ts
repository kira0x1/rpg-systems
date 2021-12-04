import { Stat } from "./Stat";

export type modType = "Flat" | "Percentage";
export type StatType = "Stamina" | "Intillect";

export interface StatMod {
  statType: StatType;
  type: modType;
  amount: number;
}
