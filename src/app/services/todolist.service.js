export class ToDoListService {
    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
    };
    fetchTasks(userId) {
        return this.$http.get('/fetchTasks/'+ '?' + userId).then(response => response.data);
    };
}