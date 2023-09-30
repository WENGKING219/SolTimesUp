import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Messages = () => {
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
        font-size: var(--paragraph-regular-size);
        color: var(--color-lightslategray);
        font-family: var(--font-dm-sans);
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
      <img
        className={css`
          position: absolute;
          top: 118px;
          left: 31px;
          border-radius: var(--br-81xl);
          width: 31px;
          height: 31px;
          overflow: hidden;
        `}
        alt=""
        src="/pawn.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 72px;
          left: 152px;
          line-height: 20px;
          font-weight: 500;
          font-family: var(--btn-large-normal);
          color: var(--color-gray-1700);
          display: inline-block;
          width: 72px;
          height: 20px;
        `}
      >
        Messages
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
        src="/group-3160.svg"
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
          src="/materialsymbolsarrowbackiosrounded.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 745px;
          left: 24px;
          border-radius: 25px;
          background-color: #1e1f25;
          width: 327px;
          height: 35px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 754px;
          left: 41px;
          width: 166px;
          height: 17px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 32px;
            font-weight: 500;
            background: linear-gradient(
              89.62deg,
              #924fff,
              #00ffff 47.92%,
              #14f195
            );
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            display: inline-block;
            width: 134px;
            height: 17px;
          `}
        >
          Add a comment...
        </div>
        <img
          className={css`
            position: absolute;
            height: 74.12%;
            width: 4.83%;
            top: 10.98%;
            right: 95.17%;
            bottom: 14.9%;
            left: 0%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          `}
          alt=""
          src="/group-1000004151.svg"
        />
      </div>
      <img
        className={css`
          position: relative;
          width: 14.38px;
          height: 14.42px;
        `}
        alt=""
        src="/union.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 1.67%;
          width: 3.56%;
          top: 93.33%;
          right: 15.9%;
          bottom: 5.01%;
          left: 80.53%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/shape.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 1.71%;
          width: 3.56%;
          top: 93.2%;
          right: 26.84%;
          bottom: 5.09%;
          left: 69.6%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/group-1000004152.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 1.87%;
          width: 3.56%;
          top: 93.13%;
          right: 10.4%;
          bottom: 5%;
          left: 86.04%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/shape1.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 134.38px;
          left: 67.39px;
          width: 269.04px;
          height: 30.13px;
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 269.04px;
            height: 30.13px;
          `}
          alt=""
          src="/rectangle-5375.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 7.62px;
            left: 15.61px;
            font-weight: 500;
            display: inline-block;
            width: 204px;
            height: 14px;
          `}
        >
          Hi, Are you in SPARKATHON.
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 170.25px;
          left: 67.39px;
          width: 250.71px;
          height: 30.13px;
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: var(--br-3xs);
            width: 250.71px;
            height: 30.13px;
          `}
          alt=""
          src="/rectangle-53751.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 5.75px;
            left: 15.61px;
            font-weight: 500;
            display: inline-block;
            width: 221px;
            height: 17px;
          `}
        >{`would love to see you all there `}</div>
      </div>
      <img
        className={css`
          position: absolute;
          height: 1.24%;
          width: 0.8%;
          top: 17.8%;
          right: 6.4%;
          bottom: 80.96%;
          left: 92.8%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/vector1.svg"
      />
      <b
        className={css`
          position: absolute;
          top: 116px;
          left: 67px;
          font-size: var(--btn-large-normal-size);
          display: inline-block;
          color: var(--neutral-20);
          width: 98px;
          height: 16px;
        `}
      >
        James
      </b>
    </div>
  );
};

export default Messages;
