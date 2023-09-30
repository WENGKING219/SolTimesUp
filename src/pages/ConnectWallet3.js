import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const ConnectWallet3 = () => {
  const navigate = useNavigate();

  const onMbKeyboardContainerClick = useCallback(() => {
    navigate("/connect-phantom-4");
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
              Import From Seed
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
          top: 572px;
          left: 16px;
          font-size: var(--btn-small-normal-size);
          line-height: 16px;
          color: var(--gray-8);
        `}
      >
        {`Byproceeding, you agree to these `}
        <span
          className={css`
            text-decoration: underline;
          `}
        >
          Term and Conditions.
        </span>
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
          Import
        </b>
      </div>
      <div
        className={css`
          position: absolute;
          top: 508px;
          left: 0px;
          background-color: var(--transparent);
          width: 375px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding: var(--padding-5xs) var(--padding-base);
          box-sizing: border-box;
          gap: var(--gap-3xs);
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
            Sign in with Face ID?
          </div>
        </div>
        <div
          className={css`
            border-radius: var(--br-981xl);
            background-color: var(--gray-22);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            padding: var(--padding-9xs) var(--padding-23xl) var(--padding-9xs)
              var(--padding-xs);
          `}
        >
          <div
            className={css`
              position: relative;
              border-radius: var(--br-3xs);
              background-color: var(--white);
              width: 10px;
              height: 24px;
            `}
          />
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 521px;
          left: -5px;
          background-color: var(--gray-23);
          backdrop-filter: blur(54.37px);
          width: 375px;
          height: 291px;
          cursor: pointer;
          text-align: center;
          font-size: var(--font-size-3xl-5);
          font-family: var(--font-agency-fb);
        `}
        onClick={onMbKeyboardContainerClick}
      >
        <img
          className={css`
            position: relative;
            width: 15px;
            height: 25px;
          `}
          alt=""
          src="/dictation.svg"
        />
        <img
          className={css`
            position: relative;
            width: 26.5px;
            height: 26.5px;
          `}
          alt=""
          src="/emoji.svg"
        />
        <div
          className={css`
            position: absolute;
            width: 100%;
            right: 0px;
            bottom: 0px;
            left: 0px;
            height: 34px;
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 100%;
              width: 100%;
              top: 0%;
              right: 0%;
              bottom: 0%;
              left: 0%;
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
            height: 70.1%;
            width: 98.4%;
            top: 2.75%;
            right: 0.8%;
            bottom: 27.15%;
            left: 0.8%;
          `}
        >
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 23.85%;
              top: 79.41%;
              right: 0%;
              bottom: 0%;
              left: 76.15%;
              font-size: var(--btn-large-normal-size);
            `}
          >
            <img
              className={css`
                position: absolute;
                height: calc(100% + 1px);
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: -1px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/rectangle.svg"
            />
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: 26.19%;
                left: 0px;
                letter-spacing: -0.32px;
                line-height: 21px;
                display: inline-block;
              `}
            >
              Enter
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 49.32%;
              top: 79.41%;
              right: 25.47%;
              bottom: 0%;
              left: 25.2%;
              font-size: var(--btn-large-normal-size);
            `}
          >
            <img
              className={css`
                position: absolute;
                height: calc(100% + 1px);
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: -1px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/rectangle1.svg"
            />
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: 26.19%;
                left: 0px;
                letter-spacing: -0.32px;
                line-height: 21px;
                display: inline-block;
              `}
            >
              space
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 23.58%;
              top: 79.41%;
              right: 76.42%;
              bottom: 0%;
              left: 0%;
              font-size: var(--btn-large-normal-size);
            `}
          >
            <img
              className={css`
                position: absolute;
                height: calc(100% + 1px);
                width: 100%;
                top: 0px;
                right: -2px;
                bottom: -1px;
                left: 2px;
                border-radius: var(--br-8xs-6);
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/rectangle2.svg"
            />
            <div
              className={css`
                position: absolute;
                width: 100%;
                top: 26.19%;
                left: 0px;
                letter-spacing: -0.32px;
                line-height: 21px;
                display: inline-block;
              `}
            >
              123
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 11.38%;
              top: 52.94%;
              right: 0%;
              bottom: 26.47%;
              left: 88.62%;
              font-size: var(--btn-large-normal-size);
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
              `}
            >
              <img
                className={css`
                  position: absolute;
                  height: calc(100% + 1px);
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: -1px;
                  left: 0px;
                  border-radius: var(--br-8xs-6);
                  max-width: 100%;
                  overflow: hidden;
                  max-height: 100%;
                `}
                alt=""
                src="/rectangle3.svg"
              />
              <div
                className={css`
                  position: absolute;
                  width: 100%;
                  top: 26.19%;
                  left: 0px;
                  letter-spacing: -0.32px;
                  line-height: 21px;
                  display: inline-block;
                `}
              >{` `}</div>
            </div>
            <img
              className={css`
                position: relative;
                width: 22.66px;
                height: 16.99px;
              `}
              alt=""
              src="/delete-button1.svg"
            />
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 11.38%;
              top: 52.94%;
              right: 88.62%;
              bottom: 26.47%;
              left: 0%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0%;
                right: 0%;
                bottom: 0%;
                left: 0%;
              `}
            >
              <div
                className={css`
                  position: absolute;
                  height: 100%;
                  width: 100%;
                  top: 0px;
                  right: 0px;
                  bottom: 0px;
                  left: 0px;
                  border-radius: var(--br-8xs-6);
                  background-color: var(--gray-18);
                  box-shadow: 0px 1px 0px #000;
                `}
              />
              <div
                className={css`
                  position: absolute;
                  top: calc(50% - 13px);
                  left: 48.57%;
                  letter-spacing: -0.55px;
                `}
              >{` `}</div>
            </div>
            <img
              className={css`
                position: absolute;
                height: 39.18%;
                width: 44.95%;
                top: 29.05%;
                right: 27.29%;
                bottom: 31.77%;
                left: 27.76%;
                max-width: 100%;
                overflow: hidden;
                max-height: 100%;
              `}
              alt=""
              src="/shift1.svg"
            />
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 52.94%;
              right: 14.91%;
              bottom: 26.47%;
              left: 76.42%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 29.37%;
                letter-spacing: -0.55px;
              `}
            >
              M
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 52.94%;
              right: 25.2%;
              bottom: 26.47%;
              left: 66.12%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 32.5%;
                letter-spacing: -0.55px;
              `}
            >
              N
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 52.94%;
              right: 35.5%;
              bottom: 26.47%;
              left: 55.83%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 32.5%;
                letter-spacing: -0.55px;
              `}
            >
              B
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 52.94%;
              right: 45.53%;
              bottom: 26.47%;
              left: 45.8%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 35.62%;
                letter-spacing: -0.55px;
              `}
            >
              V
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 52.94%;
              right: 55.83%;
              bottom: 26.47%;
              left: 35.5%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 32.5%;
                letter-spacing: -0.55px;
              `}
            >
              C
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 52.94%;
              right: 65.85%;
              bottom: 26.47%;
              left: 25.47%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 35.62%;
                letter-spacing: -0.55px;
              `}
            >
              X
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 52.94%;
              right: 76.15%;
              bottom: 26.47%;
              left: 15.18%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 35.62%;
                letter-spacing: -0.55px;
              `}
            >
              Z
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 26.47%;
              right: 4.88%;
              bottom: 52.94%;
              left: 86.45%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 35.62%;
                letter-spacing: -0.55px;
              `}
            >
              L
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 26.47%;
              right: 15.18%;
              bottom: 52.94%;
              left: 76.15%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 35.62%;
                letter-spacing: -0.55px;
              `}
            >
              K
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 26.47%;
              right: 25.2%;
              bottom: 52.94%;
              left: 66.12%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 35.62%;
                letter-spacing: -0.55px;
              `}
            >
              J
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 26.47%;
              right: 35.5%;
              bottom: 52.94%;
              left: 55.83%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 32.5%;
                letter-spacing: -0.55px;
              `}
            >
              H
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 26.47%;
              right: 45.53%;
              bottom: 52.94%;
              left: 45.8%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 32.5%;
                letter-spacing: -0.55px;
              `}
            >
              G
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 26.47%;
              right: 55.83%;
              bottom: 52.94%;
              left: 35.5%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 35.62%;
                letter-spacing: -0.55px;
              `}
            >
              F
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 26.47%;
              right: 65.85%;
              bottom: 52.94%;
              left: 25.47%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 32.5%;
                letter-spacing: -0.55px;
              `}
            >
              D
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 26.47%;
              right: 76.15%;
              bottom: 52.94%;
              left: 15.18%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 32.5%;
                letter-spacing: -0.55px;
              `}
            >
              S
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 26.47%;
              right: 86.18%;
              bottom: 52.94%;
              left: 5.15%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 32.5%;
                letter-spacing: -0.55px;
              `}
            >
              A
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 0%;
              right: 0%;
              bottom: 79.41%;
              left: 91.33%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 32.5%;
                letter-spacing: -0.55px;
              `}
            >
              P
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 0%;
              right: 10.03%;
              bottom: 79.41%;
              left: 81.3%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 32.5%;
                letter-spacing: -0.55px;
              `}
            >
              O
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 0%;
              right: 20.33%;
              bottom: 79.41%;
              left: 71%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 41.87%;
                letter-spacing: -0.55px;
              `}
            >
              I
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 0%;
              right: 30.35%;
              bottom: 79.41%;
              left: 60.98%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 32.5%;
                letter-spacing: -0.55px;
              `}
            >
              U
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 0%;
              right: 40.65%;
              bottom: 79.41%;
              left: 50.68%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 35.62%;
                letter-spacing: -0.55px;
              `}
            >
              Y
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 0%;
              right: 50.68%;
              bottom: 79.41%;
              left: 40.65%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 35.62%;
                letter-spacing: -0.55px;
              `}
            >
              T
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 0%;
              right: 60.98%;
              bottom: 79.41%;
              left: 30.35%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 32.5%;
                letter-spacing: -0.55px;
              `}
            >
              R
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 0%;
              right: 71%;
              bottom: 79.41%;
              left: 20.33%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 35.62%;
                letter-spacing: -0.55px;
              `}
            >
              E
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 0%;
              right: 81.3%;
              bottom: 79.41%;
              left: 10.03%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 29.37%;
                letter-spacing: -0.55px;
              `}
            >
              W
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              height: 20.59%;
              width: 8.67%;
              top: 0%;
              right: 91.33%;
              bottom: 79.41%;
              left: 0%;
            `}
          >
            <div
              className={css`
                position: absolute;
                height: 100%;
                width: 100%;
                top: 0px;
                right: 0px;
                bottom: 0px;
                left: 0px;
                border-radius: var(--br-8xs-6);
                background-color: var(--gray-18);
                box-shadow: 0px 1px 0px #000;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: calc(50% - 13px);
                left: 32.5%;
                letter-spacing: -0.55px;
              `}
            >
              Q
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 400px;
          left: 16px;
          width: 343px;
          height: 84px;
          font-size: var(--btn-small-normal-size);
          color: var(--gray-8);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 80.95%;
            left: 16px;
            line-height: 16px;
          `}
        >
          Must be at least 8 characters
        </div>
        <div
          className={css`
            position: absolute;
            height: 76.19%;
            width: 100%;
            top: 0%;
            right: 0px;
            bottom: 23.81%;
            left: 0px;
            border-radius: var(--br-5xs);
            background-color: var(--gray-22);
            overflow: hidden;
            font-size: var(--paragraph-regular-size);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: calc(50% - 12px);
              left: 16px;
              line-height: 24px;
              font-weight: 500;
            `}
          >
            Confirm Password
          </div>
          <img
            className={css`
              position: absolute;
              top: calc(50% - 12px);
              right: 16px;
              width: 24px;
              height: 24px;
            `}
            alt=""
            src="/iconeyehidden4.svg"
          />
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 312px;
          left: 16px;
          border-radius: var(--br-5xs);
          background-color: var(--gray-22);
          width: 343px;
          height: 64px;
          overflow: hidden;
          font-size: var(--paragraph-regular-size);
          color: var(--gray-8);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: calc(50% - 12px);
            left: 16px;
            line-height: 24px;
            font-weight: 500;
          `}
        >
          New Password
        </div>
        <img
          className={css`
            position: absolute;
            top: calc(50% - 12px);
            right: 16px;
            width: 24px;
            height: 24px;
          `}
          alt=""
          src="/iconeyehidden4.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 172px;
          left: 16px;
          border-radius: var(--br-5xs);
          background-color: var(--gray-22);
          width: 343px;
          overflow: hidden;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding: var(--padding-xs) var(--padding-base);
          box-sizing: border-box;
          gap: var(--gap-5xs);
          font-size: var(--btn-small-normal-size);
          color: var(--gray-8);
        `}
      >
        <div
          className={css`
            flex: 1;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-9xs);
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 16px;
            `}
          >
            Seed Phrase
          </div>
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: row;
              align-items: flex-end;
              justify-content: center;
              font-size: var(--paragraph-regular-size);
              color: var(--white);
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
              **** ****** *** **** ***** **** ***** ***** ***** ***** *****|
            </div>
            <div
              className={css`
                position: relative;
                line-height: 24px;
                display: none;
              `}
            >
              |
            </div>
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: var(--gap-base);
          `}
        >
          <img
            className={css`
              position: relative;
              width: 24px;
              height: 24px;
            `}
            alt=""
            src="/iconscan.svg"
          />
          <img
            className={css`
              position: relative;
              width: 24px;
              height: 24px;
            `}
            alt=""
            src="/iconeyehidden5.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet3;
