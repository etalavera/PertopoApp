import { Directive } from '@angular/core';
import { FormControl, Validators } from '@angular/forms'; 

const letters = /^[A-Za-z]+$/;
const lettersWihtSpaces = /^[A-Za-z ]+$/;
const numbersOnly = /^[0-9]*$/;
let count: number = 0;


@Directive({
  selector: '[appValidaciones]'
})
export class ValidacionesDirective {

  constructor() { }

  static validateOnlyLetters(control: FormControl) {
    let newControlValue: string = '';
    if (control.value && control.value.length > 0)
    {
      const controlValueArray = control.value.split('');
      for (let i=0; i<controlValueArray.length; i ++) {
        if (!controlValueArray[i].match(letters)) {
          delete controlValueArray[i];
          count = 0;
        }
        newControlValue = controlValueArray.join('');
      }
      if (count == 0) 
      {
        count ++;
        control.patchValue(newControlValue);
      }
      return;
    }
  }

  static validateOnlyLettersWithSpaces(control: FormControl) {
    let newControlValue: string = '';
    if (control.value && control.value.length > 0)
    {
      const controlValueArray = control.value.split('');
      for (let i=0; i<controlValueArray.length; i ++) {
        if (!controlValueArray[i].match(lettersWihtSpaces)) {
          delete controlValueArray[i];
          count = 0;
        }
        newControlValue = controlValueArray.join('');
      }
      if (count == 0) 
      {
        count ++;
        control.patchValue(newControlValue);
      }
      return;
    }
  }

  static validateOnlyNumbers(control: FormControl) {
    let newControlValue: string = '';
    if (control.value && control.value.length > 0)
    {
      const controlValueArray = control.value.split('');
      for (let i=0; i<controlValueArray.length; i ++) {
        if (!controlValueArray[i].match(numbersOnly)) {
          delete controlValueArray[i];
          count = 0;
        }
        newControlValue = controlValueArray.join('');
      }
      if (count == 0) 
      {
        count ++;
        control.patchValue(newControlValue);
      }
      return;
    }
  }

}
