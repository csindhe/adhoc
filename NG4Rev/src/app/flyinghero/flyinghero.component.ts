import { Component, OnInit } from "@angular/core";
import { Flyer, HEROES } from "../data/heroes";

@Component({
    selector: "app-flyinghero",
    templateUrl: "./flyinghero.component.html",
    styleUrls: ["./flyinghero.component.css"]
})

export class FlyingHeroComponent implements OnInit {
    heroName: string;
    canFly: boolean = true;
    mutate: boolean = true;
    heroes: Flyer[] = [];
    color: string = null;
    condition: boolean = true;

    constructor() {
        this.reset();
    }

    ngOnInit() {

    }

    addHero() {
        if(this.heroName === "") {  return; };
        let Hero: Flyer = { name: this.heroName, canFly: this.canFly };
        // if(this.mutate){
        //     this.heroes.push(Hero);
        // }
        // else{
        //     this.heroes = this.heroes.concat(Hero);
        // }
        this.heroes = this.heroes.concat(Hero);
    }
    
    reset() {
        this.heroes = HEROES.slice();
    }
}