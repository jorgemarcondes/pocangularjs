(function() {
    'use strict';

    angular
        .module('firstApp')
        .directive('arqPanel', arqPanel);

    function arqPanel () {
        return {
            restrict: 'E',
            scope: {
                name: '@',
                subtitle: '@'
            },
            templateUrl: './components/templates/arq-panel.component.html',
            controller: arqPanelController,
            controllerAs: 'vm',
            bindToController: true
        };
    }

    arqPanelController.$inject = ['$scope'];

    function arqPanelController($scope) {
        var vm = this;


    }
})();
