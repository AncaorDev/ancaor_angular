import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable()
export class AncaorInicioObservable {
    subjectScroll   : Subject<any>    = new Subject<any>();
    observableScroll: Observable<any> =  this.subjectScroll.asObservable();
}