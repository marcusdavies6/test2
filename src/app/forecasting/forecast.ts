export class CashFlowFleet {
  id: number;
  assetId : number;
  groupName : string;
  forecastDate : Date;
  dateCashIn : number;
  dateCashOut : number;
  dateCashFlow : number;
  totalCashIn : number;
  totalCashOut : number;
  totalCashFlow : number;
}

export const cashflowfleets : CashFlowFleet[] = [
      {id: 1, assetId: -1, groupName: 'Fleet', forecastDate: new Date(2017, 1, 1), 
       dateCashIn: 200000, dateCashOut: 0, dateCashFlow: 200000, 
       totalCashIn: 1500000, totalCashOut: 800000, totalCashFlow: 700000},
      {id: 2, assetId : -1, groupName: 'Fleet', forecastDate: new Date(2017, 2, 1), 
       dateCashIn: 200000, dateCashOut: 0, dateCashFlow: 200000, 
       totalCashIn: 1700000, totalCashOut: 800000, totalCashFlow: 900000},
    ]  