import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  direccion = '0x23a9df4g87w23hgsdf987234234';
  balance = 1002937.90;
  destinoTransaccion = '';
  monto = 0;
  comentario = '';

  transferirEther(e){
    console.log(this.destinoTransaccion);
  }
}
