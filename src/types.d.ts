interface Memory {
  uuid: number;
  log: any;
}

// `global` extension samples
declare namespace NodeJS {
  interface Global {
    log: any;
  }
}

/**
 * Interface for the memory of a Creep
 * @author Erik Dreyer
 *
 * @type interface
 */
interface CreepMemory {
  /**
   * The role of the Creep
   * @type string
   */
  role: CreepRole;

  /**
   * ID of the room where the creep was created
   * @type string
   */
  creationRoom: string;

  /**
   * ID of the spawn where the creep was created
   * @type string
   */
  creationSpawn: string;
}

/**
 * Interface for the memory of a Room
 * @author Erik Dreyer
 *
 * @type interface
 */
interface RoomMemory {
  /**
   * Creeps currently in the room
   * Important this includes all creeps in the room, even creeps that are not owend by you
   *
   * @type Array<Creep>
   */
  creepsInRoom: Creep[];

  /**
   * Structures in the room
   * Important this includes all structures in the room, even structures that are not owned by you
   *
   * @type Array<Structure>
   */
  structuresInRoom: Structure[];

  /**
   * All sources in the room
   *
   * @type Array<Source>
   */
  sourcesInRoom: Source[];

  /**
   * All spawns in the room
   *
   * @type Array<STRUCTURE_SPAWN>
   */
  spawnsInRoom: STRUCTURE_SPAWN[];

  /**
   * Dictionary with the min and max values for a certain type of CreepRole
   */
  creepConfig: object[];
}
