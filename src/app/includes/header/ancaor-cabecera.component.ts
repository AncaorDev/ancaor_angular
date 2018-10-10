import { Component } from "@angular/core";

@Component({
    selector: 'ancaor-cabecera',
    templateUrl: 'ancaor-cabecera.component.html',
    styleUrls: ['ancaor-cabecera.component.scss']
})

export class AncaorCabecera {
    constructor() {

    }
    ngOnInit() {
        console.log('cabecera');
    }
}