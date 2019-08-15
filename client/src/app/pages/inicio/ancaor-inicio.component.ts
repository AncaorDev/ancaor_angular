import { Component, HostListener } from "@angular/core";
import { AncaorInicioObservable } from "src/app/app.observable";

@Component({
    selector: 'ancaor-inicio',
    templateUrl: 'ancaor-inicio.component.html',
    styleUrls: ['ancaor-inicio.component.scss'],
    providers: [],
})

export class AncaorInicio {
    top:boolean = false;
    logo;
    logo_const;
    constructor(private obsserver :AncaorInicioObservable) {

    }
    ngOnInit() {
        this.logo = document.getElementById('logo-ancaor');
    }
    @HostListener("window:scroll", ['$event'])
    onWindowScroll($event:Event) {
        // if(!this.logo_const) {
        //     this.logo_const = this.logo.offsetTop
        // }
        // var scrollTop = (document.documentElement && document.documentElement.scrollTop) || document.body.scrollTop;
        // // let scrollOffset = $event.srcElement.children[0].scrollTop;
        // // console.log(logo.clientHeight + logo.offsetTop);
        // if(scrollTop > this.logo_const){
        //     this.top = true;
        // } else {
        //     this.top = false;
        // }
        // if(logo.offsetTop > scrollOffset) {
        //     logo.classList.add('ancaor-top');
        //     logo.classList.remove('ancaor');
        // } else {
        //     logo.classList.add('ancaor');
        //     logo.classList.remove('ancaor-top');
        // }
        // let fixed = scrollOffset > id.offsetTop ? true : false
        // this.obsserver.subjectScroll.next(fixed)
    }
    // @HostListener('scroll', ['$event'])
    // onScrollOne(event):void {
    //     console.log(event);
    // }
    ngAfterViewInit():void {

    }
    onScrollTop(event){
        console.log(event);
    }
}