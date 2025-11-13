import { ShieldCheck } from "lucide-react";

const MobileMockup = ({ project }) => {
  // Handle case where project is undefined or doesn't have url
  if (!project || !project.url) {
    return (
      <div className="w-72 h-[540px] bg-slate-200 rounded-[2.5rem] flex items-center justify-center text-slate-500">
        Project demo unavailable
      </div>
    );
  }

  return (
    <div className="relative group">
      {/* Phone frame */}
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-70 transition-all duration-500"></div>
      <div className="relative bg-slate-900 rounded-[2.5rem] shadow-2xl border border-slate-800 overflow-hidden w-72 mx-auto lg:mx-0">
        {/* Phone header */}
        <div className="bg-slate-800 px-4 py-3 flex justify-between items-center border-b border-slate-700">
          <div className="flex space-x-1">
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500"></div>
          </div>
          <div className="text-xs text-slate-400 font-mono">
            {project.title || "Project"}
          </div>
        </div>
        {/* Phone screen with live iframe */}
        <div className="bg-slate-100 h-[560px] overflow-hidden">
          {/* Live iframe */}
          <iframe
            src={project.url}
            title={`${project.title || "Project"} Live Demo`}
            className="w-full h-full border-0"
            sandbox="allow-same-origin allow-scripts allow-popups allow-forms"
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
