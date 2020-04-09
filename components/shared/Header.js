import React, { Fragment } from "react";
import Link from "next/link";

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/blogs">
          <a>Blog</a>
        </Link>
        <Link href="/portfolios">
          <a>Portfolio</a>
        </Link>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/resume">
          <a>Resume</a>
        </Link>
      </Fragment>
    );
  }
}

export default Header;
