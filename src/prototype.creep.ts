import { Constructor } from "role.constructor";
import { Harvester } from "role.harvester";
import { Repairer } from "role.repairer";
import { Upgrader } from "role.upgrader";

import * as constants from "constants"

/**
 * Dictionary of all the creep role modules
 */
const roles: { [index: string]: any } = {
    CONSTRUCTOR: Constructor,
    HARVESTER: Harvester,
    REPAIRER: Repairer,
    UPGRADER: Upgrader
};

/**
 * Run the respective role of the creeps role name
 *
 */
Creep.prototype.runRole = function (): void {
    const role = new roles[(this.memory.role)];
    role.run(this);
};

export default {
    roles
}
