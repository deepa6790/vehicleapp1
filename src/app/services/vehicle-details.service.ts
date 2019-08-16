import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { Vehicle } from "../models/Vehicle";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class VehicleDetailsService {
  private _url: string = "https://itg-prd-recruit.appspot.com/";

  constructor(private http: HttpClient) {}

  getVehicleDetails(id: string): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${this._url}/api/vehicle/${id}`);
  }
}
