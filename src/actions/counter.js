let ind=0;
export const increment=()=>{
return{
    type:'INCREMENT',
    payload:ind++
};
    
};

export const decrement=()=>{
    return {
    type:'DECREMENT',
    payload:ind--
};
};