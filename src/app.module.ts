import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
    /*
    On devra venir déclarer tous les components et 
    service de notre module dans l'array declarations
    */
    declarations: [
        AppComponent
    ],
    /*
    L'array imports contiendra tous les modules angular
    externe que l'on ajoutera à notre projet (d'autre 
    projets angular, des librairies etc.)
    */
    imports: [
        BrowserModule
    ],
    /*
    Le bootstrap doit contenir le Component racine de
    l'application, le point de départ en gros
    */
    bootstrap:[AppComponent]
})
export class AppModule {}