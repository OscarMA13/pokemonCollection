import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white flex flex-col gap-4 items-center justify-center h-screen text-black">
      <p className="text-3xl font-semibold">Welcome</p>
      <div className="text-3xl font-semibold"> To PokeCollect</div>
      <Button className="text-2xl font-semibold"> Click to continue</Button>
    </div>
  );
}
