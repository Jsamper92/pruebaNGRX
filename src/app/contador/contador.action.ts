import { Action } from '@ngrx/store';


export const INCREMENTAR = '[Contador] INCREMENTAR';
export const DECREMENTAR = '[Contador] DECREMENTAR';
export const MULTIPLICAR = '[Contador] MULTIPLICAR';
export const DIVIDIR = '[Contador] DIVIDIR';
export const RESET = '[Contador] RESET';


//Archivo donde iran alojadas nuestras acciones

export class IncrementarAction implements Action {
    readonly type = INCREMENTAR;
}


export class DecrementarAction implements Action {
  readonly type = DECREMENTAR;
}

export class MultiplicarAction implements Action {
  readonly type = MULTIPLICAR;
  constructor( public payload:number){

  }
}
export class DividirAction implements Action {
  readonly type = DIVIDIR;
  constructor(public payload:number){
  }
}


export class Reset implements Action {
  readonly type = RESET;
}

export type actions = IncrementarAction | DecrementarAction | MultiplicarAction | DividirAction | Reset;

