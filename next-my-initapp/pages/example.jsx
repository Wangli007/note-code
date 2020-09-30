
import { connect } from 'react-redux';
const Index = (porps)=>{
    const {counter,username} = porps;
    return (
        <div>
            <div>number:{counter}</div>
            <div>name:{username}</div>
            <button onClick={()=>porps.Add(3)}>clike me +3</button>
        </div>
    )
}

function mapStateToProps(state) {
    return {
      counter: state.counter.count,
      username: state.user.username
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      Add: (num) => {
        dispatch({ type: 'ADD', num })
      }
    }
  }

export default connect(mapStateToProps,mapDispatchToProps)(Index);