import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Settings = () => {
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
        color: var(--white);
        font-family: var(--default-sub-heading-regular-sub-heading-s);
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
          top: 72px;
          left: 155px;
          line-height: 20px;
          font-weight: 500;
          font-family: var(--btn-large-normal);
          color: var(--color-gray-1700);
          display: inline-block;
          width: 60px;
          height: 20px;
        `}
      >
        Settings
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
          top: 107px;
          left: 133px;
          width: 120px;
          height: 120px;
          object-fit: cover;
        `}
        alt=""
        src="/avatarelvis1@2x.png"
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
      <div
        className={css`
          position: absolute;
          top: 620px;
          left: 33px;
          width: 317px;
          height: 72px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-9xs);
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 20px;
            `}
          >
            Bio
          </div>
          <div
            className={css`
              align-self: stretch;
              border-radius: var(--br-9xs);
              background-color: var(--color-darkslategray-400);
              border: 1px solid var(--boarder);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-xs) var(--padding-5xl);
              font-size: var(--btn-large-normal-size);
              color: var(--neutral-70);
            `}
          >
            <div
              className={css`
                flex: 1;
                position: relative;
                line-height: 24px;
              `}
            >
              Software Developer
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              position: relative;
              font-size: var(--btn-small-normal-size);
              line-height: 20px;
              font-weight: 300;
              color: var(--neutral-90);
              display: none;
            `}
          >
            Input helper text
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 442px;
          left: 31px;
          width: 317px;
          height: 72px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-9xs);
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 20px;
            `}
          >
            Last name
          </div>
          <div
            className={css`
              align-self: stretch;
              border-radius: var(--br-9xs);
              background-color: var(--color-darkslategray-400);
              border: 1px solid var(--boarder);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-xs) var(--padding-5xl);
              font-size: var(--btn-large-normal-size);
              color: var(--neutral-70);
            `}
          >
            <div
              className={css`
                flex: 1;
                position: relative;
                line-height: 24px;
              `}
            >
              Ma
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              position: relative;
              font-size: var(--btn-small-normal-size);
              line-height: 20px;
              font-weight: 300;
              color: var(--neutral-90);
              display: none;
            `}
          >
            Input helper text
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 531px;
          left: 31px;
          width: 317px;
          height: 72px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-9xs);
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 20px;
            `}
          >
            Email
          </div>
          <div
            className={css`
              align-self: stretch;
              border-radius: var(--br-9xs);
              background-color: var(--color-darkslategray-400);
              border: 1px solid var(--boarder);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-xs) var(--padding-5xl);
              font-size: var(--btn-large-normal-size);
              color: var(--neutral-70);
            `}
          >
            <div
              className={css`
                flex: 1;
                position: relative;
                line-height: 24px;
              `}
            >
              1longma@gmail.com
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              position: relative;
              font-size: var(--btn-small-normal-size);
              line-height: 20px;
              font-weight: 300;
              color: var(--neutral-90);
              display: none;
            `}
          >
            Input helper text
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 353px;
          left: 31px;
          width: 317px;
          height: 72px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
        `}
      >
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            gap: var(--gap-9xs);
          `}
        >
          <div
            className={css`
              align-self: stretch;
              position: relative;
              line-height: 20px;
            `}
          >
            First name
          </div>
          <div
            className={css`
              align-self: stretch;
              border-radius: var(--br-9xs);
              background-color: var(--color-darkslategray-400);
              border: 1px solid var(--boarder);
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-xs) var(--padding-5xl);
              font-size: var(--btn-large-normal-size);
              color: var(--neutral-70);
            `}
          >
            <div
              className={css`
                flex: 1;
                position: relative;
                line-height: 24px;
              `}
            >
              Elong
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              position: relative;
              font-size: var(--btn-small-normal-size);
              line-height: 20px;
              font-weight: 300;
              color: var(--neutral-90);
              display: none;
            `}
          >
            Input helper text
          </div>
        </div>
      </div>
      <b
        className={css`
          position: absolute;
          top: 301px;
          left: 31px;
          font-size: var(--btn-large-normal-size);
          font-family: var(--font-space-grotesk);
          text-align: center;
        `}
      >
        Personal Information
      </b>
      <b
        className={css`
          position: absolute;
          top: 702px;
          left: 33px;
          font-size: var(--btn-large-normal-size);
          font-family: var(--font-space-grotesk);
          background: linear-gradient(
            89.62deg,
            #9945ff,
            #00ffff 47.92%,
            #14f195
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: center;
        `}
      >
        Change Password
      </b>
      <div
        className={css`
          position: absolute;
          top: 107px;
          left: 130px;
          width: 120px;
          height: 120px;
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 120px;
            height: 120px;
          `}
          alt=""
          src="/avatar.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 86px;
            left: 84px;
            border-radius: 60px;
            background-color: var(--color-mediumspringgreen);
            box-shadow: var(--shadow-1);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: var(--padding-7xs);
          `}
        >
          <img
            className={css`
              position: relative;
              width: 20px;
              height: 20px;
              overflow: hidden;
              flex-shrink: 0;
            `}
            alt=""
            src="/iconssmallfillededitimagefilled1.svg"
          />
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 225px;
          left: 136px;
          font-size: var(--default-sub-heading-medium-sub-heading-l-size);
          line-height: 36px;
          font-weight: 500;
        `}
      >
        Elong Ma
      </div>
      <div
        className={css`
          position: absolute;
          top: 257px;
          left: 106px;
          font-size: var(--btn-large-normal-size);
          line-height: 24px;
          color: #d3d3d3;
          display: inline-block;
          width: 162px;
        `}
      >
        1longma@gmail.com
      </div>
      <div
        className={css`
          position: absolute;
          height: 3.21%;
          width: 14.4%;
          top: 36.84%;
          right: 7.2%;
          bottom: 59.95%;
          left: 78.4%;
          backdrop-filter: blur(0px);
          text-align: center;
          font-size: var(--btn-large-normal-size);
          font-family: var(--font-space-grotesk);
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
          src="/vector.svg"
        />
        <b
          className={css`
            position: absolute;
            top: 3px;
            left: 7.53px;
            display: inline-block;
            width: 38.93px;
          `}
        >
          Edit
        </b>
      </div>
    </div>
  );
};

export default Settings;
