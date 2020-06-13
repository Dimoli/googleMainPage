import React from "react";
import "./App.css";

function App() {
  return (
    <div className="app">
      <header>
        <div className="header-anchors">
          <a>Почта</a>
          <a>Картинки</a>
        </div>
        <i className="services fa fa-th" aria-hidden="true" />
        <div className="user-avatar" />
      </header>
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
      <footer>
        <div className="footer-top">Беларусь</div>
        <div className="footer-bottom">
          <div>
            <a>Реклама</a>
            <a>Для бизнеса</a>
            <a>Всё о Google</a>
            <a>Как работает Google Поиск</a>
          </div>
          <div>
            <a>Конфиденциальность</a>
            <a>Условия</a>
            <a>Настройки</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
