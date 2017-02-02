(function() {
    function Room($firebaseArray) {
        var ref = firebase.database().ref().child("rooms");
        var rooms = $firebaseArray(ref);
        $rootScope.rooms = rooms;

        return {
            all: rooms
        };
    }

    angular
        .module('chat')
        .factory('Room', ['$firebaseArray', Room]);
}());
