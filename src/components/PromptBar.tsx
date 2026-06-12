"use client";

import {
  Plus,
  Mic,
  AudioWaveform
} from "lucide-react";

interface Props{
  value:string;
  setValue:(v:string)=>void;
  loading:boolean;
  onGenerate:()=>void;
}

export default function PromptBar({
  value,
  setValue,
  loading,
  onGenerate
}:Props){

  return(
    <div
      className="
      glass
      rounded-full
      px-4
      py-3
      flex
      items-center
      gap-3
      "
    >

      <Plus className="cursor-pointer"/>

      <input
        value={value}
        onChange={(e)=>setValue(e.target.value)}
        placeholder="Apa yang ingin Anda buat hari ini?"
        className="
        flex-1
        bg-transparent
        outline-none
        "
      />

      <Mic className="cursor-pointer"/>

      <button
        onClick={onGenerate}
        className={`
        w-10
        h-10
        rounded-full
        flex
        items-center
        justify-center
        bg-white
        text-black

        ${loading ? "animate-spin" : ""}
        `}
      >
        <AudioWaveform size={18}/>
      </button>

    </div>
  );
}
