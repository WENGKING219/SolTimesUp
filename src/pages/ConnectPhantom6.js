import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const ConnectPhantom6 = () => {
  const navigate = useNavigate();

  const onButtonBoldTextClick = useCallback(() => {
    navigate("/connect-phantom-2");
  }, [navigate]);

  const onButtonBoldText1Click = useCallback(() => {
    navigate("/connect-phantom-10");
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
        font-size: var(--btn-small-normal-size);
        color: var(--white);
        font-family: var(--btn-large-normal);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 44px;
          left: 0px;
          background-color: var(--transparent);
          width: 375px;
          height: 44px;
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
          top: 270px;
          left: 0px;
          background-color: var(--color-gray-600);
          width: 375px;
          height: 542px;
          font-size: var(--btn-large-normal-size);
          font-family: var(--chrome-extension-body-medium);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            background-color: var(--color-gray-600);
            width: 375px;
            height: 46px;
            font-family: var(--btn-large-normal);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 13px;
              left: calc(50% - 37.5px);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              gap: var(--gap-7xs);
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              UNFOLD
            </div>
            <img
              className={css`
                position: relative;
                width: 7px;
                height: 4px;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src="/frame1.svg"
            />
          </div>
          <div
            className={css`
              position: absolute;
              top: 45px;
              left: 0px;
              background-color: var(--color-gray-100);
              width: 360px;
              height: 1px;
            `}
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: 177px;
            left: 31px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-8xl);
            font-size: var(--paragraph-regular-size);
          `}
        >
          <div
            className={css`
              width: 320px;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: flex-start;
              gap: var(--gap-xl);
              font-size: var(--chrome-extension-h2-size);
            `}
          >
            <img
              className={css`
                position: relative;
                border-radius: var(--br-xl);
                width: 90px;
                height: 90px;
                overflow: hidden;
                flex-shrink: 0;
                display: none;
              `}
              alt=""
              src="/icon3.svg"
            />
            <div
              className={css`
                align-self: stretch;
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: flex-start;
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  align-self: stretch;
                  position: relative;
                  font-weight: 500;
                `}
              >
                Jupiter Aggregator
              </div>
              <div
                className={css`
                  align-self: stretch;
                  position: relative;
                  font-size: var(--btn-large-normal-size);
                  color: var(--color-dimgray-100);
                `}
              >
                SolTimesUp.io
              </div>
            </div>
          </div>
          <img
            className={css`
              position: relative;
              width: 320px;
              height: 1px;
            `}
            alt=""
            src="/rectangle-144.svg"
          />
          <div
            className={css`
              align-self: stretch;
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              padding: 0px var(--padding-smi);
              gap: var(--gap-lgi);
              text-align: left;
            `}
          >
            <div
              className={css`
                position: relative;
                line-height: 17px;
                font-weight: 500;
                color: var(--color-dimgray-100);
              `}
            >
              This app would like to:
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: var(--gap-mid);
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 16px;
                  height: 12px;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src="/checkmark1.svg"
              />
              <div
                className={css`
                  position: relative;
                  line-height: 17px;
                `}
              >{`View  your wallet balance & activity`}</div>
            </div>
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
                gap: var(--gap-mid);
              `}
            >
              <img
                className={css`
                  position: relative;
                  width: 16px;
                  height: 12px;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src="/checkmark1.svg"
              />
              <div
                className={css`
                  position: relative;
                  line-height: 17px;
                `}
              >
                Request approval for transactions
              </div>
            </div>
          </div>
          <img
            className={css`
              position: relative;
              width: 320px;
              height: 1px;
            `}
            alt=""
            src="/rectangle-144.svg"
          />
          <div
            className={css`
              position: relative;
              line-height: 17px;
              color: var(--color-dimgray-100);
              display: flex;
              align-items: center;
              justify-content: center;
              width: 320px;
            `}
          >
            Only connect to websites you trust
          </div>
        </div>
        <img
          className={css`
            position: absolute;
            top: 32px;
            left: 109px;
            width: 163px;
            height: 163px;
            object-fit: cover;
          `}
          alt=""
          src="/group-58@2x.png"
        />
        <div
          className={css`
            position: absolute;
            bottom: 0px;
            left: calc(50% - 187.5px);
            width: 375px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: var(--padding-sm) var(--padding-xl);
            box-sizing: border-box;
            gap: var(--gap-3xs);
          `}
        >
          <div
            className={css`
              position: relative;
              border-radius: var(--br-7xs);
              background-color: var(--color-darkslategray-500);
              width: 155px;
              height: 47px;
              overflow: hidden;
              flex-shrink: 0;
              cursor: pointer;
            `}
            onClick={onButtonBoldTextClick}
          >
            <div
              className={css`
                position: absolute;
                top: calc(50% - 9.5px);
                left: calc(50% - 26.5px);
                font-weight: 600;
              `}
            >
              Cancel
            </div>
          </div>
          <div
            className={css`
              position: relative;
              border-radius: var(--br-7xs);
              background-color: var(--blue);
              width: 155px;
              height: 47px;
              overflow: hidden;
              flex-shrink: 0;
              cursor: pointer;
            `}
            onClick={onButtonBoldText1Click}
          >
            <div
              className={css`
                position: absolute;
                top: calc(50% - 9.5px);
                left: calc(50% - 32.5px);
                font-weight: 600;
              `}
            >
              Connect
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectPhantom6;
