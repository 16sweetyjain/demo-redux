import { act } from "react-dom/test-utils"

 const visibility=(state=true,action)=>{
    switch(action.type){
        case 'SET':
            return true;
            case 'UNSET':
                return false;
                default:return state

    };
};

export default visibility;