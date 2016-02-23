; (function() {
    angular
        .module('FirstApp')
        .controller('UserController', function($scope) {
            $scope.name = "NM";
            $scope.timeStamp = (new Date()).getTime();
        })
        .controller('UserDetailsController', function() {
            this.lastModified = "NOW";
            this.timeStamp = (new Date()).getTime();
        })
        .controller('PersonController', function() {});
})();