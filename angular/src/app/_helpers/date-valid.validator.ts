import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function ValidaDate(controlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];

        if (control.errors) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (validateDate(control.value)) {
            control.setErrors(null);
        } else {
            control.setErrors({ validaDate: true });
        }
    }

}

  
    function validateDate(dateBR){

      if (dateBR === null) return false;

      let dia = dateBR.substring(0,2);
      let mes = dateBR.substring(2,4);
      let ano = dateBR.substring(4,8);

      let dataEN = `${ano}-${mes}-${dia}`;

      var regex = new RegExp("([0-9]{4}[-](0[1-9]|1[0-2])[-]([0-2]{1}[0-9]{1}|3[0-1]{1})|([0-2]{1}[0-9]{1}|3[0-1]{1})[-](0[1-9]|1[0-2])[-][0-9]{4})");
      return regex.test(dataEN);
    }
  
