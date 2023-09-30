import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const onBackContainerClick = useCallback(() => {
    navigate("/home-page");
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
        text-align: left;
        font-size: var(--title-1-size);
        color: var(--white);
        font-family: var(--btn-large-normal);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 0px;
          left: 0px;
          background-color: var(--color-gray-1600);
          backdrop-filter: blur(20px);
          width: 375px;
          height: 809px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 76px;
          left: 150px;
          font-size: var(--paragraph-regular-size);
          line-height: 20px;
          font-weight: 500;
          color: var(--color-gray-1700);
          display: inline-block;
          width: 80px;
        `}
      >
        Dashboard
      </div>
      <img
        className={css`
          position: absolute;
          top: 35px;
          left: 316px;
          width: 32px;
          height: 32px;
          object-fit: cover;
        `}
        alt=""
        src="/avatarelvis@2x.png"
      />
      <img
        className={css`
          position: absolute;
          height: 2.9%;
          width: 4.31%;
          top: 4.94%;
          right: 69.55%;
          bottom: 92.16%;
          left: 26.13%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
        `}
        alt=""
        src="/group-3161@2x.png"
      />
      <img
        className={css`
          position: absolute;
          height: 2.84%;
          width: 43.68%;
          top: 4.94%;
          right: 25.12%;
          bottom: 92.21%;
          left: 31.2%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/group-31602.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 109px;
          left: 31px;
          border-radius: var(--br-xl);
          background: linear-gradient(
            127.09deg,
            rgba(6, 11, 40, 0.94),
            rgba(10, 14, 35, 0.49)
          );
          backdrop-filter: blur(120px);
          width: 317px;
          height: 316px;
          overflow: hidden;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 26px;
            left: 27px;
            width: 160px;
            height: 43px;
          `}
        >
          <b
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              line-height: 140%;
            `}
          >
            Total hours focus
          </b>
          <div
            className={css`
              position: absolute;
              top: 29px;
              left: 0px;
              font-size: var(--paragraph-regular-size);
              line-height: 100%;
              font-weight: 500;
              color: var(--gray-gray-400);
            `}
          >
            From all sessions
          </div>
        </div>
        <img
          className={css`
            position: absolute;
            top: 55.2px;
            left: calc(50% - 144.3px);
            width: 289.6px;
            height: 289.6px;
          `}
          alt=""
          src="/progress-bar.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 224px;
            left: calc(50% - 145.5px);
            width: 293px;
            height: 82px;
            font-size: var(--btn-small-normal-size);
            color: var(--gray-gray-400);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: calc(50% - 146.5px);
              border-radius: var(--br-xl);
              background: linear-gradient(
                126.97deg,
                rgba(6, 11, 40, 0.74),
                rgba(10, 14, 35, 0.71)
              );
              backdrop-filter: blur(120px);
              width: 293px;
              height: 82px;
              overflow: hidden;
            `}
          >
            <b
              className={css`
                position: absolute;
                top: 17px;
                left: 88px;
                font-size: var(--chrome-extension-h2-size);
                line-height: 100%;
                color: var(--white);
              `}
            >
              75 Hours
            </b>
            <div
              className={css`
                position: absolute;
                top: 51px;
                left: 117px;
                line-height: 100%;
              `}
            >
              Good job!
            </div>
            <div
              className={css`
                position: absolute;
                top: 17px;
                left: 25px;
                line-height: 100%;
              `}
            >
              0 Hour
            </div>
            <div
              className={css`
                position: absolute;
                top: 15px;
                left: 227px;
                line-height: 100%;
              `}
            >
              100 Hours
            </div>
          </div>
        </div>
        <img
          className={css`
            position: absolute;
            top: 145px;
            left: calc(50% - 23.5px);
            width: 48px;
            height: 48px;
          `}
          alt=""
          src="/icon1.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 438.81px;
          left: 31px;
          width: 317px;
          height: 66.39px;
          font-size: var(--font-size-3xs);
          color: var(--gray-gray-400);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: var(--br-xl);
            background: linear-gradient(
              126.97deg,
              rgba(6, 11, 38, 0.74),
              rgba(26, 31, 55, 0.5)
            );
            backdrop-filter: blur(120px);
            width: 317px;
            height: 66.39px;
          `}
        />
        <div
          className={css`
            position: absolute;
            top: 18.19px;
            left: 17.84px;
            width: 127.16px;
            height: 32.84px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0.16px;
              line-height: 100%;
              font-weight: 500;
              display: inline-block;
              width: 103px;
              height: 10px;
            `}
          >
            Total tokens earned
          </div>
          <b
            className={css`
              position: absolute;
              top: 12.1px;
              left: 0px;
              font-size: var(--title-1-size);
              line-height: 140%;
              display: inline-block;
              color: var(--white);
              width: 79.81px;
              height: 20.75px;
            `}
          >
            1.2 SOL
          </b>
          <b
            className={css`
              position: absolute;
              top: 15.42px;
              left: 83.53px;
              font-size: var(--paragraph-regular-size);
              line-height: 140%;
              display: inline-block;
              color: var(--primary-green-500-success-color);
              width: 43.63px;
              height: 16.6px;
            `}
          >
            +13%
          </b>
        </div>
        <img
          className={css`
            position: absolute;
            top: 12.52px;
            left: 259.63px;
            width: 48.34px;
            height: 48.34px;
          `}
          alt=""
          src="/icon.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 31px;
          left: 31px;
          width: 25.48px;
          height: 36px;
          cursor: pointer;
        `}
        onClick={onBackContainerClick}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: var(--br-71xl);
            background-color: var(--color-whitesmoke-100);
            width: 25.48px;
            height: 36px;
          `}
        />
        <img
          className={css`
            position: absolute;
            top: 12.14px;
            left: 9.16px;
            width: 11.55px;
            height: 12.14px;
            overflow: hidden;
          `}
          alt=""
          src="/materialsymbolsarrowbackiosrounded4.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 519px;
          left: 31px;
          border-radius: var(--br-xl);
          background: linear-gradient(
            126.97deg,
            rgba(6, 11, 40, 0.74),
            rgba(14, 21, 58, 0.71)
          );
          backdrop-filter: blur(120px);
          width: 314px;
          height: 259px;
          overflow: hidden;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 12px;
            left: 17px;
            width: 160px;
            height: 25px;
          `}
        >
          <b
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              line-height: 140%;
            `}
          >
            Referral Tracking
          </b>
        </div>
        <img
          className={css`
            position: absolute;
            top: 9px;
            right: 8px;
            width: 37px;
            height: 37px;
          `}
          alt=""
          src="/more.svg"
        />
        <div
          className={css`
            position: absolute;
            top: calc(50% - 80.5px);
            left: 20px;
            border-radius: var(--br-xl);
            background: linear-gradient(
              126.97deg,
              #060c29,
              rgba(4, 12, 48, 0.5)
            );
            backdrop-filter: blur(120px);
            width: 273px;
            height: 93px;
            overflow: hidden;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 20px;
              left: 24px;
              width: 98px;
              height: 44px;
            `}
          >
            <b
              className={css`
                position: absolute;
                top: 19px;
                left: 0px;
                line-height: 140%;
              `}
            >
              145 people
            </b>
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                font-size: var(--paragraph-regular-size);
                line-height: 100%;
                font-weight: 500;
                color: var(--gray-gray-400);
              `}
            >
              Invited
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            bottom: 12px;
            left: 20px;
            border-radius: var(--br-xl);
            background: linear-gradient(
              126.97deg,
              #060c29,
              rgba(4, 12, 48, 0.5)
            );
            backdrop-filter: blur(120px);
            width: 273px;
            height: 93px;
            overflow: hidden;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 20px;
              left: 24px;
              width: 79px;
              height: 44px;
            `}
          >
            <b
              className={css`
                position: absolute;
                top: 19px;
                left: 0px;
                line-height: 140%;
              `}
            >
              6 people
            </b>
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                font-size: var(--paragraph-regular-size);
                line-height: 100%;
                font-weight: 500;
                color: var(--gray-gray-400);
              `}
            >
              This week
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
