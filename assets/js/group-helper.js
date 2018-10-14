var groupArr = window.groupAr;

function alreadyInGroup(userId) {
    return groupArr.filter(function(user) { return user == userId })[0] ? true : false;
}

function pushToGroup(userId) {
    groupArr.push(userId);
}

function removeFromGroup(userId) {
    var index = groupArr.indexOf(userId);

    if (index > -1) {
        groupArr.splice(index, 1);
    }
}