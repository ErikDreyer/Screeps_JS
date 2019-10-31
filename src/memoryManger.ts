import * as constant from "constant";

/**
 * Memory Management class
 * @author Erik Dreyer
 *
 * @class
 */
export class MemoryManger {

    public initialiseRoomMemory(room: Room): void {
        // loop through the keys in RoomMemory
        if (room.memory.setup === undefined || room.memory.setup === false) {
            room.memory.ownedCreepsInRoom = [];
            room.memory.sourcesInRoom = [];
            room.memory.ownedSpawnsInRoom = [];
            room.memory.ownedStructuresInRoom = [];

            room.memory.creepConfig = {
                "CONSTRUCTOR": { min: 1 },
                "HARVESTER": { min: 2 },
                "REPAIRER": { min: 1 },
                "UPGRADER": { min: 2 }
            }

            room.memory.setup = true;
        }
    }

    /**
     * Update the memory of a Room by updating all of its fields
     *
     * @param room The Room to update the memory of
     */
    public updateRoomMemory(room: Room): void {
        room.memory.ownedCreepsInRoom = room.getAllCreepsInRoom();
        room.memory.sourcesInRoom = room.getAllSourcesInRoom();
        room.memory.ownedSpawnsInRoom = room.getAllOwnedSpawnsInRoom();
        room.memory.ownedStructuresInRoom = room.getAllOwnedStructuresInRoom();
    }

    /**
     * Remove all dead creeps from Memory
     */
    public deleteAllDeadCreepsFromMemory(): void {
        // Automatically delete memory of missing creeps
        for (const name in Memory.creeps) {
            if (!(name in Game.creeps)) {
                delete Memory.creeps[name];
            }
        }
    }
}
