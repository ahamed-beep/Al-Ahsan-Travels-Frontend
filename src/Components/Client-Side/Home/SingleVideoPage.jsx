export default function SingleVideoPage() {
  return (
    <div className="w-full h-screen pt-20 bg-white">
      <video
        src="https://res.cloudinary.com/ddhxxqkpc/video/upload/v1783509698/WhatsApp_Video_2026-07-08_at_4.17.41_PM_bmxrcd.mp4"
        controls
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
      />
    </div>
  );
}