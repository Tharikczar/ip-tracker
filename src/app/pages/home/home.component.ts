import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { GoogleMapsModule } from '@angular/google-maps';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, GoogleMapsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  response: any;

  constructor(private apiService: ApiService) { }
  value: any;
  form: FormGroup | any;
  lat!: number;
  long!: number;
  zoom: number = 5;
  map: any
  ngOnInit(): void {
    this.form = new FormGroup({
      ipAddress: new FormControl('', Validators.required)
    })
  }



  getIpAddress() {
    console.log(this.value)
    let value = this.form.value.ipAddress;
    this.apiService.getIP(value).subscribe((data: any) => {
      this.response = data;
      this.lat = this.response?.location?.lat;
      this.long = this.response?.location?.lng;
      console.log(this.lat, this.long, this.response)


      const myLatlng = {
        lat: this.response?.location?.lat,
        lng: this.response?.location?.lng
      }
      // map view
      this.map = new google.maps.Map(document.getElementById("map")!, {
        zoom: 10,
        center: myLatlng,
      });
      // marker 
      const marker = new google.maps.Marker({
        position: myLatlng,
        map: this.map
      })
      // info window
      let infoWindow = new google.maps.InfoWindow({
        content: "Ip" + this.response?.ip,
        position: myLatlng,
      });

      infoWindow.open(this.map);

    })
    console.log(this.lat, this.long, this.response)


  }

}
