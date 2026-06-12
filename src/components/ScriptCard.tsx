interface Props{
  script:string;
}

export default function ScriptCard({
  script
}:Props){

  if(!script) return null;

  return(
    <div className="glass rounded-3xl p-6">
      <h2 className="font-bold mb-3">
        SCRIPT
      </h2>

      <p className="text-white/80 whitespace-pre-wrap">
        {script}
      </p>
    </div>
  );
}
