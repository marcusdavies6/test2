import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-chartjs';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

//Application components
import { MainMenuComponent }    from './main-menu/main-menu.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { AssetsComponent }      from './asset/assets.component';
import { AssetDetailComponent } from './asset/asset-detail.component';
import { UtilComponent } from './util/util.component';
import { UtilDetailComponent } from './util/util-detail.component';
import { AssetAgreementComponent } from './agreement/asset-agreement.component';
import { AgreementDetailDialog } from './agreement/agreement-detail-dialog.component';
import { AgreementDetailComponent } from './agreement/agreement-detail.component';

import { JazzDialog, ContentElementDialog, IFrameDialog, MyDialog } from './dialog/mydialog.component';

//Services
import { AssetService }         from './asset/asset.service';
import { UtilService }          from './util/util.service';
import { AgreementService }     from './agreement/agreement.service';
import { ForecastService }      from './forecasting/forecast.service';


@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    DashboardComponent,
    AssetsComponent,
    AssetDetailComponent,
    UtilComponent,
    UtilDetailComponent,
    AssetAgreementComponent,
    AgreementDetailDialog,
    AgreementDetailComponent,
        JazzDialog,
    ContentElementDialog,
    MyDialog,    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ChartModule,
    MaterialModule.forRoot(),
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule
  ],
  providers: [
    AssetService, 
    UtilService, 
    AgreementService,
    ForecastService,
  ],
  entryComponents: [
    AgreementDetailDialog
  ],  
  bootstrap: [AppComponent]
})
export class AppModule { }

