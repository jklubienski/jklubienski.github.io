import React from "react";
import { Link } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title }: Props) => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="bg-white shadow-md p-4 flex justify-between items-center">
        {/* <h1 className="text-xl font-bold">James Kinsler-Lubienski</h1> */}
        <Link
          to="/"
          className="text-xl font-bold hover:text-gray-600"
        >
          James Kinsler-Lubienski
        </Link>
      </header>
      <main className="flex-1 flex items-center justify-center p-8">
        <div className="text-center max-w-xl w-full bg-white p-10 rounded-2xl shadow-md">
          {title && <h2 className="text-2xl font-semibold mb-4">{title}</h2>}
          {children}
        </div>
      </main>
      <footer className="bg-white p-4 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} James Kinsler-Lubienski
      </footer>
    </div>
  );
};

export default Layout;
