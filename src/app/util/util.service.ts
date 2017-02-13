import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Util } from './util';


@Injectable()
export class UtilService {
  private utilUrl = 'app/util';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getUtil(): Promise<Util[]> {
    return this.http.get(this.utilUrl)
               .toPromise()
               .then(response => response.json().data as Util[])
               .catch(this.handleError);
  }  

  getUtilForAsset1(id : number): Promise<Util> {
    const url = `${this.utilUrl}/${id}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().data as Util)
               .catch(this.handleError);
  }

  getUtilForAsset(assetId : number): Promise<Util[]> {
    const url = `${this.utilUrl}?assetId=${assetId}`;
 //   const url = `${this.utilUrl}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().data as Util[])
               .catch(this.handleError);
  }  


// update(hero: Hero): Promise<Hero> {
//   const url = `${this.heroesUrl}/${hero.id}`;
//   return this.http
//     .put(url, JSON.stringify(hero), {headers: this.headers})
//     .toPromise()
//     .then(() => hero)
//     .catch(this.handleError);
// }

// create(name: string): Promise<Hero> {
//   return this.http
//     .post(this.heroesUrl, JSON.stringify({name: name}), {headers: this.headers})
//     .toPromise()
//     .then(res => res.json().data)
//     .catch(this.handleError);
// }

// delete(id: number): Promise<void> {
//   const url = `${this.heroesUrl}/${id}`;
//   return this.http.delete(url, {headers: this.headers})
//     .toPromise()
//     .then(() => null)
//     .catch(this.handleError);
// }



}



