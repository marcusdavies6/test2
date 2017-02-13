import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Agreement } from './agreement';


@Injectable()
export class AgreementService {
  private agreeUrl = 'app/agreement';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getAgreements(): Promise<Agreement[]> {
    return this.http.get(this.agreeUrl)
               .toPromise()
               .then(response => response.json().data as Agreement[])
               .catch(this.handleError);
  }  

  getAgreementsForAsset(assetId : number): Promise<Agreement[]> {
    const url = `${this.agreeUrl}?assetId=${assetId}`;
    return this.http.get(url)
               .toPromise()
               .then(response => response.json().data as Agreement[])
               .catch(this.handleError);
  } 

  getAgreement(id: number): Promise<Agreement> {
  const url = `${this.agreeUrl}/${id}`;
  return this.http.get(url)
    .toPromise()
    .then(response => response.json().data as Agreement)
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



