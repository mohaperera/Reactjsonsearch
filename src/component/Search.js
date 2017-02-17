import React, { Component } from 'react';



class Search extends Component {

Filterupdate(){
const val=this.myVal.value;
this.props.filterupdates(val);
//console.log(val);
}

    render() {

return (
<header>
<form>
<input type="text" placeholder="type here"
ref={(value)=> { this.myVal=value} }
onChange={this.Filterupdate.bind(this)}
/>
    </form>
</header>

)

    } 
}

export default Search;