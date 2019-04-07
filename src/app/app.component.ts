import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Action } from '@ngrx/store';
import { IncrementarAction, DecrementarAction } from './contador/contador.action';
import { AppState } from './app.reducers';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  contador:number;

  constructor(private store:Store<AppState>){
    this.store.select('contador').subscribe(state => {
      this.contador = state;
      console.log('contador: '+this.contador, 'contador state: '+state)
    });
  }

  incrementar(){
    const accion = new IncrementarAction();
    this.store.dispatch(accion);
  }

  decrementar(){
    const accion = new DecrementarAction();
    this.store.dispatch(accion);
  }

  ngOnInit(): void {
    //De esta manera nos suscribimos a los cambios en la variable que se encuentra en nuestra store

    this.store.select('contador').subscribe(contador =>{
      this.contador = contador;
    })
  }

}
