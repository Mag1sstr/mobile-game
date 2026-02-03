import { motion } from "motion/react";
import LightRotate from "../entities/LightRotate";
import BackgroundWithStars from "../shared/BackgroundWithStars";

interface IProps {
  onAccept: () => void;
}

function PermissionPage({ onAccept }: IProps) {
  const requestMotionPermission = async () => {
    if (
      typeof DeviceMotionEvent !== "undefined" &&
      // @ts-ignore
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      // iOS
      // @ts-ignore
      const permission = await DeviceMotionEvent.requestPermission();
      if (permission === "granted") {
        localStorage.setItem("permissionAccepted", "true");
        onAccept();
      }
    } else {
      // Android / Chrome
      localStorage.setItem("permissionAccepted", "true");

      onAccept();
    }
  };
  return (
    <BackgroundWithStars>
      <div className="flex flex-col items-center justify-center h-screen">
        <motion.h1
          initial={{ opacity: 0, transform: "scale(0)" }}
          animate={{ opacity: 1, transform: "scale(1)" }}
          transition={{ duration: 0.5 }}
          className="bebas uppercase text-[2.25rem]"
        >
          permission Request
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, transform: "scale(0)" }}
          animate={{ opacity: 1, transform: "scale(1)" }}
          transition={{ duration: 1 }}
          className="relative "
        >
          <LightRotate src="/light/purple.png" />
          <img
            src="/lock.png"
            alt="lock"
            className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
          />
        </motion.div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="inter mb-[2.9rem] max-w-[275px] text-center text-[12px] font-medium"
        >
          For the proper functioning of the application, access to phone
          orientation settings is required
        </motion.p>
        <motion.button
          onClick={requestMotionPermission}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="bebas text-[2.5rem] max-w-[315px] px-6 py-5.25 btnPurple leading-none rounded-3xl cursor-pointer z-10"
        >
          Request orientation permission
        </motion.button>
      </div>
    </BackgroundWithStars>
  );
}

export default PermissionPage;
