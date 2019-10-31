/**
 * Implements the role for the CONSTRUCTOR
 * @author Erik Dreyer
 */
export class Constructor {

    public run(creep: Creep) {
        // if the creep has free capacity, find a source and harvest until full
        if (creep.store.getFreeCapacity() > 0) {
            const sources = creep.room.find(FIND_SOURCES);

            // if not yet at the source, move to it
            if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        } else {
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
