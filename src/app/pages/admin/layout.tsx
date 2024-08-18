'use client'
import Sidebar from "@/app/components/layer/Sidebar"




export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

  
<div className="">

  <Sidebar/>
  
<main>

  {children}
</main>
</div>
 
 
  
  );
}
