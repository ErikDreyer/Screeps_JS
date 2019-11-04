/**
 * Implements the CONSTRUCTOR role for a creep
 * @author Erik Dreyer
 *
 * @type class
 */
export class Constructor {
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
        // if the creep should construct
        else {
            // if full, find a construction site
            const targets = creep.room.find(FIND_CONSTRUCTION_SITES);

            // if a construction site is found
            if (targets.length > 0) {

                // if not yet at the construction site, move to it
                if (creep.build(targets[0]) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
    }
};

