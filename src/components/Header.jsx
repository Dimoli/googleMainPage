import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header-anchors">
        <a href="google.com">Почта</a>
        <a href="google.com">Картинки</a>
      </div>
      <i className="services fa fa-th fa-lg" aria-hidden="true" />
      <div className="user-avatar" />
    </header>
  );
}
