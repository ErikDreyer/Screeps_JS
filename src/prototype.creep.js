/**
 * All of the roles that a creep can have and the required files
 */
var roles = {
    "HARVESTER": import('role.harvester'),
    "UPGRADER": import('role.upgrader'),
    "CONSTRUCTOR": import('role.constructor'),
    "REPAIRER": import('role.repairer'),
    "MINER": import('role.miner')
}

/**
 * Run the respective role of the creeps role name
 *
 * @type function
 *
 * @param {creepRole} creepRole the role of the creep
 */
Creep.prototype.runRole = function (creepRole) {
    // check that the role is valid
    roles[creepRole].run(this);
}

export default {
    roles
}
