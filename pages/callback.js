import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import { withRouter } from "next/router";

class Callback extends React.Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    this.props.router.push("/");
  }
  render() {
    return (
      <BaseLayout>
        <BasePage>
          <h1>Verifying login data ... </h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withRouter(Callback);
