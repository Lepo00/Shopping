import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StoreModule } from '@ngrx/store';
import { reducers } from './redux';

import { environment } from 'src/environments/environment';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { CartEffects } from './redux/cart/cart.effects';
import { HttpClientModule } from '@angular/common/http';
import { HttpCommunicationsService } from './core/services/http-communications.service';
import { UserEffects } from './redux/user/user.effects';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShippingEffects } from './redux/shipping/shipping.effects';
import { PaymentEffects } from './redux/payment/payment.effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CartEffects, UserEffects,ShippingEffects, PaymentEffects]),
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    HttpClientModule,
    BrowserAnimationsModule,
    StoreRouterConnectingModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
