import React, { Component } from 'react';

class  NameList extends Component {

render() {
const {data}= this.props;
     const nameList= data.map(name=>{
       
      // console.log(name.name,name.sex)
      return (
 <li key={name.id} className={name.sex}>{name.name}</li>

         )    
    
  })
   // console.log(this.props.data);
    return (
      <div className="App">
        
          <ul>
            {this.props.filltext}
           {nameList}
            </ul>
    
      </div>
    );
 
}

}

export default NameList; 