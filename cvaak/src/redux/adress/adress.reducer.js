import { ADDADRESS } from "./adress.types"


const initialstate={
        name:"",
        actualadress:"",
        state:"",
        city:"",
        mobile:"",
        pin:""
}
const adressReducer=(state=initialstate,{type,payload})=>{

    switch(
        type 
    ){
        case ADDADRESS: 
        return{...state,name:payload.name,
            actualadress:payload.actualadress,
            state:payload.state,
            city:payload.city,
            mobile:payload.mobile,
            pin:payload.pin
        }
        default:
            return state
    }
}
export default adressReducer