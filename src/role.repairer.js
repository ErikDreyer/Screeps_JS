/**
 * Implements the role for the REPAIRER
 * @author Erik Dreyer
 */
var roleRepairer = {

    /**
     * Run the role implementation of the REPAIRER role
     *
     * @param {Creep} creep
     **/
    run: function (creep) {
        // if the creep has free capacity, find a source and harvest until full
        if (creep.store.getFreeCapacity() > 0) {
            var sources = creep.room.find(FIND_SOURCES);

            // if not yet at the source, move to it
            if (creep.harvest(sources[0]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        } else {
            // if full, find a structure with low health
            var targets = creep.room.find(FIND_MY_STRUCTURES, {
                filter: (structure) => {
                    return (structure.hits < structure.hitsMax * 0.5);
                }
            });

            // if a structure is found
            if (targets.length > 0) {

                // if not yet at the structure, move to it
                if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
    }
};

module.exports = roleRepairer;
