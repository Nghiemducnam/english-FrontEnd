import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import {ToastrModuleConfig} from './toastr/toastr.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {LayoutModule} from './layout/layout.module';
import {httpInterceptorProviders} from './auths/interceptors/AuthInterceptor';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    // AuthModule,
    ToastrModuleConfig,
    BrowserAnimationsModule,
    LayoutModule,
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
