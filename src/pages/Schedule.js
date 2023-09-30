import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const Schedule = () => {
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
          top: 72px;
          left: 152px;
          line-height: 20px;
          font-weight: 500;
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
          top: 108px;
          left: 10px;
          border-radius: 33px;
          background: linear-gradient(
            164.41deg,
            rgba(6, 11, 40, 0.9),
            rgba(88, 86, 86, 0)
          );
          width: 355px;
          height: 299px;
        `}
      />
      <div
        className={css`
          position: absolute;
          top: 148px;
          left: 140px;
          font-size: var(--title-1-size);
          font-weight: 600;
          text-align: right;
        `}
      >
        December
      </div>
      <div
        className={css`
          position: absolute;
          top: 309px;
          left: 28px;
          width: 319px;
          height: 64px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: var(--br-lg);
            background-color: var(--gray-20);
            width: 319px;
            height: 64px;
          `}
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 203px;
          left: 28px;
          width: 319px;
          height: 74px;
          text-align: center;
          font-size: var(--font-size-3xs);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 132px;
            width: 55px;
            height: 74px;
            color: var(--color-black);
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              border-radius: var(--br-sm);
              background: linear-gradient(
                180deg,
                #9945ff,
                #00ffff 50%,
                #14f195
              );
              width: 55px;
              height: 74px;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 14px;
              left: 16px;
            `}
          >
            <p
              className={css`
                margin: 0;
              `}
            >
              Wed
            </p>
            <p
              className={css`
                margin: 0;
                font-size: var(--btn-large-normal-size);
                font-weight: 600;
              `}
            >
              29
            </p>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 227.5px;
            height: 74px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              border-radius: var(--br-sm);
              border: 1px solid var(--white);
              box-sizing: border-box;
              width: 54px;
              height: 74px;
              opacity: 0.4;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 14px;
              left: 16px;
              width: 211.5px;
              height: 45px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
              `}
            >
              <p
                className={css`
                  margin: 0;
                `}
              >
                Mon
              </p>
              <p
                className={css`
                  margin: 0;
                  font-size: var(--btn-large-normal-size);
                  font-weight: 600;
                `}
              >
                29
              </p>
            </div>
            <div
              className={css`
                position: absolute;
                top: 42px;
                left: 9.5px;
                border-radius: 50%;
                background-color: #6aaed9;
                width: 3px;
                height: 3px;
              `}
            />
            <div
              className={css`
                position: absolute;
                top: 42px;
                left: 208.5px;
                border-radius: 50%;
                background-color: #f7a097;
                width: 3px;
                height: 3px;
              `}
            />
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 199px;
            width: 54px;
            height: 74px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              border-radius: var(--br-sm);
              border: 1px solid var(--white);
              box-sizing: border-box;
              width: 54px;
              height: 74px;
              opacity: 0.4;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 14px;
              left: 16px;
            `}
          >
            <p
              className={css`
                margin: 0;
              `}
            >
              Thu
            </p>
            <p
              className={css`
                margin: 0;
                font-size: var(--btn-large-normal-size);
                font-weight: 600;
              `}
            >
              30
            </p>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 66px;
            width: 54px;
            height: 74px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              border-radius: var(--br-sm);
              border: 1px solid var(--white);
              box-sizing: border-box;
              width: 54px;
              height: 74px;
              opacity: 0.4;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 14px;
              left: 17px;
            `}
          >
            <p
              className={css`
                margin: 0;
              `}
            >
              Tue
            </p>
            <p
              className={css`
                margin: 0;
                font-size: var(--btn-large-normal-size);
                font-weight: 600;
              `}
            >
              30
            </p>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 265px;
            width: 54px;
            height: 74px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              border-radius: var(--br-sm);
              border: 1px solid var(--white);
              box-sizing: border-box;
              width: 54px;
              height: 74px;
              opacity: 0.4;
            `}
          />
          <div
            className={css`
              position: absolute;
              top: 14px;
              left: 19px;
            `}
          >
            <p
              className={css`
                margin: 0;
              `}
            >
              Fri
            </p>
            <p
              className={css`
                margin: 0;
                font-size: var(--btn-large-normal-size);
                font-weight: 600;
              `}
            >
              31
            </p>
          </div>
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          top: 150px;
          left: 323px;
          width: 24px;
          height: 24px;
        `}
        alt=""
        src="/vuesaxlineararrowright.svg"
      />
      <img
        className={css`
          position: absolute;
          top: 150px;
          left: 28px;
          width: 24px;
          height: 24px;
        `}
        alt=""
        src="/vuesaxlineararrowleft.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 329px;
          left: 131px;
          font-size: var(--btn-large-normal-size);
          font-weight: 600;
          background: linear-gradient(
            91.99deg,
            #9945ff,
            #00ffff 48.44%,
            #14f195
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-align: right;
        `}
      >
        Add Schedule
      </div>
      <div
        className={css`
          position: absolute;
          top: 423px;
          left: 28px;
          font-size: var(--title-1-size);
          font-weight: 600;
        `}
      >
        Wednesday, 29th
      </div>
      <img
        className={css`
          position: absolute;
          top: 484px;
          left: 89px;
          border-radius: var(--br-lg);
          width: 258px;
          height: 147px;
          overflow: hidden;
        `}
        alt=""
        src="/frame-1.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 691px;
          left: 89px;
          border-radius: var(--br-base);
          background: linear-gradient(180deg, #00ffff, rgba(255, 233, 233, 0));
          width: 258px;
          height: 78px;
          overflow: hidden;
          color: var(--color-darkslategray-200);
        `}
      >
        <img
          className={css`
            position: absolute;
            height: 30.77%;
            width: 9.3%;
            top: 57.69%;
            right: 84.5%;
            bottom: 11.54%;
            left: 6.2%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          `}
          alt=""
          src="/mask-group.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 45px;
            left: 50px;
            width: 24px;
            height: 24px;
          `}
          alt=""
          src="/sample.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 45px;
            left: 84px;
            width: 24px;
            height: 24px;
          `}
          alt=""
          src="/sample1.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 5px;
            left: 16px;
            font-weight: 500;
          `}
        >
          Sparkathon Meeting
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 478px;
          left: 28px;
          color: var(--color-darkgray-100);
        `}
      >{`10.00 `}</div>
      <div
        className={css`
          position: absolute;
          top: 685px;
          left: 28px;
          color: var(--color-darkgray-100);
        `}
      >
        13.00
      </div>
      <div
        className={css`
          position: absolute;
          top: 498px;
          left: 105px;
          font-weight: 500;
          color: var(--color-darkslategray-200);
        `}
      >
        Sparkathon-Mentorship session
      </div>
    </div>
  );
};

export default Schedule;
