let ind=1;

export const increment=()=>{
return{
    type:'INCREMENT',
    payload:ind++
};
    
};

export const decrement=(i)=>{
    return{
        type:'DECREMENT',
        payload:i
    };
        
    };



export const changeState=(id)=>{
    return{
        type:'HIDE',
    id,index:ind
    
    };
};

export const setAdd=()=>{
    return{type:'SET'
  
};
};
export const unsetAdd=()=>{
    return{type:'UNSET'
  
};
};





