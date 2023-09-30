import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css, keyframes } from "@emotion/css";

const animationScaleDownCenter = keyframes`
    0% {
        -webkit-transform: scale(1);
        transform: scale(1);
    }
    100% {
        -webkit-transform: scale(.5);
        transform: scale(.5);
    }
`;

const IntroPage = () => {
  const navigate = useNavigate();

  const onStartButtonClick = useCallback(() => {
    navigate("/connect-wallet-1");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        background: linear-gradient(180deg, #1e1e1e, #2f1a51);
        width: 100%;
        height: 812px;
        overflow: hidden;
        text-align: center;
        font-size: var(--font-size-17xl);
        font-family: var(--chrome-extension-body-medium);
      `}
    >
      <button
        className={css`
          cursor: pointer;
          border: none;
          padding: 0px var(--padding-9xs) 0px var(--padding-xl);
          background-color: rgba(50, 50, 50, 0.8);
          position: absolute;
          top: 717px;
          left: 67px;
          border-radius: var(--br-71xl);
          backdrop-filter: blur(13px);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: var(--gap-8xs);
          &:active {
            animation: 1s ease 0s infinite normal none
              ${animationScaleDownCenter};
            opacity: 1;
          }
        `}
        onClick={onStartButtonClick}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-base);
          `}
        >
          <b
            className={css`
              position: relative;
              font-size: var(--font-size-mini);
              font-family: var(--font-space-grotesk);
              color: var(--white);
              text-align: center;
            `}
          >
            Start Experience
          </b>
        </div>
        <div
          className={css`
            border-radius: 179.17px;
            background-color: var(--white);
            width: 43px;
            height: 43px;
            overflow: hidden;
            flex-shrink: 0;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
          `}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <img
              className={css`
                position: relative;
                width: 10.75px;
                height: 10.75px;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src="/ictwotonearrowforwardios.svg"
            />
            <img
              className={css`
                position: relative;
                width: 10.75px;
                height: 10.75px;
                overflow: hidden;
                flex-shrink: 0;
                margin-left: -3.58px;
              `}
              alt=""
              src="/ictwotonearrowforwardios1.svg"
            />
            <img
              className={css`
                position: relative;
                width: 10.75px;
                height: 10.75px;
                overflow: hidden;
                flex-shrink: 0;
                margin-left: -3.58px;
              `}
              alt=""
              src="/ictwotonearrowforwardios2.svg"
            />
          </div>
        </div>
      </button>
      <div
        className={css`
          position: absolute;
          top: 112px;
          left: -95px;
          width: 551px;
          height: 652px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
        `}
      >
        <div
          className={css`
            position: relative;
            letter-spacing: -0.02em;
            line-height: 40px;
            font-weight: 600;
            background: linear-gradient(
              92.08deg,
              #899cff,
              #924fff 22.92%,
              #f442b5 67.71%,
              #d61672
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            width: 334px;
          `}
        >
          Boost your productivity and earn some tokens
        </div>
        <img
          className={css`
            position: relative;
            width: 551px;
            height: 551px;
            overflow: hidden;
            flex-shrink: 0;
            object-fit: cover;
            margin-top: -19px;
          `}
          alt=""
          src="/sol-timesup-1@2x.png"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 112px;
          left: -95px;
          width: 551px;
          height: 652px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
        `}
      >
        <div
          className={css`
            position: relative;
            letter-spacing: -0.02em;
            line-height: 40px;
            font-weight: 600;
            background: linear-gradient(
              92.08deg,
              #899cff,
              #924fff 22.92%,
              #f442b5 67.71%,
              #d61672
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            width: 334px;
          `}
        >
          Boost your productivity and earn some tokens
        </div>
        <img
          className={css`
            position: relative;
            width: 551px;
            height: 551px;
            overflow: hidden;
            flex-shrink: 0;
            object-fit: cover;
            margin-top: -19px;
          `}
          alt=""
          src="/sol-timesup-11@2x.png"
        />
      </div>
    </div>
  );
};

export default IntroPage;
