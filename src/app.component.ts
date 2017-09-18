import { Component } from "@angular/core";

/**
 * Les components sont en gros les controleurs de Angular
 * Ce sont des classes qui seront liées à un template
 * html et qui déclareront en leur sein les propriétés
 * et méthodes accessibles au template en question.
 */

@Component({
    /*Le sélecteur indique la balise html qui sera liée
    à ce component. Si angular voit un <mon-app></mon-app>
    dans le html, il viendra y mettre le AppComponent
    */
    selector: 'mon-app',
    /* Le template correspond à la vue, c'est là où on 
    mettra le html du component (lorsqu'on utilise template
    on ne peut faire que des template inline, pour avoir des
    template dans un fichier externe il faudra utiliser 
    templateUrl)
    */
    template: '<h1>{{message}}</h1>'
})
export class AppComponent {
    /*
    public ou private, le template aura accès aux
    propriétés du Component auquel il est lié
    */
    private message:string = 'un truc dedans';
}