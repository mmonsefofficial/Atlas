import Roadmaps from "@/components/home/Roadmaps";
import {
    Globe,
    BrainCircuit,
    ShieldCheck,
    Smartphone,
    ChartColumn,
    Cloud,
    Gamepad2,
    Cpu,
} from "lucide-react";
import { title } from "process";

export const categories = [
{
  title: "Web Development",
  icon: Globe,
  roadmaps: 12,
  color: "bg-blue-50 text-blue-600",
},
{
  title: "Artificial Intelligence",
  icon: BrainCircuit,
  roadmaps: 8,
  color: "bg-purple-50 text-purple-600",
},
{
  title: "Cybersecurity",
  icon: ShieldCheck,
  roadmaps: 6,
  color: "bg-red-50 text-red-600",
},
{
  title: "Mobile Development",
  icon: Smartphone,
  roadmaps: 5,
  color: "bg-green-50 text-green-600",
},
{
  title: "Cloud Computing",
  icon: Cloud,
  roadmaps: 4,
  color: "bg-cyan-50 text-cyan-600",
},
{
  title: "Data Science",
  icon: ChartColumn,
  roadmaps: 7,
  color: "bg-orange-50 text-orange-600",
},
{
  title: "Game Development",
  icon: Gamepad2,
  roadmaps: 5,
  color: "bg-indigo-50 text-indigo-600",
},
{
  title: "Competitive Programming",
  icon: Cpu,
  roadmaps: 3,
  color: "bg-slate-100 text-slate-700",
},

];
