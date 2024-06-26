import { Navbar } from "@/components";


export default function  GeneralLayout({
 children
}: {
 children: React.ReactNode;
}) {
  return (
    <>
    <Navbar/>
        <main>
       <span className="text-lg">¡Hola Mundo!</span>
        <span className="text-7xl">PricingPage</span>
    </main>
    </>

  );
}