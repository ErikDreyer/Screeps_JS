/**
 * All of the roles that a creep can have and the required files
 */
var roles = {
    "HARVESTER": require('role.harvester'),
    "UPGRADER": require('role.upgrader')
}

/**
 * Run the respective role of the creeps role name
 * 
 * @type function
 * 
 * @param {creepRole} creepRole the role of the creep
 */
Creep.prototype.runRole = function(creepRole) {
    // check that the role is valid
    roles[creepRole].run(this);
}

module.exports = {roles}
