import { Component } from '@angular/core';

import { CompositeInjector } from '../services/composite-injector.service';
import { NotificationEmitter } from '../services/notification-emitter.service';

import { Greeting } from '../objects/greeting.object';

@Component({
    selector: 'hello',
    template: [
        '<button type="button" (click)="greet()">Say Hello</button>'
    ].join('\n')
})
export class HelloComponent {
    private greeter: any;

    constructor(i : CompositeInjector, private n:NotificationEmitter) {
        this.greeter = i.get('greeter', null);
    }

    greet() {
        this.greeter.greet();
        this.n.raise(new Greeting('Hi there'));
    }
}