/**
 * Get an array of all the spawns in this room
 * 
 * @type function
 * @return {Array<StructureSpawn>} list of all spawns in this room
 */
Room.prototype.getAllRoomSpawns = function() {

    var roomSpawns = Game.rooms[this.name].find(FIND_MY_SPAWNS, {
        filter: { room: this }
    });

    // convert to ids
    for (var room in roomSpawns) {
        roomSpawns[room] = roomSpawns[room].id;
    }
    
    return roomSpawns;
}

/**
 * Get an array of all the creeps made in this room
 * 
 * @type function
 * @return {Array<Creep>} list of creeps made in this room
 */
Room.prototype.getAllRoomCreeps = function() {
    // get all of the creeps from this room
    var roomCreeps = [];
    for(const i in Game.creeps) {
        if (Game.creeps[i].memory.homeRoom.name == this.name) {
            roomCreeps.push(i);
        }
    }
    // convert to ids
    for (var creep in roomCreeps) {
        roomCreeps[creep] = Game.creeps[roomCreeps[creep]].id;
    }
    return roomCreeps;
}

/**
 * Gat all of the sources in the room
 * 
 * @type function
 * @return {Array<SOURCES>} array of sources in the room
 */
Room.prototype.getAllRoomSources = function() {
    var roomSourceList = this.find(FIND_SOURCES);

    // get all of the IDS
    var roomSourceIDList = [];
    for (var s in roomSourceList) {
        roomSourceIDList.push(roomSourceList[s].id);
    }

    return roomSourceIDList;
}
