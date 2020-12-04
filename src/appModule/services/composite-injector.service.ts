import { Injectable } from '@angular/core';
import { WindowRef } from './window-ref.service';

//
// Create a composite injector which can help resolve or get a service
// from the mix of container & functional applications


//
// Reference:
// https://docs.angularjs.org/api/auto/service/$injector
//

@Injectable()
export class CompositeInjector {
    private parentInjector: any;
    private childInjector: any;

    constructor(wref: WindowRef) {
        let parent = wref.instance().parent;

        var pNg = parent.angular;

        var pDocument = pNg.element(parent.document);

        var pDummy = pDocument.find('dummy');

        var pInjector = pDummy.injector();

        this.parentInjector = pInjector;
        this.childInjector = pInjector;
    }

    has(name) {
        return this.parentInjector.has(name)
            || this.childInjector.has(name);
    }

    get(name, caller) {
        try {
            return this.childInjector.get(name, caller);
        } catch (e) {
            return this.parentInjector.get(name, caller);
        }
    }

    invoke(fn, self, locals) {
        var args = this.annotate(fn, false);
        var services = [];

        for (const value of args) {
            services.push(locals[value] == null ? this.get(value, null) : locals[value]);
        }

        return fn.apply(self, services);
    }

    instantiate(type, locals) {
        var args = this.annotate(type, false);
        var services = [];

        for (const value of args) {
            services.push(locals[value] == null ? this.get(value, null) : locals[value]);
        }

        services.unshift(null);

        return new (Function.prototype.bind.apply(type, services))();
    }

    annotate(fn, strictDi) {
        return this.childInjector.annotate(fn, strictDi);
    }

    loadNewModules(mods) {
        this.childInjector.loadNewModules(mods);
    }

}