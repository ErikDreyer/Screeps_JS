/**
 * Implements the role for the upgrader
 * @author Erik Dreyer
 */
var roleUpgrader = {

    /**
     * Run the role implementation of the UPGRADER role
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
            // if full, find the room controller
            var targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType == STRUCTURE_CONTROLLER);
                }
            });

            // if a controller is found
            if (targets.length > 0) {

                // if not yet at the controller, move to it
                if (creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
        }
    }
};

module.exports = roleUpgrader;
