import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import withAuth from "../components/hoc/withAuth";

class Portfolios extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { isAuthenticated } = this.props;
    return (
      <BaseLayout isAuthenticated={isAuthenticated}>
        <BasePage>
          <h1>I am Portfolios Page.</h1>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(Portfolios);
