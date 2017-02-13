
import { Util } from './util';

// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { UtilService } from './util.service';

import 'rxjs/add/operator/switchMap';


@Component({
  moduleId: 'src/app/util-detail.component',  
  selector: 'util-detail',
  templateUrl: './util-detail.component.html',
  styleUrls: ['././../app.component.css', './util-detail.component.css']
})

export class UtilDetailComponent implements OnInit {

  util: Util[];

    constructor(
        private utilService: UtilService,
        private route: ActivatedRoute,
        private location: Location
        ) {}

    ngOnInit(): void {
    this.route.params
//        .switchMap((params: Params) => this.utilService.getUtilForAsset(+params['assetId']))
        .switchMap((params: Params) => this.utilService.getUtilForAsset(this.assetId))
        .subscribe(util => this.util = util);
    }

    goBack(): void {
        this.location.back();
        }

    // save(): void {
    //     this.assetService.update(this.hero)
    //         .then(() => this.goBack());
    // }



  @Input() assetId: number;
}
