import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const ConnectPhantom5 = () => {
  const navigate = useNavigate();

  const onBtnContainer2Click = useCallback(() => {
    navigate("/connect-phantom-6");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        background-color: var(--color-gray-700);
        width: 100%;
        height: 812px;
        overflow: hidden;
        text-align: left;
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
          width: 375px;
          height: 812px;
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
            text-align: center;
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
              background-color: var(--gray-23);
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
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                  padding: var(--padding-3xs) 0px;
                `}
              >
                <div
                  className={css`
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: center;
                  `}
                >
                  <img
                    className={css`
                      position: relative;
                      width: 24px;
                      height: 24px;
                    `}
                    alt=""
                    src="/iconarrowleftback.svg"
                  />
                </div>
              </div>
              <div
                className={css`
                  flex: 1;
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
          `}
        >
          <b
            className={css`
              position: relative;
              line-height: 24px;
            `}
          >
            Start
          </b>
        </div>
        <div
          className={css`
            position: absolute;
            top: 136px;
            left: 16px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            gap: var(--gap-5xl);
            font-size: var(--paragraph-regular-size);
            color: var(--gray-8);
          `}
        >
          <div
            className={css`
              width: 311px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
              gap: var(--gap-5xs);
              text-align: center;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: column;
                align-items: flex-start;
                justify-content: flex-start;
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
                  <span className={css``}>Secure your wallet's "</span>
                  <span
                    className={css`
                      font-weight: 500;
                      color: var(--blue-5);
                    `}
                  >
                    Seed Phrase
                  </span>
                  <span className={css``}>"</span>
                </span>
              </div>
            </div>
            <div
              className={css`
                border-radius: var(--br-81xl);
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                padding: var(--padding-9xs) var(--padding-base);
                text-align: left;
                font-size: var(--btn-small-normal-size);
                color: var(--blue-5);
              `}
            >
              <div
                className={css`
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                  gap: var(--gap-5xs);
                `}
              >
                <img
                  className={css`
                    position: relative;
                    width: 24px;
                    height: 24px;
                    overflow: hidden;
                    flex-shrink: 0;
                  `}
                  alt=""
                  src="/iconinfornation.svg"
                />
                <b
                  className={css`
                    position: relative;
                    line-height: 24px;
                  `}
                >
                  Why is it important?
                </b>
              </div>
            </div>
          </div>
          <div
            className={css`
              border-radius: var(--br-base);
              background-color: var(--gray-22);
              width: 343px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-base) var(--padding-base)
                var(--padding-5xl);
              box-sizing: border-box;
              gap: var(--gap-5xs);
            `}
          >
            <div
              className={css`
                align-self: stretch;
                background-color: var(--transparent);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: 0px var(--padding-base);
                gap: var(--gap-3xs);
                font-size: var(--btn-large-normal-size);
                color: var(--white);
              `}
            >
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                `}
              >
                <div
                  className={css`
                    flex: 1;
                    position: relative;
                    line-height: 24px;
                    font-weight: 500;
                  `}
                >
                  Manual
                </div>
              </div>
              <div
                className={css`
                  width: 63px;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-end;
                  text-align: right;
                  font-size: var(--paragraph-regular-size);
                `}
              >
                <div
                  className={css`
                    position: relative;
                    line-height: 24px;
                  `}
                >
                  <span className={css``}>
                    <span className={css``}>Security Level:</span>
                    <span
                      className={css`
                        color: var(--blue-5);
                      `}
                    >{` `}</span>
                  </span>
                  <span
                    className={css`
                      font-weight: 500;
                      color: var(--color-mediumseagreen-100);
                    `}
                  >
                    Very Strong
                  </span>
                </div>
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                background-color: var(--transparent);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: 0px var(--padding-base);
              `}
            >
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                `}
              >
                <div
                  className={css`
                    flex: 1;
                    position: relative;
                    line-height: 24px;
                  `}
                >
                  Write down your seed phrase on a piece of paper and store in a
                  safe place.
                </div>
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                background-color: var(--transparent);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: 0px var(--padding-base);
              `}
            >
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                `}
              >
                <div
                  className={css`
                    flex: 1;
                    position: relative;
                    line-height: 24px;
                  `}
                >
                  <p
                    className={css`
                      margin: 0;
                    `}
                  >{`Risks are: `}</p>
                  <p
                    className={css`
                      margin: 0;
                    `}
                  >
                    • You lose it
                  </p>
                  <p
                    className={css`
                      margin: 0;
                    `}
                  >
                    • You forget where you put it
                  </p>
                  <p
                    className={css`
                      margin: 0;
                    `}
                  >
                    • Someone else finds it
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={css`
              border-radius: var(--br-base);
              background-color: var(--gray-22);
              width: 343px;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-base) var(--padding-base)
                var(--padding-5xl);
              box-sizing: border-box;
              gap: var(--gap-5xs);
              font-size: var(--btn-large-normal-size);
              color: var(--white);
            `}
          >
            <div
              className={css`
                align-self: stretch;
                background-color: var(--transparent);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: 0px var(--padding-base);
              `}
            >
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                `}
              >
                <div
                  className={css`
                    flex: 1;
                    position: relative;
                    line-height: 24px;
                    font-weight: 500;
                  `}
                >
                  Other options: Doesn't have to be paper!
                </div>
              </div>
            </div>
            <div
              className={css`
                align-self: stretch;
                background-color: var(--transparent);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                padding: 0px var(--padding-base);
                font-size: var(--paragraph-regular-size);
                color: var(--gray-8);
              `}
            >
              <div
                className={css`
                  flex: 1;
                  display: flex;
                  flex-direction: row;
                  align-items: center;
                  justify-content: flex-start;
                `}
              >
                <div
                  className={css`
                    flex: 1;
                    position: relative;
                    line-height: 24px;
                  `}
                >
                  <p
                    className={css`
                      margin: 0;
                    `}
                  >
                    Tips:
                  </p>
                  <p
                    className={css`
                      margin: 0;
                    `}
                  >
                    • Store in bank vault
                  </p>
                  <p
                    className={css`
                      margin: 0;
                    `}
                  >
                    • Store in a safe
                  </p>
                  <p
                    className={css`
                      margin: 0;
                    `}
                  >
                    • Store in multiple secret places
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          background-color: var(--mask);
          backdrop-filter: var(--shadow-blur-background);
          width: 375px;
          height: 812px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          gap: var(--gap-5xs);
          text-align: center;
        `}
      >
        <div
          className={css`
            position: relative;
            border-radius: var(--br-81xl);
            background-color: var(--gray-8);
            width: 40px;
            height: 4px;
          `}
        />
        <div
          className={css`
            align-self: stretch;
            border-radius: var(--br-base) var(--br-base) 0px 0px;
            background-color: var(--gray-23);
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: flex-end;
            padding: var(--padding-5xs) 0px 0px;
            gap: 290px;
          `}
        >
          <div
            className={css`
              background-color: var(--transparent);
              width: 375px;
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
              Why is it important?
            </div>
            <div
              className={css`
                align-self: stretch;
                flex: 1;
              `}
            />
          </div>
          <div
            className={css`
              position: relative;
              width: 0px;
              height: 0px;
            `}
          />
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
        `}
        onClick={onBtnContainer2Click}
      >
        <b
          className={css`
            position: relative;
            line-height: 24px;
          `}
        >
          I Got It
        </b>
      </div>
      <div
        className={css`
          position: absolute;
          top: 546px;
          left: 16px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-5xs);
          font-size: var(--paragraph-regular-size);
        `}
      >
        <div
          className={css`
            position: relative;
            line-height: 24px;
            display: inline-block;
            width: 343px;
          `}
        >
          <p
            className={css`
              margin: 0;
            `}
          >
            Dont’t risk losing your funds. Protect
          </p>
          <p
            className={css`
              margin: 0;
            `}
          >
            your wallet by saving your seed phrase in a place you trust.
          </p>
        </div>
        <div
          className={css`
            position: relative;
            line-height: 24px;
            display: inline-block;
            width: 343px;
          `}
        >
          It’s the only way to recover your wallet if you get locked out of the
          app or get a new device.
        </div>
      </div>
    </div>
  );
};

export default ConnectPhantom5;
