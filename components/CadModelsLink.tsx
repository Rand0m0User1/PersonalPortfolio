"use client";
import React from "react";
import Link from "next/link";
import { FaCube } from "react-icons/fa";
import { saveHomeScroll } from "@/lib/scroll";

const CadModelsLink = () => {
  return (
    <Link
      href="/CADmodels"
      scroll={false}
      onClick={saveHomeScroll}
      className="inline-flex items-center gap-2 rounded-lg bg-slate-800 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-500"
    >
      <FaCube size={15} />
      View Models
    </Link>
  );
};

export default CadModelsLink;
