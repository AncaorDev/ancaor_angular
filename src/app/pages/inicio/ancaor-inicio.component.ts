import { Component } from "@angular/core";

@Component({
    selector: 'ancaor-inicio',
    templateUrl: 'ancaor-inicio.component.html',
    styleUrls: ['ancaor-inicio.component.scss'],
    providers: [],
})

export class AncaorInicio {
    constructor() {

    }
    ngOnInit() {
        console.log('inicio');
    }
}