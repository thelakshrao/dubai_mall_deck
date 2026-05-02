import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <section className="min-h-screen bg-[#0a0a0a]">
      <Navbar /> 
      
      <main>
        {children}
      </main>
    </section>
  );
}