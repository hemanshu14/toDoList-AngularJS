import angular from 'angular';
import 'angular-ui-router';
import { LoginModule } from './modules/login/login.module';
import { ToDoListModule } from './modules/todolist/todolist.module';
import 'angular-busy';
import 'jquery';

angular.module('toDoApp', [
    'ui.router',
    'cgBusy',
    LoginModule,
    ToDoListModule
])
    .config(($stateProvider, $urlRouterProvider) => {
        $urlRouterProvider.otherwise('/login');

        $stateProvider
            .state('login', {
                url: '/login',
                templateUrl: 'app/modules/login/login.module.html',
                params: {stateObject: {}}
            })
            .state('todolist', {
                url: '/todolist',
                templateUrl: 'app/modules/todolist/todolist.module.html',
                params: {stateObject: {}}
            })
    })
    .controller('toDoAppController', toDoAppController)
    .run(($rootScope, $state, $stateParams) => {
        $rootScope.$stateParams = $stateParams;
                event.preventDefault();
                $state.go('login');
    });

function toDoAppController($rootScope, $state) {
    $rootScope.transitionTo = function(nextState, param) {
        if (param) {
            param.stateObject = $rootScope.stateObject;
        } else {
            param = {stateObject: $rootScope.stateObject};
        }
        $state.transitionTo(nextState, param);
    }
}

angular.bootstrap(document, ['toDoApp']);