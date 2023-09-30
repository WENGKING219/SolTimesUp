import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const FocusRoom4 = () => {
  const navigate = useNavigate();

  const onBtnContainer1Click = useCallback(() => {
    navigate("/focus-room-3");
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
            src="/ionsettingsoutline1.svg"
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
        src="/group-31572.svg"
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
          text-align: left;
        `}
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
            src="/ape-card16.svg"
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
          src="/ander1.svg"
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
            src="/ape-card17.svg"
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
          src="/ander1.svg"
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
            src="/ape-card18.svg"
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
          src="/lady2.svg"
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
            src="/ape-card19.svg"
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
          src="/lady2.svg"
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
            src="/ape-card20.svg"
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
          src="/lady2.svg"
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
            src="/ape-card21.svg"
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
          src="/flynn1.svg"
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
            src="/ape-card22.svg"
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
          src="/flynn1.svg"
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
            src="/ape-card23.svg"
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
          src="/flynn1.svg"
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
          text-align: left;
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
          src="/-icon-people-team1.svg"
        />
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
          top: 165px;
          left: 264px;
          font-size: var(--btn-small-normal-size);
          line-height: 24px;
        `}
      >
        Take a break
      </div>
      <div
        className={css`
          position: absolute;
          height: calc(100% - 467px);
          width: 100%;
          top: 467px;
          right: 0px;
          bottom: 0px;
          left: 0px;
          border-radius: var(--br-base) var(--br-base) 0px 0px;
          background: linear-gradient(180deg, #131118, #2f1a51);
          overflow: hidden;
        `}
      >
        <div
          className={css`
            position: absolute;
            width: 100%;
            top: 8px;
            right: 0px;
            left: 0px;
            height: 44px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
            padding: 0px var(--padding-base);
            box-sizing: border-box;
          `}
        >
          <div
            className={css`
              align-self: stretch;
              flex: 1;
            `}
          />
          <div
            className={css`
              position: relative;
              line-height: 24px;
              font-weight: 500;
            `}
          >
            Report centre
          </div>
          <div
            className={css`
              align-self: stretch;
              flex: 1;
            `}
          />
        </div>
        <img
          className={css`
            position: absolute;
            top: 48px;
            left: 129px;
            border-radius: var(--br-81xl);
            width: 118px;
            height: 118px;
            overflow: hidden;
          `}
          alt=""
          src="/flynn2.svg"
        />
        <div
          className={css`
            position: absolute;
            top: 171px;
            left: 34px;
            border-radius: var(--br-5xs);
            background-color: var(--gray-22);
            width: 306px;
            height: 78px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-base) var(--padding-base) var(--padding-5xl);
            box-sizing: border-box;
            gap: var(--gap-5xs);
            font-size: var(--font-size-mini);
            color: var(--gray-8);
          `}
        >
          <div
            className={css`
              align-self: stretch;
              background-color: var(--transparent);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
            `}
          >
            <div
              className={css`
                flex: 1;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
              `}
            >
              <div
                className={css`
                  flex: 1;
                  position: relative;
                  line-height: 24px;
                `}
              >
                We will send you a report once the investigation is done
              </div>
            </div>
          </div>
          <div
            className={css`
              align-self: stretch;
              background-color: var(--transparent);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              text-align: left;
              font-size: var(--paragraph-regular-size);
            `}
          >
            <div
              className={css`
                flex: 1;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-start;
              `}
            >
              <div
                className={css`
                  flex: 1;
                  position: relative;
                  line-height: 24px;
                `}
              />
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 267px;
            left: 46px;
            border-radius: var(--br-81xl);
            background-color: var(--gray-20);
            width: 279px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            padding: var(--padding-xs) var(--padding-base);
            box-sizing: border-box;
            cursor: pointer;
            text-align: left;
          `}
          onClick={onBtnContainer1Click}
        >
          <b
            className={css`
              position: relative;
              line-height: 24px;
              background: linear-gradient(
                74.31deg,
                #85ffc4,
                #5cc6ff 45.83%,
                #bc85ff 80.73%
              );
              -webkit-background-clip: text;
              -webkit-text-fill-color: transparent;
            `}
          >
            Report Cheating
          </b>
        </div>
      </div>
    </div>
  );
};

export default FocusRoom4;
