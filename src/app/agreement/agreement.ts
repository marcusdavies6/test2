export class Agreement {
  id : number;
  assetId : number;
  parentAgreementId : number;
  startDate : Date;
  endDate : Date;
  lessor : string;
  lessee : string;
}