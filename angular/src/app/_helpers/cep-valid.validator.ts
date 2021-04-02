import { FormGroup } from '@angular/forms';

// custom validator to check that two fields match
export function ValidaCEP(controlName: string) {
    return (formGroup: FormGroup) => {
        const control = formGroup.controls[controlName];

        if (control.errors) {
            // return if another validator has already found an error on the matchingControl
            return;
        }

        // set error on matchingControl if validation fails
        if (control.value.length === 8) {
            control.setErrors(null);
        } else {
            control.setErrors({ validaCEP: true });
        }
    }

}