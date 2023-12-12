import { AbstractControl, Validators, FormControl } from '@angular/forms';

export class CustomValidator {
    constructor() { }

    static PasswordValidator(control: FormControl) {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!re.test(control.value)) {
            return { 'Invalid Password': true };
        }

        return null;
    }
}