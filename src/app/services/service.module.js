import angular from 'angular';
import { AuthenticateService } from './authenticate.service';
import { ToDoListService } from './todolist.service';
import { SpinnerService } from './spinner.service';

export const ServiceModule = angular
    .module('serviceModule', [])
    .service('AuthenticateService', AuthenticateService)
    .service('ToDoListService', ToDoListService)
    .service('SpinnerService', SpinnerService)
    .name;
