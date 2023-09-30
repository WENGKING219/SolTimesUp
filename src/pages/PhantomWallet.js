import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const PhantomWallet = () => {
  const navigate = useNavigate();

  const onBackContainerClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onBackToSolTimesUpClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        height: 812px;
        text-align: center;
        font-size: var(--font-size-33xl);
        color: var(--white);
        font-family: var(--font-sf-pro-display);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          background-color: var(--color-gray-500);
          width: 375px;
          height: 809px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            background-color: var(--color-gray-500);
            width: 375px;
            height: 300px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              background: linear-gradient(
                180deg,
                rgba(36, 228, 111, 0.15),
                rgba(35, 227, 110, 0)
              );
              width: 375px;
              height: 300px;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 140px;
              left: calc(50% - 84px);
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
              gap: var(--gap-9xs);
            `}
          >
            <div
              className={css`
                position: relative;
                letter-spacing: 0.31px;
                line-height: 100%;
                font-weight: 500;
              `}
            >
              $15.93
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                gap: var(--gap-5xs);
                text-align: left;
                font-size: var(--font-size-xl);
                color: var(--green);
              `}
            >
              <div
                className={css`
                  position: relative;
                  letter-spacing: -0.46px;
                  line-height: 25px;
                  font-weight: 600;
                `}
              >
                +$0.34
              </div>
              <div
                className={css`
                  border-radius: var(--br-7xs);
                  background-color: var(--color-springgreen-100);
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: center;
                  padding: 0px var(--padding-8xs);
                  font-size: var(--font-size-mid);
                `}
              >
                <div
                  className={css`
                    position: relative;
                    letter-spacing: -0.44px;
                    line-height: 25px;
                    font-weight: 600;
                  `}
                >
                  +2.09%
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              width: calc(100% - 32px);
              top: 252px;
              right: 16px;
              left: 16px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-smi);
              font-size: var(--btn-large-normal-size);
            `}
          >
            <div
              className={css`
                flex: 1;
                border-radius: var(--br-43xl);
                background-color: var(--ios-purple);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: var(--padding-base) 0px;
              `}
            >
              <b
                className={css`
                  flex: 1;
                  position: relative;
                  letter-spacing: -0.32px;
                  line-height: 17px;
                `}
              >
                Deposit
              </b>
            </div>
            <div
              className={css`
                flex: 1;
                border-radius: var(--br-43xl);
                background-color: var(--ios-purple);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: var(--padding-base) 0px;
              `}
            >
              <b
                className={css`
                  flex: 1;
                  position: relative;
                  letter-spacing: -0.32px;
                  line-height: 17px;
                `}
              >
                Buy
              </b>
            </div>
            <div
              className={css`
                flex: 1;
                border-radius: var(--br-43xl);
                background-color: var(--ios-purple);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: var(--padding-base) 0px;
              `}
            >
              <b
                className={css`
                  flex: 1;
                  position: relative;
                  letter-spacing: -0.32px;
                  line-height: 17px;
                `}
              >
                Send
              </b>
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              width: 375px;
              height: 94px;
              font-size: var(--font-size-2xs);
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 25.53%;
                top: 63.83%;
                bottom: 10.64%;
                left: 16px;
                width: 24px;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: 0px;
                  left: 0px;
                  border-radius: 50%;
                  background-color: var(--ios-purple);
                  border: 1px solid var(--white);
                  box-sizing: border-box;
                  width: 24px;
                  height: 24px;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0%;
                  left: 0%;
                  line-height: 100%;
                  font-weight: 600;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                `}
              >
                U
              </div>
            </div>
            <div
              className={css`
                position: absolute;
                height: 21.28%;
                top: 66.49%;
                bottom: 12.23%;
                left: calc(50% - 94.5px);
                width: 188px;
                display: flex;
                flex-direction: row;
                align-items: flex-start;
                justify-content: flex-start;
                gap: var(--gap-8xs);
                font-size: var(--font-size-mid);
              `}
            >
              <div
                className={css`
                  position: relative;
                  font-weight: 500;
                `}
              >
                ACCOUNT 1
              </div>
              <div
                className={css`
                  position: relative;
                  color: var(--color-darkgray-300);
                `}
              >
                (8za3...sx2Z)
              </div>
            </div>
            <img
              className={css`
                position: absolute;
                height: 25.53%;
                top: 63.56%;
                right: 18.25px;
                bottom: 10.9%;
                max-height: 100%;
                width: 24px;
              `}
              alt=""
              src="/qr.svg"
            />
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                width: 375px;
                height: 44px;
                display: none;
                font-size: var(--font-size-mini);
                font-family: var(--font-sf-pro-text);
              `}
            >
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 3px);
                  left: 16px;
                  letter-spacing: -0.3px;
                  font-weight: 600;
                  display: inline-block;
                  width: 54px;
                `}
              >
                9:41
              </div>
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 0.67px);
                  right: 11.34px;
                  width: 23.33px;
                  height: 11.33px;
                `}
              >
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 5.67px);
                    right: 2.33px;
                    border-radius: 2.67px;
                    border: 1px solid var(--white);
                    box-sizing: border-box;
                    width: 21px;
                    height: 11.33px;
                    opacity: 0.35;
                    mix-blend-mode: normal;
                  `}
                />
                <img
                  className={css`
                    position: absolute;
                    top: calc(50% - 2px);
                    right: 0px;
                    width: 1.33px;
                    height: 4px;
                    opacity: 0.4;
                    mix-blend-mode: normal;
                  `}
                  alt=""
                  src="/cap1.svg"
                />
                <div
                  className={css`
                    position: absolute;
                    top: calc(50% - 3.67px);
                    right: 4.33px;
                    border-radius: 1.33px;
                    background-color: var(--white);
                    width: 17px;
                    height: 7.33px;
                  `}
                />
              </div>
              <img
                className={css`
                  position: relative;
                  width: 15.33px;
                  height: 11px;
                `}
                alt=""
                src="/wifi1.svg"
              />
              <img
                className={css`
                  position: relative;
                  width: 17px;
                  height: 10.67px;
                `}
                alt=""
                src="/cellular-connection1.svg"
              />
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 332px;
            left: 16px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-5xs);
            text-align: left;
            font-size: var(--btn-large-normal-size);
          `}
        >
          <div
            className={css`
              border-radius: var(--br-5xs);
              background-color: var(--color-darkslategray-400);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: var(--padding-xs) var(--padding-base) var(--padding-xs)
                var(--padding-3xs);
              gap: var(--gap-mid);
            `}
          >
            <div
              className={css`
                width: 205px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: var(--gap-xs);
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 50px;
                  height: 50px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-5@2x.png"
              />
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    line-height: 20px;
                    font-weight: 600;
                  `}
                >
                  Solana
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    font-size: var(--paragraph-regular-size);
                    line-height: 20px;
                    color: var(--color-darkgray-200);
                  `}
                >
                  0.45025 SOL
                </div>
              </div>
            </div>
            <div
              className={css`
                width: 96px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                text-align: right;
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  position: relative;
                  line-height: 20px;
                  font-weight: 600;
                `}
              >
                $13.38
              </div>
              <div
                className={css`
                  align-self: stretch;
                  position: relative;
                  font-size: var(--paragraph-regular-size);
                  line-height: 17px;
                  font-family: var(--chrome-extension-body-medium);
                  color: var(--green);
                `}
              >
                +$0.33
              </div>
            </div>
          </div>
          <div
            className={css`
              border-radius: var(--br-5xs);
              background-color: var(--color-darkslategray-400);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: var(--padding-xs) var(--padding-base) var(--padding-xs)
                var(--padding-3xs);
              gap: var(--gap-mid);
            `}
          >
            <div
              className={css`
                width: 205px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: var(--gap-xs);
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 50px;
                  height: 50px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-51@2x.png"
              />
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    line-height: 20px;
                    font-weight: 600;
                  `}
                >
                  Shadow Token
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    font-size: var(--paragraph-regular-size);
                    line-height: 20px;
                    color: var(--color-darkgray-200);
                  `}
                >
                  0.34999 SOL
                </div>
              </div>
            </div>
            <div
              className={css`
                width: 96px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                text-align: right;
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  position: relative;
                  line-height: 20px;
                  font-weight: 600;
                `}
              >
                $10.89
              </div>
              <div
                className={css`
                  align-self: stretch;
                  position: relative;
                  font-size: var(--paragraph-regular-size);
                  line-height: 20px;
                  color: var(--ios-red-text);
                `}
              >
                -$0.13
              </div>
            </div>
          </div>
          <div
            className={css`
              border-radius: var(--br-5xs);
              background-color: var(--color-darkslategray-400);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: var(--padding-xs) var(--padding-base) var(--padding-xs)
                var(--padding-3xs);
              gap: var(--gap-mid);
            `}
          >
            <div
              className={css`
                width: 205px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: var(--gap-xs);
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 50px;
                  height: 50px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-52@2x.png"
              />
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    line-height: 20px;
                    font-weight: 600;
                  `}
                >
                  USD Coin
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    font-size: var(--paragraph-regular-size);
                    line-height: 20px;
                    color: var(--color-darkgray-200);
                  `}
                >
                  3 USDC
                </div>
              </div>
            </div>
            <div
              className={css`
                width: 96px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                text-align: right;
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  position: relative;
                  line-height: 20px;
                  font-weight: 600;
                `}
              >
                $3.01
              </div>
              <div
                className={css`
                  align-self: stretch;
                  position: relative;
                  font-size: var(--paragraph-regular-size);
                  line-height: 20px;
                  color: var(--green);
                `}
              >
                +$0.01
              </div>
            </div>
          </div>
          <div
            className={css`
              border-radius: var(--br-5xs);
              background-color: var(--color-darkslategray-400);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: var(--padding-xs) var(--padding-base) var(--padding-xs)
                var(--padding-3xs);
              gap: var(--gap-mid);
            `}
          >
            <div
              className={css`
                width: 205px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: var(--gap-xs);
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 50px;
                  height: 50px;
                  object-fit: cover;
                `}
                alt=""
                src="/ellipse-53@2x.png"
              />
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: column;
                  align-items: flex-start;
                  justify-content: flex-start;
                `}
              >
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    line-height: 20px;
                    font-weight: 600;
                  `}
                >
                  Samoyed Coin
                </div>
                <div
                  className={css`
                    align-self: stretch;
                    position: relative;
                    font-size: var(--paragraph-regular-size);
                    line-height: 20px;
                    color: var(--color-darkgray-200);
                  `}
                >
                  25.24 SAMO
                </div>
              </div>
            </div>
            <div
              className={css`
                width: 96px;
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
                text-align: right;
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  position: relative;
                  line-height: 20px;
                  font-weight: 600;
                `}
              >
                $0.21
              </div>
              <div
                className={css`
                  align-self: stretch;
                  position: relative;
                  font-size: var(--paragraph-regular-size);
                  line-height: 20px;
                  color: var(--ios-red-text);
                `}
              >
                -$0.01
              </div>
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-5xs) var(--padding-base);
              gap: var(--gap-base);
              color: var(--color-darkgray-200);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 20px;
                height: 17px;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src="/frame2.svg"
            />
            <div
              className={css`
                position: relative;
                line-height: 20px;
                font-weight: 600;
              `}
            >
              Manage token list
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            bottom: 0px;
            left: 0px;
            background-color: var(--color-gray-1800);
            backdrop-filter: blur(25px);
            width: 375px;
            height: 86px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px var(--padding-base);
              gap: var(--gap-xs);
            `}
          >
            <div
              className={css`
                width: 59px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: var(--padding-mini) 0px var(--padding-smi);
                box-sizing: border-box;
                position: relative;
                gap: var(--gap-smi);
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 24px;
                  height: 24px;
                  overflow: hidden;
                  flex-shrink: 0;
                  z-index: 0;
                `}
                alt=""
                src="/nav-items.svg"
              />
              <div
                className={css`
                  position: absolute;
                  margin: 0 !important;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  left: 0px;
                  border-radius: var(--br-5xl);
                  background-color: var(--purple);
                  height: 2px;
                  z-index: 1;
                `}
              />
            </div>
            <div
              className={css`
                width: 59px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: var(--padding-mini) 0px var(--padding-smi);
                box-sizing: border-box;
                position: relative;
                gap: var(--gap-smi);
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 24px;
                  height: 24px;
                  overflow: hidden;
                  flex-shrink: 0;
                  z-index: 0;
                `}
                alt=""
                src="/frame-55.svg"
              />
              <div
                className={css`
                  position: absolute;
                  margin: 0 !important;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  left: 0px;
                  border-radius: var(--br-5xl);
                  background-color: var(--purple);
                  height: 2px;
                  opacity: 0;
                  z-index: 1;
                `}
              />
            </div>
            <div
              className={css`
                width: 59px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: var(--padding-mini) 0px var(--padding-smi);
                box-sizing: border-box;
                position: relative;
                gap: var(--gap-smi);
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 24px;
                  height: 24px;
                  overflow: hidden;
                  flex-shrink: 0;
                  z-index: 0;
                `}
                alt=""
                src="/frame-552.svg"
              />
              <div
                className={css`
                  position: absolute;
                  margin: 0 !important;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  left: 0px;
                  border-radius: var(--br-5xl);
                  background-color: var(--purple);
                  height: 2px;
                  opacity: 0;
                  z-index: 1;
                `}
              />
            </div>
            <div
              className={css`
                width: 59px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: var(--padding-mini) 0px var(--padding-smi);
                box-sizing: border-box;
                position: relative;
                gap: var(--gap-smi);
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 24px;
                  height: 24px;
                  overflow: hidden;
                  flex-shrink: 0;
                  z-index: 0;
                `}
                alt=""
                src="/nav-items1.svg"
              />
              <div
                className={css`
                  position: absolute;
                  margin: 0 !important;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  left: 0px;
                  border-radius: var(--br-5xl);
                  background-color: var(--purple);
                  height: 2px;
                  opacity: 0;
                  z-index: 1;
                `}
              />
            </div>
            <div
              className={css`
                width: 59px;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: var(--padding-mini) 0px var(--padding-smi);
                box-sizing: border-box;
                position: relative;
                gap: var(--gap-smi);
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 24px;
                  height: 24px;
                  z-index: 0;
                `}
                alt=""
                src="/nav-items2.svg"
              />
              <div
                className={css`
                  position: absolute;
                  margin: 0 !important;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  left: 0px;
                  border-radius: var(--br-5xl);
                  background-color: var(--purple);
                  height: 2px;
                  opacity: 0;
                  z-index: 1;
                `}
              />
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              bottom: 0px;
              left: 0px;
              width: 375px;
              height: 34px;
            `}
          >
            <div
              className={css`
                position: absolute;
                bottom: 8px;
                left: calc(50% - 66.5px);
                border-radius: var(--br-81xl);
                background-color: var(--white);
                width: 134px;
                height: 5px;
              `}
            />
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 375px;
            height: 44px;
            display: none;
            font-size: var(--font-size-mini);
            font-family: var(--font-sf-pro-text);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: calc(50% - 3px);
              left: 16px;
              letter-spacing: -0.3px;
              font-weight: 600;
              display: inline-block;
              width: 54px;
            `}
          >
            9:41
          </div>
          <div
            className={css`
              position: absolute;
              top: calc(50% - 0.67px);
              right: 11.34px;
              width: 23.33px;
              height: 11.33px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: calc(50% - 5.67px);
                right: 2.33px;
                border-radius: 2.67px;
                border: 1px solid var(--white);
                box-sizing: border-box;
                width: 21px;
                height: 11.33px;
                opacity: 0.35;
                mix-blend-mode: normal;
              `}
            />
            <img
              className={css`
                position: absolute;
                top: calc(50% - 2px);
                right: 0px;
                width: 1.33px;
                height: 4px;
                opacity: 0.4;
                mix-blend-mode: normal;
              `}
              alt=""
              src="/cap1.svg"
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 3.67px);
                right: 4.33px;
                border-radius: 1.33px;
                background-color: var(--white);
                width: 17px;
                height: 7.33px;
              `}
            />
          </div>
          <img
            className={css`
              position: relative;
              width: 15.33px;
              height: 11px;
            `}
            alt=""
            src="/wifi1.svg"
          />
          <img
            className={css`
              position: relative;
              width: 17px;
              height: 10.67px;
            `}
            alt=""
            src="/cellular-connection1.svg"
          />
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 11px;
          left: 12px;
          width: 9px;
          height: 9px;
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
            background-color: rgba(242, 242, 242, 0.7);
            width: 9px;
            height: 9px;
          `}
        />
        <img
          className={css`
            position: absolute;
            top: 3.03px;
            left: 3.23px;
            width: 4.08px;
            height: 3.03px;
            overflow: hidden;
          `}
          alt=""
          src="/materialsymbolsarrowbackiosrounded2.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 12px;
          left: 23px;
          font-size: 6px;
          font-weight: 500;
          color: var(--color-gray-1700);
          text-align: left;
          cursor: pointer;
        `}
        onClick={onBackToSolTimesUpClick}
      >
        Back to SolTimesUp
      </div>
    </div>
  );
};

export default PhantomWallet;
