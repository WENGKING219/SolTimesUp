import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const FocusRoom1 = () => {
  const navigate = useNavigate();

  const onBtnContainerClick = useCallback(() => {
    navigate("/focus-room-2");
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
            `}
            alt=""
            src="/bibell1.svg"
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
            src="/ionsettingsoutline2.svg"
          />
          <img
            className={css`
              position: relative;
              width: 32px;
              height: 32px;
              object-fit: cover;
            `}
            alt=""
            src="/avatarelvis6@2x.png"
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
        src="/group-31575.svg"
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
        src="/group-31575.svg"
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
          background-color: var(--gray-20);
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
            background: linear-gradient(90deg, #ff00ff, #00ffff 50%, #85ffc4);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
          `}
        >
          Tap here to start your session
        </b>
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
            src="/ape-card40.svg"
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
          src="/ander4.svg"
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
            src="/ape-card41.svg"
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
          src="/ander4.svg"
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
            src="/ape-card42.svg"
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
          src="/lady6.svg"
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
            src="/ape-card43.svg"
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
          src="/lady6.svg"
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
            src="/ape-card44.svg"
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
          src="/lady7.svg"
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
            src="/ape-card45.svg"
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
          src="/flynn5.svg"
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
            src="/ape-card46.svg"
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
          src="/flynn5.svg"
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
            src="/ape-card47.svg"
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
          src="/flynn5.svg"
        />
      </div>
      <img
        className={css`
          position: absolute;
          height: 3.95%;
          width: 19.2%;
          top: 19.9%;
          right: 73.6%;
          bottom: 76.15%;
          left: 7.2%;
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
          top: 165px;
          left: 69px;
          line-height: 24px;
        `}
      >
        14
      </b>
      <img
        className={css`
          position: absolute;
          height: 2.72%;
          width: 6.85%;
          top: 20.52%;
          right: 84.09%;
          bottom: 76.76%;
          left: 9.07%;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
        `}
        alt=""
        src="/-icon-people-team4.svg"
      />
    </div>
  );
};

export default FocusRoom1;
