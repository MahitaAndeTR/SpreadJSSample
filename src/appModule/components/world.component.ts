import { Component } from '@angular/core';
import { Subscription } from 'rxjs';

import { NotificationEmitter } from '../services/notification-emitter.service';
import { Greeting } from '../objects/greeting.object';

@Component({
    selector: 'world',
    template: ''
})
export class WorldComponent {
    private subscription: Subscription;

    constructor(private n: NotificationEmitter) { }

    ngOnInit() {
        this.subscription = this.n.listen(Greeting, {
            next: (g: Greeting) => console.log(`${Greeting.name}: `, g)
        });
    };
    ngOnDestroy() {
        this.subscription.unsubscribe();
    };

}