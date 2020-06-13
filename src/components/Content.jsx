import React, { useState, useRef } from "react";

export default function Content() {
  const [mark, setMark] = useState(false);
  const inputRef = useRef(null); // may use "useState" hook instead "useRef"

  const markOnClick = () => {
    inputRef.current.value = "";
    setMark(false);
  };

  return (
    <div className="content">
      <div className="logo"></div>
      <div className="input">
        <label htmlFor="input">
          <i className="input-search fa fa-search fa-lg" aria-hidden="true" />
        </label>
        <input
          id="input"
          ref={inputRef}
          onChange={(e) => setMark(e.target.value)}
        ></input>
        <div className="input-devices">
          {mark && (
            <i
              className="mark fa fa-times fa-lg"
              aria-hidden="true"
              onClick={markOnClick}
            />
          )}
          <i className="fa fa-keyboard-o fa-lg" aria-hidden="true" />
          <i className="fa fa-microphone fa-lg" aria-hidden="true" />
        </div>
      </div>
      <div className="input-buttons">
        <button>Поиск в Google</button>
        <button>Мне повезёт!</button>
      </div>
      <div className="content-information">
        Сервисы Google доступны на разных языках:
        <a href="google.com">English</a>
        <a href="google.com">Беларуская</a>
      </div>
    </div>
  );
}
