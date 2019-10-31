/**
 * Import other modules
 */
import * as constant from "constant";
import { MemoryManger } from "memoryManger";
import { ErrorMapper } from "utils/ErrorMapper";

/**
 * Import prototype modules
 */
import "prototype.creep";
import "prototype.room";
import "prototype.structurespawn";

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  // create a memory manager
  const memoryManager = new MemoryManger();
  memoryManager.deleteAllDeadCreepsFromMemory();


  // loop through the rooms
  for (const roomName in Game.rooms) {
    const roomObject = Game.rooms[roomName];
    memoryManager.initialiseRoomMemory(roomObject);
    memoryManager.updateRoomMemory(roomObject);

    // loop through the creeps in the room
    // @ts-ignore
    const numHarvesters = _.filter(roomObject.memory.ownedCreepsInRoom, c => Game.getObjectById(c).memory.role === constant.HARVESTER).length;
    // @ts-ignore
    const numUpgraders = _.filter(roomObject.memory.ownedCreepsInRoom, c => Game.getObjectById(c).memory.role === constant.UPGRADER).length;
    // @ts-ignore
    const numRepairers = _.filter(roomObject.memory.ownedCreepsInRoom, c => Game.getObjectById(c).memory.role === constant.REPAIRER).length;
    // @ts-ignore
    const numConstructors = _.filter(roomObject.memory.ownedCreepsInRoom, c => Game.getObjectById(c).memory.role === constant.CONSTRUCTOR).length;

    const spawnName = Game.getObjectById(roomObject.memory.sourcesInRoom[0]);

    // spawn new creeps if necessary
    if (numHarvesters < 1) {
      const creepName = "HARVESTER" + Game.time;

      // @ts-ignore
      if (Game.spawns[spawnName].spawnCreep([MOVE, WORK, CARRY], creepName, { memory: { role: constant.HARVESTER } }) === OK) {
        console.log("Spawning: HARVESTER");
      }
    }
    else if (numUpgraders < 2) {
      const creepName = "UPGRADER" + Game.time;

      // @ts-ignore
      if (Game.spawns[spawnName].spawnCreep([MOVE, WORK, CARRY], creepName, { memory: { role: constant.UPGRADER } }) === OK) {
        console.log("Spawning: UPGRADER");
      }
    }
    else if (numConstructors < 2) {
      const creepName = "CONSTRUCTOR" + Game.time;

      // @ts-ignore
      if (Game.spawns[spawnName].spawnCreep([MOVE, WORK, CARRY], creepName, { memory: { role: constant.CONSTRUCTOR } }) === OK) {
        console.log("Spawning: CONSTRUCTOR");
      }
    }
    else if (numRepairers < 1) {
      const creepName = "REPAIRER" + Game.time;

      // @ts-ignore
      if (Game.spawns[spawnName].spawnCreep([MOVE, WORK, CARRY], creepName, { memory: { role: constant.REPAIRER } }) === OK) {
        console.log("Spawning: REPAIRER");
      }
    }
  }

  for (const creep in Game.creeps) {
    Game.creeps[creep].runRole();
  }
});
