export class LoginController {
    /*@ngInject*/
    constructor($scope,md5,AuthenticateService,$rootScope,SpinnerService,$q) {
        this.$scope = $scope;
        this.md5 = md5;
        this.$rootScope = $rootScope;
        this.AuthenticateService = AuthenticateService;
        this.SpinnerService = SpinnerService;
        this.$q = $q;
        this.$rootScope.stateObject = $rootScope.stateObject || {};
    }

    login(){
        let spinnerPromise = this.$q.defer();
        this.$scope.cgBusyOptions = this.SpinnerService.activateSpinner(spinnerPromise.promise, 'Please wait while we validate your credentials.');
        let postData = {
            username: this.$scope.username,
            password: this.md5.createHash(this.$scope.password)
        };

        this.AuthenticateService.authenticateUser(postData).then((response) => {
            sessionStorage.setItem('user', JSON.stringify(response.data));
            this.$rootScope.transitionTo('todolist');

        }) .catch((error) =>
            console.log(error)
        ).finally(() => {
            this.SpinnerService.deactivateSpinner(spinnerPromise);
        });
    }
}