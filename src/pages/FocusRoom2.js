import { useCallback } from "react";
import { css } from "@emotion/css";
import { useNavigate } from "react-router-dom";

const FocusRoom2 = () => {
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
        src="/group-31573.svg"
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
        `}
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
            src="/ape-card24.svg"
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
          src="/ander2.svg"
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
            src="/ape-card25.svg"
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
          src="/ander2.svg"
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
            src="/ape-card26.svg"
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
          src="/lady4.svg"
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
            src="/ape-card27.svg"
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
          src="/lady4.svg"
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
            src="/ape-card28.svg"
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
          src="/lady4.svg"
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
            src="/ape-card29.svg"
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
          src="/flynn3.svg"
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
            src="/ape-card30.svg"
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
          src="/flynn3.svg"
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
            src="/ape-card31.svg"
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
          src="/flynn3.svg"
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
        src="/-icon-people-team2.svg"
      />
      <div
        className={css`
          position: absolute;
          height: calc(100% - 57px);
          width: 100%;
          top: 60px;
          right: 0px;
          bottom: -3px;
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
            text-align: center;
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
            Rules and Regualtions
          </div>
          <div
            className={css`
              align-self: stretch;
              flex: 1;
            `}
          />
        </div>
        <div
          className={css`
            position: absolute;
            top: 58px;
            left: 16px;
            border-radius: var(--br-5xs);
            background-color: var(--gray-22);
            width: 343px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-base) var(--padding-base) var(--padding-5xl);
            box-sizing: border-box;
            gap: var(--gap-5xs);
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
              gap: var(--gap-3xs);
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
                  font-weight: 500;
                `}
              >
                Pomodoro Sessions:
              </div>
            </div>
            <div
              className={css`
                width: 63px;
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: flex-end;
                text-align: right;
                font-size: var(--paragraph-regular-size);
              `}
            >
              <div
                className={css`
                  position: relative;
                  line-height: 24px;
                `}
              />
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
              font-size: var(--font-inherit);
              color: var(--gray-8);
              font-family: var(--font-inherit);
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
                <ul
                  className={css`
                    margin: 0;
                    padding-left: var(--padding-lgi);
                  `}
                >
                  <li
                    className={css`
                      margin-bottom: 0px;
                    `}
                  >
                    Each pomodoro session lasts for 1 hour, 2 hours or 3 hours
                    depends on which one you choose
                  </li>
                  <li
                    className={css`
                      margin-bottom: 0px;
                    `}
                  >
                    User can take a 15mins break in 1 hour session, 30mins in 2
                    hours session and 45mins in 3 hours session
                  </li>
                  <li
                    className={css`
                      margin-bottom: 0px;
                    `}
                  >
                    All users must be able to turn on their cameras to avoid
                    cheating
                  </li>
                  <li
                    className={css`
                      margin-bottom: 0px;
                    `}
                  >
                    You will be guided back if you leave the app
                  </li>
                  <li className={css``}>
                    Honorlock AI is introduced to monitor your session
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 438px;
            left: 16px;
            border-radius: var(--br-5xs);
            background-color: var(--gray-22);
            width: 343px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            padding: var(--padding-base) var(--padding-base) var(--padding-5xl);
            box-sizing: border-box;
            gap: var(--gap-5xs);
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
                  font-weight: 500;
                `}
              >
                Rewards and Penalty:
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
              font-size: var(--font-inherit);
              color: var(--gray-8);
              font-family: var(--font-inherit);
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
                <ul
                  className={css`
                    margin: 0;
                    padding-left: var(--padding-lgi);
                  `}
                >
                  <li
                    className={css`
                      margin-bottom: 0px;
                    `}
                  >
                    Once you complete the session tokens, will automatically
                    credit to your wallet
                  </li>
                  <li
                    className={css`
                      margin-bottom: 0px;
                    `}
                  >
                    Once you fail, you will only be able to get back 80% from
                    how much you pay
                  </li>
                  <li className={css``}>
                    If one of your group member fail the session, whole group
                    will be failed too
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div
          className={css`
            position: absolute;
            top: 672px;
            left: 48px;
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
            Agree and Start
          </b>
        </div>
      </div>
    </div>
  );
};

export default FocusRoom2;
