import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppComponent } from "./app.component";
import { VehicleListComponent } from "./components/vehicle-list/vehicle-list.component";
import { VehiclesService } from "./services/vehicles.service";

@NgModule({
  declarations: [AppComponent, VehicleListComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [VehiclesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
