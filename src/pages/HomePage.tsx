import { useEffect, useState } from "react";
import LightRotate from "../entities/LightRotate";
import SwitchMode from "../features/SwitchMode";
import clsx from "clsx";

function HomePage() {
  const [isShaking, setIsShaking] = useState(false);
  const [count, setCount] = useState(0);
  useEffect(() => {
    const handleShake = (e: DeviceMotionEvent) => {
      const acceleration = e.accelerationIncludingGravity;
      if (!acceleration) return;
      if (!acceleration.x || !acceleration.y || !acceleration.z) return;

      const threshold = 6;

      const force =
        Math.abs(acceleration.x) +
        Math.abs(acceleration.y) +
        Math.abs(acceleration.z);

      if (force > threshold) {
        setCount((prev) => prev + 1);
      }
    };
    window.addEventListener("devicemotion", handleShake);

    return () => window.removeEventListener("devicemotion", handleShake);
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (isShaking) {
      timer = setTimeout(() => setIsShaking(false), 1000);
    }
    return () => clearTimeout(timer);
  }, [count, isShaking]);

  return (
    <div className="relative h-screen bg-(--bg) px-4 pt-4 pb-10 text-white overflow-hidden">
      {/* Это анимация звезд */}
      <div
        className="
      absolute inset-0
      bg-[url('/stars.png')] bg-repeat
      opacity-20
      animate-[twinkle_4s_ease-in-out_infinite]
    "
      />
      <div
        className="
      absolute inset-0
      bg-[url('/stars.png')] bg-repeat
      opacity-10
      animate-[twinkle_7s_ease-in-out_infinite]
    "
      />

      {/* Другое */}
      <div className="flex justify-between items-center pb-3.5 mb-3">
        <p className="bit font-medium">Crypto Shake</p>
        <button>
          <svg
            width="25"
            height="25"
            viewBox="0 0 25 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 19.0625C11.25 18.6481 11.4146 18.2507 11.7076 17.9576C12.0007 17.6646 12.3981 17.5 12.8125 17.5C13.2269 17.5 13.6243 17.6646 13.9174 17.9576C14.2104 18.2507 14.375 18.6481 14.375 19.0625C14.375 19.4769 14.2104 19.8743 13.9174 20.1674C13.6243 20.4604 13.2269 20.625 12.8125 20.625C12.3981 20.625 12.0007 20.4604 11.7076 20.1674C11.4146 19.8743 11.25 19.4769 11.25 19.0625ZM11.25 12.8125C11.25 12.3981 11.4146 12.0007 11.7076 11.7076C12.0007 11.4146 12.3981 11.25 12.8125 11.25C13.2269 11.25 13.6243 11.4146 13.9174 11.7076C14.2104 12.0007 14.375 12.3981 14.375 12.8125C14.375 13.2269 14.2104 13.6243 13.9174 13.9174C13.6243 14.2104 13.2269 14.375 12.8125 14.375C12.3981 14.375 12.0007 14.2104 11.7076 13.9174C11.4146 13.6243 11.25 13.2269 11.25 12.8125ZM11.25 6.5625C11.25 6.1481 11.4146 5.75067 11.7076 5.45765C12.0007 5.16462 12.3981 5 12.8125 5C13.2269 5 13.6243 5.16462 13.9174 5.45765C14.2104 5.75067 14.375 6.1481 14.375 6.5625C14.375 6.9769 14.2104 7.37433 13.9174 7.66735C13.6243 7.96038 13.2269 8.125 12.8125 8.125C12.3981 8.125 12.0007 7.96038 11.7076 7.66735C11.4146 7.37433 11.25 6.9769 11.25 6.5625Z"
              fill="white"
            />
          </svg>
        </button>
      </div>

      <div className="flex gap-4 mb-3">
        <div className="p-4 rounded-xl bg-black/20 flex items-center justify-between flex-1 text-[28px] font-bold">
          <svg
            width="42"
            height="43"
            viewBox="0 0 42 43"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g filter="url(#filter0_di_40000401_648)">
              <rect width="40" height="40" rx="20" fill="#FF981F" />
              <rect
                x="1"
                y="1"
                width="38"
                height="38"
                rx="19"
                stroke="#FFD600"
                stroke-width="2"
              />
              <g filter="url(#filter1_d_40000401_648)">
                <path
                  d="M22.2511 17.3733C22.2109 16.8702 22.0222 16.4777 21.6851 16.1959C21.353 15.9141 20.8473 15.7732 20.168 15.7732C19.7353 15.7732 19.3805 15.8261 19.1038 15.9317C18.8321 16.0324 18.6308 16.1708 18.5 16.3469C18.3692 16.523 18.3012 16.7242 18.2962 16.9507C18.2861 17.1368 18.3188 17.3054 18.3943 17.4564C18.4748 17.6023 18.6006 17.7356 18.7717 17.8564C18.9428 17.9721 19.1617 18.0778 19.4283 18.1734C19.695 18.269 20.012 18.3545 20.3793 18.43L21.6473 18.7017C22.5027 18.8829 23.2348 19.1219 23.8437 19.4187C24.4525 19.7156 24.9507 20.0653 25.3381 20.4679C25.7256 20.8654 26.0098 21.3132 26.191 21.8113C26.3772 22.3095 26.4728 22.8529 26.4778 23.4416C26.4728 24.458 26.2187 25.3184 25.7155 26.0229C25.2123 26.7273 24.4928 27.2632 23.5569 27.6305C22.626 27.9978 21.5064 28.1815 20.1982 28.1815C18.8547 28.1815 17.6823 27.9827 16.681 27.5852C15.6847 27.1877 14.9098 26.5764 14.3564 25.7512C13.8079 24.9209 13.5312 23.8592 13.5261 22.5661H17.5113C17.5364 23.0391 17.6547 23.4366 17.866 23.7586C18.0773 24.0806 18.3742 24.3247 18.7566 24.4907C19.144 24.6568 19.6045 24.7398 20.1378 24.7398C20.5856 24.7398 20.9605 24.6844 21.2624 24.5737C21.5643 24.463 21.7933 24.3096 21.9492 24.1133C22.1052 23.9171 22.1857 23.6932 22.1908 23.4416C22.1857 23.2051 22.1077 22.9988 21.9568 22.8227C21.8109 22.6416 21.5693 22.4805 21.2322 22.3397C20.8951 22.1937 20.4397 22.0579 19.8661 21.9321L18.3264 21.6C16.9578 21.3031 15.8785 20.8075 15.0885 20.1131C14.3035 19.4137 13.9136 18.4602 13.9186 17.2526C13.9136 16.2714 14.1752 15.4135 14.7035 14.6788C15.2369 13.9392 15.9741 13.363 16.915 12.9504C17.861 12.5378 18.9453 12.3315 20.168 12.3315C21.4159 12.3315 22.4952 12.5404 23.4059 12.958C24.3167 13.3756 25.0186 13.9643 25.5117 14.7241C26.0098 15.4789 26.2614 16.362 26.2665 17.3733H22.2511Z"
                  fill="url(#paint0_linear_40000401_648)"
                />
                <path
                  d="M20.1677 11.9985C21.452 11.9985 22.5811 12.213 23.5447 12.6548C24.5066 13.0959 25.2606 13.7241 25.7917 14.5425H25.7908C26.3279 15.3571 26.594 16.3042 26.5994 17.3716L26.6013 17.7065H21.9431L21.9187 17.3999C21.8844 16.9715 21.7295 16.6674 21.4714 16.4517L21.4695 16.4497C21.2233 16.2409 20.8099 16.1069 20.1677 16.1069C19.7587 16.107 19.4479 16.1566 19.2224 16.2427L19.2195 16.2446C18.9894 16.3299 18.8491 16.4354 18.7673 16.5454C18.6791 16.6642 18.6332 16.7987 18.6296 16.9585V16.9683L18.2966 16.9507L18.6287 16.9683C18.6216 17.099 18.6439 17.2072 18.6882 17.2993C18.7386 17.389 18.8235 17.4843 18.9587 17.5806L19.074 17.6519C19.1992 17.7229 19.3538 17.7928 19.5408 17.8599C19.7887 17.9487 20.0897 18.0298 20.446 18.103L20.449 18.104L21.7175 18.3755H21.7166C22.5913 18.5607 23.3508 18.807 23.99 19.1187C24.6257 19.4286 25.1566 19.7998 25.5759 20.2349C25.9941 20.6639 26.3056 21.1512 26.5037 21.6948L26.574 21.8989C26.7281 22.3794 26.8066 22.8936 26.8113 23.439V23.4429C26.806 24.5157 26.5367 25.4466 25.9871 26.2163C25.4407 26.9812 24.6644 27.5529 23.6785 27.9399L23.6794 27.9409C22.6997 28.3275 21.5359 28.5151 20.198 28.5151C18.8226 28.5151 17.607 28.3113 16.5583 27.895H16.5574C15.504 27.4747 14.6738 26.8224 14.0798 25.937L14.0779 25.9351C13.4844 25.0366 13.1983 23.9057 13.1931 22.5669L13.1912 22.2329H17.8269L17.8445 22.5483C17.8672 22.9758 17.972 23.3131 18.1443 23.5757C18.3167 23.8384 18.5605 24.0417 18.8875 24.1841C19.2239 24.3283 19.6379 24.4067 20.1375 24.4067C20.5601 24.4067 20.8935 24.3542 21.1472 24.2612C21.4076 24.1657 21.5797 24.0423 21.6882 23.9058C21.7971 23.7688 21.8513 23.6177 21.8562 23.4419C21.8515 23.284 21.8021 23.1542 21.7039 23.0396L21.697 23.0317C21.6003 22.9117 21.4155 22.7775 21.1033 22.647L21.0994 22.646C20.7901 22.5122 20.3586 22.3808 19.7957 22.2573L18.2566 21.9263L18.2556 21.9253C16.8496 21.6203 15.7132 21.1057 14.8689 20.3638L14.8669 20.3618C13.9998 19.5891 13.5804 18.5388 13.5857 17.2515C13.5809 16.2073 13.8609 15.2799 14.4333 14.4839L14.658 14.1948C15.2056 13.54 15.9162 13.0243 16.781 12.645H16.782C17.7769 12.2111 18.9077 11.9986 20.1677 11.9985Z"
                  stroke="#B15F00"
                  stroke-width="0.666667"
                />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_di_40000401_648"
                x="0"
                y="0"
                width="41.3333"
                height="42.6667"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="1.33333" dy="2.66667" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_40000401_648"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_40000401_648"
                  result="shape"
                />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="3.33333" dy="3.33333" />
                <feComposite
                  in2="hardAlpha"
                  operator="arithmetic"
                  k2="-1"
                  k3="1"
                />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="shape"
                  result="effect2_innerShadow_40000401_648"
                />
              </filter>
              <filter
                id="filter1_d_40000401_648"
                x="12.8569"
                y="11.665"
                width="14.9543"
                height="18.5164"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dx="0.666667" dy="1.33333" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0.803922 0 0 0 0 0.435294 0 0 0 0 0 0 0 0 1 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_40000401_648"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_40000401_648"
                  result="shape"
                />
              </filter>
              <linearGradient
                id="paint0_linear_40000401_648"
                x1="16.0514"
                y1="14.0003"
                x2="27.0579"
                y2="21.0715"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset="0.200398" stop-color="#FFD600" />
                <stop offset="0.230052" stop-color="#FFE458" />
                <stop offset="0.489107" stop-color="#FFD600" />
              </linearGradient>
            </defs>
          </svg>
          <p>{count}</p>
          <button>
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_40000401_652)">
                <path
                  d="M14.6346 11.13V12.5378C14.6346 12.9849 14.7239 13.36 14.9002 13.6522C15.1433 14.0555 15.5423 14.2867 15.9954 14.2867C16.4393 14.2867 16.8804 14.0705 17.3064 13.6445L21.9561 8.99481C22.977 7.97391 22.977 6.31277 21.9561 5.29187L17.3064 0.642151C16.8804 0.215973 16.4393 0 15.9954 0C15.318 0 14.6346 0.540894 14.6346 1.74893V3.02747C8.03325 3.41733 2.56834 8.4834 1.75615 15.1162C1.71065 15.4866 1.92128 15.8412 2.26842 15.9786C2.36668 16.0175 2.46901 16.0363 2.57005 16.0363C2.82597 16.0363 3.0742 15.9164 3.23228 15.7004C5.41081 12.7238 8.90868 10.9467 12.589 10.9467C13.2709 10.9467 13.9566 11.0082 14.6346 11.13Z"
                  fill="#A95DE6"
                />
                <path
                  d="M25.7171 12.0216C25.37 11.884 24.9739 11.9985 24.7533 12.2999C22.5749 15.2763 19.0771 17.0535 15.3968 17.0535C14.7149 17.0535 14.0292 16.9919 13.3511 16.8702V15.4624C13.3511 14.2544 12.6675 13.7135 11.9903 13.7135C11.5464 13.7135 11.1053 13.9297 10.6791 14.3558L6.02941 19.0053C5.00872 20.0262 5.00872 21.6874 6.02962 22.7085L10.6791 27.358C11.1053 27.7842 11.5464 28.0002 11.9903 28.0002C12.6675 28.0002 13.3511 27.4593 13.3511 26.2512V24.9727C19.9527 24.5828 25.4174 19.5168 26.2296 12.8842C26.2751 12.5136 26.0645 12.1589 25.7171 12.0216Z"
                  fill="#A95DE6"
                />
              </g>
              <defs>
                <clipPath id="clip0_40000401_652">
                  <rect width="28" height="28" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </button>
        </div>

        <div className="px-3.5 py-4 rounded-xl bg-black/20">
          <img src="/planets.png" alt="planets" />
        </div>
      </div>

      <SwitchMode />

      <div className="flex justify-center">
        <div
          className="relative"
          onClick={() => {
            setIsShaking(true);
            setCount((p) => p + 1);
          }}
        >
          <img
            className={clsx(
              "absolute top-19 left-0 z-1",
              isShaking && "handAnim",
            )}
            src="/hand.png"
            alt="hand"
          />
          <LightRotate src="/light/purple.png" />
        </div>
      </div>
    </div>
  );
}

export default HomePage;
