import React from "react";

export default function Header() {
  return (
    <div className="content">
      <div className="logo"></div>
      <div className="input">
        <label htmlFor="input">
          <i className="input-search fa fa-search" aria-hidden="true" />
        </label>
        <input id="input"></input>
        <div className="input-devices">
          <i className="fa fa-keyboard-o" aria-hidden="true" />
          <i className="fa fa-microphone" aria-hidden="true" />
        </div>
      </div>
      <div className="input-buttons">
        <button>Поиск в Google</button>
        <button>Мне повезёт!</button>
      </div>
      <div className="content-information">
        Сервисы Google доступны на разных языках:
        <a>English</a>
        <a>Беларуская</a>
      </div>
    </div>
  );
}
