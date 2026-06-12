"use client";

import { useState } from "react";

import Sidebar from "@/components/Sidebar";
import PromptBar from "@/components/PromptBar";
import ScriptCard from "@/components/ScriptCard";
import VideoCard from "@/components/VideoCard";

export default function HomePage(){

  const [prompt,setPrompt] = useState("");

  const [loading,setLoading] = useState(false);

  const [script,setScript] = useState("");

  const [video,setVideo] = useState("");

  async function generate(){

    if(!prompt) return;

    setLoading(true);

    setTimeout(()=>{

      setScript(`
Video sinematik tentang:
${prompt}

Narasi contoh hasil AI.
      `);

      setVideo(
        "https://www.w3schools.com/html/mov_bbb.mp4"
      );

      setLoading(false);

    },3000);
  }

  return(
    <main className="h-screen flex">

      <Sidebar/>

      <section
        className="
        flex-1
        flex
        flex-col
        "
      >

        <div
          className="
          flex-1
          overflow-auto
          p-8
          max-w-5xl
          mx-auto
          w-full
          space-y-6
          "
        >

          <div
            className="
            text-center
            py-12
            "
          >
            <h1
              className="
              text-4xl
              font-bold
              "
            >
              AI Content Studio
            </h1>
          </div>

          <ScriptCard script={script}/>

          <VideoCard videoUrl={video}/>

        </div>

        <div className="p-6">

          <PromptBar
            value={prompt}
            setValue={setPrompt}
            loading={loading}
            onGenerate={generate}
          />

        </div>

      </section>

    </main>
  );
}
