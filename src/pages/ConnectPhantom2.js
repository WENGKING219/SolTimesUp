import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

const ConnectPhantom2 = () => {
  const navigate = useNavigate();

  const onBtnContainerClick = useCallback(() => {
    navigate("/connect-phantom-3");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        background: linear-gradient(180deg, #1e1e1e, #2f1a51);
        width: 100%;
        height: 812px;
        overflow: hidden;
        text-align: left;
        font-size: var(--btn-small-normal-size);
        color: var(--white);
        font-family: var(--btn-large-normal);
      `}
    >
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
          top: 588px;
          left: 16px;
          width: 343px;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-5xs);
          font-size: var(--paragraph-regular-size);
          color: var(--blue-5);
        `}
      >
        <img
          className={css`
            position: relative;
            width: 24px;
            height: 24px;
          `}
          alt=""
          src="/checkboxinput1.svg"
        />
        <div
          className={css`
            flex: 1;
            position: relative;
            line-height: 24px;
          `}
        >
          <span
            className={css`
              color: var(--white);
            `}
          >{`I understand that `}</span>
          <span
            className={css`
              color: var(--color-blueviolet);
            `}
          >
            SOL
          </span>
          <span
            className={css`
              color: var(--color-mediumspringgreen);
            `}
          >
            TIMESUP
          </span>
          <span
            className={css`
              color: var(--white);
            `}
          >{` cannot recover this password for me. `}</span>
          <span
            className={css`
              text-decoration: underline;
            `}
          >
            Learmore
          </span>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 516px;
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
          top: 408px;
          left: 16px;
          width: 343px;
          height: 84px;
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
            background-color: var(--gray-23);
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
            src="/iconeyehidden11.svg"
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
      <div
        className={css`
          position: absolute;
          top: 300px;
          left: 16px;
          width: 343px;
          height: 84px;
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
          <span className={css``}>{`Password strength: `}</span>
          <span
            className={css`
              color: #ffab2e;
            `}
          >
            Good
          </span>
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
            background-color: var(--gray-23);
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
            src="/iconeyehidden11.svg"
          />
          <div
            className={css`
              position: absolute;
              top: calc(50% - 20px);
              left: 16px;
              width: 87px;
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
              New Password
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 112px;
          left: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: var(--gap-5xs);
          text-align: center;
          font-size: var(--title-1-size);
        `}
      >
        <div
          className={css`
            position: relative;
            line-height: 28px;
            font-weight: 500;
          `}
        >
          Create Password
        </div>
        <div
          className={css`
            position: relative;
            font-size: var(--paragraph-regular-size);
            line-height: 24px;
            display: flex;
            align-items: center;
            width: 311px;
            color: var(--gray-8);
          `}
        >
          <span
            className={css`
              line-break: anywhere;
              width: 100%;
            `}
          >
            <span className={css``}>{`This password will unlock your `}</span>
            <span
              className={css`
                color: var(--color-blueviolet);
              `}
            >
              SOL
            </span>
            <span
              className={css`
                color: var(--color-mediumspringgreen);
              `}
            >
              TIMESUP
            </span>
          </span>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 44px;
          left: 0px;
          background-color: var(--transparent);
          width: 375px;
          height: 44px;
          text-align: center;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 16px;
            height: 44px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            padding: var(--padding-3xs) 0px;
            box-sizing: border-box;
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
            position: absolute;
            top: 10px;
            left: 62px;
            width: 251px;
            height: 24px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 10px;
              left: 5px;
              border-radius: var(--br-3xs);
              background-color: var(--gray-20);
              width: 121px;
              height: 4px;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 10px;
              left: 126px;
              border-radius: var(--br-3xs);
              background-color: var(--gray-20);
              width: 113px;
              height: 4px;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 3px;
              left: 0px;
              border-radius: var(--br-81xl);
              background: linear-gradient(
                74.31deg,
                #85ffc4,
                #5cc6ff 45.83%,
                #bc85ff 80.73%
              );
              width: 18px;
              height: 18px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 0px var(--padding-5xs);
              box-sizing: border-box;
            `}
          >
            <b
              className={css`
                position: relative;
                line-height: 24px;
              `}
            />
          </div>
          <div
            className={css`
              position: absolute;
              top: 3px;
              left: 114px;
              border-radius: var(--br-81xl);
              background-color: var(--gray-20);
              width: 18px;
              height: 18px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 0px var(--padding-5xs);
              box-sizing: border-box;
            `}
          >
            <b
              className={css`
                position: relative;
                line-height: 24px;
              `}
            />
          </div>
          <div
            className={css`
              position: absolute;
              top: 3px;
              left: 227px;
              border-radius: var(--br-81xl);
              background-color: var(--gray-20);
              width: 18px;
              height: 18px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              padding: 0px var(--padding-5xs);
              box-sizing: border-box;
            `}
          >
            <b
              className={css`
                position: relative;
                line-height: 24px;
              `}
            />
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 10px;
            left: 327px;
            font-size: var(--paragraph-regular-size);
            line-height: 24px;
            font-weight: 500;
            text-align: right;
            display: inline-block;
            width: 32px;
          `}
        >
          1/3
        </div>
      </div>
    </div>
  );
};

export default ConnectPhantom2;
