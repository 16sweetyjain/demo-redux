let ind=1;

export const increment=()=>{
return{
    type:'INCREMENT',
    payload:ind++
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





