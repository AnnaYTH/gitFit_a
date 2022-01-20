import { connect } from "react-redux";
import React from "react";
import { NavLink } from "react-router-dom";
import { fetchUsers } from "../actions/user_actions";
import "../stylesheets/left-nav.css"

const mSTP = (state) => {
    return({
        users: state.entities.users, 
        currentUser: state.session.user, 
    })
}

const mDTP = (dispatch) => {
    return ({
        fetchUsers: () => dispatch(fetchUsers()),
    })
}

class LeftNav extends React.Component{
    constructor(props) {
        super(props); 
    }

    componentDidMount() {
        this.props.fetchUsers(); 
    }

    // componentDidUpdate(prevProps) {
    //     // when the follow button is clicked the left nav rerenders immediately and the follow button will also switch follow/unfollow
    //     let updated = true;
    //     if (updated) {
    //         const currentUser = this.props.users.filter(user =>user._id === this.props.currentUser.id)[0];
    //         const buddies = currentUser.following.filter(id => id !== null)
    //         if (buddies !== (prevProps.users.filter(user => prevProps.currentUser.id)[0]).following.filter(id => id !== null)) {
    //             this.props.fetchUsers();
    //         } 
    //         updated = false;
    //     }
    // }

    render() {
        if (!Object.keys(this.props.users).length) {
            return null
        }

        const currentUser = this.props.users.filter(user =>user._id === this.props.currentUser.id)[0];
        const buddies = currentUser.following.filter(id => id !== null)

        return (
            <div className="left-container">
                <section className="discovery">
                    <h3 className="left-titles">Discover</h3>
                    <NavLink to="/discoverWorkouts"><div className="left-links">Browse workouts</div></NavLink>
                    <NavLink to="/discoverMealPlans"><div className="left-links">Browse meal plans</div></NavLink>
                </section>

                <section className="left-buddies">
                    <h3 className="left-titles">Buddies</h3>
                    {/* {this.props.currentUser.followings.map(id => <div><NavLink to={`users/${id}`}></NavLink></div>)} */}

                    {/* {buddies.map(id => <NavLink to={`/users/${id}`} key={id}><div className="left-links">{this.props.users.filter(user => user._id === id)[0].username}</div></NavLink>)} */}
                </section>

                <section className="gym">
                    <NavLink to="/gym"><div className="left-links">Find a gym!</div></NavLink>
                </section>

            </div>
            
        )
    }
}

export default connect(mSTP, mDTP)(LeftNav); 