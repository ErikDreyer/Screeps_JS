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
  ownedCreepsInRoom: string[];

  /**
   * Structures in the room
   * Important this includes all structures in the room, even structures that are not owned by you
   *
   * @type Array<Structure>
   */
  ownedStructuresInRoom: string[];

  /**
   * All sources in the room
   *
   * @type Array<Source>
   */
  sourcesInRoom: string[];

  /**
   * All spawns in the room
   *
   * @type Array<STRUCTURE_SPAWN>
   */
  ownedSpawnsInRoom: string[];

  /**
   * Dictionary with the min and max values for a certain type of CreepRole
   */
  creepConfig: object;

  /**
   * Indicates whether the room's memory has been setup
   */
  setup: boolean;
}

/**
 * Memory management interface
 * @author Erik Dreyer
 *
 */
interface MemoryManeger {
  /**
   * Static function that initialises the memory of a room
   * @param room The room to initilise the memory of
   */
  initialiseRoomMemory(room: Room): void;

  /**
   * Update the memory of a Room by updating all of its fields
   *
   * @param room The Room to update the memory of
   */
  updateRoomMemory(room: Room): void;

  /**
   * Remove all dead creeps from the Memory
   */
  deleteAllDeadCreepsFromMemory(): void;
}

/**
 * Extend the interface of the Creep
 * @author Erik Dreyer
 */
interface Creep {
  /**
   * Run the respective role of the Creep
   *
   */
  runRole(): void;
}

/**
 * Extend the interface of the Room
 * @author Erik Dreyer
 */
interface Room {
  /**
   * Get all creeps in a room
   *
   */
  getAllCreepsInRoom(): string[];

  /**
   * Get all owned creeps in a room
   *
   */
  getAllOwnedCreepsInRoom(): string[];

  /**
   * Get all structures in a room
   *
   */
  getAllStructuresInRoom(): string[];

  /**
   * Get all owned structures from a room
   *
   */
  getAllOwnedStructuresInRoom(): string[];

  /**
   * Get all owned spawns in a room
   *
   */
  getAllOwnedSpawnsInRoom(): string[];

  /**
   * Get all sources in a room
   *
   */
  getAllSourcesInRoom(): string[];

  /**
   * Get all construction sites in a room
   *
   */
  getAllConstructionSitesInRoom(): string[];

  /**
   * Get all owned construction sites in a room
   *
   */
  getAllOwnedConstructionSitesInRoom(): string[];
}
/**
 * Types of roles that a creep can have
 * @author Erik Dreyer
 */
type CreepRole =
  HARVESTER |
  CONSTRUCTOR |
  UPGRADER |
  REPAIRER |
  MINER |
  TRANSPORTER;

type HARVESTER = "HARVESTER";
type CONSTRUCTOR = "CONSTRUCTOR"
type UPGRADER = "UPGRADER";
type REPAIRER = "REPAIRER";
type MINER = "MINER";
type TRANSPORTER = "TRANSPORTER";
