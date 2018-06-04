import { Component, OnInit, Input, ViewChild, ComponentFactoryResolver } from "@angular/core";
import { AdDirective } from "../directives/ad.directive";

@Component({
    selector: "app-banner",
    template: `
        <div class="ad-banner">
            <h3>Advertisements</h3>
            <ng-template ad-host></ng-template>
        </div>
    `
})

export class BannerComponent implements OnInit {
    @Input() ads;
    currentAdIndex = -1;
    @ViewChild(AdDirective) adHost: AdDirective;
    interval: any;

    constructor(private componentFactoryResolver: ComponentFactoryResolver) {

    }

    ngOnInit() {
        this.loadComponent();
        // this.getAds();
    }

    loadComponent() {
        this.currentAdIndex = (this.currentAdIndex + 1) % this.ads.length;
        let adItem = this.ads[this.currentAdIndex];
        let componentFactory = 
        this.componentFactoryResolver.resolveComponentFactory(adItem.Component);
        let viewContainerRef = this.adHost;

    }
}