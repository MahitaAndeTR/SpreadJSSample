import { Subject, Subscription, NextObserver } from "rxjs";
import { Type } from "@angular/core";

export class NotificationEmitter {
    private registrations: Map<any, any>;

    constructor() {
        this.registrations = new Map();
    }

    raise<T>(value: T): void {
        let subject : Subject<T> = this.registrations.get(value.constructor);

        if (subject == null) return;

        subject.next(value);
    }

    listen<T>(t: Type<T>, observer: NextObserver<T>): Subscription {

        let subject: Subject<T> = this.registrations.get(t);
        if (subject == null) {
            subject = new Subject<T>();
            this.registrations.set(t, subject);
        }

        var subscription = subject.subscribe(observer);

        return subscription;
    }
}