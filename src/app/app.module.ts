import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule,routingcomponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';

import{NgxUiLoaderConfig,NgxUiLoaderService,NgxUiLoaderModule,PB_DIRECTION,SPINNER} from 'ngx-ui-loader';


const ngxUiLoaderConfig: NgxUiLoaderConfig={
 text :'Loading...',
  textColor:'white',
  bgsColor:"blue",
  textPosition:"center-center",
  pbColor:"blue",
  fgsColor:"blue",
  pbThickness:5,
  fgsType:SPINNER.ballSpinClockwise,
  fgsSize:100,
  pbDirection:"ltr"
}
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
   
    NgxUiLoaderModule.forRoot(ngxUiLoaderConfig),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
