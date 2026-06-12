interface Props{
  videoUrl?:string;
}

export default function VideoCard({
  videoUrl
}:Props){

  if(!videoUrl) return null;

  return(
    <div className="glass rounded-3xl p-6">

      <h2 className="font-bold mb-4">
        VIDEO
      </h2>

      <video
        controls
        className="
        rounded-2xl
        w-full
        "
      >
        <source src={videoUrl}/>
      </video>

      <a
        href={videoUrl}
        download
        className="
        mt-4
        inline-flex
        px-5 py-3
        rounded-xl
        bg-cyan-500
        text-black
        font-semibold
        "
      >
        Download Video
      </a>

    </div>
  );
}
