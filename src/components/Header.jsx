import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header-anchors">
        <a>Почта</a>
        <a>Картинки</a>
      </div>
      <i className="services fa fa-th fa-lg" aria-hidden="true" />
      <div className="user-avatar" />
    </header>
  );
}
