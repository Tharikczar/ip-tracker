import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
apikey = 'at_tPfb513JmhvlpDs6zn8duHjd8KjjJ';
  constructor(private http: HttpClient) { }

  getIP(ipaddress:any){
    let url = `https://geo.ipify.org/api/v2/country,city?apiKey=${this.apikey}&ipAddress=${ipaddress}`
    return this.http.get<any>(`${url}`)
  }
}
