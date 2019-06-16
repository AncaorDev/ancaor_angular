import { Component, Input } from "@angular/core";

@Component({
    selector: 'web-svg',
    templateUrl: 'web-svg.component.html',
    styleUrls: ['web-svg.component.scss']
})

export class WebSvg {
    @Input() width;
    constructor() {

    }

    ngOnInit() {

    }
}