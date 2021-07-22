import React,{Component} from "react"
import "./parking.css"


class Parking extends Component {
  state={
    toggleTwo:false,
    toggleFour:false,
    toggleType:false,
    collect:false,
    count:0,
    red:"",
    colourr:""
    }
  
  handleVehicleType=()=>{
    this.setState({toggleType:!false})
  }
  handleTwoWheeler=()=>{
    this.setState({toggleTwo:!false})
  }
  handleFourWheeler=()=>{
    this.setState({toggleFour:!false})
  }

  handleTwoTickeGenrator=()=>{
    this.setState({red:"red"})
    var count=this.state.count
    this.setState({collect:!false})
    // var red="red"
    if(count<16){
      this.setState({count:count+1})
      //  console.log(this.state.count)
    } else{
      alert("slot is full")
    }
  }
  
  handleClourr=()=>{
    this.setState({colourr:"red"})

  }
  handleStyle=(b)=>{
    console.log(b)
    if(this.state.count==1&&b==1){
      // console.log("111")
      return this.state.red
    }else if(this.state.count==2&&b==2){
      return this.state.red
    }else if(this.state.count==3&&b==3){
      return this.state.red
    }else if(this.state.count==4&&b==4){
      return this.state.red
    }else if(this.state.count==5&&b==5){
      return this.state.red
    }else if(this.state.count==6&&b==6){
      return this.state.red
    }else if(this.state.count==7&&b==7){
      return this.state.red
    }else if(this.state.count==8&&b==8){
      return this.state.red
    }else if(this.state.count==9&&b==9){
      return this.state.red
    }else if(this.state.count==10&&b==10){
      return this.state.red
    }else if(this.state.count==11&&b==11){
      return this.state.red
    }else if(this.state.count==12&&b==12){
      return this.state.red
    }else if(this.state.count==13&&b==13){
      return this.state.red
    }else if(this.state.count==14&&b==14){
      return this.state.red
    }else if(this.state.count==15&&b==15){
      return this.state.red
    }else if(this.state.count==16&&b==16){
      return this.state.red
    }
  }
render() {
  return(
    <div >
      <div  ><div className="square" style={{backgroundColor:"green"}}></div><div className="square"></div></div>
      <div><h1>Parking Lot App</h1></div>
      <div>
        <button onClick={this.handleVehicleType}>Cick To Select Vehicle Type</button>
        {this.state.toggleType&&<div>
        <button onClick={this.handleTwoWheeler}>Two Wheeler</button>
        <button onClick={this.handleFourWheeler}>Four Wheeler</button>
        </div>}
      </div>
        <div>
        </div>
        <div>
          {this.state.toggleTwo&&
          <div>
            <button onClick={this.handleTwoTickeGenrator} >Two Wheeler Ticket Genrator</button>
            {this.state.collect&& <button  > Your Ticket No Is:  {this.state.count} </button>}
            <div className="row">
            <div><div style={{backgroundColor:this.handleStyle(1)}}   className="square"  >1</div><div style={{backgroundColor:this.handleStyle(2)}} className="square" >2</div><div style={{backgroundColor:this.handleStyle(3)}} className="square" >3</div ><div style={{backgroundColor:this.handleStyle(4)}} className="square" >4</div></div>
            <div><div style={{backgroundColor:this.handleStyle(5)}}  className="square"  >5</div><div style={{backgroundColor:this.handleStyle(6)}} className="square" >6</div><div style={{backgroundColor:this.handleStyle(7)}} className="square" >7</div ><div style={{backgroundColor:this.handleStyle(8)}} className="square" >8</div></div>
            <div><div style={{backgroundColor:this.handleStyle(9)}} className="square"  >9</div><div style={{backgroundColor:this.handleStyle(10)}} className="square">10</div><div style={{backgroundColor:this.handleStyle(11)}} className="square" >11</div ><div style={{backgroundColor:this.handleStyle(12)}} className="square" >12</div></div>
            <div><div style={{backgroundColor:this.handleStyle(13)}} className="square" >13</div><div style={{backgroundColor:this.handleStyle(14)}} className="square" >14</div><div style={{backgroundColor:this.handleStyle(15)}} className="square" >15</div ><div style={{backgroundColor:this.handleStyle(16)}} className="square">16</div></div>
            </div>
            </div>}
        </div>
        <div>
         {this.state.toggleFour&& <div>
            <button>Four Wheeler Ticket Genrator</button>
            <div><button className="green" value="1" >1</button><button className="green" value="2">2</button><button className="green" value="3">3</button ><button className="green" value="4">4</button></div>
          <div><button className="green" value="5" >5</button><button className="green" value="6">6</button><button className="green" value="7">7</button ><button className="green" value="8">8</button></div>
          <div><button className="green" value="9" >9</button><button className="green" value="10">1</button><button className="green" value="11">1</button><button className="green" value="12">1</button></div>
          <div><button className="green" value="13" >1</button><button className="green" value="14">1</button><button className="green" value="15">1</button><button className="green" value="16">1</button></div>
          </div>}
        </div>
    </div>
      )
    }
}

export default Parking