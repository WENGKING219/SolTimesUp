import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

const CreateProfile1 = () => {
  const navigate = useNavigate();

  const onBtnContainerClick = useCallback(() => {
    navigate("/create-profile-2");
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
        color: var(--gray-8);
        font-family: var(--btn-large-normal);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 714px;
          left: 48px;
          border-radius: var(--br-81xl);
          background-color: var(--gray-20);
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
          Next
        </b>
      </div>
      <div
        className={css`
          position: absolute;
          top: 212px;
          left: 16px;
          border-radius: var(--br-5xs);
          background-color: var(--gray-23);
          width: 343px;
          height: 64px;
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
          Account name
        </div>
        <img
          className={css`
            position: absolute;
            top: calc(50% - 12px);
            right: 16px;
            width: 24px;
            height: 24px;
            display: none;
          `}
          alt=""
          src="/iconeyehidden2.svg"
        />
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
          color: var(--white);
        `}
      >
        <div
          className={css`
            position: relative;
            line-height: 28px;
            font-weight: 500;
          `}
        >
          Create Your Profile
        </div>
        <div
          className={css`
            position: relative;
            font-size: var(--paragraph-regular-size);
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
            <span className={css``}>Create a</span>
            <span
              className={css`
                color: var(--color-blueviolet);
              `}
            >
              {" "}
              SOL
            </span>
            <span
              className={css`
                color: var(--color-mediumspringgreen);
              `}
            >{`TIMESUP `}</span>
            <span className={css``}>profile</span>
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
          color: var(--white);
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
      <div
        className={css`
          position: absolute;
          top: 294px;
          left: -16px;
          width: 420px;
          height: 420px;
        `}
      >
        <img
          className={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0%;
            right: -3.81%;
            bottom: 0%;
            left: 3.81%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            object-fit: cover;
          `}
          alt=""
          src="/saly12@2x.png"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 34.61%;
          left: 33px;
          line-height: 16px;
        `}
      >
        Must be at least 8 characters
      </div>
    </div>
  );
};

export default CreateProfile1;
