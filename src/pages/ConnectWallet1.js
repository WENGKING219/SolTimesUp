import { useCallback } from "react";
import { css, keyframes } from "@emotion/css";
import { useNavigate } from "react-router-dom";

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

const ConnectWallet1 = () => {
  const navigate = useNavigate();

  const onBtnClick = useCallback(() => {
    navigate("/connect-wallet-2");
  }, [navigate]);

  const onBtn1Click = useCallback(() => {
    navigate("/connect-phantom-1");
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
      <img
        className={css`
          position: absolute;
          top: 133px;
          left: 0px;
          width: 551px;
          height: 551px;
          overflow: hidden;
          object-fit: cover;
        `}
        alt=""
        src="/sol-timesup-11@2x.png"
      />
      <div
        className={css`
          position: absolute;
          top: 100px;
          left: calc(50% - 167px);
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
        Connect your wallet
      </div>
      <div
        className={css`
          position: absolute;
          top: 644px;
          left: 39px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-5xl);
        `}
      >
        <button
          className={css`
            cursor: pointer;
            border: none;
            padding: var(--padding-xs) var(--padding-base);
            background-color: #2d2b33;
            border-radius: var(--br-81xl);
            width: 279px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
            &:active {
              animation: 1s ease 0s infinite normal none
                ${animationScaleDownCenter};
              opacity: 1;
            }
          `}
          onClick={onBtnClick}
        >
          <b
            className={css`
              position: relative;
              font-size: var(--btn-large-normal-size);
              line-height: 24px;
              font-family: var(--btn-large-normal);
              background: linear-gradient(
                74.31deg,
                #85ffc4,
                #5cc6ff 45.83%,
                #bc85ff 80.73%
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              text-align: left;
            `}
          >
            Import Using Seed Phrase
          </b>
        </button>
        <button
          className={css`
            cursor: pointer;
            border: none;
            padding: var(--padding-xs) var(--padding-base);
            background-color: transparent;
            border-radius: var(--br-81xl);
            background: radial-gradient(
              50% 50% at 50% 50%,
              #85ffc4,
              #5cc6ff 45.83%,
              #bc85ff 80.73%
            );
            width: 279px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            box-sizing: border-box;
          `}
          onClick={onBtn1Click}
        >
          <b
            className={css`
              position: relative;
              font-size: var(--btn-large-normal-size);
              line-height: 24px;
              font-family: var(--btn-large-normal);
              color: var(--white);
              text-align: left;
            `}
          >
            Connect a Phantom Wallet
          </b>
        </button>
      </div>
    </div>
  );
};

export default ConnectWallet1;
