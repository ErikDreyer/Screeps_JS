/**
 * Implements the HARVESTER role for a creep
 * @author Erik Dreyer
 *
 * @type class
 */
export class Harvester {
    /**
     * Run the role of the creep
     *
     * @param creep The creep to run the role of
     */
    public run(creep: Creep): void {
        // if the creep is collecting resources and is full
        if (creep.memory.collectResources && creep.store.getFreeCapacity() === 0) {
            creep.memory.collectResources = false;
        }
        // if the creep is delivering to a structure but is now empty
        else if (!creep.memory.collectResources && creep.store.getUsedCapacity() === 0) {
            creep.memory.collectResources = true;
        }

        // if the creep should gather energy
        if (creep.memory.collectResources) {
            const sources = creep.room.find(FIND_SOURCES);
            if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        }
        // if the creep should deliver energy
        else {
            const targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN) && structure.store.getFreeCapacity(RESOURCE_ENERGY) > 0;
                }
            });
            if (targets.length > 0) {
                if (creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
    }
};
