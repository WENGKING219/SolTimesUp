import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const ConnectWallet5 = () => {
  const navigate = useNavigate();

  const onBtnContainerClick = useCallback(() => {
    navigate("/connect-phantom-11");
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
        font-size: var(--btn-small-normal-size);
        color: var(--gray-8);
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
          font-size: var(--btn-large-normal-size);
          color: var(--white);
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
          font-size: var(--btn-large-normal-size);
          color: var(--white);
        `}
        onClick={onBtnContainerClick}
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
          top: 572px;
          left: 16px;
          line-height: 16px;
        `}
      >
        <span className={css``}>{`Byproceeding, you agree to these `}</span>
        <span
          className={css`
            text-decoration: underline;
            color: var(--blue-5);
          `}
        >
          Term and Conditions.
        </span>
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
            Sign in with Face ID?
          </div>
        </div>
        <div
          className={css`
            border-radius: var(--br-981xl);
            background: linear-gradient(
              74.31deg,
              #85ffc4,
              #5cc6ff 45.83%,
              #bc85ff 80.73%
            );
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-end;
            padding: var(--padding-9xs) var(--padding-xs) var(--padding-9xs)
              var(--padding-23xl);
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
              position: relative;
              font-size: var(--paragraph-regular-size);
              line-height: 24px;
              font-weight: 500;
              color: var(--white);
            `}
          >
            then vacant hub ride avoid girl alien cross usage exist comic upon
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
            src="/iconeyevisble1.svg"
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
          overflow: hidden;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          padding: var(--padding-xs) var(--padding-base);
          box-sizing: border-box;
          gap: var(--gap-104xl);
        `}
      >
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
              line-height: 16px;
            `}
          >
            New Password
          </div>
          <div
            className={css`
              align-self: stretch;
              position: relative;
              font-size: var(--paragraph-regular-size);
              line-height: 24px;
              font-weight: 500;
              color: var(--white);
            `}
          >
            **********
          </div>
        </div>
        <img
          className={css`
            position: relative;
            width: 24px;
            height: 24px;
          `}
          alt=""
          src="/iconeyehidden6.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 400px;
          left: 16px;
          width: 343px;
          height: 84px;
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
            font-size: var(--paragraph-regular-size);
            color: var(--white);
          `}
        >
          <img
            className={css`
              position: absolute;
              top: calc(50% - 12px);
              right: 16px;
              width: 24px;
              height: 24px;
            `}
            alt=""
            src="/iconeyehidden6.svg"
          />
          <div
            className={css`
              position: absolute;
              top: calc(50% - 20px);
              left: 16px;
              width: 110px;
              height: 40px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: calc(50% - 4px);
                left: 0px;
                line-height: 24px;
                font-weight: 500;
              `}
            >
              **********
            </div>
            <div
              className={css`
                position: absolute;
                top: calc(50% - 20px);
                left: 0px;
                font-size: var(--btn-small-normal-size);
                line-height: 16px;
                color: var(--gray-8);
              `}
            >
              Confirm Password
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWallet5;
