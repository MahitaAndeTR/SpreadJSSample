import './appModule/components';
import './appModule/services';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { NgModule, enableProdMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { SpreadSheetsModule } from '@grapecity/spread-sheets-angular';
import { DesignerModule } from '@grapecity/spread-sheets-designer-angular';
import { CompositeInjector } from './appModule/services/composite-injector.service';
import { WindowRef } from './appModule/services/window-ref.service';
import { NotificationEmitter } from './appModule/services/notification-emitter.service';
import { HelloComponent } from './appModule/components/hello.component';
import { WorldComponent } from './appModule/components/world.component';

@NgModule({
    imports: [
        BrowserModule,
        SpreadSheetsModule,
        DesignerModule
    ],
    providers:[
        CompositeInjector,
        NotificationEmitter,
        WindowRef
    ],
    declarations:[
        HelloComponent,
        WorldComponent
    ],
    bootstrap:[
        HelloComponent,
        WorldComponent
    ]
})
export class AppModule {
}

enableProdMode();

platformBrowserDynamic().bootstrapModule(AppModule);
