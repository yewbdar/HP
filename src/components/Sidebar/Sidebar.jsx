import React, { Component } from "react";
import { NavLink } from "react-router-dom";

import HeaderLinks from "../Header/HeaderLinks.jsx";

import imagine from "../../assets/img/sidebar-4.jpg";

import dashboardRoutes from "../../routes/dashboard.jsx";
import LinearProgress from '@material-ui/core/LinearProgress';
import Button from '@material-ui/core/Button';
import Power from '@material-ui/icons/PowerSettingsNew';

import loginAction from '../../redux/actions/loginActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Route, Redirect } from 'react-router'

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: window.innerWidth
    };
  }
  activeRoute(routeName) {
    return this.props.location.pathname.indexOf(routeName) > -1 ? "active" : "";
  }
  updateDimensions() {
    this.setState({ width: window.innerWidth });
  }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  handleLogOut =() =>{
    this.props.logout();
    window.location.reload();
  }
  render() {
    const sidebarBackground = {
      backgroundImage: "url(" + imagine + ")"
    };
    var pStyle = {
     display:"inline",
      width:"100%"

    };
    var liStyle = {
      width:"100%"
    };

    return (
      <div
        id="sidebar"
        className="sidebar"
        data-color="black"
        data-image={imagine}
      >

        <div className="sidebar-background" style={sidebarBackground} />
        <div className="logo">

          <a
            href="#"
            className="simple-text logo-normal"
          >

          </a>
        </div>
        <div className="sidebar-wrapper">
          <ul className="nav">
            {this.props.isGettingCurrentUser && <LinearProgress />}
            {dashboardRoutes.map((prop, key) => {
              /**
               * Dont display side bar for other users depending on who the current logged in user is
               */
               if (!prop.redirect  && this.props.userInfo  && prop.displayFor.indexOf(this.props.userInfo.type) !== -1 )
               return (

               <li
               style={liStyle}
               className={
                      prop.upgrade
                        ? "active active-pro col-lg-12"
                        : this.activeRoute(prop.path)
                    }
               key={key}
               >
               <NavLink
               to={prop.path}
               className="nav-link"
               activeClassName="active"
               >
               <i className={prop.icon} />
               <p style={pStyle}>{prop.name}</p>
               </NavLink>
               </li>

               );
               return null;
               })}

          </ul>
          {this.props.userInfo && this.props.userInfo.type != "NA" && <Button  style ={{color : "white" }}   onClick={this.handleLogOut}> <Power />  </Button>}
        </div>
      </div>
    );
  }
}


function mapStateToProps(state) {
  return {
    userInfo: state.loginReduicer.userInfo,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators({ logout:loginAction.logout}, dispatch)
}

export default connect( mapStateToProps,mapDispatchToProps)(Sidebar)
