export default function BackgroundBlobs() {
  return (
    <div
      className="pointer-events-none inset-0 "
      aria-hidden="true"
    >
      <div className="absolute inset-0 h-full w-full">
  {/* Blob ม่วง หมุนตามเข็ม */}
  <div
    className="absolute left-[0%] top-[10%] h-full w-full rounded-full opacity-70 animate-blob-cw"
    style={{ background: '#080B38', filter: 'blur(120px)' }}
  />

  {/* Blob ฟ้า หมุนทวนเข็ม */}
  <div
    className="absolute right-[15%] top-[25%] h-full w-full rounded-full opacity-70 animate-blob-ccw"
    style={{ background: '#69D3CF', filter: 'blur(120px)' }}
  />

  {/* Blob ม่วงเข้ม หมุนตามเข็มอีกแบบ */}
  <div
    className="absolute left-[30%] bottom-[20%] h-full w-full rounded-full opacity-60 animate-blob-cw"
    style={{ background: '#8A00B8', filter: 'blur(140px)' }}
  />
</div>

    </div>
  );
}
