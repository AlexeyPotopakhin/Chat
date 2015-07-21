(function() {
    angular
        .module("chat")
        .controller("ChatController", ChatController);

    ChatController.$inject = ["socket"];

    function ChatController(socket) {
        var vm = this;

        vm.messages = [];

        socket.on("chat history", function(msg) {
           for(var message in msg) {
               if(msg.hasOwnProperty(message)) {
                   vm.messages.push(msg[message]);
               }
           }
        });

        socket.on("chat message", function(msg) {
            vm.messages.push(msg);
        });
    }
})();
