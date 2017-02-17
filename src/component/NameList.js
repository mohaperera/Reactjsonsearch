import React, { Component } from 'react';

class  NameList extends Component {

render() {
const {data,filltext} = this.props;
     const nameList= data
    
     .filter(name => {
       //remove text that do not match search
       return name.name.toLowerCase().indexOf(filltext.toLowerCase()) >=0
     })
     
     .map( name=> {
       
      // console.log(name.name,name.sex)
      return (
 <li key={name.id} className={name.sex}>{name.name}</li>

         )    
    
  })
   // console.log(this.props.data); ///// this.props.filltext
    return (
      <div className="App">
        
          <ul>
          
           {nameList}
            </ul>
    
      </div>
    );
 
}

}

export default NameList; 