/**
 * Implements the role for the upgrader
 * @author Erik Dreyer
 */
export class Upgrader {

    public run(creep: Creep) {
        // if the creep has free capacity, find a source and harvest until full
        if (creep.store.getFreeCapacity() > 0) {
            const sources = creep.room.find(FIND_SOURCES);

            // if not yet at the source, move to it
            if (creep.harvest(sources[0]) === ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0]);
            }
        } else {
            // if full, find the room controller
            const targets = creep.room.find(FIND_STRUCTURES, {
                filter: (structure) => {
                    return (structure.structureType === STRUCTURE_CONTROLLER);
                }
            });

            // if a controller is found
            if (targets.length > 0) {

                // if not yet at the controller, move to it
                const controller: StructureController = targets[0] as StructureController;
                if (creep.upgradeController(controller) === ERR_NOT_IN_RANGE) {
                    creep.moveTo(controller);
                }
            }
        }
    }
};
