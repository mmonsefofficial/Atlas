"use client";

import FloatingCube from "./FloatingCube";

export default function FloatingCubeScene() {
  return (
    <div className="relative h-full w-full">

      {/* Ambient Glow */}
      <div
        className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-3xl"
        style={{
          background: "rgba(37,99,235,.15)",
        }}
      />

      {/* JavaScript */}
      <FloatingCube
        src="/logos/javascript.svg"
        alt="JavaScript"
        size={110}
        top="6%"
        left="12%"
        delay={0}
      />

      {/* React */}
      <FloatingCube
        src="/logos/react.svg"
        alt="React"
        size={105}
        top="18%"
        left="62%"
        delay={0.2}
      />

      {/* VS Code */}
      <FloatingCube
        src="/logos/vscode.svg"
        alt="VS Code"
        size={90}
        top="4%"
        left="78%"
        delay={0.4}
      />

      {/* Git */}
      <FloatingCube
        src="/logos/git.svg"
        alt="Git"
        size={78}
        top="42%"
        left="42%"
        delay={0.6}
      />

      {/* Python */}
      <FloatingCube
        src="/logos/python.svg"
        alt="Python"
        size={100}
        top="60%"
        left="10%"
        delay={0.8}
      />

      {/* Docker */}
      <FloatingCube
        src="/logos/docker.svg"
        alt="Docker"
        size={95}
        top="58%"
        left="70%"
        delay={1}
      />
    </div>
  );
}