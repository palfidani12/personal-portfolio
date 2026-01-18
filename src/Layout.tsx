import { Outlet, useLocation } from "react-router-dom";
import { Navigation } from "./components/navigation/Navigation";
import { useState, useEffect } from "react";

export const Layout = () => {
  const location = useLocation();
  const [isPageChanging, setIsPageChanging] = useState(false);

  useEffect(() => {
    setIsPageChanging(true);
    const timer = setTimeout(() => setIsPageChanging(false), 300);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-slate-900">
      <Navigation />
      <main className="flex-1">
        <div className={`transition-all duration-300 ${isPageChanging ? 'opacity-0 scale-95' : 'opacity-100 scale-100'}`}>
          <Outlet />
        </div>
      </main>
      <footer className="bg-white dark:bg-slate-800 border-t border-slate-200 dark:border-slate-700 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-slate-600 dark:text-slate-400 text-sm">
            © 2025 Daniel Palfi. Built with React, TypeScript, and Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};
