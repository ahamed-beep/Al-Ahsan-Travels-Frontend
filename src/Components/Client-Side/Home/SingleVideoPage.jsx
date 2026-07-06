export default function SingleVideoPage() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center p-4">
      <video
        src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
        controls
        autoPlay
        loop
        muted
        playsInline
        className="w-full max-w-4xl rounded-xl shadow-lg"
      />
    </div>
  );
}