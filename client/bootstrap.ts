import {bootstrap} from 'angular2/platform/browser';
import {provide} from 'angular2/core';
import {ROUTER_PROVIDERS} from 'angular2/router';
import {HTTP_PROVIDERS} from 'angular2/http';

import {HttpUtil} from './core/http.util';
import {AppComponent} from './components/app/app.component';
import {HomeComponent} from './components/home/home.component';
import {OverlayComponent} from './components/overlay/overlay.component';
import {AboutComponent} from './components/about/about.component';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  HttpUtil
]);
