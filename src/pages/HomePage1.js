import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

const HomePage1 = () => {
  const navigate = useNavigate();

  const onFrameContainer1Click = useCallback(() => {
    navigate("/phantom-wallet");
  }, [navigate]);

  const onBibellIconClick = useCallback(() => {
    navigate("/messages");
  }, [navigate]);

  const onIonsettingsOutlineIconClick = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const onAvatarElvisIconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onApeCardContainer1Click = useCallback(() => {
    navigate("/join-room-1");
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
        font-size: 7.81px;
        color: var(--color-gray-1400);
        font-family: var(--font-space-grotesk);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 49px;
          left: 30px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: var(--gap-77xl);
          font-size: var(--font-size-mini);
          color: var(--white);
        `}
      >
        <div
          className={css`
            border-radius: var(--br-71xl);
            background-color: var(--color-black);
            backdrop-filter: blur(13px);
            border: 1px solid var(--color-darkslategray-300);
            box-sizing: border-box;
            width: 140px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0px var(--padding-9xs) 0px var(--padding-xl);
            transform: rotate(180deg);
            transform-origin: 0 0;
            cursor: pointer;
          `}
          onClick={onFrameContainer1Click}
        >
          <div
            className={css`
              display: flex;
              flex-direction: row;
              align-items: flex-start;
              justify-content: flex-start;
              padding: var(--padding-base);
            `}
          >
            <b
              className={css`
                position: relative;
                display: inline-block;
                width: 44px;
                flex-shrink: 0;
                transform: rotate(180deg);
                transform-origin: 0 0;
              `}
            >
              9.88
            </b>
          </div>
          <img
            className={css`
              position: relative;
              border-radius: 179.17px;
              width: 43px;
              height: 43px;
              overflow: hidden;
              flex-shrink: 0;
            `}
            alt=""
            src="/frame-4.svg"
          />
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            gap: var(--gap-smi);
          `}
        >
          <img
            className={css`
              position: relative;
              width: 16px;
              height: 16px;
              overflow: hidden;
              flex-shrink: 0;
              cursor: pointer;
            `}
            alt=""
            src="/bibell2.svg"
            onClick={onBibellIconClick}
          />
          <img
            className={css`
              position: relative;
              width: 18px;
              height: 18px;
              overflow: hidden;
              flex-shrink: 0;
              cursor: pointer;
            `}
            alt=""
            src="/ionsettingsoutline3.svg"
            onClick={onIonsettingsOutlineIconClick}
          />
          <img
            className={css`
              position: relative;
              width: 32px;
              height: 32px;
              object-fit: cover;
              cursor: pointer;
            `}
            alt=""
            src="/avatarelvis2@2x.png"
            onClick={onAvatarElvisIconClick}
          />
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 267px;
          left: 42px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          font-size: var(--font-size-8xs);
          color: var(--white);
        `}
      >
        <div
          className={css`
            position: relative;
            width: 133px;
            height: 178px;
          `}
        >
          <div
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              width: 133px;
              height: 178px;
            `}
          >
            <img
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                border-radius: var(--br-xl);
                width: 133px;
                height: 178px;
                object-fit: cover;
              `}
              alt=""
              src="/rectangle-7@2x.png"
            />
            <img
              className={css`
                position: absolute;
                top: 160px;
                left: 80px;
                width: 11px;
                height: 11px;
                object-fit: cover;
              `}
              alt=""
              src="/avatarelvis7@2x.png"
            />
            <img
              className={css`
                position: absolute;
                top: 160px;
                left: 104px;
                width: 11px;
                height: 11px;
                object-fit: cover;
              `}
              alt=""
              src="/avatarelvis8@2x.png"
            />
            <img
              className={css`
                position: absolute;
                top: 160px;
                left: 92px;
                width: 11px;
                height: 11px;
                object-fit: cover;
              `}
              alt=""
              src="/avatarelvis5@2x.png"
            />
            <div
              className={css`
                position: absolute;
                top: 163px;
                left: 116px;
              `}
            >
              +5
            </div>
          </div>
          <div
            className={css`
              position: absolute;
              top: 148px;
              left: 8px;
              border-radius: 58.54px;
              background-color: var(--color-whitesmoke-200);
              backdrop-filter: blur(7.81px);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 6.504854679107666px 9.757282257080078px;
              font-size: 7.81px;
              color: var(--color-gray-1400);
            `}
          >
            <div
              className={css`
                position: relative;
              `}
            >
              JOIN
            </div>
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 161px;
          left: 217px;
          width: 133px;
          height: 178px;
          cursor: pointer;
        `}
        onClick={onApeCardContainer1Click}
      >
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 133px;
            height: 178px;
          `}
          alt=""
          src="/group-29.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 148px;
            left: 8px;
            border-radius: 58.54px;
            background-color: var(--color-whitesmoke-200);
            backdrop-filter: blur(7.81px);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 6.504854679107666px 9.757282257080078px;
          `}
        >
          <div
            className={css`
              position: relative;
            `}
          >
            JOIN
          </div>
        </div>
        <img
          className={css`
            position: absolute;
            top: 160px;
            left: 80px;
            width: 11px;
            height: 11px;
            object-fit: cover;
          `}
          alt=""
          src="/avatarelvis7@2x.png"
        />
        <img
          className={css`
            position: absolute;
            top: 160px;
            left: 104px;
            width: 11px;
            height: 11px;
            object-fit: cover;
          `}
          alt=""
          src="/avatarelvis8@2x.png"
        />
        <img
          className={css`
            position: absolute;
            top: 160px;
            left: 92px;
            width: 11px;
            height: 11px;
            object-fit: cover;
          `}
          alt=""
          src="/avatarelvis5@2x.png"
        />
        <div
          className={css`
            position: absolute;
            top: 163px;
            left: 116px;
            font-size: var(--font-size-8xs);
            color: var(--white);
          `}
        >
          +5
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 370px;
          left: 217px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        `}
      >
        <div
          className={css`
            position: relative;
            width: 133px;
            height: 178px;
          `}
        >
          <img
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              width: 133px;
              height: 178px;
            `}
            alt=""
            src="/group-210.svg"
          />
          <div
            className={css`
              position: absolute;
              top: 148px;
              left: 8px;
              border-radius: 58.54px;
              background-color: var(--color-whitesmoke-200);
              backdrop-filter: blur(7.81px);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 6.504854679107666px 9.757282257080078px;
            `}
          >
            <div
              className={css`
                position: relative;
              `}
            >
              JOIN
            </div>
          </div>
          <img
            className={css`
              position: absolute;
              top: 160px;
              left: 80px;
              width: 11px;
              height: 11px;
              object-fit: cover;
            `}
            alt=""
            src="/avatarelvis7@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 160px;
              left: 104px;
              width: 11px;
              height: 11px;
              object-fit: cover;
            `}
            alt=""
            src="/avatarelvis8@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 160px;
              left: 92px;
              width: 11px;
              height: 11px;
              object-fit: cover;
            `}
            alt=""
            src="/avatarelvis5@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 163px;
              left: 116px;
              font-size: var(--font-size-8xs);
              color: var(--white);
            `}
          >
            +5
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 579px;
          left: 217px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        `}
      >
        <div
          className={css`
            position: relative;
            width: 133px;
            height: 178px;
          `}
        >
          <img
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              width: 133px;
              height: 178px;
            `}
            alt=""
            src="/group-211.svg"
          />
          <div
            className={css`
              position: absolute;
              top: 148px;
              left: 8px;
              border-radius: 58.54px;
              background-color: var(--color-whitesmoke-200);
              backdrop-filter: blur(7.81px);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 6.504854679107666px 9.757282257080078px;
            `}
          >
            <div
              className={css`
                position: relative;
              `}
            >
              JOIN
            </div>
          </div>
          <img
            className={css`
              position: absolute;
              top: 160px;
              left: 80px;
              width: 11px;
              height: 11px;
              object-fit: cover;
            `}
            alt=""
            src="/avatarelvis3@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 160px;
              left: 104px;
              width: 11px;
              height: 11px;
              object-fit: cover;
            `}
            alt=""
            src="/avatarelvis4@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 160px;
              left: 92px;
              width: 11px;
              height: 11px;
              object-fit: cover;
            `}
            alt=""
            src="/avatarelvis5@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 163px;
              left: 116px;
              font-size: var(--font-size-8xs);
              color: var(--white);
            `}
          >
            +5
          </div>
        </div>
      </div>
      <div
        className={css`
          position: absolute;
          top: 475px;
          left: 44px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
        `}
      >
        <div
          className={css`
            position: relative;
            width: 133px;
            height: 178px;
          `}
        >
          <img
            className={css`
              position: absolute;
              top: 0px;
              left: 0px;
              width: 133px;
              height: 178px;
            `}
            alt=""
            src="/group-212.svg"
          />
          <div
            className={css`
              position: absolute;
              top: 148px;
              left: 8px;
              border-radius: 58.54px;
              background-color: var(--color-whitesmoke-200);
              backdrop-filter: blur(7.81px);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 6.504854679107666px 9.757282257080078px;
            `}
          >
            <div
              className={css`
                position: relative;
              `}
            >
              JOIN
            </div>
          </div>
          <img
            className={css`
              position: absolute;
              top: 160px;
              left: 80px;
              width: 11px;
              height: 11px;
              object-fit: cover;
            `}
            alt=""
            src="/avatarelvis7@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 160px;
              left: 104px;
              width: 11px;
              height: 11px;
              object-fit: cover;
            `}
            alt=""
            src="/avatarelvis8@2x.png"
          />
          <img
            className={css`
              position: absolute;
              top: 160px;
              left: 92px;
              width: 11px;
              height: 11px;
              object-fit: cover;
            `}
            alt=""
            src="/avatarelvis5@2x.png"
          />
          <div
            className={css`
              position: absolute;
              top: 163px;
              left: 116px;
              font-size: var(--font-size-8xs);
              color: var(--white);
            `}
          >
            +5
          </div>
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          height: 2.84%;
          width: 43.68%;
          top: 14.69%;
          right: 42.45%;
          bottom: 82.47%;
          left: 13.87%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/group-31576.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 163px;
          left: 42px;
          font-size: var(--btn-large-normal-size);
          font-family: var(--font-paytone-one);
          color: var(--white);
          text-align: left;
        `}
      >
        <p
          className={css`
            margin: 0;
          `}
        >
          Join a room
        </p>
        <p
          className={css`
            margin: 0;
          `}
        >{`to start your `}</p>
        <p
          className={css`
            margin: 0;
          `}
        >
          session...
        </p>
      </div>
      <img
        className={css`
          position: absolute;
          height: 2.9%;
          width: 4.31%;
          top: 14.69%;
          right: 87.69%;
          bottom: 82.41%;
          left: 8%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
        `}
        alt=""
        src="/group-3159@2x.png"
      />
    </div>
  );
};

export default HomePage1;
