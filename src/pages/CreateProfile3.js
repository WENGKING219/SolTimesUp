import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

const CreateProfile3 = () => {
  const navigate = useNavigate();

  const onBtnContainerClick = useCallback(() => {
    navigate("/home-page1");
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
        font-size: var(--btn-large-normal-size);
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
        `}
        onClick={onBtnContainerClick}
      >
        <b
          className={css`
            position: relative;
            line-height: 24px;
          `}
        >
          Done
        </b>
      </div>
      <div
        className={css`
          position: absolute;
          top: 44px;
          left: 0px;
          background-color: var(--transparent);
          width: 375px;
          height: 44px;
          text-align: right;
          font-size: var(--paragraph-regular-size);
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
              background: linear-gradient(
                74.31deg,
                #85ffc4,
                #5cc6ff 45.83%,
                #bc85ff 80.73%
              );
              width: 234px;
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
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 3px;
              left: 114px;
              border-radius: var(--br-81xl);
              background: linear-gradient(
                74.31deg,
                #85ffc4,
                #5cc6ff 45.83%,
                #bc85ff 80.73%
              );
              width: 18px;
              height: 18px;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 3px;
              left: 227px;
              border-radius: var(--br-81xl);
              background: linear-gradient(
                74.31deg,
                #85ffc4,
                #5cc6ff 45.83%,
                #bc85ff 80.73%
              );
              width: 18px;
              height: 18px;
            `}
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: 10px;
            left: 322px;
            line-height: 24px;
            font-weight: 500;
            display: inline-block;
            width: 37px;
          `}
        >
          3/3
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 287px;
          left: 44px;
          width: 281px;
          height: 348px;
        `}
      >
        <img
          className={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0%;
            right: 0%;
            bottom: 0%;
            left: 0%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            object-fit: cover;
          `}
          alt=""
          src="/saly26@2x.png"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 125px;
          left: 56px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          text-align: center;
          font-size: var(--title-1-size);
        `}
      >
        <div
          className={css`
            position: relative;
            line-height: 28px;
            font-weight: 500;
            display: flex;
            align-items: center;
            width: 258px;
          `}
        >
          <span
            className={css`
              line-break: anywhere;
              width: 100%;
            `}
          >
            <p
              className={css`
                margin: 0;
              `}
            >
              You are all set up!!
            </p>
            <p
              className={css`
                margin: 0;
              `}
            >
              Begin your journey.
            </p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default CreateProfile3;
