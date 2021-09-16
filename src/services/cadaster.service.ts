  
import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'

@Injectable({providedIn: 'root'})
export class CadasterService {

    main_url = "http://localhost:8090/addclient"

    constructor(private HttpClient:HttpClient) {
        
    }

    cadaster (name: string, phone: string, email: string):Observable<any> {
        
        return this.HttpClient.post(this.main_url, {
            name, tel :phone, email
        })
    }

}