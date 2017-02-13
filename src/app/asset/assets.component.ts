import { Component, OnInit } from '@angular/core';
import { Asset } from './asset';
import { AssetService } from './asset.service';
import { Router }   from '@angular/router';

@Component({
  selector: 'assets',
  templateUrl: './assets.component.html',
  styleUrls: ['./../app.component.css'],
  providers: [AssetService]
}) 

export class AssetsComponent implements OnInit {
  assets: Asset[];
  selectedAsset: Asset;

  constructor(
    private assetService: AssetService,
    private router: Router
  ) { }

  getAssets(): void {
    this.assetService.getAssets().then(assets => this.assets = assets);
  }

  gotoDetail(asset: Asset): void {
    this.router.navigate(['/asset/detail', asset.id]);
  }

  ngOnInit(): void {
    this.getAssets();
  }

  onSelect(asset: Asset): void {
    this.selectedAsset = asset;
  }

  // add(name: string): void {
  //       name = name.trim();
  //       if (!name) { return; }
  //       this.heroService.create(name)
  //           .then(hero => {
  //           this.heroes.push(hero);
  //           this.selectedHero = null;
  //     });
  // }

  // delete(hero: Hero): void {
  //   this.heroService
  //       .delete(hero.id)
  //       .then(() => {
  //         this.heroes = this.heroes.filter(h => h !== hero);
  //         if (this.selectedHero === hero) { this.selectedHero = null; }
  //       });
  // }

}
