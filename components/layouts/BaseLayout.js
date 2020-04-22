import React from "react";
import Header from "../shared/Header";
import { useAuth0 } from "../../services/react-auth0-spa";

const BaseLayout = (props) => {
  const { loading } = useAuth0();
  if (loading) {
    return <div>Loading...</div>;
  }
  const { className, children } = props;
  return (
    <div className="layout-container">
      <Header />
      <main className={`cover ${className}`}>
        <div className="wrapper">{children}</div>
      </main>
    </div>
  );
};

export default BaseLayout;
