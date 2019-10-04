import angular from 'angular';
import { ToDoListController } from './todolist.controller';
import { ServiceModule } from '../../services/service.module'

export const ToDoListModule = angular
    .module('toDoApp.todolist', [ServiceModule])
    .controller('ToDoListController', ToDoListController)
    .name;