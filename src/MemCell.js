import React, {Component} from "react";

class MemCell extends Component {
    // constructor(props){
    //     super(props);
        
    // }
    
    static defaultProps = {
        color : "grey",
        // mcHandleClick(){}
    }

    
   
    render(){
        const {color,onClick, id} = this.props;
        return(
            
            <div 
                style={{
                    width : "197px",
                    height : "197px",
                    backgroundColor : color,
                    transition : "0.6s",
                    borderRadius : "25px",
                    border : "8px solid grey",
                    margin : "10px",
                    display : "inline-flex"
                }}
                onClick = {() => onClick(id)}
            ></div>
        )
    }
    
}

export default MemCell;