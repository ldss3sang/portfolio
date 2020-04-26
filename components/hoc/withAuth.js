import React from "react";
import BaseLayout from "../layouts/BaseLayout";
import BasePage from "../BasePage";

export default (Component) => {
  return class withAuth extends React.Component {
    renderProtectedPage() {
      const { isAuthenticated } = this.props;

      if (isAuthenticated === "true") {
        return <Component {...this.props} />;
      } else {
        return (
          <BaseLayout isAuthenticated={isAuthenticated}>
            <BasePage>
              <h1>
                You are not authenticated. Please login to access this page.
              </h1>
            </BasePage>
          </BaseLayout>
        );
      }
    }
    render() {
      return this.renderProtectedPage();
    }
  };
};
