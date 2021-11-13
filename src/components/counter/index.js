import {connect} from 'react-redux';

const Counter =(props)=>{
    return <div>Value :{props.count} 
           <br/><button onClick={()=>props.increaseCounter()}>Increment</button>
           <button onClick={()=>props.decreaseCounter()}>Decrement</button>
           </div>
}

const mapStateToProps=(state)=>{
   return{
       count:state.counter.count
   }
}


const mapDispatchToState=(dispatch)=>{
    return{
        increaseCounter:()=>dispatch({type:"INCREMENT_ACTION"}),
        decreaseCounter:()=>dispatch({type:"DECREMENT_ACTION"})
    }
}

export default connect(mapStateToProps,mapDispatchToState)(Counter);