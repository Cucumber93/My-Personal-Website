export default function BackgroundBlobs() {
  return (
    <div
      className="pointer-events-none fixed inset-0 "
      aria-hidden="true"
    >
      <div className="absolute inset-0 h-full w-full">
        {/* Blob ม่วง */}
        <div
          className="absolute left-[0%] top-[10%] h-full w-full rounded-full opacity-70 animate-blob"
          style={{ background: '#080B38', filter: 'blur(120px)' }}
        />
        {/* Blob ฟ้า */}
        <div
          className="absolute right-[15%] top-[25%] h-full w-full  rounded-full opacity-70 animate-blob animation-delay-2000"
          style={{ background: '#69D3CF', filter: 'blur(120px)' }}
        />
        {/* Blob น้ำเงินเข้ม */}
        <div
          className="absolute left-[30%] bottom-[20%] h-full w-full  rounded-full opacity-60 animate-blob animation-delay-4000"
          style={{ background: '#8A00B8', filter: 'blur(140px)' }}
        />
      </div>
    </div>
  );
}
