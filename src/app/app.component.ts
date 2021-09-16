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
  cadasterForm = new FormGroup({
    email: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    tel: new FormControl('', Validators.required)
  })

  constructor (private registerService: CadasterService) {
  }

  get email() {
    return this.cadasterForm.get('email')
  }

  get name() {
    return this.cadasterForm.get('name')
  }

  get tel() {
    return this.cadasterForm.get('tel')
  }


    onSubmit() {
        const email = this.cadasterForm.get('email')
        const tel = this.cadasterForm.get('tel')
        const name = this.cadasterForm.get('name')
        const valid = this.cadasterForm.valid 

        console.log(name, tel, email);
        console.log(this.cadasterForm.get('email')?.value);

        if (valid) {
          this.registerService.cadaster(name?.value,  tel?.value, email?.value).subscribe((res) => {
            alert('registrado com sucesso.')            
            this.cadasterForm.reset()

          }, (error) => {
            console.log(error);
            alert('Ops, houve algum erro no seu registro.')
            this.cadasterForm.reset()

            
          })
        } 


        

      

      
    }

  
}
