import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Asset } from './asset';


@Injectable()
export class AssetService {
  private assetUrl = 'app/assets';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }


  getAssets(): Promise<Asset[]> {
    return this.http.get(this.assetUrl)
               .toPromise()
               .then(response => response.json().data as Asset[])
               .catch(this.handleError);
  }


getAsset(id: number): Promise<Asset> {
  const url = `${this.assetUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Asset)
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



