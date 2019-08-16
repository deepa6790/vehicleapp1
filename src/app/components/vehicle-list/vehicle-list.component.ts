import { Component, OnInit } from "@angular/core";
import { VehiclesService } from "../../services/vehicles.service";
import { VehicleDetailsService } from "../../services/vehicle-details.service";

@Component({
  selector: "app-vehicle-list",
  templateUrl: "./vehicle-list.component.html",
  styleUrls: ["./vehicle-list.component.less"]
})
export class VehicleListComponent implements OnInit {
  public vehicles = [];
  public vehicle_details = [];
  public vehicle_details_array = [];
  constructor(
    private vehiclesService: VehiclesService,
    private vehicleDetailService: VehicleDetailsService
  ) {}

  ngOnInit() {
    this.vehiclesService.getVehicleList().subscribe(data => {
      this.vehicles = data;
      this.vehicles.map(e => {
        this.GetVehicleData(e.id);
      });
    });
  }
  GetVehicleData(vehicleId: string) {
    this.vehicleDetailService.getVehicleDetails(vehicleId).subscribe(data => {
      this.vehicle_details = data;
      this.vehicle_details_array.push(this.vehicle_details);
    });
  }
}
