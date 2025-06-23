import { Button } from "@/components/ui/button";

import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen " style={{
      backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/024/625/582/non_2x/cute-yellow-mouse-character-background-free-vector.jpg')",
      backgroundPosition: "center",
  }}>
      <div className="flex flex-col px-6 py-10 gap-18 w-full">
        <div className="flex items-center justify-center mb-8">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9bL705dVou5LjvDZcFGzEHeCQ_WFv7b9nQA&s"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-300"
        />
        </div>
        <div>
          <div className="flex flex-col gap-4">
        <h1 className="text-4xl font-extrabold text-white">Welcome To PokeCollect</h1>
        <div className="items-center text-lg font-medium text-white">
          <li>Explore different collections</li>
          <li>Create your own</li>
          <li>Share with friends</li>
        </div>
        </div>
        <Link href="/sets">
        <Button variant="default" className="text-lg px-6 py-2 mt-4 cursor-pointer">
          Click to continue
        </Button>
        </Link></div>
        

   
      </div>
    </div>
  );
}
