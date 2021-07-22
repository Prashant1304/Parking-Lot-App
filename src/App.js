import React,{Component} from "react"
import "./parking.css"


class Parking extends Component {
  state={
    toggleTwo:false,
    toggleFour:false,
    toggleType:false,
    collect:false,
    collect2:false,
    count:0,
    count2:0,
    red:"",
    red2:""
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

  handleTwoTickeGenrator=(a)=>{
    this.setState({red:"orange"})
    console.log(a.target.className)
    var count=this.state.count
    this.setState({collect:!false})
    if(count<16){
      this.setState({count:count+1})
      //  console.log(this.state.count)
    } else{
      alert("slot is full")
    }
  }

  handleFourTickeGenrator=()=>{
    this.setState({red2:"orange"})
    var count=this.state.count2
    this.setState({collect2:!false})
    if(count<16){
      this.setState({count2:count+1})
    } else{
      alert("slot is full")
    }
  }

  handleClassName=(e)=>{
    var neww = e.target.className="yzx"
    this.setState({red:"red"})
    console.log(neww)
  }

  handleClassName2=(e)=>{
    var neww = e.target.className="yzx"
    this.setState({red2:"red"})
    console.log(neww)
  }

  handleStyle=(b)=>{
    if(this.state.count==1&&b==1){
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
  handleStyle2=(c)=>{
    if(this.state.count2==1&&c==1){
      return this.state.red2
    }else if(this.state.count2==2&&c==2){
      return this.state.red2
    }else if(this.state.count2==3&&c==3){
      return this.state.red2
    }else if(this.state.count2==4&&c==4){
      return this.state.red2
    }else if(this.state.count2==5&&c==5){
      return this.state.red2
    }else if(this.state.count2==6&&c==6){
      return this.state.red2
    }else if(this.state.count2==7&&c==7){
      return this.state.red2
    }else if(this.state.count2==8&&c==8){
      return this.state.red2
    }else if(this.state.count2==9&&c==9){
      return this.state.red2
    }else if(this.state.count2==10&&c==10){
      return this.state.red2
    }else if(this.state.count2==11&&c==11){
      return this.state.red2
    }else if(this.state.count2==12&&c==12){
      return this.state.red2
    }else if(this.state.count2==13&&c==13){
      return this.state.red2
    }else if(this.state.count2==14&&c==14){
      return this.state.red2
    }else if(this.state.count2==15&&c==15){
      return this.state.red2
    }else if(this.state.count2==16&&c==16){
      return this.state.red2
    }
  }

render() {
  return(
    <div >
      <div className="header"><h1>Parking Lot App</h1></div>
      <div className="vehicle">
        <button className="butt" onClick={this.handleVehicleType}>Cick To Select Vehicle Type</button>
        {this.state.toggleType&&<div>
        <button className="butt" onClick={this.handleTwoWheeler}>Two Wheeler</button>
        <button className="butt" onClick={this.handleFourWheeler}>Four Wheeler</button>
        </div>}
      </div>
        <div>
        </div>
        <div>
          {this.state.toggleTwo&&
          <div className="twoWheel">
            <button className="butt" onClick={this.handleTwoTickeGenrator}  >Two Wheeler Ticket Genrator</button>
            {this.state.collect&& <button className="butt"  > Please Click on Plot No :  {this.state.count} To Occupy it </button>}
            <div className="row">
            <div><div onClick={this.handleClassName} style={{backgroundColor:this.handleStyle(1)}}    className="square" >Plot 1</div><div onClick={this.handleClassName} style={{backgroundColor:this.handleStyle(2)}} className="square" >Plot 2</div><div onClick={this.handleClassName} style={{backgroundColor:this.handleStyle(3)}} className="square" >Plot 3</div ><div onClick={this.handleClassName}  style={{backgroundColor:this.handleStyle(4)}} className="square" >Plot 4</div></div>
            <div><div onClick={this.handleClassName} style={{backgroundColor:this.handleStyle(5)}}  className="square"  >Plot 5</div><div onClick={this.handleClassName} style={{backgroundColor:this.handleStyle(6)}} className="square" >Plot 6</div><div   onClick={this.handleClassName} style={{backgroundColor:this.handleStyle(7)}} className="square" >Plot 7</div ><div    onClick={this.handleClassName} style={{backgroundColor:this.handleStyle(8)}} className="square" >Plot 8</div></div>
            <div><div onClick={this.handleClassName} style={{backgroundColor:this.handleStyle(9)}} className="square"  >Plot 9</div><div  onClick={this.handleClassName} style={{backgroundColor:this.handleStyle(10)}} className="square">Plot 10</div><div  onClick={this.handleClassName} style={{backgroundColor:this.handleStyle(11)}} className="square" >Plot 11</div ><div  onClick={this.handleClassName} style={{backgroundColor:this.handleStyle(12)}} className="square" >Plot 12</div></div>
            <div><div onClick={this.handleClassName} style={{backgroundColor:this.handleStyle(13)}} className="square" >Plot 13</div><div onClick={this.handleClassName} style={{backgroundColor:this.handleStyle(14)}} className="square" >Plot 14</div><div onClick={this.handleClassName}  style={{backgroundColor:this.handleStyle(15)}} className="square" >Plot 15</div ><div onClick={this.handleClassName} style={{backgroundColor:this.handleStyle(16)}} className="square">Plot 16</div></div>
            </div>
            </div>}
        </div>
        <div>
         {this.state.toggleFour&& 
         <div className="fourWheel">
            <button onClick={this.handleFourTickeGenrator} className="butt" >Four Wheeler Ticket Genrator</button>
            {this.state.collect2&& <button className="butt" > Please Click on Plot No :  {this.state.count2} To Occupy it </button>}
            <div className="row1">
            <div><div onClick={this.handleClassName2} style={{backgroundColor:this.handleStyle2(1)}}    className="square">Plot 1</div><div onClick={this.handleClassName2} style={{backgroundColor:this.handleStyle2(2)}} className="square" >Plot 2</div><div onClick={this.handleClassName2}   style={{backgroundColor:this.handleStyle2(3)}} className="square" >Plot 3</div ><div onClick={this.handleClassName2}    style={{backgroundColor:this.handleStyle2(4)}} className="square" >Plot 4</div></div>
            <div><div onClick={this.handleClassName2} style={{backgroundColor:this.handleStyle2(5)}}  className="square"  >Plot 5</div><div onClick={this.handleClassName2} style={{backgroundColor:this.handleStyle2(6)}} className="square" >Plot 6</div><div   onClick={this.handleClassName2} style={{backgroundColor:this.handleStyle2(7)}} className="square" >Plot 7</div ><div    onClick={this.handleClassName2} style={{backgroundColor:this.handleStyle2(8)}} className="square" >Plot 8</div></div>
            <div><div onClick={this.handleClassName2} style={{backgroundColor:this.handleStyle2(9)}} className="square"  >Plot 9 </div><div  onClick={this.handleClassName2} style={{backgroundColor:this.handleStyle2(10)}} className="square">Plot 10</div><div  onClick={this.handleClassName2} style={{backgroundColor:this.handleStyle2(11)}} className="square" >Plot 11</div ><div  onClick={this.handleClassName2} style={{backgroundColor:this.handleStyle2(12)}} className="square" >Plot 12</div></div>
            <div><div onClick={this.handleClassName2} style={{backgroundColor:this.handleStyle2(13)}} className="square" >Plot 13</div><div onClick={this.handleClassName2} style={{backgroundColor:this.handleStyle2(14)}} className="square" >Plot 14</div><div onClick={this.handleClassName2} style={{backgroundColor:this.handleStyle2(15)}} className="square" >Plot 15</div ><div onClick={this.handleClassName2}  style={{backgroundColor:this.handleStyle2(16)}} className="square">Plot 16</div></div>
            </div>
            </div>}
        </div>
        <div className="detail" ><div className="divv"  style={{backgroundColor:"greenyellow"}} >Plot is empty</div><div className="divv" style={{backgroundColor:"orange"}} >Ticket is placed for selected Plot </div> <div className="divv" style={{backgroundColor:"red"}}>Plot is boocked</div> </div>
    </div>
      )
    }
}

export default Parking