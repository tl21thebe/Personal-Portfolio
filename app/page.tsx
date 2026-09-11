import Typing from "@/components/Typing";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-montserrat dark:bg-black">
        
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-5xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Hi There!
          </h1>
          <br/>
          <h1 className="max-w-lg text-5xl font-semibold leading-15 tracking-tight text-black dark:text-zinc-50">
            I&apos;m
            <strong className="text-6xl text-[#4888FF] dark:text-zinc-50"> Tiego Mokwena</strong>
          </h1>
        </div>

        <div className="typing-homeclass">
          <Typing />
        </div>
        
    </div>
  );
}
