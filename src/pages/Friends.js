import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Friends = () => {
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
        font-size: var(--font-size-3xs);
        color: var(--gray-gray-400);
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
          top: 107px;
          left: 26px;
          width: 317px;
          height: 66.39px;
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
            top: 9px;
            left: 17px;
            width: 194px;
            height: 45px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 34px;
              left: 0px;
              line-height: 100%;
              font-weight: 500;
              display: inline-block;
              width: 131px;
              height: 10px;
            `}
          >
            Total time focus together
          </div>
          <b
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              font-size: var(--title-1-size);
              line-height: 140%;
              display: inline-block;
              color: var(--white);
              width: 79.81px;
              height: 20.75px;
            `}
          >
            Emily
          </b>
          <b
            className={css`
              position: absolute;
              top: 28px;
              left: 131px;
              font-size: var(--paragraph-regular-size);
              line-height: 140%;
              display: inline-block;
              color: var(--primary-green-500-success-color);
              width: 63px;
              height: 17px;
            `}
          >
            30 Hours
          </b>
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          top: 347px;
          left: 26px;
          width: 317px;
          height: 66.39px;
        `}
        alt=""
        src="/todays-money.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 187px;
          left: 26px;
          width: 317px;
          height: 66.39px;
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
            top: 9px;
            left: 17px;
            width: 194px;
            height: 45px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 34px;
              left: 0px;
              line-height: 100%;
              font-weight: 500;
              display: inline-block;
              width: 131px;
              height: 10px;
            `}
          >
            Total time focus together
          </div>
          <b
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              font-size: var(--title-1-size);
              line-height: 140%;
              display: inline-block;
              color: var(--white);
              width: 79.81px;
              height: 20.75px;
            `}
          >
            James
          </b>
          <b
            className={css`
              position: absolute;
              top: 28px;
              left: 131px;
              font-size: var(--paragraph-regular-size);
              line-height: 140%;
              display: inline-block;
              color: var(--primary-green-500-success-color);
              width: 63px;
              height: 17px;
            `}
          >
            61 Hours
          </b>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 73px;
          left: 162px;
          font-size: var(--paragraph-regular-size);
          line-height: 20px;
          font-weight: 500;
          color: var(--color-gray-1700);
          display: inline-block;
          width: 52px;
          height: 20px;
        `}
      >
        Friends
      </div>
      <div
        className={css`
          position: absolute;
          top: 462px;
          left: 29px;
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
          text-align: center;
          font-size: var(--btn-large-normal-size);
          color: var(--white);
          font-family: var(--chrome-extension-body-medium);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 16px;
            left: 46px;
            width: 225px;
            height: 284.83px;
          `}
        >
          <img
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              width: 225px;
              height: 153.26px;
            `}
            alt=""
            src="/group-71.svg"
          />
          <b
            className={css`
              position: absolute;
              top: 174px;
              left: 31px;
              letter-spacing: 0.01em;
              display: inline-block;
              text-align: left;
              width: 164px;
              height: 19px;
            `}
          >
            Join Our Community
          </b>
          <div
            className={css`
              position: absolute;
              top: 199px;
              left: 15px;
              font-size: var(--font-size-3xs);
              letter-spacing: 0.01em;
              line-height: 150%;
              display: inline-block;
              width: 196.87px;
              height: 28.81px;
            `}
          >
            Connect more friends, focus together and earn more tokens.
          </div>
          <img
            className={css`
              position: absolute;
              top: 30.01px;
              left: 46px;
              width: 63.38px;
              height: 63.38px;
              overflow: hidden;
              display: none;
            `}
            alt=""
            src="/profile2user-2.svg"
          />
          <div
            className={css`
              position: absolute;
              top: 246.41px;
              left: 3.84px;
              width: 216.08px;
              height: 38.41px;
              font-size: var(--paragraph-regular-size);
              font-family: var(--btn-large-normal);
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                border-radius: var(--br-xs);
                background-color: #2b2b2b;
                width: 216.08px;
                height: 38.41px;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: 9.59px;
                left: 71.16px;
                letter-spacing: 0.01em;
                font-weight: 600;
                background: linear-gradient(
                  90.74deg,
                  #924fff 9.8%,
                  #00ffff 54.69%,
                  #14f195
                );
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
                display: inline-block;
                width: 72px;
                height: 20px;
              `}
            >
              Join Now
            </div>
          </div>
        </div>
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
        src="/group-31611@2x.png"
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
        src="/group-31601.svg"
      />
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
          src="/materialsymbolsarrowbackiosrounded3.svg"
        />
      </div>
      <img
        className={css`
          position: absolute;
          top: 117px;
          left: 287px;
          border-radius: var(--br-81xl);
          width: 45px;
          height: 45px;
          overflow: hidden;
        `}
        alt=""
        src="/robot--02.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 196px;
          left: 287px;
          border-radius: var(--br-81xl);
          width: 45px;
          height: 45px;
          overflow: hidden;
        `}
        alt=""
        src="/pawn1.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 267px;
          left: 26px;
          width: 317px;
          height: 66.39px;
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
            top: 9px;
            left: 17px;
            width: 194px;
            height: 45px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 34px;
              left: 0px;
              line-height: 100%;
              font-weight: 500;
              display: inline-block;
              width: 131px;
              height: 10px;
            `}
          >
            Total time focus together
          </div>
          <b
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              font-size: var(--title-1-size);
              line-height: 140%;
              display: inline-block;
              color: var(--white);
              width: 79.81px;
              height: 20.75px;
            `}
          >
            Steph
          </b>
          <b
            className={css`
              position: absolute;
              top: 28px;
              left: 131px;
              font-size: var(--paragraph-regular-size);
              line-height: 140%;
              display: inline-block;
              color: var(--primary-green-500-success-color);
              width: 63px;
              height: 17px;
            `}
          >
            29 Hours
          </b>
        </div>
        <img
          className={css`
            position: absolute;
            top: 10px;
            left: 261px;
            border-radius: var(--br-81xl);
            width: 45px;
            height: 45px;
            overflow: hidden;
          `}
          alt=""
          src="/peppe--10.svg"
        />
      </div>
    </div>
  );
};

export default Friends;
