import React from "react";

export default function Header() {
  return (
    <header>
      <div className="header-anchors">
        <a href="google.com">Почта</a>
        <a href="google.com">Картинки</a>
      </div>
      <i className="services fa fa-th fa-lg" aria-hidden="true" />
      <div className="services-hint">Приложения Google</div>
      <div className="user-avatar" />
      <div className="user-avatar-hint">Hi to me</div>
    </header>
  );
}
