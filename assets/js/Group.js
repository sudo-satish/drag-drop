var Group = {

};

/**
 * Array of user who are in group!
 */
var groupArr = [];
window.groupAr = groupArr;

/**
 * Add User to Group
 * 
 * @param {*} target
 */
Group.addToGroup = function(target) {
    var userId = $(target).attr("user-id");
    if (!alreadyInGroup(userId)) {
        pushToGroup(userId);
        console.log(' New Group Arr ', window.groupAr);
    }
}

/**
 * Remove user from group
 * 
 * @param {*} target 
 */
Group.exitFromGroup = function(target) {
    var userId = $(target).attr("user-id");
    if (alreadyInGroup(userId)) {
        removeFromGroup(userId);
        console.log(' New Group Arr ', window.groupAr);
    }
}

window.Group = Group;