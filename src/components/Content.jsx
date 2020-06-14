import React, { useState, useRef } from "react";

export default function Content() {
  const [mark, setMark] = useState(false);
  const inputRef = useRef(null); // may use "useState" hook instead "useRef"
  const inputHintRef = useRef(null);

  const markOnClick = () => {
    inputRef.current.value = "";
    inputRef.current.focus();
    setMark(false);
  };

  const inputOnMouseEnter = (e) => {
    let posY;
    let posX;

    if (e.pageX || e.pageY) {
      posX = e.pageX;
      posY = e.pageY;
    } else if (e.clientX || e.clientY) {
      posX =
        e.clientX +
        document.body.scrollLeft +
        document.documentElement.scrollLeft;
      posY =
        e.clientY +
        document.body.scrollTop +
        document.documentElement.scrollTop;
    }

    posX -= inputRef.current.getBoundingClientRect().left;
    posY -= inputRef.current.getBoundingClientRect().top;

    inputHintRef.current.style.top = `${posY + 15}px`;
    inputHintRef.current.style.left = `${posX + 50}px`;
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
          onMouseEnter={inputOnMouseEnter}
          autoComplete="off"
        />
        <div className="input-hint" ref={inputHintRef}>
          Поиск
        </div>
        {mark && (
          <i
            className="mark fa fa-times fa-lg"
            aria-hidden="true"
            onClick={markOnClick}
          />
        )}
        <div className="input-devices">
          <div className="keyboard">
            <i className="fa fa-keyboard-o fa-lg" aria-hidden="true" />
            {/* <div className="keyboard-hint">
              <div className="keyboard-hint-content">
                Экранная клавиатура
                <div className="rectangle" />
              </div>
            </div> */}
          </div>
          <div className="microphone">
            <i className="fa fa-microphone fa-lg" aria-hidden="true" />
            {/* <div className="microphone-hint">
              <div className="microphone-hint-content">
                Голосовой поиск
                <div className="rectangle" />
              </div>
            </div> */}
          </div>
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
