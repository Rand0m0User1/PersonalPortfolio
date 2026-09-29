"use client";
import { useEffect } from "react";
import { restoreHomeScroll } from "@/lib/scroll";

const ScrollRestore = () => {
  useEffect(() => {
    restoreHomeScroll();
  }, []);
  return null;
};

export default ScrollRestore;
