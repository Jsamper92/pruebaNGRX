import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.reducers';
import { DividirAction, MultiplicarAction, Reset } from '../contador/contador.action';

@Component({
  selector: 'app-contador-hijo',
  templateUrl: './contador-hijo.component.html',
  styleUrls: ['./contador-hijo.component.sass']
})
export class ContadorHijoComponent implements OnInit {
  contador:number;
  constructor(private store: Store<AppState>) {

   }

  dividir(){
    const accion = new DividirAction(5);
    this.store.dispatch(accion);
  }

  multiplicar(){
    const accion = new MultiplicarAction(5);
    this.store.dispatch(accion);
  }

  reset(){
    const accion = new Reset();
    this.store.dispatch(accion);
  }

  ngOnInit() {
    this.store.select('contador').subscribe(contador =>{
      this.contador = contador;
    });
  }

}
