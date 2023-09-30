import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const ConnectPhantom3 = () => {
  const navigate = useNavigate();

  const onBtnContainerClick = useCallback(() => {
    navigate("/connect-phantom-4");
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
        font-size: var(--btn-large-normal-size);
        color: var(--white);
        font-family: var(--btn-large-normal);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          background-color: var(--gray-22);
          width: 375px;
          height: 812px;
        `}
      >
        <div
          className={css`
            position: absolute;
            height: 21.83%;
            width: 100%;
            top: 0%;
            right: 0px;
            bottom: 78.17%;
            left: 0px;
            background-color: var(--gray-24);
            backdrop-filter: var(--shadow-blur-background);
          `}
        />
        <img
          className={css`
            position: absolute;
            width: calc(100% - 32px);
            top: 48px;
            right: 16px;
            left: 16px;
            border-radius: var(--br-xs);
            max-width: 100%;
            overflow: hidden;
            height: 60px;
          `}
          alt=""
          src="/back.svg"
        />
        <div
          className={css`
            position: absolute;
            height: calc(100% - 60px);
            width: 100%;
            top: 60px;
            right: 0px;
            bottom: 0px;
            left: 0px;
            border-radius: var(--br-base) var(--br-base) 0px 0px;
            background: linear-gradient(180deg, #131118, #2f1a51);
            overflow: hidden;
          `}
        >
          <div
            className={css`
              position: absolute;
              width: 100%;
              top: 8px;
              right: 0px;
              left: 0px;
              height: 44px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: 0px var(--padding-base);
              box-sizing: border-box;
            `}
          >
            <div
              className={css`
                align-self: stretch;
                flex: 1;
              `}
            />
            <div
              className={css`
                position: relative;
                line-height: 24px;
                font-weight: 500;
              `}
            >
              Secure Your Wallet
            </div>
            <div
              className={css`
                align-self: stretch;
                flex: 1;
              `}
            />
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 714px;
          left: 48px;
          border-radius: var(--br-81xl);
          background: linear-gradient(
            74.31deg,
            #85ffc4,
            #5cc6ff 45.83%,
            #bc85ff 80.73%
          );
          width: 279px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--padding-xs) var(--padding-base);
          box-sizing: border-box;
          cursor: pointer;
          text-align: left;
        `}
        onClick={onBtnContainerClick}
      >
        <b
          className={css`
            position: relative;
            line-height: 24px;
          `}
        >
          Next
        </b>
      </div>
      <div
        className={css`
          position: absolute;
          top: 642px;
          left: 48px;
          border-radius: var(--br-81xl);
          width: 279px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--padding-xs) var(--padding-base);
          box-sizing: border-box;
          text-align: left;
        `}
      >
        <b
          className={css`
            position: relative;
            line-height: 24px;
            background: linear-gradient(
              74.31deg,
              #85ffc4,
              #5cc6ff 45.83%,
              #bc85ff 80.73%
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `}
        >
          Remind Me Later
        </b>
      </div>
      <div
        className={css`
          position: absolute;
          top: 470px;
          left: 32px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-9xs);
          font-size: var(--paragraph-regular-size);
        `}
      >
        <div
          className={css`
            position: relative;
            line-height: 24px;
            display: flex;
            align-items: center;
            width: 311px;
          `}
        >
          <span
            className={css`
              line-break: anywhere;
              width: 100%;
            `}
          >
            <span
              className={css``}
            >{`Don't risk losing your funds. protect your wallet by saving your `}</span>
            <span
              className={css`
                font-weight: 500;
                color: var(--blue-5);
              `}
            >
              Seed Phrase
            </span>
            <span className={css``}> in a place you trust.</span>
          </span>
        </div>
        <div
          className={css`
            position: relative;
            line-height: 24px;
            font-weight: 500;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 311px;
          `}
        >
          It's the only way to recover your wallet if you get locked out of the
          app or get a new device.
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          top: 203px;
          left: 78px;
          width: 248px;
          height: 252px;
          object-fit: cover;
        `}
        alt=""
        src="/illus@2x.png"
      />
      <img
        className={css`
          position: absolute;
          top: 165px;
          left: 48px;
          width: 17px;
          height: 17px;
          overflow: hidden;
          object-fit: cover;
        `}
        alt=""
        src="/illustellip1@2x.png"
      />
    </div>
  );
};

export default ConnectPhantom3;
