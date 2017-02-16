import React, { Component } from 'react';
import NameList from './component/NameList'
import Credit from './component/Credit'
import Search from './component/Search'
import ShortList from './component/ShortList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
constructor(props) {
super(props)
this.state = {
filtertext : 'hiii'

}
}


filterupdates(value){
this.setState({
  filtertext:value
})
}

  render() {
    return (

      <div>
        <Search filtertext={this.state.filtertext} 
        filterupdates ={this.filterupdates.bind(this)}
        />
         <ShortList/>
        <main>
<NameList data={this.props.data}  filltext={this.state.filtertext}/>
<Credit/>
</main>
      </div>
    )
  }
}

export default App;
