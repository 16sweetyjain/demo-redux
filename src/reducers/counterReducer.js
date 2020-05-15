const counterReducer=(state=[],action)=>{
    switch(action.type){
        case 'INCREMENT':
          
            return [...state,action.payload];
            
            case 'DECREMENT':
                return [...state.slice(0,action.payload),
                ...state.slice(action.payload+1)
            ];
                default :
                return state;

    }
};

export default counterReducer;