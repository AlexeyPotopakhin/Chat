(function() {
   angular
       .module("chat")
       .controller("MessageController", MessageController);

   MessageController.$inject = ["socket"];

   function MessageController(socket) {
       var vm = this;
       vm.message = {};
       vm.sendMessage = sendMessage;

       function sendMessage() {
           socket.emit("chat message", vm.message);
           vm.message.text = "";
       }
   }
})();
