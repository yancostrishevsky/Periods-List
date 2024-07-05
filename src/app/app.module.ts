import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeriodsComponent } from './periods/periods.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { HeaderComponent } from './header/header.component';
import { SetHeaderPipe } from './pipes/set-header.pipe';
import { BodyComponent } from './body/body.component';
import { ListComponent } from './list/list.component';
@NgModule({
  declarations: [
    AppComponent,
    PeriodsComponent,
    HeaderComponent,
    SetHeaderPipe,
    BodyComponent,
    ListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false, delay: 300 }
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
