import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AssetsComponent }      from './asset/assets.component';
import { AssetDetailComponent } from './asset/asset-detail.component';
import { UtilComponent } from './util/util.component';
import { UtilDetailComponent } from './util/util-detail.component';
import { AssetAgreementComponent } from './agreement/asset-agreement.component';
import { AgreementDetailComponent } from './agreement/agreement-detail.component';
import { MyDialog } from './dialog/mydialog.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'assets',  component: AssetsComponent },
  { path: 'asset/detail/:id', component: AssetDetailComponent },
  { path: 'mydialog', component: MyDialog },
  // { path: 'util', component: UtilComponent },
  // { path: 'util/forAsset/:assetId', component: UtilDetailComponent },
  { path: 'agreement', component: AgreementDetailComponent },
//  { path: 'agreement/detail/:id', component: AssetAgreementComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}