import React,{Component} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import allReducer from './reducers/allReducer';
import {createStore} from 'redux';
import colors from './shared/colors';   
import {increment,decrement,changeState,setAdd, unsetAdd} from './actions/counter';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, Button} from 'reactstrap';



const App=(props)=>{
  
  const store=createStore(allReducer);
  const counter=useSelector(state=>state.counter);
  const coolors=useSelector(state=>state.changeReducer);
const visibility=useSelector(state=>state.visibility);

  const dispatch=useDispatch();
const newColors=coolors[coolors.length-1];
const ans=counter[counter.length-1];

// console.log(visibility);
console.log(newColors);
 
let req1;
let req2;

const reqi=colors.filter((colore)=>colore.id<=ans);
 
  req1=reqi.map((colori)=>{
  
  
  return(
    <div>
  <div>
    <div className="col-12  col-md-5 m-1">
    <Card style={{ backgroundColor: colori.color_id, width: "20%", marginTop: "35px", marginLeft: "35px" }}>
        <CardTitle>
            This is color {colori.id}
        </CardTitle>
    </Card>
</div>

  </div>
  <div className="col-12  col-md-5 m-1">
  <button  onClick={()=>{dispatch(changeState(colori.id));dispatch(unsetAdd());dispatch(decrement(colori.id))}}>HIDE</button>
  </div>
    </div>

  );
    
   
});
  

  if(newColors!=undefined){
    req2=newColors.map((colori)=>{
  
      return(
        <div>
      <div>
        <div className="col-12  col-md-5 m-1">
        <Card style={{ backgroundColor: colori.color_id, width: "20%", marginTop: "35px", marginLeft: "35px" }}>
            <CardTitle>
                This is color {colori.id}
            </CardTitle>
        </Card>
    </div>
    
      </div>
      <div className="col-12  col-md-5 m-1">
      <button  onClick={()=>{dispatch(changeState(colori.id));dispatch(unsetAdd());dispatch(decrement(colori.id))}}>HIDE</button>
      </div>
        </div>
    
      );
     
    });
  }
   
 
  



  return (
   
<div>
      <button  onClick={()=>{dispatch(increment());dispatch(setAdd())}}>ADD </button>
   
  
   
  {visibility==true?<div>{req1}</div>:
   <div>{req2}</div>}
  
   </div>

);

    


}

export default App;