import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { css } from "@emotion/css";

const FocusRoom3 = () => {
  const navigate = useNavigate();

  const onBibellIconClick = useCallback(() => {
    navigate("/messages");
  }, [navigate]);

  const onIonsettingsOutlineIconClick = useCallback(() => {
    navigate("/settings");
  }, [navigate]);

  const onAvatarElvisIconClick = useCallback(() => {
    navigate("/home-page");
  }, [navigate]);

  const onBtnContainerClick = useCallback(() => {
    navigate("/focus-room-5");
  }, [navigate]);

  const onIconInfo5Click = useCallback(() => {
    navigate("/focus-room-4");
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
        font-size: var(--btn-large-normal-size);
        color: var(--white);
        font-family: var(--btn-large-normal);
      `}
    >
      <div
        className={css`
          position: absolute;
          top: 49px;
          left: 258px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
        `}
      >
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
            src="/bibell1.svg"
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
            src="/ionsettingsoutline1.svg"
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
            src="/avatarelvis6@2x.png"
            onClick={onAvatarElvisIconClick}
          />
        </div>
      </div>
      <img
        className={css`
          position: absolute;
          height: 2.84%;
          width: 43.68%;
          top: 7.17%;
          right: 42.45%;
          bottom: 89.99%;
          left: 13.87%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/group-31574.svg"
      />
      <img
        className={css`
          position: absolute;
          height: 2.9%;
          width: 4.31%;
          top: 7.05%;
          right: 87.69%;
          bottom: 90.06%;
          left: 8%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
        `}
        alt=""
        src="/group-3161@2x.png"
      />
      <div
        className={css`
          position: absolute;
          top: 101px;
          left: 28px;
          border-radius: var(--br-81xl);
          background: linear-gradient(90deg, #14f195, #ff4848);
          width: 319px;
          height: 50px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: var(--padding-xs) var(--padding-base);
          box-sizing: border-box;
          cursor: pointer;
        `}
        onClick={onBtnContainerClick}
      >
        <b
          className={css`
            position: relative;
            line-height: 24px;
            display: none;
            background: linear-gradient(90deg, #ff00ff, #00ffff 50%, #85ffc4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `}
        >
          Tap here to start your session
        </b>
      </div>
      <img
        className={css`
          position: absolute;
          height: 4.33%;
          width: 10.56%;
          top: 13.6%;
          right: 71.58%;
          bottom: 82.08%;
          left: 17.87%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
        `}
        alt=""
        src="/clip-path-group@2x.png"
      />
      <div
        className={css`
          position: absolute;
          top: 107px;
          left: 98px;
          font-size: var(--font-size-21xl);
          line-height: 24px;
          font-family: var(--font-bungee-shade);
          color: var(--color-black);
          text-align: center;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 220px;
          height: 38px;
        `}
      >
        1:59:50
      </div>
      <div
        className={css`
          position: absolute;
          top: 204px;
          left: 28px;
          width: 155px;
          height: 155px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 155px;
            height: 155px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          `}
        >
          <img
            className={css`
              position: relative;
              width: 155px;
              height: 155px;
            `}
            alt=""
            src="/ape-card32.svg"
          />
        </div>
        <img
          className={css`
            position: absolute;
            height: 10.77%;
            width: 10.77%;
            top: 83.87%;
            right: 4.71%;
            bottom: 5.36%;
            left: 84.52%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          `}
          alt=""
          src="/-icon-info.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 7px;
            left: 3px;
            border-radius: var(--br-81xl);
            width: 32px;
            height: 32px;
            overflow: hidden;
          `}
          alt=""
          src="/ander3.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 702px;
          left: 28px;
          width: 155px;
          height: 155px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 155px;
            height: 155px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          `}
        >
          <img
            className={css`
              position: relative;
              width: 155px;
              height: 155px;
            `}
            alt=""
            src="/ape-card33.svg"
          />
        </div>
        <img
          className={css`
            position: absolute;
            height: 10.77%;
            width: 10.77%;
            top: 83.87%;
            right: 4.71%;
            bottom: 5.36%;
            left: 84.52%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          `}
          alt=""
          src="/-icon-info.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 7px;
            left: 3px;
            border-radius: var(--br-81xl);
            width: 32px;
            height: 32px;
            overflow: hidden;
          `}
          alt=""
          src="/ander3.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 370px;
          left: 28px;
          width: 155px;
          height: 155px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 155px;
            height: 155px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          `}
        >
          <img
            className={css`
              position: relative;
              width: 155px;
              height: 155px;
            `}
            alt=""
            src="/ape-card34.svg"
          />
        </div>
        <img
          className={css`
            position: absolute;
            height: 10.77%;
            width: 10.77%;
            top: 83.87%;
            right: 4.71%;
            bottom: 5.36%;
            left: 84.52%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          `}
          alt=""
          src="/-icon-info.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 7px;
            left: 7px;
            border-radius: var(--br-81xl);
            width: 24px;
            height: 24px;
            overflow: hidden;
          `}
          alt=""
          src="/lady5.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 536px;
          left: 28px;
          width: 155px;
          height: 155px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 155px;
            height: 155px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          `}
        >
          <img
            className={css`
              position: relative;
              width: 155px;
              height: 155px;
            `}
            alt=""
            src="/ape-card35.svg"
          />
        </div>
        <img
          className={css`
            position: absolute;
            height: 10.77%;
            width: 10.77%;
            top: 83.87%;
            right: 4.71%;
            bottom: 5.36%;
            left: 84.52%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          `}
          alt=""
          src="/-icon-info.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 7px;
            left: 7px;
            border-radius: var(--br-81xl);
            width: 24px;
            height: 24px;
            overflow: hidden;
          `}
          alt=""
          src="/lady5.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 536px;
          left: 192px;
          width: 155px;
          height: 155px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 155px;
            height: 155px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          `}
        >
          <img
            className={css`
              position: relative;
              width: 155px;
              height: 155px;
            `}
            alt=""
            src="/ape-card36.svg"
          />
        </div>
        <img
          className={css`
            position: absolute;
            height: 10.77%;
            width: 10.77%;
            top: 83.87%;
            right: 4.71%;
            bottom: 5.36%;
            left: 84.52%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          `}
          alt=""
          src="/-icon-info.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 7px;
            left: 7px;
            border-radius: var(--br-81xl);
            width: 24px;
            height: 24px;
            overflow: hidden;
          `}
          alt=""
          src="/lady5.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 204px;
          left: 192px;
          width: 155px;
          height: 155px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 155px;
            height: 155px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          `}
        >
          <img
            className={css`
              position: relative;
              width: 155px;
              height: 155px;
            `}
            alt=""
            src="/ape-card37.svg"
          />
        </div>
        <img
          className={css`
            position: absolute;
            height: 10.77%;
            width: 10.77%;
            top: 83.87%;
            right: 4.71%;
            bottom: 5.36%;
            left: 84.52%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
            cursor: pointer;
          `}
          alt=""
          src="/-icon-info.svg"
          onClick={onIconInfo5Click}
        />
        <img
          className={css`
            position: absolute;
            top: 7px;
            left: 7px;
            border-radius: var(--br-81xl);
            width: 24px;
            height: 24px;
            overflow: hidden;
          `}
          alt=""
          src="/flynn4.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 370px;
          left: 192px;
          width: 155px;
          height: 155px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 155px;
            height: 155px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          `}
        >
          <img
            className={css`
              position: relative;
              width: 155px;
              height: 155px;
            `}
            alt=""
            src="/ape-card38.svg"
          />
        </div>
        <img
          className={css`
            position: absolute;
            height: 10.77%;
            width: 10.77%;
            top: 83.87%;
            right: 4.71%;
            bottom: 5.36%;
            left: 84.52%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          `}
          alt=""
          src="/-icon-info.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 7px;
            left: 7px;
            border-radius: var(--br-81xl);
            width: 24px;
            height: 24px;
            overflow: hidden;
          `}
          alt=""
          src="/flynn4.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 702px;
          left: 192px;
          width: 155px;
          height: 155px;
        `}
      >
        <div
          className={css`
            position: absolute;
            top: 0px;
            left: 0px;
            width: 155px;
            height: 155px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
          `}
        >
          <img
            className={css`
              position: relative;
              width: 155px;
              height: 155px;
            `}
            alt=""
            src="/ape-card39.svg"
          />
        </div>
        <img
          className={css`
            position: absolute;
            height: 10.77%;
            width: 10.77%;
            top: 83.87%;
            right: 4.71%;
            bottom: 5.36%;
            left: 84.52%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          `}
          alt=""
          src="/-icon-info.svg"
        />
        <img
          className={css`
            position: absolute;
            top: 7px;
            left: 7px;
            border-radius: var(--br-81xl);
            width: 24px;
            height: 24px;
            overflow: hidden;
          `}
          alt=""
          src="/flynn4.svg"
        />
      </div>
      <img
        className={css`
          position: absolute;
          height: 3.95%;
          width: 23.47%;
          top: 19.9%;
          right: 7.47%;
          bottom: 76.15%;
          left: 69.07%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/group1.svg"
      />
      <div
        className={css`
          position: absolute;
          top: 162px;
          left: 27px;
          width: 72px;
          height: 31.99px;
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
          src="/group2.svg"
        />
        <b
          className={css`
            position: absolute;
            top: 4px;
            left: 42px;
            line-height: 24px;
          `}
        >
          14
        </b>
        <img
          className={css`
            position: absolute;
            height: 68.78%;
            width: 35.65%;
            top: 15.63%;
            right: 53.23%;
            bottom: 15.59%;
            left: 11.11%;
            max-width: 100%;
            overflow: hidden;
            max-height: 100%;
          `}
          alt=""
          src="/-icon-people-team3.svg"
        />
      </div>
      <div
        className={css`
          position: absolute;
          top: 165px;
          left: 264px;
          font-size: var(--btn-small-normal-size);
          line-height: 24px;
          text-align: center;
        `}
      >
        Take a break
      </div>
    </div>
  );
};

export default FocusRoom3;
