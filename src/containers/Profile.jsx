import React, { Component } from "react";
import ProfileView from "../components/ProfileView";

class Profile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "User",
            address: "Kathmandu"
        };
    }

    componentDidMount() {
        setTimeout(() => {
            this.changeName();
        }, 2000);
    }

    changeName() {
        this.setState({ name: "Test User" });
    }

    componentWillUnmount() {}

    render() {
        return (
            <ProfileView {...this.state } />
        );
    }
}

export default Profile;

