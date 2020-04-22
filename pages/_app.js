// import App from 'next/app'
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/main.scss";
import { Auth0Provider } from "../services/react-auth0-spa";
import config from "../auth_config.json";
import Router from "next/router";
import App from "next/app";

// A function that routes the user to the right place
// after login
const onRedirectCallback = (appState) => {
  Router.push(
    appState && appState.targetUrl
      ? appState.targetUrl
      : window.location.pathname
  );
};

function MyApp({ Component, pageProps }) {
  return (
    <Auth0Provider
      domain={config.domain}
      client_id={config.clientId}
      redirect_uri={"https://portfolio.ldss3sang1.now.sh/callback"}
      onRedirectCallback={onRedirectCallback}
    >
      <Component {...pageProps} />
    </Auth0Provider>
  );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  let authenticatedCookie = undefined;
  if (
    appContext.ctx.req &&
    appContext.ctx.req.headers &&
    appContext.ctx.req.headers.cookie
  ) {
    authenticatedCookie = appContext.ctx.req.headers.cookie
      .split(";")
      .find((c) => c.trim().startsWith("auth0.is.authenticated"));
  }

  appProps.pageProps["isAuthenticated"] = authenticatedCookie
    ? authenticatedCookie.split("=")[1]
    : undefined;
  console.log(appProps);
  return { ...appProps };
};

export default MyApp;
