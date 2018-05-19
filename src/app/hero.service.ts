import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';


@Injectable()
export class HeroService {

    getHeroes(): Hero[] {
        return HEROES;
    }

    getHero(id: number):Promise<Hero> {         
        // return   HEROES.find(hero => hero.id === id);
     return   Promise.resolve(HEROES.find(hero => hero.id === id));
    }
}