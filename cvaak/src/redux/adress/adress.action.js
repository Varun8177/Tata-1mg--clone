
import { ADDADRESS } from "./adress.types";

export const useradress=(adress)=>(dispatch)=>{

    dispatch({type:ADDADRESS,payload:adress})

}