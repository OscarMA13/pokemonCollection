// app/sets/[id]/page.tsx
import { Button } from "@/components/ui/button";

import { MoveLeftIcon } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";



export default async function SetDetail({ params }: { params: { id: string } }) {
  const res = await fetch(`https://api.pokemontcg.io/v2/cards?q=set.id:${params.id}`, {
    headers: {
      "X-Api-Key": process.env.NEXT_PUBLIC_POKEMON_API_KEY!,
    },
    next: { revalidate: 60 },
  });

  if (!res.ok) return notFound();
  const data = await res.json();
  const cards = data.data;

return (
    <div
        className="p-16 flex flex-col gap-8 bg-gray-600"
    >
        <div className="flex flex-rows items-center justify-between mr-16">
        <Link href="/sets">
        <Button variant='ghost' className="font-extrabold w-fit text-gray-200 text-3xl text-center flex items-center"><MoveLeftIcon/></Button>
        </Link>
        <Button variant='default' className="font-extrabold w-fit text-gray-200 text-3xl text-center flex items-center hover:bg-green-700 ">Fully Complete ?</Button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {cards.map((card: any) => (
                <img
                    key={card.id}
                    src={card.images.small}
                    alt={card.name}
                    className="rounded shadow hover:scale-105 transition"
                />
            ))}
        </div>
    </div>
);
}
