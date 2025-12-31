import { useEffect } from "react";
import confetti from "canvas-confetti";
import { Outlet } from "react-router-dom";
import Navbar from "../../components/navbar";
import { Toaster } from "../../components/ui/toaster";
import { Footer } from "../../components/footer";
import { Analytics } from "@vercel/analytics/react";
import { useToast } from "../../hooks/use-toast";

function LandingLayout() {
  const { toast } = useToast();

  useEffect(() => {
    // Show New Year toast
    toast({
      title: "🎉 Happy New Year 2026!",
      description:
        "Wishing you a prosperous year ahead from BFT Car Rental & Estate Services.",
      duration: 10000,
    });

    const duration = 10 * 60 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    const interval: any = setInterval(function () {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      });
    }, 250);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <Navbar />
      <Outlet />
      <Toaster />
      <Footer />
      {import.meta.env.PROD && <Analytics />}
    </div>
  );
}

export default LandingLayout;
