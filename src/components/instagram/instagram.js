import React from "react";
import "./instagram.css";
import Card from "./card/card";
import List from "./list/list";

import { Route, Link } from "react-router-dom";

export default class Instagram extends React.Component {
  render() {
    return (
      <>
        <List />
        <Route path="/:id" component={Card} />
      </>
    );
  }
}
