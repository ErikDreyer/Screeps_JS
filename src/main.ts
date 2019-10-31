import { ErrorMapper } from "utils/ErrorMapper";

import "prototype.creep";
import "prototype.room";
import "prototype.structurespawn";

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {

  // Automatically delete memory of missing creeps
  for (const name in Memory.creeps) {
    if (!(name in Game.creeps)) {
      delete Memory.creeps[name];
    }
  }

  // loop through all of the creeps and find the number of every role
  let harvesters: number = 0;
  let upgraders: number = 0;
  let repairers: number = 0;
  let constructors: number = 0;

  for (const creep in Game.creeps) {
    if (Game.creeps[creep].memory.role === "HARVESTER") {
      harvesters++;
    }

    if (Game.creeps[creep].memory.role === "UPGRADER") {
      upgraders++;
    }

    if (Game.creeps[creep].memory.role === "REPAIRER") {
      repairers++;
    }

    if (Game.creeps[creep].memory.role === "CONSTRUCTOR") {
      constructors++;
    }

    Game.creeps[creep].runRole();
  }

  const spawnName: string = 'Spawn1';
  // spawn new creeps if necessary
  if (harvesters < 2) {
    const creepName = "HARVESTER" + Game.time;

    // @ts-ignore
    if (Game.spawns[spawnName].spawnCreep([MOVE, WORK, CARRY], creepName, { memory: { role: "HARVESTER" } }) == OK) {
      console.log("Spawning: HARVESTER");
    }
  }
  else if (upgraders < 3) {
    const creepName = "UPGRADER" + Game.time;

    // @ts-ignore
    if (Game.spawns[spawnName].spawnCreep([MOVE, WORK, CARRY], creepName, { memory: { role: "UPGRADER" } }) == OK) {
      console.log("Spawning: UPGRADER");
    }
  }
  else if (repairers < 1) {
    const creepName = "REPAIRER" + Game.time;

    // @ts-ignore
    if (Game.spawns[spawnName].spawnCreep([MOVE, WORK, CARRY], creepName, { memory: { role: "REPAIRER" } }) == OK) {
      console.log("Spawning: REPAIRER");
    }
  }
  else if (constructors < 1) {
    const creepName = "CONSTRUCTOR" + Game.time;

    // @ts-ignore
    if (Game.spawns[spawnName].spawnCreep([MOVE, WORK, CARRY], creepName, { memory: { role: "CONSTRUCTOR" } }) == OK) {
      console.log("Spawning: CONSTRUCTOR");
    }
  }
});
