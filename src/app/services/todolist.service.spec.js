import 'angular-mocks';
import { ToDoListService } from './todolist.service';

describe('ToDoListService', () => {
    beforeEach(inject(($rootScope,$injector,$http) => {
        this.$scope = $rootScope.$new();
        this.$http = $http;
        this.$httpBackend = $injector.get('$httpBackend');
        this.toDoListService = jasmine.createSpyObj('toDoListService', [
            'fetchTasks'
        ]);

        this.toDoService = new ToDoListService(
            this.$http
        );

        this.fetchTasksResponse = {

            "activeTasks": [
                {
                    "name": "Laundry",
                    "description": "Do the Laundry before today evening",
                    "status": "Pending"
                },
                {
                    "name": "Gym",
                    "description": "Target to burn 200 calories today",
                    "status": "Pending"
                }]
        };

    }));

    describe('fetchTasks', () => {
        it('should call toDoListService.fetchTasks', (done) => {
            let userId = 'username14';
            let fetchTasksUrl = '/fetchTasks/?username14';
            this.$httpBackend.expectGET(fetchTasksUrl).respond(this.fetchTasksResponse);
            this.toDoListService.fetchTasks(userId).then(function(data) {
                expect(data.activeTasks.length).toEqual(2);
                done();
            });
            this.$httpBackend.flush();
        });
    });

});