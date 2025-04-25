import React from "react";

class UserClass extends React.Component{
    constructor(props){
    super(props)
    console.log(props);

    this.state = {
    count:0,
    count2:1
    }
}

render(){
    const{name ,location, contacts} = this.props
    const {count , count2} = this.state
    return (
        <div className="user-head">
            <h2>Count:{count}</h2>
            <h2>Count2:{count2}</h2>
            <h2>Name:{name}</h2>
            <h2>Location:{location}</h2>
            <h3>Contacts:{contacts}</h3>
            </div>
    )
}
}



export default UserClass;