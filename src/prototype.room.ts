/**
 * Prototypes for Room
 * @author Erik Dreyer
 */

/**
 * Get all creeps in a room
 *
 */
Room.prototype.getAllCreepsInRoom = function (): string[] {
    return this.find(FIND_CREEPS).map((creep) => creep.id);
};

/**
 * Get all owned creeps in a room
 *
 */
Room.prototype.getAllOwnedCreepsInRoom = function (): string[] {
    return this.find(FIND_MY_CREEPS).map((creep) => creep.id);
};

/**
 * Get all structures in a room
 *
 */
Room.prototype.getAllStructuresInRoom = function (): string[] {
    return this.find(FIND_STRUCTURES).map((struct) => struct.id);
};

/**
 * Get all owned structures from a room
 *
 */
Room.prototype.getAllOwnedStructuresInRoom = function (): string[] {
    return this.find(FIND_MY_STRUCTURES).map((struct) => struct.id);
};

/**
 * Get all owned spawns in a room
 *
 */
Room.prototype.getAllOwnedSpawnsInRoom = function (): string[] {
    return this.find(FIND_MY_SPAWNS).map((spawn) => spawn.id);
};

/**
 * Get all sources in a room
 *
 */
Room.prototype.getAllSourcesInRoom = function (): string[] {
    return this.find(FIND_SOURCES).map((source) => source.id);
};

/**
 * Get all construction sites in a room
 *
 */
Room.prototype.getAllConstructionSitesInRoom = function (): string[] {
    return this.find(FIND_CONSTRUCTION_SITES).map((site) => site.id);
}

/**
 * Get all owned construction sites in a room
 *
 */
Room.prototype.getAllOwnedConstructionSitesInRoom = function (): string[] {
    return this.find(FIND_MY_CONSTRUCTION_SITES).map((site) => site.id);
}

