// Keep the Input import for now, we'll remove it later:
import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import {DOCUMENT} from '@angular/platform-browser';
import {MdDialog, MdDialogRef, MdDialogConfig} from '@angular/material';


import { Agreement } from './agreement';
import { AgreementService } from './agreement.service';
import { AgreementDetailDialog } from './agreement-detail-dialog.component';

import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: 'src/app/asset-agreement.component',  
  selector: 'asset-agreements',
  templateUrl: './asset-agreement.component.html',
  styleUrls: ['././../app.component.css', './dialog.css', './asset-agreement.component.css']
})

export class AssetAgreementComponent implements OnInit {

//  dialogRef: MdDialogRef<JazzDialog>;
  lastCloseResult: string;
  actionsAlignment: string;
  config: MdDialogConfig = {
    disableClose: false,
    width: '',
    height: '',
    position: {
      top: '',
      bottom: '',
      left: '',
      right: ''
    }
  };

  agreements: Agreement[];
  tmpMessage : string = '';

    constructor(
        private agreeService: AgreementService,
        private route: ActivatedRoute,
        private location: Location,
        public dialog: MdDialog, 
        @Inject(DOCUMENT) doc: any
        ) {}

    ngOnInit(): void {
    this.route.params
        .switchMap((params: Params) => this.agreeService.getAgreementsForAsset(this.assetId))
        //.switchMap((params: Params) => this.agreeService.getAgreements())
        .subscribe(agree => this.agreements = agree);
    }

    goBack(): void {
        this.location.back();
        }

    doSomething(): void {
        //this.location.back();
        this.tmpMessage = 'Clicked ';
        }        

    gotoAgreementDetail(agreement: Agreement): void {
        if (agreement == null)
          this.tmpMessage = 'Clicked NULL';
        else
          this.tmpMessage = 'Clicked '+ agreement.id.toString();

    let dialogRef = this.dialog.open(AgreementDetailDialog, this.config);

    let instance = dialogRef.componentInstance;

    instance.agree = agreement;

    dialogRef.componentInstance.actionsAlignment = this.actionsAlignment;          
     }

  tmpAgree : Agreement;
  
    openContentElement() {
    let dialogRef = this.dialog.open(AgreementDetailDialog, this.config);

    let instance = dialogRef.componentInstance;


// this.dialog.open(StandardDialog, config)
//          .then(res => {
//             this.dialogRef = res;
//             this.dialogRef.componentInstance.title = title;
//             this.dialogRef.componentInstance.contents = contents;
//          });

// var subscription = Observable.fromPromise(this.agreeService.getAgreement(1));
// subscription.subscribe(agree => this.tmpAgree = agree);    

  let tmpAgree = new Agreement();
  tmpAgree.assetId = 1;
  tmpAgree.id = 1;
  tmpAgree.lessee = 'Lessee';
  tmpAgree.lessor = 'Lessor';

    instance.agree = tmpAgree;

    dialogRef.componentInstance.actionsAlignment = this.actionsAlignment;
  }

   @Input() assetId: number;
}


// @Component({
//   selector: 'demo-jazz-dialog',
//   template: `
//   <p>It's Jazz!</p>
//   <p><label>How much? <input #howMuch></label></p>
//   <p> {{ jazzMessage }} </p>
//   <button type="button" (click)="dialogRef.close(howMuch.value)">Close dialog</button>`
// })
// export class JazzDialog {
//   jazzMessage = 'Jazzy jazz jazz';

//   constructor(public dialogRef: MdDialogRef<JazzDialog>) { }
// }


// @Component({
//   selector: 'demo-content-element-dialog',
//   styles: [
//     `img {
//       max-width: 100%;
//     }`
//   ],
//   template: `
//     <h2 md-dialog-title>Agreement Details</h2>

//     <md-dialog-content>
//       <p>Lessor: {{agree.lessor}}</p>
//       <p>Lessee: {{agree.lessee}}</p>
//     </md-dialog-content>

//     <md-dialog-actions [attr.align]="actionsAlignment">
//       <button
//         md-raised-button
//         color="primary"
//         md-dialog-close>Close</button>

//       <a
//         md-button
//         color="primary"
//         href="https://en.wikipedia.org/wiki/Neptune"
//         target="_blank">Open in new window</a>
     

//     </md-dialog-actions>
//   `
// })
// export class AgreementDetailDialog  {
//   actionsAlignment: string;

//   @Input() agree: Agreement;

//   constructor(public dialog: MdDialog) { }

//   showInStackedDialog() {
//     this.dialog.open(IFrameDialog);
//   }
// }

// @Component({
//   selector: 'demo-iframe-dialog',
//   styles: [
//     `iframe {
//       width: 800px;
//     }`
//   ],
//   template: `
//     <h2 md-dialog-title>Neptune</h2>

//     <md-dialog-content>
//       <iframe frameborder="0" src="https://en.wikipedia.org/wiki/Neptune"></iframe>
//     </md-dialog-content>

//     <md-dialog-actions>
//       <button
//         md-raised-button
//         color="primary"
//         md-dialog-close>Close</button>
//     </md-dialog-actions>
//   `
// })
// export class IFrameDialog {
// }
