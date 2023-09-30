import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Payment6 = () => {
  const navigate = useNavigate();

  const onHeaderBarContainerClick = useCallback(() => {
    navigate("/join-room-2");
  }, [navigate]);

  const onButtonBoldTextClick = useCallback(() => {
    navigate("/focus-room-1");
  }, [navigate]);

  return (
    <div
      className={css`
        position: relative;
        width: 100%;
        height: 809px;
        overflow: hidden;
        background-image: url("/schedule@3x.png");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: top;
        text-align: center;
        font-size: var(--btn-large-normal-size);
        color: var(--white);
        font-family: var(--font-space-grotesk);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 37px;
          left: 24px;
          width: 56.36px;
          height: 79.63px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: var(--br-71xl);
            background-color: var(--color-whitesmoke-100);
            width: 56.36px;
            height: 79.63px;
          `}
        />
        <img
          className={css`
            position: absolute;
            top: 26.85px;
            left: 20.26px;
            width: 25.54px;
            height: 26.85px;
            overflow: hidden;
          `}
          alt=""
          src="/materialsymbolsarrowbackiosrounded8.svg"
        />
      </div>
      <img
        className={css`
          position: absolute;
          top: 37px;
          left: 292px;
          width: 56.36px;
          height: 79.63px;
          object-fit: cover;
        `}
        alt=""
        src="/profile@2x.png"
      />
      <div
        className={css`
          position: absolute;
          top: 342px;
          left: 303px;
          width: 42px;
          height: 238px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-mid);
          font-size: 23.45px;
          color: var(--color-slategray);
        `}
      >
        <div
          className={css`
            border-radius: var(--br-71xl);
            background: linear-gradient(180deg, #ff6d03, #19fb9b);
            border: 1.5px solid var(--color-gray-900);
            box-sizing: border-box;
            height: 68px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: var(--padding-mini) var(--padding-5xs);
            color: var(--white);
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
            <b
              className={css`
                position: relative;
              `}
            >
              01
            </b>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              font-size: 10.09px;
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              hour
            </div>
          </div>
        </div>
        <div
          className={css`
            border-radius: var(--br-71xl);
            background-color: var(--color-mediumspringgreen);
            width: 42px;
            height: 68px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: var(--padding-mini) var(--padding-5xs);
            box-sizing: border-box;
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
            <b
              className={css`
                position: relative;
              `}
            >
              02
            </b>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              font-size: 10.09px;
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              hours
            </div>
          </div>
        </div>
        <div
          className={css`
            border-radius: var(--br-71xl);
            background-color: var(--color-mediumseagreen-100);
            width: 42px;
            height: 68px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: space-between;
            padding: var(--padding-mini) var(--padding-5xs);
            box-sizing: border-box;
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
            <b
              className={css`
                position: relative;
              `}
            >
              03
            </b>
          </div>
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              font-size: 10.09px;
            `}
          >
            <div
              className={css`
                position: relative;
                font-weight: 500;
              `}
            >
              hours
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 497px;
          left: 24px;
          border-radius: var(--br-181xl);
          background-color: var(--color-aquamarine);
          backdrop-filter: blur(17px);
          width: 104px;
          height: 178px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: var(--padding-6xl) var(--padding-xl);
          box-sizing: border-box;
          font-size: var(--font-size-17xl);
          color: var(--color-slategray);
        `}
      >
        <div
          className={css`
            position: relative;
            width: 67px;
            height: 143px;
          `}
        >
          <b
            className={css`
              position: absolute;
              top: 67px;
              left: 4.5px;
              display: inline-block;
              width: 58px;
              height: 47px;
            `}
          >
            0.1
          </b>
          <b
            className={css`
              position: absolute;
              top: 114px;
              left: 5.5px;
              font-size: var(--btn-large-normal-size);
              line-height: 13px;
              display: inline-block;
              background: linear-gradient(180deg, #bd95ff, #193376);
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
              width: 55px;
              height: 29px;
            `}
          >
            <p
              className={css`
                margin: 0;
              `}
            >
              5%
            </p>
            <p
              className={css`
                margin: 0;
              `}
            >
              Return
            </p>
          </b>
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              border-radius: 202.53px;
              background-color: var(--color-gray-1000);
              backdrop-filter: blur(13px);
              width: 67px;
              height: 67px;
            `}
          />
          <img
            className={css`
              position: absolute;
              top: 23px;
              left: 20.5px;
              width: 25px;
              height: 22px;
              overflow: hidden;
            `}
            alt=""
            src="/solanalogomark-1.svg"
          />
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 704px;
          left: 48px;
          border-radius: 109.41px;
          background-color: var(--color-gray-1100);
          backdrop-filter: blur(15.8px);
          border: 1px solid var(--color-dimgray-200);
          box-sizing: border-box;
          width: 280px;
          height: 57px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: 0px var(--padding-19xl) 0px var(--padding-22xl);
          font-size: 18.24px;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 19.45098114013672px;
            z-index: 0;
          `}
        >
          <b
            className={css`
              position: relative;
            `}
          >
            Swipe to pay
          </b>
        </div>
        <img
          className={css`
            position: absolute;
            margin: 0 !important;
            top: 8px;
            left: 10px;
            border-radius: 217.81px;
            width: 41px;
            height: 41px;
            overflow: hidden;
            flex-shrink: 0;
            object-fit: cover;
            z-index: 1;
          `}
          alt=""
          src="/frame-42@2x.png"
        />
      </div>
      <img
        className={css`
          position: absolute;
          top: 127px;
          left: 26px;
          width: 322px;
          height: 195px;
        `}
        alt=""
        src="/group-214.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 630px;
          left: 233px;
          border-radius: var(--br-181xl);
          background-color: var(--color-mediumseagreen-200);
          backdrop-filter: blur(17px);
          width: 112px;
          height: 45px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-start;
          padding: var(--padding-3xs) var(--padding-16xl);
          box-sizing: border-box;
          font-size: var(--font-size-7xl);
        `}
      >
        <div
          className={css`
            width: 95px;
            height: 25px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              width: 86px;
              height: 31px;
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
            `}
          >
            <b
              className={css`
                position: relative;
              `}
            >
              ROOM 1
            </b>
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          height: 6.8%;
          width: 36.53%;
          top: 42.27%;
          right: 57.07%;
          bottom: 50.93%;
          left: 6.4%;
          backdrop-filter: blur(0px);
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
          `}
          alt=""
          src="/vector2.svg"
        />
        <b
          className={css`
            position: absolute;
            top: 5px;
            left: 21px;
          `}
        >
          Study Alone
        </b>
        <b
          className={css`
            position: absolute;
            top: 28px;
            left: 13px;
            color: var(--color-gray-1200);
          `}
        >
          Tap to change
        </b>
      </div>
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          background-color: var(--color-gray-1300);
          width: 375px;
          height: 809px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 269px;
          left: 0px;
          background-color: var(--color-gray-600);
          width: 375px;
          height: 540px;
          font-family: var(--btn-large-normal);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            background-color: var(--color-gray-600);
            width: 375px;
            height: 47px;
            overflow: hidden;
            cursor: pointer;
          `}
          onClick={onHeaderBarContainerClick}
        >
          <div
            className={css`
              position: absolute;
              top: 14px;
              left: calc(50% - 31.5px);
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
              width: 100%;
              right: 0px;
              bottom: 0px;
              left: 0px;
              background-color: var(--color-gray-100);
              height: 1px;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: calc(50% - 12px);
              left: 17px;
              width: 24px;
              height: 24px;
              font-size: var(--font-size-3xs);
              font-family: var(--chrome-extension-body-medium);
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                border-radius: 50%;
                background-color: var(--blue);
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
              top: 17.5px;
              left: 331px;
              border-radius: 50%;
              background-color: var(--green);
              width: 12px;
              height: 12px;
              display: none;
            `}
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: 153px;
            left: calc(50% - 151.5px);
            width: 304px;
            height: 232px;
            font-family: var(--chrome-extension-body-medium);
          `}
        >
          <img
            className={css`
              position: absolute;
              top: 0px;
              left: calc(50% - 47px);
              width: 94px;
              height: 94px;
            `}
            alt=""
            src="/group-533.svg"
          />
          <div
            className={css`
              position: absolute;
              top: 114px;
              left: calc(50% - 132px);
              font-size: var(--chrome-extension-h2-size);
              font-weight: 500;
              display: flex;
              align-items: center;
              justify-content: center;
              width: 264px;
            `}
          >
            Sent!
          </div>
          <div
            className={css`
              position: absolute;
              top: 158px;
              left: calc(50% - 152px);
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              justify-content: flex-start;
              gap: var(--gap-10xs);
              color: var(--color-dimgray-100);
            `}
          >
            <div
              className={css`
                position: relative;
                display: flex;
                align-items: center;
                justify-content: center;
                width: 304px;
              `}
            >
              Your tokens were successfully sent to
            </div>
            <div
              className={css`
                position: relative;
                color: var(--white);
                display: flex;
                align-items: center;
                justify-content: center;
                width: 304px;
              `}
            >
              YTz6...VDWgW
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 213px;
              left: calc(50% - 132px);
              font-weight: 500;
              color: var(--purple);
              display: flex;
              align-items: center;
              justify-content: center;
              width: 264px;
            `}
          >
            View transaction
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          bottom: 0px;
          left: calc(50% - 187.5px);
          background-color: var(--color-gray-300);
          border-top: 1px solid var(--color-gray-100);
          box-sizing: border-box;
          width: 375px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: var(--padding-sm) var(--padding-xl);
          gap: var(--gap-3xs);
          font-family: var(--chrome-extension-body-medium);
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
              left: calc(50% - 34.5px);
              font-weight: 600;
            `}
          >
            Continue
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
            display: none;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: calc(50% - 9.5px);
              left: calc(50% - 32.5px);
              font-weight: 600;
            `}
          >
            Approve
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment6;
