import { Component } from '@angular/core';
import { concatMapTo } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  length = 0;
  password = '';

  onChangeUseLetters() {
    this.includeLetters = !this.includeLetters;
  }

  onChangeUseNumbers() {
    this.includeNumbers = !this.includeNumbers;
  }

  onChangeUseSymbols() {
    this.includeSymbols = !this.includeSymbols;
  }

  onChangeLength(event: any) {
    const parsedValue = parseInt(event.target.value);
    this.length = parsedValue;
  }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*(){}[]=<>/,.';

    let validCahrs = '';


    if(this.includeLetters) {
      validCahrs += letters;
    }
    if (this.includeNumbers) {
      validCahrs += numbers
    }
    if (this.includeSymbols) {
      validCahrs += symbols
    }

    let generatedPassword = ''

    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validCahrs.length)

      generatedPassword += validCahrs[index];
    }

    this.password = generatedPassword;
  }
}
