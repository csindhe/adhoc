import { Pipe, PipeTransform } from "@angular/core";
import { Flyer } from "../data/heroes";

@Pipe({name: 'flyingheroes' })

export class FlyingHeroesPipe implements PipeTransform {

    transform(allHeroes: Flyer[]) {
        return allHeroes.filter(hero => hero.canFly);
    }
}