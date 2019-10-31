import { ErrorMapper } from "utils/ErrorMapper";

// When compiling TS to JS and bundling with rollup, the line numbers and file names in error messages change
// This utility uses source maps to get the line numbers and file names of the original, TS source code
export const loop = ErrorMapper.wrapLoop(() => {
  console.log(`Current game tick is ${Game.time}`);

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
    if (Game.creeps[creep].memory.role === HARVESTER) {
      harvesters++;
    }

    if (Game.creeps[creep].memory.role === UPGRADER) {
      upgraders++;
    }

    if (Game.creeps[creep].memory.role === REPAIRER) {
      repairers++;
    }

    if (Game.creeps[creep].memory.role === CONSTRUCTOR) {
      constructors++;
    }

    Game.creeps[creep].runRole(Game.creeps[creep].memory.role);
  }
  console.log(harvesters);

  const spawnName: string = 'Spawn1';
  // spawn new creeps if necessary
  if (harvesters < 2) {
    const creepName = "HARVESTER" + Game.time;
    Game.spawns[spawnName].spawnCreep([MOVE, WORK, CARRY], creepName);
    Game.creeps[creepName].memory.role = HARVESTER;
  }

  if (upgraders < 2) {
    const creepName = "UPGRADER" + Game.time;
    Game.spawns[spawnName].spawnCreep([MOVE, WORK, CARRY], creepName);
    Game.creeps[creepName].memory.role = UPGRADER;
  }

  if (repairers < 2) {
    const creepName = "REPAIRER" + Game.time;
    Game.spawns[spawnName].spawnCreep([MOVE, WORK, CARRY], creepName);
    Game.creeps[creepName].memory.role = REPAIRER;
  }

  if (constructors < 2) {
    const creepName = "CONSTRUCTOR" + Game.time;
    Game.spawns[spawnName].spawnCreep([MOVE, WORK, CARRY], creepName);
    Game.creeps[creepName].memory.role = CONSTRUCTOR;
  }
});
