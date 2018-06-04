import { NgModule } from "@angular/core";
import { FlyingHeroComponent } from "../flyinghero/flyinghero.component";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { FlyingHeroesPipe } from "../pipes/flyingheroes.pipe";
import { HighlightDirective } from "../directives/highlight.directive";
import { UnlessDirective } from "../directives/unless.directive";
import { BannerComponent } from "../banner/banner.component";
import { AdDirective } from "../directives/ad.directive";

@NgModule({
    declarations:[
        HighlightDirective,
        UnlessDirective,
        AdDirective,
        FlyingHeroesPipe,
        FlyingHeroComponent,
        BannerComponent
    ],
    imports: [
        CommonModule,
        FormsModule
    ],
    providers: [],
    exports:[
        HighlightDirective,
        UnlessDirective,
        AdDirective,
        FlyingHeroesPipe,
        FlyingHeroComponent,
        BannerComponent
    ]
})

export class HeroModule { }