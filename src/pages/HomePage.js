import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const onLineContainerClick = useCallback(() => {
    navigate("/dashboard");
  }, [navigate]);

  const onLineContainer1Click = useCallback(() => {
    navigate("/phantom-wallet");
  }, [navigate]);

  const onLineContainer2Click = useCallback(() => {
    navigate("/schedule");
  }, [navigate]);

  const onLineContainer3Click = useCallback(() => {
    navigate("/messages");
  }, [navigate]);

  const onLineContainer4Click = useCallback(() => {
    navigate("/friends");
  }, [navigate]);

  const onLineContainer5Click = useCallback(() => {
    navigate("/themes");
  }, [navigate]);

  const onLineContainer6Click = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const onGroupIcon2Click = useCallback(() => {
    navigate("/home-page1");
  }, [navigate]);

  const onGroup5Click = useCallback(() => {
    navigate("/home-page1");
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
        color: var(--white);
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
          `}
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
            `}
            alt=""
            src="/bibell.svg"
          />
          <img
            className={css`
              position: relative;
              width: 18px;
              height: 18px;
              overflow: hidden;
              flex-shrink: 0;
            `}
            alt=""
            src="/ionsettingsoutline.svg"
          />
          <img
            className={css`
              position: relative;
              width: 32px;
              height: 32px;
              object-fit: cover;
            `}
            alt=""
            src="/avatarelvis2@2x.png"
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
          color: var(--color-gray-1400);
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
          src="/group-2.svg"
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
      <div
        className={css`
          position: absolute;
          top: 370px;
          left: 217px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          color: var(--color-gray-1400);
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
            src="/group-21.svg"
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
          top: 579px;
          left: 217px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          color: var(--color-gray-1400);
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
            src="/group-22.svg"
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
          color: var(--color-gray-1400);
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
            src="/group-23.svg"
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
        src="/group-3157.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 163px;
          left: 42px;
          font-size: var(--btn-large-normal-size);
          font-family: var(--font-paytone-one);
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
      <div
        className={css`
          position: absolute;
          top: -0.5px;
          left: 132.5px;
          border-radius: var(--br-5xs);
          box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
          border: 1px solid var(--color-gray-1500);
          box-sizing: border-box;
          width: 241px;
          height: 721px;
          text-align: left;
          font-size: var(--paragraph-regular-size);
          color: var(--color-gray-1700);
          font-family: var(--btn-large-normal);
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            background: linear-gradient(#1b2130, #1b2130), #0f1e33;
            width: 240px;
            height: 808px;
          `}
        />
        <div
          className={css`
            position: absolute;
            top: 96px;
            left: 0px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: 0px var(--padding-base);
            gap: var(--gap-5xs);
          `}
        >
          <div
            className={css`
              border-radius: var(--br-5xs);
              background-color: rgba(0, 0, 0, 0.3);
              box-shadow: 0px -1px 0px rgba(255, 255, 255, 0.08) inset,
                0px 1px 0px rgba(0, 0, 0, 0.2) inset;
              width: 208px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: var(--padding-3xs) 0px var(--padding-3xs)
                var(--padding-base);
              box-sizing: border-box;
              gap: var(--gap-xs);
              color: var(--white);
            `}
          >
            <img
              className={css`
                position: relative;
                width: 20px;
                height: 20px;
              `}
              alt=""
              src="/search-line.svg"
            />
            <div
              className={css`
                position: relative;
                line-height: 20px;
                font-weight: 500;
                display: inline-block;
                width: 112px;
                flex-shrink: 0;
                opacity: 0.2;
              `}
            >
              Search
            </div>
          </div>
          <div
            className={css`
              border-radius: var(--br-5xs);
              width: 208px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: var(--padding-3xs) 0px var(--padding-3xs)
                var(--padding-base);
              box-sizing: border-box;
              gap: var(--gap-xs);
              cursor: pointer;
            `}
            onClick={onLineContainerClick}
          >
            <img
              className={css`
                position: relative;
                width: 20px;
                height: 20px;
              `}
              alt=""
              src="/home-3-fill.svg"
            />
            <div
              className={css`
                position: relative;
                line-height: 20px;
                font-weight: 500;
                display: inline-block;
                width: 112px;
                flex-shrink: 0;
              `}
            >
              Dashboard
            </div>
          </div>
          <div
            className={css`
              border-radius: var(--br-5xs);
              width: 208px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: var(--padding-3xs) 0px var(--padding-3xs)
                var(--padding-base);
              box-sizing: border-box;
              gap: var(--gap-xs);
              cursor: pointer;
            `}
            onClick={onLineContainer1Click}
          >
            <img
              className={css`
                position: relative;
                width: 16.67px;
                height: 15.51px;
              `}
              alt=""
              src="/group.svg"
            />
            <div
              className={css`
                position: relative;
                line-height: 20px;
                font-weight: 500;
                display: inline-block;
                width: 112px;
                flex-shrink: 0;
              `}
            >
              Wallet
            </div>
            <div
              className={css`
                border-radius: var(--br-3xs);
                background-color: var(--color-gray-1500);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: var(--padding-12xs) var(--padding-7xs);
                text-align: center;
                font-size: var(--btn-small-normal-size);
                color: var(--white);
              `}
            >
              <div
                className={css`
                  position: relative;
                  line-height: 18px;
                  font-weight: 500;
                  opacity: 0.3;
                `}
              >
                5
              </div>
            </div>
          </div>
          <div
            className={css`
              border-radius: var(--br-5xs);
              background-color: #1b2130;
              width: 208px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: var(--padding-3xs) 0px var(--padding-3xs)
                var(--padding-base);
              box-sizing: border-box;
              gap: var(--gap-xs);
              cursor: pointer;
            `}
            onClick={onLineContainer2Click}
          >
            <img
              className={css`
                position: relative;
                width: 20px;
                height: 20px;
              `}
              alt=""
              src="/schedule-fill.svg"
            />
            <div
              className={css`
                position: relative;
                line-height: 20px;
                font-weight: 500;
                display: inline-block;
                width: 112px;
                flex-shrink: 0;
              `}
            >
              Schedules
            </div>
          </div>
          <div
            className={css`
              border-radius: var(--br-5xs);
              width: 208px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: var(--padding-3xs) 0px var(--padding-3xs)
                var(--padding-base);
              box-sizing: border-box;
              gap: var(--gap-xs);
              cursor: pointer;
            `}
            onClick={onLineContainer3Click}
          >
            <img
              className={css`
                position: relative;
                width: 20px;
                height: 20px;
              `}
              alt=""
              src="/message-3-fill.svg"
            />
            <div
              className={css`
                position: relative;
                line-height: 20px;
                font-weight: 500;
                display: inline-block;
                width: 112px;
                flex-shrink: 0;
              `}
            >
              Messages
            </div>
            <div
              className={css`
                border-radius: var(--br-3xs);
                background-color: var(--color-gray-1500);
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: var(--padding-12xs) var(--padding-7xs);
                text-align: center;
                font-size: var(--btn-small-normal-size);
                color: var(--white);
              `}
            >
              <div
                className={css`
                  position: relative;
                  line-height: 18px;
                  font-weight: 500;
                  opacity: 0.3;
                `}
              >
                3
              </div>
            </div>
          </div>
          <div
            className={css`
              border-radius: var(--br-5xs);
              width: 208px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: var(--padding-3xs) 0px var(--padding-3xs)
                var(--padding-base);
              box-sizing: border-box;
              gap: var(--gap-xs);
              cursor: pointer;
            `}
            onClick={onLineContainer4Click}
          >
            <img
              className={css`
                position: relative;
                width: 20px;
                height: 20px;
              `}
              alt=""
              src="/inbox-2-fill.svg"
            />
            <div
              className={css`
                position: relative;
                line-height: 20px;
                font-weight: 500;
                display: inline-block;
                width: 112px;
                flex-shrink: 0;
              `}
            >
              Friends
            </div>
          </div>
          <div
            className={css`
              border-radius: var(--br-5xs);
              width: 208px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: var(--padding-3xs) 0px var(--padding-3xs)
                var(--padding-base);
              box-sizing: border-box;
              gap: var(--gap-xs);
              cursor: pointer;
            `}
            onClick={onLineContainer5Click}
          >
            <img
              className={css`
                position: relative;
                width: 20px;
                height: 20px;
              `}
              alt=""
              src="/avatar.svg"
            />
            <div
              className={css`
                position: relative;
                line-height: 20px;
                font-weight: 500;
                display: inline-block;
                width: 112px;
                flex-shrink: 0;
              `}
            >
              Themes
            </div>
          </div>
          <div
            className={css`
              width: 208px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: 0px var(--padding-base);
              box-sizing: border-box;
            `}
          >
            <div
              className={css`
                background-color: rgba(255, 255, 255, 0.06);
              `}
            />
          </div>
          <div
            className={css`
              border-radius: var(--br-5xs);
              width: 208px;
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: var(--padding-3xs) 0px var(--padding-3xs)
                var(--padding-base);
              box-sizing: border-box;
              gap: var(--gap-xs);
              cursor: pointer;
            `}
            onClick={onLineContainer6Click}
          >
            <img
              className={css`
                position: relative;
                width: 20px;
                height: 20px;
              `}
              alt=""
              src="/settings-3-fill.svg"
            />
            <div
              className={css`
                position: relative;
                line-height: 20px;
                font-weight: 500;
                display: inline-block;
                width: 112px;
                flex-shrink: 0;
              `}
            >
              Settings
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 297px;
            left: 47px;
            border-radius: 50%;
            background-color: var(--secondary-red);
            box-shadow: 0px 0px 6px rgba(255, 98, 82, 0.3);
            width: 6px;
            height: 6px;
          `}
        />
        <img
          className={css`
            position: absolute;
            height: 3.25%;
            width: 6.71%;
            top: 7.21%;
            right: 82.5%;
            bottom: 89.54%;
            left: 10.79%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            object-fit: cover;
            cursor: pointer;
          `}
          alt=""
          src="/group-3161@2x.png"
          onClick={onGroupIcon2Click}
        />
        <img
          className={css`
            position: absolute;
            height: 3.19%;
            width: 67.97%;
            top: 7.21%;
            right: 13.36%;
            bottom: 89.6%;
            left: 18.67%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            cursor: pointer;
          `}
          alt=""
          src="/group-3163.svg"
          onClick={onGroup5Click}
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 729px;
          left: 133px;
          border-radius: 0px 0px var(--br-5xs) var(--br-5xs);
          width: 240px;
          height: 80px;
          overflow: hidden;
          text-align: left;
          font-size: var(--paragraph-regular-size);
          font-family: var(--btn-large-normal);
        `}
      >
        <img
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 200px;
            height: 120px;
            object-fit: cover;
            opacity: 0.1;
          `}
          alt=""
          src="/avater@2x.png"
        />
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            border-radius: 0px 0px var(--br-5xs) var(--br-5xs);
            background-color: rgba(255, 255, 255, 0.05);
            box-shadow: 0px 1px 0px rgba(255, 255, 255, 0.06) inset;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: var(--padding-xl);
            gap: var(--gap-5xs);
          `}
        >
          <img
            className={css`
              position: relative;
              width: 40px;
              height: 40px;
              object-fit: cover;
            `}
            alt=""
            src="/avater1@2x.png"
          />
          <div
            className={css`
              position: relative;
              width: 124px;
              height: 36px;
            `}
          >
            <div
              className={css`
                position: absolute;
                top: 0px;
                left: 0px;
                line-height: 20px;
                font-weight: 500;
                display: inline-block;
                width: 124px;
                opacity: 0.9;
              `}
            >
              Josh
            </div>
            <a
              className={css`
                position: absolute;
                top: 18px;
                left: 0px;
                font-size: var(--btn-small-normal-size);
                text-decoration: underline;
                line-height: 18px;
                color: inherit;
                display: inline-block;
                width: 124px;
                opacity: 0.3;
              `}
              href="mailto:wiwhsdd@gmail.com"
              target="_blank"
            >
              9394lay@gmail.com
            </a>
          </div>
          <img
            className={css`
              position: relative;
              width: 20px;
              height: 20px;
            `}
            alt=""
            src="/entrance-line.svg"
          />
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          height: 1.93%;
          width: 4.17%;
          top: 49.03%;
          right: 51.11%;
          bottom: 49.03%;
          left: 44.71%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/-icon-vivo-themes.svg"
      />
    </div>
  );
};

export default HomePage;
