import React,{Component} from 'react';
import {useSelector,useDispatch} from 'react-redux';
import allReducer from './reducers/allReducer';
import {createStore} from 'redux';
import colors from './shared/colors';   
import {increment,decrement} from './actions/counter';
import {Card,CardImg,CardImgOverlay,CardText,CardBody,CardTitle, Button} from 'reactstrap';



const App=(props)=>{
  
  const store=createStore(allReducer);
  const counter=useSelector(state=>state.counter);

  const dispatch=useDispatch();

  const ans=counter[counter.length-1];
//  console.log(ans);
const reqi=colors.filter((colore)=>colore.id<=ans);
  console.log(reqi);


const req=reqi.map((colori)=>{
  return(
  <div>
    <div className="col-12  col-md-5 m-1">
    <Card style={{ backgroundColor: colori.color_id, width: "20%", marginTop: "35px", marginLeft: "35px" }}>
        <CardTitle>
            This is color {colori.id}
        </CardTitle>
    </Card>
</div>
<div className="col-12  col-md-5 m-1">
<button>ADD</button>
  </div>
  <div className="col-12  col-md-5 m-1">
  <button>HIDE</button>
    </div>
    </div>
  );
});

  return (
    <div >

      <button onClick={()=>dispatch(increment())}>ADD </button>
      <button onClick={()=>dispatch(decrement())}>HIDE</button>
      <div>{req}</div>
      </div>

);

    


}

export default App;
