import { Component, Input, OnInit } from '@angular/core';

import { Util } from './util';
import { UtilService } from './util.service';

import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import 'rxjs/add/operator/switchMap';

@Component({
  moduleId: 'src/app/util.component',      
  selector: 'util',
  templateUrl: './util.component.html',
  styleUrls: ['./../app.component.css'],
  providers: [UtilService]
}) 

export class UtilComponent implements OnInit {
  util: Util[];
  assetId : number;



  constructor(
    private utilService: UtilService,
    private route: ActivatedRoute,
    private location: Location
  ) { }

  getAllUtil(): void {
    this.utilService.getUtil().then(util => this.util = util);
  }
  getUtilForAsset(): void {
    this.utilService.getUtilForAsset(1).then(util => this.util = util);
  }

//   ngOnInit(): void {
//     this.getUtilForAsset();
//   }

    ngOnInit(): void {

    this.route.params
        .switchMap((params: Params) => this.utilService.getUtil())
        .subscribe(util => this.util = util);
    }  

}
