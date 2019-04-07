import { INCREMENTAR, DECREMENTAR, DIVIDIR, MULTIPLICAR,RESET, actions } from './contador.action';



export function contadorReducer(state:number=10, action: actions){

    switch(action.type){
      case INCREMENTAR:
        return state + 1;
      case DECREMENTAR:
        return state - 1;
      case DIVIDIR:
        return state / action.payload;
      case MULTIPLICAR:
        return state * action.payload;
      case RESET:
        return state = 0;
      default:
        return state;
    }
}
