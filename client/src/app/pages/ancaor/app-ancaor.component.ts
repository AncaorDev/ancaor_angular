import { Component } from "@angular/core";
import { AncaorInicioObservable } from "src/app/app.observable";

@Component({
    selector: 'app-ancaor',
    templateUrl: 'app-ancaor.component.html',
    styleUrls: ['app-ancaor.component.scss'],
    providers: [],
})

export class AppAncaor {
    constructor(private obsserver :AncaorInicioObservable) {

    }
    ngOnInit() {
    }

    ngAfterViewInit():void {

    }
    onScrollTop(event){

    }
}