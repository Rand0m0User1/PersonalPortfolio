import { Metadata } from "next";
import CadModels from "@/components/CadModels";

export const metadata: Metadata = {
  title: "CAD Models | Aleksander Kurgan",
  description:
    "Interactive 3D CAD models of robots and robot mechanisms designed in Onshape by Aleksander Kurgan.",
};

export default function CadModelsPage() {
  return <CadModels />;
}
