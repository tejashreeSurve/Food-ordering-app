import React from "react";

export default class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
      count2: 1,
    };

    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Child componentDidMount");
  }

  render() {
    const { name, location, handle } = this.props;
    const { count, count2 } = this.state;

    console.log("Child render");

    return (
      <div className="user-details">
        <h1>Count = {count}</h1>
        <button
          type="submit"
          onClick={() =>
            this.setState({
              count: count + 1,
              count2: count2 + 1,
            })
          }
        >
          Click
        </button>
        <h1>Coun2 = {count2}</h1>
        <h1>{name} (class)</h1>
        <h2>{location}</h2>
        <h3>Github: {handle}</h3>
      </div>
    );
  }
}
