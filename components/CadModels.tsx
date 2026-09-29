"use client";
import React, { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { FaArrowLeft, FaExternalLinkAlt } from "react-icons/fa";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, useGLTF } from "@react-three/drei";
import { useInView } from "react-intersection-observer";
import { cadModels } from "@/data/cadModels";
import { scrollToTopInstant } from "@/lib/scroll";

const Model = ({ path }: { path: string }) => {
  const { scene } = useGLTF(path) as any;
  return <primitive object={scene} scale={[8, 8, 8]} />;
};

const LazyModel = ({ path }: { path: string }) => {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ref}
      className="h-[420px] w-full rounded-xl bg-white hover:cursor-all-scroll"
    >
      {inView && (
        <Canvas camera={{ position: [8, 8, -5], fov: 50 }}>
          <ambientLight />
          <OrbitControls enableZoom={true} />
          <Suspense fallback={null}>
            <Model path={path} />
          </Suspense>
          <Environment preset="sunset" />
        </Canvas>
      )}
    </div>
  );
};

const CadModels = () => {
  useEffect(() => {
    scrollToTopInstant();
  }, []);

  return (
    <div className="py-16">
      <Link
        href="/"
        scroll={false}
        className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-orange-500"
      >
        <FaArrowLeft size={13} />
        Back to home
      </Link>

      <h1 className="mt-8 text-2xl font-bold text-orange-500">CAD Models</h1>
      <p className="mt-2 text-slate-600">
        Robot mechanisms and full robots I designed in Onshape, mostly for the
        FIRST Robotics Competition. Click and drag to orbit; scroll to zoom.
      </p>

      <div className="mt-10 flex flex-col gap-10">
        {cadModels.map((model) => (
          <div
            key={model.glbPath}
            className="overflow-hidden rounded-xl border border-slate-200 bg-slate-100/70"
          >
            <LazyModel path={model.glbPath} />
            <div className="p-6">
              <div className="flex items-start justify-between gap-4">
                <h2 className="text-lg font-bold text-slate-800">
                  {model.name}
                </h2>
                {model.link && (
                  <a
                    href={model.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Open ${model.name} in Onshape`}
                    className="shrink-0 text-slate-500 transition-colors hover:text-orange-500"
                  >
                    <FaExternalLinkAlt size={16} />
                  </a>
                )}
              </div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {model.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 border-t border-dashed border-slate-300 pt-8">
        <Link
          href="/"
          scroll={false}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 transition-colors hover:text-orange-500"
        >
          <FaArrowLeft size={13} />
          Back to home
        </Link>
      </div>
    </div>
  );
};

export default CadModels;
