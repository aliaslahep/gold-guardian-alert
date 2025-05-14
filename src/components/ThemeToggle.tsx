
import { Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  return (
    <Button
      variant="ghost"
      size="icon"
      className="rounded-full"
    >
      <Sun className="h-5 w-5" />
      <span className="sr-only">Light theme</span>
    </Button>
  );
}
