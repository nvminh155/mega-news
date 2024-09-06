import { cn } from "@/lib/cn";

const Logo = ({ className }: React.HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("text-[40px] font-semibold text-secondary", className)}>
      MEGA.news
    </div>
  );
};

export default Logo;
