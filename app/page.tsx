import Listing from "@/components/timer/listing";

import { AppProvider } from "@/components/timer/context";

export default function Home() {

  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-center text-sm lg:flex">
        <div className="fixed left-0 top-0 w-full justify-center text-center my-10">
          <h3 className="text-3xl"> Kaizentimer ⏰</h3>
          <p> v1 - just a simple multitimer app </p>
        </div>
      </div>

      <div className="relative flex place-items-center">
        { /* @ts-ignore */}
        <AppProvider>
          <Listing />
        </AppProvider>
      </div>
    </main>
  );
}
