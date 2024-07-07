import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InMemoryDataService } from './services/in-memory-data.service';
import { HttpClientModule } from '@angular/common/http';
import { ColumnComponent } from './column/column.component';
import { TableApiProviderComponent } from './table-api-provider/table-api-provider.component';
import { CustomTableComponent } from './custom-table/custom-table.component';
@NgModule({
  declarations: [
    AppComponent,
    ColumnComponent,
    TableApiProviderComponent,
     CustomTableComponent
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
