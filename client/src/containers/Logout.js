import React, {Component} from "react";
import {Redirect} from "react-router-dom";
import API from "../utils/API";
import Navbar from "../components/Navbar";


class Logout extends Component {
  state = {
    isLoggedIn: true,
    username: "",
    password: "",
    redirect: false
  }

    componentDidMount() {
      this.logout();
    }
  

  logout = () => {
    API
      .logout({username: this.state.username, password: this.state.password})
      .then(res => {
        this.setState({isLoggedIn: res.data})
      })
      .catch(err => console.log(err.response));
    setTimeout(() => { this.setState({redirect: true}) }, 800);
  }

  render() { 
    if (this.state.redirect) {
      return <Redirect to="/"/>
    }

      return (
        <div>
          <Navbar />
          <div className="container-fluid my-3">
            <div className="row justify-content-center">
              <h1>Logging you out....</h1>
            </div>
          </div>
        </div>
      ) 
    }
  }
  
  export default Logout;