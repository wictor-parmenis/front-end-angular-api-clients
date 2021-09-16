import { Component } from '@angular/core';
import { CadasterService } from 'src/services/cadaster.service';
import { NgForm, FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'front-end-api-calcme'


  constructor (private registerService: CadasterService) {
  }

    cadaster(form: NgForm) {
      console.log(form.value);

        this.registerService.cadaster(form.value.name,  form.value.phone, form.value.email).subscribe((res) => {
          alert('registrado com sucesso.')
          console.log(res)
          
          
        }, (error) => {
          console.log(error);
          alert('Ops, houve algum erro no seu registro.')
          
        })
      

      
    }

  
}
