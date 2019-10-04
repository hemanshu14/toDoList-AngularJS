import 'angular-mocks';
import { ToDoListController } from './todolist.controller';


describe('ToDoListController', () => {
    beforeEach(angular.mock.module('toDoApp.todolist'));
    beforeEach(inject(($rootScope) => {
        this.$scope = $rootScope.$new();
        this.$q = $q;

        this.ToDoListService = {
            fetchTasks: Function.prototype
        };
        this.controller = new LegalSigningController(
            this.$scope,
            this.ToDoListService,
            this.$rootScope
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

    describe('ToDoListController.init()', () => {
        it('should call init method', () => {
            spyOn(this.ToDoListService, 'fetchTasks').and.returnValue(
                this.$q.when(this.fetchTasksResponse)
            );
            this.controller.init();
            this.$scope.$digest();
            expect(this.ToDoListService.fetchTasks).toHaveBeenCalled();
        });

        it('should throw an error', () =>{
            const error = { messageKey: 'testMessageKey' };
            spyOn(this.ToDoListService, 'fetchTasks').and.returnValue(
                this.$q.reject(error)
            );
            this.controller.init();
            this.$scope.$digest();
            expect(this.ToDoListService.fetchTasks).toHaveBeenCalled();
        });
    });
});