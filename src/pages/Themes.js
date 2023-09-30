import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Themes = () => {
  const navigate = useNavigate();

  const onBackContainerClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        height: 809px;
        overflow: hidden;
        background-image: url("/schedule@3x.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        text-align: center;
        font-size: 7.81px;
        color: var(--color-gray-1400);
        font-family: var(--font-space-grotesk);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          background-color: var(--color-gray-1600);
          backdrop-filter: blur(20px);
          width: 375px;
          height: 809px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 556px;
          left: 41px;
          font-size: var(--btn-large-normal-size);
          font-family: var(--font-sf-pro-display);
          background: linear-gradient(
            93.37deg,
            #9945ff,
            #00ffff 49.48%,
            #14f195
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `}
      >
        Samurai Theme
      </div>
      <div
        className={css`
          position: absolute;
          top: 574px;
          left: 29px;
          width: 322px;
          height: 213px;
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: 55px;
            width: 212px;
            height: 213px;
            object-fit: cover;
          `}
          alt=""
          src="/image-1@2x.png"
        />
        <img
          className={css`
            position: absolute;
            top: 9px;
            left: 0px;
            border-radius: var(--br-xl);
            width: 322px;
            height: 195px;
          `}
          alt=""
          src="/rectangle-71.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 171px;
            left: 235px;
            border-radius: 58.54px;
            background-color: var(--color-whitesmoke-200);
            backdrop-filter: blur(7.81px);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 6.504854679107666px 9.757282257080078px;
          `}
        >
          <div
            className={css`
              position: relative;
            `}
          >
            3SOL to Unlock
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 746px;
          left: 40px;
          border-radius: 58.54px;
          background-color: var(--color-whitesmoke-200);
          backdrop-filter: blur(7.81px);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 6.504854679107666px 9.757282257080078px;
        `}
      >
        <div
          className={css`
            position: relative;
          `}
        >
          Preview
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 71px;
          left: 158px;
          font-size: var(--paragraph-regular-size);
          line-height: 20px;
          font-weight: 500;
          font-family: var(--btn-large-normal);
          color: var(--color-gray-1700);
          display: inline-block;
          width: 60px;
          height: 20px;
        `}
      >
        Themes
      </div>
      <img
        className={css`
          position: absolute;
          top: 35px;
          left: 316px;
          width: 32px;
          height: 32px;
          object-fit: cover;
        `}
        alt=""
        src="/avatarelvis@2x.png"
      />
      <img
        className={css`
          position: absolute;
          height: 2.9%;
          width: 4.31%;
          top: 4.94%;
          right: 69.55%;
          bottom: 92.16%;
          left: 26.13%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
        `}
        alt=""
        src="/group-31611@2x.png"
      />
      <img
        className={css`
          position: absolute;
          height: 2.84%;
          width: 43.68%;
          top: 4.94%;
          right: 25.12%;
          bottom: 92.21%;
          left: 31.2%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/group-31601.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 31px;
          left: 31px;
          width: 25.48px;
          height: 36px;
          cursor: pointer;
        `}
        onClick={onBackContainerClick}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: var(--br-71xl);
            background-color: var(--color-whitesmoke-100);
            width: 25.48px;
            height: 36px;
          `}
        />
        <img
          className={css`
            position: absolute;
            top: 12.14px;
            left: 9.16px;
            width: 11.55px;
            height: 12.14px;
            overflow: hidden;
          `}
          alt=""
          src="/materialsymbolsarrowbackiosrounded3.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 125px;
          left: 27px;
          width: 322px;
          height: 195px;
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 10px;
            left: 69px;
            width: 189px;
            height: 175px;
            overflow: hidden;
          `}
          alt=""
          src="/frame-11.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: var(--br-xl);
            width: 322px;
            height: 195px;
          `}
          alt=""
          src="/rectangle-71.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 162px;
            left: 235px;
            border-radius: 58.54px;
            background-color: var(--color-whitesmoke-200);
            backdrop-filter: blur(7.81px);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 6.504854679107666px 9.757282257080078px;
          `}
        >
          <div
            className={css`
              position: relative;
            `}
          >
            3SOL to Unlock
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 288px;
          left: 40px;
          border-radius: 58.54px;
          background-color: var(--color-whitesmoke-200);
          backdrop-filter: blur(7.81px);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 6.504854679107666px 9.757282257080078px;
        `}
      >
        <div
          className={css`
            position: relative;
          `}
        >
          Preview
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 100px;
          left: 43px;
          font-size: var(--btn-large-normal-size);
          font-family: var(--font-sf-pro-display);
          background: linear-gradient(
            93.37deg,
            #9945ff,
            #00ffff 49.48%,
            #14f195
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `}
      >
        Space Theme
      </div>
      <div
        className={css`
          position: absolute;
          top: 353px;
          left: 27px;
          width: 322px;
          height: 195px;
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 13px;
            left: 80px;
            width: 166px;
            height: 166px;
            overflow: hidden;
          `}
          alt=""
          src="/level-1.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: var(--br-xl);
            width: 322px;
            height: 195px;
          `}
          alt=""
          src="/rectangle-71.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 162px;
            left: 235px;
            border-radius: 58.54px;
            background-color: var(--color-whitesmoke-200);
            backdrop-filter: blur(7.81px);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 6.504854679107666px 9.757282257080078px;
          `}
        >
          <div
            className={css`
              position: relative;
            `}
          >
            3SOL to Unlock
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 515px;
          left: 40px;
          border-radius: 58.54px;
          background-color: var(--color-whitesmoke-200);
          backdrop-filter: blur(7.81px);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: 6.504854679107666px 9.757282257080078px;
        `}
      >
        <div
          className={css`
            position: relative;
          `}
        >
          Preview
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 327px;
          left: 43px;
          font-size: var(--btn-large-normal-size);
          font-family: var(--font-sf-pro-display);
          background: linear-gradient(
            93.37deg,
            #9945ff,
            #00ffff 49.48%,
            #14f195
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `}
      >
        Pacman Theme
      </div>
    </div>
  );
};

export default Themes;
