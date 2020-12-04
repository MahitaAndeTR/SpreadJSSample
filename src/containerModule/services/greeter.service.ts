import * as angular from 'angular';

export class Greeter {
    static $inject = ['$log'];
    constructor(private logger) { }

    greet() {
        this.logger.log('Hello World!');
    }
}

angular.module('app')
    .service('greeter', Greeter);