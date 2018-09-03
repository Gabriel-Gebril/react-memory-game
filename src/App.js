import React, { Component } from 'react';
import './App.css';
import MemCell from './MemCell';
import Nav from './Nav';

function shuffle(a) {
  for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

class App extends Component {
  constructor(props){
    super(props);

    let colors = Array(16).fill().map((e,i)=>{
      if((i+1)%2){
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return("rgb("+r+","+g+","+b+ ")");
      }else{
        return ("");
      }
    });
    colors = colors.map((e,i,array)=>{
      if((i+1)%2 === 0){
        return (array[i-1])
      }else{
        return(e)
      }
    });
    colors = shuffle(colors);

    this.state = {
      show : Array(16).fill().map(()=>{
        return (false)
      }),
      colors : colors,
      prevC : "",
      prevId : "",
      counter : 0,
      noClick : false
    }

    this.mcHandleClick = this.mcHandleClick.bind(this);
    this.navClick = this.navClick.bind(this);
  }  

  mcHandleClick(id){
    
    let nC = this.state.show.slice();
    if(this.state.noClick || nC[id]){
      return;
    }
    nC[id] = true;
    if ((this.state.prevC === this.state.colors[id]) && (this.state.prevId !== id)){
      
      this.setState((prevState)=>{
        return {show:nC,counter : prevState.counter + 1,prevC:"",prevId:""}
      })
    }else if ((this.state.prevC !== this.state.colors[id]) && (this.state.prevC !== "")){
      console.log('2');
      
      this.setState({show:nC,noClick:true});
      
      setTimeout(()=>{
        nC[id] = false;
        nC[this.state.prevId] = false;
        console.log(this.state.prevId + " " + id)
        this.setState({show:nC, prevC:"",prevId:"",noClick:false});
      }
      ,1000)
      
    }else{
      console.log('3');
      this.setState({show: nC, prevC:this.state.colors[id],prevId:id})
    }
  }

  navClick(){
    const nShow = Array(16).fill().map(()=>{
      return (false)
    })
    const nColors = shuffle(this.state.colors.slice());
    this.setState({show:nShow,colors:nColors});
  }
 
  render() {
    return (
      [<Nav onClick={this.navClick}/>,
      <div style={{minWidth : "932px",maxWidth:"932px", margin: "0 auto"}}>
      
        {this.state.show.map((e,i)=>{
          if(e){
            return(<MemCell key={i} id={i} color={this.state.colors[i]} onClick={this.mcHandleClick} />)
          }else{
            return(<MemCell key={i} id={i} onClick={this.mcHandleClick} />)
          }
        })}
      </div>]
      
    )     

  }
}

export default App;
