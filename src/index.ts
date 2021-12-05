import { Entity, IntillectStat, StaminaStat, StatMod } from "./types";
import { logEntity } from "./util";

export const testEntity = new Entity("test_character", [
  new IntillectStat(),
  new StaminaStat(),
]);

const staminaBuff: StatMod = {
  amount: 10,
  type: "Percentage",
  statType: "Stamina",
};

logEntity(testEntity);

testEntity.addMod(staminaBuff);

logEntity(testEntity);
