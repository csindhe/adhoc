import { Directive, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[ad-host]'
})

export class AdDirective {

    constructor(private viewContainerRef: ViewContainerRef) {

    }
}