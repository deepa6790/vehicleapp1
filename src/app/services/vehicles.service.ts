import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Vehicle } from "../models/Vehicle";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class VehiclesService {
  private _url: string = "https://itg-prd-recruit.appspot.com/";

  constructor(private http: HttpClient) {}

  getVehicleList(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this._url}/api/vehicles/`);
  }
}
