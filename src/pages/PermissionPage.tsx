import LightRotate from "../entities/LightRotate";

function PermissionPage() {
  return (
    <div className="h-screen bg-black p-4">
      <div className="relative">
        <LightRotate src="/light/purple.img" />
        <img src="/lock.png" alt="lock" className="absolute inset-0" />
      </div>
    </div>
  );
}

export default PermissionPage;
