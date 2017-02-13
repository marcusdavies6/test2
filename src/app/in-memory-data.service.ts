import { InMemoryDbService } from 'angular-in-memory-web-api';
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    let assets = [
      {id: 1, assetKind: 'Aircraft', assetModel: 'A320', assetType: '321', idRef1: 'LP-ABC', idRef2: '1234', parentId: 0},
      {id: 2, assetKind: 'Aircraft', assetModel: 'A320', assetType: '321', idRef1: 'LP-DEF', idRef2: '5678', parentId: 0},
      {id: 3, assetKind: 'Engine', assetModel: 'CFM56', assetType: '7B', idRef1: '123456', idRef2: '', parentId: 1},
      {id: 4, assetKind: 'Engine', assetModel: 'CFM56', assetType: '7B', idRef1: '789101', idRef2: '', parentId: 1}
    ];

    let util = [
      {id: 1, assetId: 1, utilTypeId: 0, utilTypeName: 'Total hours', amount: 200, limit: 0},
      {id: 2, assetId: 1, utilTypeId: 1, utilTypeName: 'Total cycles', amount: 100, limit: 0},
      {id: 3, assetId: 3, utilTypeId: 0, utilTypeName: 'Total hours', amount: 200, limit: 0},
      {id: 4, assetId: 3, utilTypeId: 1, utilTypeName: 'Total cycles', amount: 100, limit: 0},
      {id: 5, assetId: 3, utilTypeId: 2, utilTypeName: 'Hrs since OH', amount: 200, limit: 0},
      {id: 6, assetId: 3, utilTypeId: 3, utilTypeName: 'Cyc since OH', amount: 100, limit: 0}
    ]; 

    let agreement = [
      {id: 1, assetId: 1, parentAgreementId: 0
        , startDate: new Date(2016, 1, 1), endDate: new Date(2019, 1, 1)
        , lessor: 'MD Leasing', lessee: 'MD air'},
      {id: 2, assetId: 3, parentAgreementId: 0
        , startDate: new Date(2016, 1, 1), endDate: new Date(2019, 1, 1)
        , lessor: 'MD Leasing', lessee: 'Airline1'}        
    ]   

    let maintRes = [
      {id: 1, agreementId: 1, rateAmount: 100, rateAgainst: 'H'}
    ]   

    let cashflowfleet = [
      {id: 1, assetId: -1, groupName: 'Fleet', forecastDate: new Date(Date.UTC(2017, 0, 1, 1, 1, 1)), 
       dateCashIn: 200000, dateCashOut: 0, dateCashFlow: 200000, 
       totalCashIn: 1500000, totalCashOut: 800000, totalCashFlow: 700000},
      {id: 2, assetId : -1, groupName: 'Fleet', forecastDate: new Date(2017, 2, 1), 
       dateCashIn: 200000, dateCashOut: 0, dateCashFlow: 200000, 
       totalCashIn: 1700000, totalCashOut: 800000, totalCashFlow: 900000},
      {id: 3, assetId : -1, groupName: 'Fleet', forecastDate: new Date(2017, 3, 1), 
       dateCashIn: 200000, dateCashOut: 500000, dateCashFlow: -300000, 
       totalCashIn: 1900000, totalCashOut: 1300000, totalCashFlow: 600000},
      {id: 4, assetId : -1, groupName: 'Fleet', forecastDate: new Date(2017, 4, 1), 
       dateCashIn: 200000, dateCashOut: 0, dateCashFlow: 200000, 
       totalCashIn: 2100000, totalCashOut: 1300000, totalCashFlow: 800000},       
      {id: 4, assetId : -1, groupName: 'Fleet', forecastDate: new Date(2017, 5, 1), 
       dateCashIn: 200000, dateCashOut: 0, dateCashFlow: 200000, 
       totalCashIn: 2300000, totalCashOut: 1300000, totalCashFlow: 900000},       
      {id: 5, assetId : -1, groupName: 'Fleet', forecastDate: new Date(2017, 6, 1), 
       dateCashIn: 200000, dateCashOut: 0, dateCashFlow: 200000, 
       totalCashIn: 2500000, totalCashOut: 1300000, totalCashFlow: 1100000},       
    ]   

  return {assets, util, agreement, maintRes, cashflowfleet};

  }
}

