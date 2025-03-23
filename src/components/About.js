import React from "react";
import User from "./User";
import UserClass from "./UserClass";
import { UserContext } from "../utils/context";
export class About extends React.Component {
  // In class component we cannot use hook to fetch the context details
  constructor(props) {
    super(props);
    console.log("Parent Constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }

  render() {
    console.log("Parent render");
    return (
      <React.Fragment>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <span className="font-bold text-lg">User: {loggedInUser}</span>
          )}
        </UserContext.Consumer>

        <h1>We are food ordering app</h1>
        <h2>Please enjoy ordering</h2>
        <User name="Tanvi" location="Mumabi" handle="tanviAnimations" />
        <UserClass name="Tejashree" location="Pune" handle="tejashreeJosh" />
      </React.Fragment>
    );
  }
}
