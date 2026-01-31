import LightRotate from "../entities/LightRotate";

function PermissionPage() {
  const requestMotionPermission = async () => {
    alert("click");
    if (
      typeof DeviceMotionEvent !== "undefined" &&
      // @ts-ignore
      typeof DeviceMotionEvent.requestPermission === "function"
    ) {
      // iOS
      // @ts-ignore
      const permission = await DeviceMotionEvent.requestPermission();
      if (permission === "granted") {
        // window.addEventListener("devicemotion", handleShake);
        alert("Thank you");
      }
    } else {
      // Android / Chrome
      // window.addEventListener("devicemotion", handleShake);
    }
  };
  return (
    <section className="h-screen  bg-black p-4 flex flex-col items-center justify-center text-white">
      <h1 className="bebas uppercase text-[2.25rem]">permission Request </h1>
      <div className="relative ">
        <LightRotate src="/light/purple.png" />
        <img
          src="/lock.png"
          alt="lock"
          className="absolute left-1/2 top-1/2 translate-x-[-50%] translate-y-[-50%]"
        />
      </div>
      <p className="inter mb-[2.9rem] max-w-[275px] text-center text-[12px] font-medium">
        For the proper functioning of the application, access to phone
        orientation settings is required
      </p>
      <button
        onClick={requestMotionPermission}
        className="bebas text-[2.5rem] max-w-[315px] px-6 py-5.25 btnPurple leading-none rounded-3xl cursor-pointer"
      >
        Request orientation permission
      </button>
    </section>
  );
}

export default PermissionPage;
