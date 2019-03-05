import { Component } from '@angular/core';
import { ContractService } from './services/contract/contract.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  direccion: string;
  balance: string;
  destinoTransaccion: string;
  monto: string;
  comentario: string;

  constructor(private contract: ContractService){
    contract.verInformacionCuenta().then(value => {
      this.direccion = value.cuentaOrigen;
      this.balance = value.balance;
      console.log(value);
    });
  }

  transferirEther(e){
    console.log('Transfiriendo');
    this.contract.transferirEther(this.direccion, this.destinoTransaccion, this.monto, this.comentario);
  }
}
