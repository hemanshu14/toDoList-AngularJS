import 'angular-mocks';
import { AuthenticateService } from './authenticate.service';

describe('AuthenticateService', () => {
    beforeEach(inject(($rootScope,$injector,$http) => {
        this.$scope = $rootScope.$new();
        this.$http = $http;
        this.$httpBackend = $injector.get('$httpBackend');
        this.authenticateService = jasmine.createSpyObj('authenticateService', [
            'authenticateUser'
        ]);

        this.authService = new AuthenticateService(
            this.$http
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

    describe('authenticateUser', () => {
        it('should call authenticateService.authenticateUser', (done) => {
            let postData = {
                username: 'admin',
                password: '21232f297a57a5a743894a0e4a801fc3'
            }
            let authenticateUrl = '/authenticateUser/?username=admin&password=21232f297a57a5a743894a0e4a801fc3';
            this.$httpBackend.expectPUT(authenticateUrl).respond(this.authenticateResponse);
            this.authenticateService.authenticateUser(postData).then(function(data) {
                expect(data.data.username).toEqual("username14");
                done();
            });
            this.$httpBackend.flush();
        });
    });

});