export default function SingleVideoPage() {
  return (
    <div className="w-full  md:pt-20 bg-white flex items-center justify-center">
      <video
        src="https://res.cloudinary.com/ddhxxqkpc/video/upload/v1784756848/Landscape_1_pmyqe7.mp4"
        controls
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-70 md:h-full px-5 object-contain md:object-cover md:px-20"
      />
    </div>
  );
}