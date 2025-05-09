import { WaveEffect } from "./wave-button";

export default function Page() {
  return (
    <>
      <WaveEffect>
        <button className="px-6 py-3 h-20 bg-blue-500 text-white rounded-lg focus:outline-hidden">
          Buna tikla beee
        </button>
      </WaveEffect>
      <WaveEffect className="bg-indigo-500">
        <button className="px-6 py-3 h-20 bg-black text-white rounded-lg focus:outline-hidden">
          Buna tikla beee
        </button>
      </WaveEffect>
      <div className="w-[250px] h-[200px]">
        <WaveEffect className="h-full">
          <img
            className="w-full h-full"
            src="https://images.unsplash.com/photo-1543610892-0b1f7e6d8ac1?q=80&w=1856&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </WaveEffect>
      </div>
    </>
  );
}
