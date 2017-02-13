import { Component, Inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
import { DOCUMENT } from '@angular/platform-browser';
import { MdDialog, MdDialogRef, MdDialogConfig } from '@angular/material';

import { Agreement } from './agreement';
import { AgreementService } from './agreement.service';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: 'src/app/agreement-detail-dialog',  
  selector: 'agreement-detail-dialog',
  templateUrl: 'agreement-detail-dialog.component.html',
  styleUrls: ['././../app.component.css', './dialog.css'],
})
export class AgreementDetailDialog  {
  actionsAlignment: string;

  @Input() agree: Agreement;

  constructor(public dialog: MdDialog) { }
}
