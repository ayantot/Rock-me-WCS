import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class NasaService {

  constructor(private myService:HttpClient) { }
    public getImage():Observable<string[]>{
<<<<<<< HEAD
      return this.myService.get("https://api.nasa.gov/planetary/apod?api_key=OM7HsZU2VmSA1WUrXHgn1M6MaLZ0fdNhD2PrmRtb").pipe(
=======
      return this.myService.get("https://api.nasa.gov/planetary/apod?api_key=CvJYkTROa4B6lrktDFHrRRG8JcEka1NAk8VVOJeT").pipe(
>>>>>>> 1e6a115850a7b3d1fcc6610f68a2267711fd070e
        map(
          (param_image:any)=> {
            let results:any=[]; 

            results.push(param_image.url)

            return results;
          
          }
        )
      )
  }
}
