
const colors=[
  {
  id:'1',color_id:'	#ff4000',visible:true
  },
  {

      id:'2',color_id: '#00ff00',visible:true
  },
  {
   
      id:'3',color_id:'	#00ffff' ,visible:true
  },
  {

      id:'4',color_id:' 	#8000ff',visible:true
  },
  {

     id:'5', color_id:'#bfff00',visible:true
  }
]
;


const changeReducer=(state=[],action)=>{
  switch(action.type){
  case 'HIDE':
    let newColors=colors.filter(color=>color.id!==action.id&&color.id<action.index);
  // console.log(newColors);
return [...state,newColors];
case 'DECREMENT':
  return [...state.slice(0,action.payload),
  ...state.slice(action.payload+1)];


default :
return state;

};


};
export default changeReducer;