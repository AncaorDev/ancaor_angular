import { Component } from '@angular/core';
import { AncaorInicioObservable } from './app.observable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    providers:[AncaorInicioObservable]
})
export class AppComponent {
    title:string = 'Ancaor';
    modes:any    = {determinate : 'determinate', indeterminate : 'indeterminate'};
    mode:string  = this.modes.determinate;
    color:string = 'primary';
    value:number = 0;
    loading:boolean = true;
    div_loading;
    interval:any;
    constructor(observer :AncaorInicioObservable){

    }
    ngOnInit(){

    }
    ngAfterViewInit(){
        this.interval = setInterval(() => {
            this.value++;
            if(this.value == 100){
                this.div_loading = document.getElementById("div-loading");
                this.div_loading.addEventListener("transitionend", this.myEndFunction);
                this.loading = false;
                clearInterval(this.interval);
            }
        }, 40);
    }
    myEndFunction(){
        this.div_loading = document.getElementsByClassName("opacity");
        if(this.div_loading.length > 0) {
            this.div_loading = document.getElementById("div-loading");
            this.div_loading.classList.remove('center'),
            this.div_loading.classList.add('display-none')
        };
    }

    ngOnDestroy(){
        this.div_loading.removeEventListener();
    }
}

