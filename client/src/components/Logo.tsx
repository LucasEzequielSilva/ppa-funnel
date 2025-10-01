import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "red" | "white";
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ 
  variant = "red", 
  className,
  width = 120,
  height = 40
}: LogoProps) {
  const logoSrc = variant === "white" ? "/logo-white.svg" : "/logo-red.svg";
  
  return (
    <img
      src={logoSrc}
      alt="PromptMaestro"
      width={width}
      height={height}
      className={cn("object-contain", className)}
    />
  );
}
