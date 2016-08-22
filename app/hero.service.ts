import { Injectable } from '@angular/core';
import { Hero } from './hero';
//import { HEROES } from './mock-heroes';

import { Headers, Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';


@Injectable()
export class HeroService {
//何か処理が解決したらHEROESを渡すのか?
//resolveは処理成功時(失敗時はreject)
//ここで指定した引数が呼び出し時のThenの引数になる
//	getHeroes(){return Promise.resolve(HEROES);}
/*	getHeroesSlowly() {
  return new Promise<Hero[]>(resolve =>
    setTimeout(() => resolve(HEROES), 2000) // 2 seconds
  );
}*/

getHero(id: number) {
  return this.getHeroes()
             .then(heroes => heroes.find(hero => hero.id === id));
}



 private heroesUrl = 'app/heroes';  // URL to web api

  constructor(private http: Http) { }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json().data as Hero[])
               .catch(this.handleError);
  }

// Add new Hero
private post(hero: Hero): Promise<Hero> {
  let headers = new Headers({
    'Content-Type': 'application/json'});

  return this.http
             .post(this.heroesUrl, JSON.stringify(hero), {headers: headers})
             .toPromise()
             .then(res => res.json().data)
             .catch(this.handleError);
}


// Update existing Hero
private put(hero: Hero): Promise<Hero> {
  let headers = new Headers();
  headers.append('Content-Type', 'application/json');

  let url = `${this.heroesUrl}/${hero.id}`;

  return this.http
             .put(url, JSON.stringify(hero), {headers: headers})
             .toPromise()
             .then(() => hero)
             .catch(this.handleError);
}


save(hero: Hero): Promise<Hero>  {
  if (hero.id) {
    return this.put(hero);
  }
  return this.post(hero);
}

delete(hero: Hero): Promise<Response> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    let url = `${this.heroesUrl}/${hero.id}`;
    return this.http
               .delete(url, {headers: headers})
               .toPromise()
               .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}

