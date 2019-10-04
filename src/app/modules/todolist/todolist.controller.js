export class ToDoListController {
    /*@ngInject*/
    constructor($scope,ToDoListService,$rootScope) {
        this.$scope = $scope;
        this.$scope.loginClicked = false;
        this.$scope.isLoggedIn = true;
        this.ToDoListService = ToDoListService;
        this.$rootScope = $rootScope;
    }

    init(){
        this.$scope.userDetails = JSON.parse(sessionStorage.getItem('user'));
        this.user = this.$scope.userDetails.firstName + " " + this.$scope.userDetails.lastName;

        this.ToDoListService.fetchTasks(this.$scope.userDetails.username).then((response) => {
            this.activeTasks = response.activeTasks;
            this.completedTasks = response.completedTasks;

        }) .catch((error) =>
            console.log(error)
        );
    }

    addTask(){
            this.$scope.newTask = {
                "name": this.addedTaskName,
                "description": this.addedTaskDesc,
                "status": "Pending"
            }
        this.activeTasks.push(this.$scope.newTask);
        this.addedTaskName = '';
        this.addedTaskDesc = '';
    }

    removeTask(){
        var newDataList=[];
        var newCompletedList = this.completedTasks;
        angular.forEach(this.activeTasks, function(selected){
            if(!selected.selected){
                newDataList.push(selected);
            }
            else{
                newCompletedList.push(selected);
            }
        });
        this.activeTasks = newDataList;
        this.completedTasks = newCompletedList;
    };


    logout(){
        this.$rootScope.transitionTo('login');
    }
}