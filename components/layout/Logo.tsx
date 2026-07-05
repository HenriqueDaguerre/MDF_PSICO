import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Símbolo oficial da marca — lamparina com chama, do kit de identidade
 * visual (representa consciência/luz atravessando a escuridão).
 */
export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/brand/simbolo.png"
      alt=""
      width={64}
      height={64}
      priority
      className={cn("h-7 w-7 object-contain", className)}
    />
  );
}
