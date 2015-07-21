(function() {
    angular
        .module("chat")
        .factory("socket", SocketFactory);

    SocketFactory.$inject = ["socketFactory"];

    function SocketFactory(socketFactory) {
        return socketFactory({
            ioSocket: io.connect()
        });
    }
})();