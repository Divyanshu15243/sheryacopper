import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  dark?: boolean;
  align?: "left" | "center";
  action?: ReactNode;
  className?: string;
  as?: "h1" | "h2";
  id?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  dark,
  align = "left",
  action,
  className,
  as: Heading = "h2",
  id,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-10 md:mb-14",
        action && "md:flex md:items-end md:justify-between md:gap-10",
        align === "center" && "mx-auto max-w-3xl text-center",
        className,
      )}
    >
      <div className={cn(align === "left" && "max-w-2xl")}>
        {eyebrow && <p className={cn("eyebrow mb-4", dark && "eyebrow-light")}>{eyebrow}</p>}
        <Heading id={id} className={cn("h-section text-balance", dark && "text-white")}>{title}</Heading>
        {description && (
          <p className={cn("lede mt-4", dark && "text-white/70")}>{description}</p>
        )}
      </div>
      {action && <div className="mt-6 shrink-0 md:mt-0">{action}</div>}
    </div>
  );
}
