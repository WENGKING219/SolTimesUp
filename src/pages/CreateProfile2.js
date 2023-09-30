import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

const CreateProfile2 = () => {
  const navigate = useNavigate();

  const onBtnContainerClick = useCallback(() => {
    navigate("/create-profile-3");
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
          Continue
        </b>
      </div>
      <div
        className={css`
          position: absolute;
          top: 198px;
          left: 32px;
          width: 311px;
          height: 55px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-between;
          color: var(--gray-8);
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: var(--gap-xs);
          `}
        >
          <div
            className={css`
              flex: 1;
              border-radius: var(--br-5xs);
              background-color: var(--gray-22);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-5xs) var(--padding-base);
              gap: var(--gap-9xs);
            `}
          >
            <div
              className={css`
                position: relative;
                line-height: 24px;
                font-weight: 500;
                display: none;
              `}
            />
            <div
              className={css`
                position: relative;
                line-height: 24px;
                font-weight: 500;
                color: var(--white);
              `}
            >
              1 hour
            </div>
          </div>
          <div
            className={css`
              flex: 1;
              border-radius: var(--br-5xs);
              background-color: var(--gray-22);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-5xs) var(--padding-base);
              gap: var(--gap-9xs);
            `}
          >
            <div
              className={css`
                position: relative;
                line-height: 24px;
                font-weight: 500;
                display: none;
              `}
            >
              2.
            </div>
            <div
              className={css`
                position: relative;
                line-height: 24px;
                font-weight: 500;
                color: var(--white);
              `}
            >
              2 hour
            </div>
          </div>
          <div
            className={css`
              flex: 1;
              border-radius: var(--br-5xs);
              background-color: var(--gray-22);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-5xs) var(--padding-base);
              gap: var(--gap-9xs);
            `}
          >
            <div
              className={css`
                position: relative;
                line-height: 24px;
                font-weight: 500;
                display: none;
              `}
            >
              3.
            </div>
            <div
              className={css`
                position: relative;
                line-height: 24px;
                font-weight: 500;
                color: var(--white);
              `}
            >
              3 hour
            </div>
          </div>
        </div>
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
            justify-content: center;
            width: 258px;
          `}
        >
          How much time plan to focus in a day
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
          font-size: var(--btn-small-normal-size);
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
          2/3
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 290px;
          left: -4px;
          width: 377px;
          height: 377px;
        `}
      >
        <img
          className={css`
            position: absolute;
            height: 100%;
            width: 100%;
            top: 0%;
            right: -1.06%;
            bottom: 0%;
            left: 1.06%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            object-fit: cover;
          `}
          alt=""
          src="/saly39@2x.png"
        />
      </div>
    </div>
  );
};

export default CreateProfile2;
