import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { ServicesDiAppComponent, environment } from './app/';
import { LogService } from './app/service';
//import { CmpAComponent } from './cmp-a.component';
//import { CmpBComponent } from './cmp-b.component';
//import  { DataService } from './data.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(ServicesDiAppComponent, [ LogService ]);

