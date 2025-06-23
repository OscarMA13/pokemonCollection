import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen bg-white">
      <main className="flex flex-col items-center px-6 py-10 text-center gap-4 w-full">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bL705dVou5LjvDZcFGzEHeCQ_WFv7b9nQA&s"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-300"
        />
        <div>
        <h1 className="text-4xl font-extrabold">Welcome</h1>
        <h2 className="text-3xl font-extrabold text-indigo-600">To PokeCollect</h2>
        </div>
        <div className="space-y-1 text-lg font-medium text-gray-700">
          <p>Explore different collections</p>
          <p>Create your own</p>
          <p>Share with friends</p>
        </div>
        <Link href="/sets">
        <Button variant="default" className="text-lg px-6 py-2 mt-4">
          Click to continue
        </Button>
        </Link>

   
      </main>
    </div>
  );
}
