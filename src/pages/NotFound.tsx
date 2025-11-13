import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
// Assuming Button component import path is correct based on other files
import { Button } from "@/components/ui/button"; 

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background p-4">
      <div className="text-center p-10 rounded-2xl border border-border bg-card shadow-2xl transition-all hover:shadow-primary/20">
        
        {/* Animated Gradient 404 Title */}
        <h1 className="mb-4 text-7xl md:text-9xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-pulse block">
            404
          </span>
        </h1>
        
        {/* Subtle separator */}
        <div className="mx-auto w-1/3 h-0.5 bg-border/50 my-6"></div>
        
        <p className="mb-6 text-2xl md:text-3xl font-semibold text-foreground">
          Oops! Page not found
        </p>
        <p className="mb-8 text-muted-foreground max-w-sm mx-auto">
          The route <code className="text-primary/80 bg-secondary/50 p-1 rounded-md">{location.pathname}</code> does not exist. Let's get you back on track.
        </p>
        
        {/* Enhanced Button Link */}
        <Link to="/">
          <Button 
            size="lg" 
            className="group relative px-8 py-4 bg-gradient-to-r from-primary to-accent text-white font-semibold rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <span className="relative z-10">
              Return to Home
            </span>
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;