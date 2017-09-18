import {platformBrowserDynamic} from '@angular/platform-browser-dynamic'
import { AppModule } from './app.module';

/*
On utilise le platformBrowserDynamic pour lancer notre
application, on lui donne en argument notre NgModule 
principal qui sera le point de départ de notre application
*/
platformBrowserDynamic().bootstrapModule(AppModule);