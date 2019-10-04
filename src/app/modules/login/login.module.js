import angular from 'angular';
import { LoginController } from './login.controller';
import 'angular-md5';
import { ServiceModule } from '../../services/service.module'

export const LoginModule = angular
    .module('toDoApp.login', ['angular-md5', ServiceModule])
    .controller('LoginController', LoginController)
    .name;