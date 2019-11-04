/**
 * Implements the REPAIRER role for a creep
 * @author Erik Dreyer
 *
 * @type class
 */
export class Repairer {
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
        // if the creep should repair
        else {
            // if full, find a structure with low health
            const targets = creep.room.find(FIND_MY_STRUCTURES, {
                filter: (structure) => {
                    return (structure.hits < structure.hitsMax * 0.5);
                }
            });

            // if a structure is found
            if (targets.length > 0) {

                // if not yet at the structure, move to it
                // @ts-ignore
                if (creep.build(targets[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
    }
};

