import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count : 0
        }
    }
    render() {
        const {name, location} = this.props;
        return (
            <div className="user-card">
                <h3>Count: {this.state.count}</h3>
                <button onClick={()=> {
                    this.setState({
                        count : this.state.count + 1
                    })

                }}> Count++ </button>
                <h1>Name: {name}</h1>
                <h2>Location: {location}</h2>
            </div>
        )
    }
}
export default UserClass;