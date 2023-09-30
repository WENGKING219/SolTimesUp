import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

const ConnectPhantom11 = () => {
  const navigate = useNavigate();

  const onBtnContainerClick = useCallback(() => {
    navigate("/create-profile-1");
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
        font-size: var(--paragraph-regular-size);
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
          Done
        </b>
      </div>
      <div
        className={css`
          position: absolute;
          top: 312px;
          left: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          gap: var(--gap-base);
          text-align: center;
          color: var(--gray-8);
        `}
      >
        <div
          className={css`
            position: relative;
            font-size: var(--title-1-size);
            line-height: 28px;
            font-weight: 500;
            color: var(--white);
            display: flex;
            align-items: center;
            justify-content: center;
            width: 311px;
          `}
        >
          Congratulations
        </div>
        <div
          className={css`
            position: relative;
            line-height: 24px;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 311px;
          `}
        >
          You've successfully connect your Phantom Wallet. Remember to keep your
          seed phrase safe, it's your responsibility!
        </div>
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
            <p
              className={css`
                margin: 0;
              `}
            >
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
              <span className={css``}>
                {" "}
                cannot recover your wallet should you lose it. You can find your
                seedphrase in
              </span>
            </p>
            <p
              className={css`
                margin: 0;
              `}
            >{`Setings > Security & Privacy`}</p>
          </span>
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          top: 168px;
          left: 128px;
          width: 120px;
          height: 120px;
        `}
        alt=""
        src="/iconcheckselect1.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 44px;
          left: 0px;
          background-color: var(--transparent);
          width: 375px;
          height: 44px;
          text-align: right;
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
    </div>
  );
};

export default ConnectPhantom11;
