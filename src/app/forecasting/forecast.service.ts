import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { CashFlowFleet } from './forecast';
import { cashflowfleets } from './forecast';

@Injectable()
export class ForecastService {
  private cashflowUrl = 'app/cashflowfleet';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }

  getCashflow_Fleet(): Promise<CashFlowFleet[]> {
    //return Promise.resolve(cashflowfleets);

    return this.http.get(this.cashflowUrl)
               .toPromise()
               .then(response => response.json().data as CashFlowFleet[])
               .catch(this.handleError);
  }


  getCashflow_Asset(id: number): Promise<CashFlowFleet[]> {
    const url = `${this.cashflowUrl}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as CashFlowFleet[])
      .catch(this.handleError);
  }






}



