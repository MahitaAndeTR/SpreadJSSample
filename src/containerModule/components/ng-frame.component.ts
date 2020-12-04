import * as angular from 'angular';

export let ngFrame = {
    selector: 'ngFrame',
    bindings: {
        src: '<'
    },
    controllerAs: 'vm',
    template: [
        '<style>',
        '   body {',
        '       padding: 0;',
        '       margin: 0;',
        '   }',
        '   div.container {',
        '       display: flex;',
        '       flex-direction: column;',
        '       height: 100%;',
        '       width: 100%;',
        '   }',
        '   div.container > iframe {',
        '       flex-grow: 1;',
        '       padding: 0;',
        '       margin: 0;',
        '       border: 1px solid black;',
        '   }',
        '</style>',
        '<div class="container">',
        '   <iframe ng-src="{{vm.src}}"></iframe>',
        '</div>'
    ].join('\n')
};

angular.module('app')
    .component(ngFrame.selector, ngFrame);