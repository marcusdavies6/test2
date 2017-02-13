// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { Agreement } from './agreement';
import { AgreementService } from './agreement.service';

import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: 'src/app/agreement-detail.component',  
  selector: 'agreement-detail',
  templateUrl: './agreement-detail.component.html',
  styleUrls: ['././../app.component.css']
})

export class AgreementDetailComponent implements OnInit {

  agreement: Agreement;

    constructor(
        private agreeService: AgreementService,
        private route: ActivatedRoute,
        private location: Location
        ) {}

    ngOnInit(): void {
    this.route.params
        //.switchMap((params: Params) => this.agreeService.getAgreementsForAsset(this.assetId))
        .switchMap((params: Params) => this.agreeService.getAgreement(1))
        .subscribe(agree => this.agreement = agree);
    }

    goBack(): void {
        this.location.back();
        }

    // save(): void {
    //     this.assetService.update(this.hero)
    //         .then(() => this.goBack());
    // }



  @Input() agreementId: number;
}
