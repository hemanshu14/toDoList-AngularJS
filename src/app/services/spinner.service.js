export class SpinnerService {
    /*@ngInject*/
    constructor() {

    };
    activateSpinner(promise, message) {
        return {
            promise: promise,
            message: message,
            backdrop: true
        };
    };

    deactivateSpinner(promise) {
        promise.resolve();
    };
}