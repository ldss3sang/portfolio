import React from "react";
import BaseLayout from "../components/layouts/BaseLayout";
import BasePage from "../components/BasePage";
import withAuth from "../components/hoc/withAuth";

class Profile extends React.Component {
  render() {
    return (
      <BaseLayout isAuthenticated={this.props.isAuthenticated}>
        <BasePage>
          <h1>I am Profile Page.</h1>
          <p>Secret Content Here</p>
        </BasePage>
      </BaseLayout>
    );
  }
}

export default withAuth(Profile);
