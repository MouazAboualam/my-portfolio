import { useState, useEffect } from "react";
import { ShieldCheck } from "lucide-react";

const MobileMockup = ({ project }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted) {
    return (
      <div className="w-72 h-[540px] bg-slate-200 rounded-[2.5rem] flex items-center justify-center text-slate-500">
        Loading...
      </div>
    );
  }

  if (!project || !project.url) {
    return (
      <div className="w-72 h-[540px] bg-slate-200 rounded-[2.5rem] flex items-center justify-center text-slate-500">
        Project demo unavailable
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Performance-optimized gradient */}
      <div className="absolute -inset-4 bg-linear-to-br from-blue-500/20 to-cyan-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-70 transition-opacity duration-500 pointer-events-none"></div>

      <div className="relative bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-800 overflow-hidden w-72 mx-auto lg:mx-0">
        {/* Phone header */}
        <div className="bg-slate-800 px-4 py-3 flex justify-between items-center border-b border-slate-700">
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-slate-400 font-mono truncate max-w-24">
            {project.title || "Project"}
          </div>
        </div>

        {/* Phone screen with loading states */}
        <div className="bg-slate-100 h-[560px] overflow-hidden relative">
          {!iframeLoaded && !hasError && (
            <div className="absolute inset-0 bg-linear-to-b from-slate-200 to-slate-300 flex items-center justify-center z-10">
              <div className="flex flex-col items-center">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-slate-600 mb-2"></div>
                <span className="text-slate-500 text-xs">Loading demo...</span>
              </div>
            </div>
          )}

          {hasError && (
            <div className="absolute inset-0 bg-slate-100 flex flex-col items-center justify-center z-10 p-4">
              <div className="text-slate-500 text-xs text-center">
                Unable to load demo
                <br />
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline text-xs mt-1 inline-block"
                >
                  Open in new tab
                </a>
              </div>
            </div>
          )}

          <iframe
            src={project.url}
            title={`${project.title || "Project"} Live Demo`}
            className={`w-full h-full border-0 transition-opacity duration-300 ${
              iframeLoaded ? "opacity-100" : "opacity-0"
            }`}
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms allow-downloads"
            loading="lazy"
            onLoad={() => {
              if (!hasError) setIframeLoaded(true);
            }}
            onError={() => {
              setHasError(true);
              setIframeLoaded(false);
            }}
          ></iframe>
        </div>

        {/* Phone footer */}
        <div className="bg-slate-800 px-4 py-3 flex justify-center">
          <div className="w-16 h-1.5 bg-slate-700 rounded-full"></div>
        </div>
      </div>

      {/* Security badge */}
      <div className="absolute -bottom-3 -right-3 bg-amber-400 text-amber-900 px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
        <ShieldCheck className="w-3 h-3" />
        <span>Secured</span>
      </div>
    </div>
  );
};

export default MobileMockup;
