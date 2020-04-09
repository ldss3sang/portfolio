import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import { Button } from "reactstrap";

class Index extends React.Component {
  render() {
    return (
      <BaseLayout>
        <h1>I am Index Page.</h1>
        <Button color="danger">Button</Button>
      </BaseLayout>
    );
  }
}

export default Index;
