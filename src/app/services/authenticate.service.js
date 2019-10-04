import angular from 'angular';

export class AuthenticateService {
    /*@ngInject*/
    constructor($http) {
        this.$http = $http;
    };
    authenticateUser(data) {
        let queryParam = [];
        angular.forEach(data, (value, key) => {
            queryParam.push(key + '=' + value);
        });
        return this.$http.put('/authenticateUser/'+ '?' + queryParam.join('&')).then(response => response.data);
    }
}