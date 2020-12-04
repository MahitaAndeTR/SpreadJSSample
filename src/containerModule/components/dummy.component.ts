import * as angular from 'angular';

let dummyComponent = {
    selector: 'dummy'
};

angular.module('app')
    .component(dummyComponent.selector, dummyComponent);