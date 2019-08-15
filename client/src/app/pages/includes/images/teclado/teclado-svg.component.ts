import { Component, Input } from "@angular/core";
import { AncaorInicioObservable } from "src/app/app.observable";

@Component({
    selector: 'teclado-svg',
    templateUrl: 'teclado-svg.component.html',
    styleUrls: ['teclado-svg.component.scss']
})

export class TecladoSvg {
    @Input() width;
    constructor(private observer : AncaorInicioObservable) {

    }

    ngOnInit() {

    }
}