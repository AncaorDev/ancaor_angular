import { Component } from "@angular/core";
import { AncaorInicioObservable } from "src/app/app.observable";

@Component({
    selector: 'ancaor-cabecera',
    templateUrl: 'ancaor-cabecera.component.html',
    styleUrls: ['ancaor-cabecera.component.scss']
})

export class AncaorCabecera {
    cabecera:any;
    fixed:boolean = false;
    constructor(private observer : AncaorInicioObservable) {

    }

    ngOnInit() {
        this.observer.observableScroll.subscribe(res => {
            this.fixed = res;
        });
        this.cabecera = document.getElementById("header");
        // Code for Chrome, Safari and Opera
        this.cabecera.addEventListener("webkitAnimationEnd", this.myEndFunction);
        // Standard syntax
        this.cabecera.addEventListener("animationend", this.myEndFunction);
    }
    enviar(){

    }
    myEndFunction(){
        this.cabecera = document.getElementById("header");
        this.cabecera.classList.add('shadow');
    }
}