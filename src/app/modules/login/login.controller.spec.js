import 'angular-mocks';
import { LoginController } from './login.controller';


describe('LoginController', () => {
    beforeEach(angular.mock.module('toDoApp.login'));
    beforeEach(inject(($q,$rootScope,md5) => {
        this.$scope = $rootScope.$new();
        this.widgetModuleContext = {};
        this.$q = $q;
        this.md5 = md5;

        this.AuthenticateService = {
            authenticateUser: Function.prototype
        };
        this.SpinnerService = {
            activateSpinner: Function.prototype,
            deactivateSpinner: Function.prototype
        };
        this.controller = new LegalSigningController(
            this.$scope,
            this.md5,
            this.AuthenticateService,
            this.$rootScope,
            this.SpinnerService,
            this.$q
        );
        this.authenticateResponse = {

            "data": {
                "username": "username14",
                "firstName": "Hemanshu",
                "lastName": "Banga",
                "role": "user"
            }

        };
    }));

    describe('LoginController.login()', () => {
        it('should call login method', () => {
            spyOn(this.$rootScope, 'transitionTo').and.callFake(() =>{
                return {}
            });
            spyOn(this.AuthenticateService, 'authenticateUser').and.returnValue(
                this.$q.when(this.authenticateResponse)
            );
            this.controller.login();
            this.$scope.$digest();
            expect(this.AuthenticateService.authenticateUser).toHaveBeenCalled();
        });

        it('should throw an error', () =>{
            const error = { messageKey: 'testMessageKey' };
            spyOn(this.AuthenticateService, 'authenticateUser').and.returnValue(
                this.$q.reject(error)
            );
            this.controller.login();
            this.$scope.$digest();
            expect(this.AuthenticateService.authenticateUser).toHaveBeenCalled();
        });
    });
});