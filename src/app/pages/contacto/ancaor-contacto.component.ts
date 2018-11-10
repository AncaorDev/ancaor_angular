import { Component, HostListener } from "@angular/core";
import { AncaorInicioObservable } from "src/app/app.observable";

@Component({
    selector: 'ancaor-contacto',
    templateUrl: 'ancaor-contacto.component.html',
    styleUrls: ['ancaor-contacto.component.scss'],
    providers: [],
})

export class AncaorContacto {
    constructor(private obsserver :AncaorInicioObservable) {

    }
    ngOnInit() {
        console.log('contacto');

    }
    ngAfterViewInit():void {

    }
    onScrollTop(event){
        console.log(event);
    }
}