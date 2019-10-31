/**
 * Implements the role for the CONSTRUCTOR
 * @author Erik Dreyer
 */
var roleConstructor = {

    /**
     * Run the role implementation of the CONSTRUCTOR role
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
            // if full, find a construction site
            var targets = creep.room.find(FIND_CONSTRUCTION_SITES);

            // if a construction site is found
            if (targets.length > 0) {

                // if not yet at the construction site, move to it
                if (creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
    }
};

module.exports = roleConstructor;
