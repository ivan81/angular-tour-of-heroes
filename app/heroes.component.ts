
import { Component ,OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {HeroService} from './hero.service';
import {Hero} from './hero';
@Component({
  moduleId:module.id,
  selector: 'my-heroes',
  templateUrl:'heroes.component.html',
  styleUrls: ['heroes.component.css']
  
})
export class HeroesComponent implements OnInit{

  constructor (
    private heroService:HeroService,
    private router:Router
    ){}

  heroes : Hero[];
  selectedHero: Hero;

  getHeroes():void {
    //this.heroService.getHeroes().then(heroes =>this.heroes = heroes);
    this.heroService.getHeroes().then(heroes =>this.heroes = heroes);
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail():void{
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

  ngOnInit():void{
    this.getHeroes();
  }
}