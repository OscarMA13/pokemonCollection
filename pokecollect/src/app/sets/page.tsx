"use client";
import Link from "next/link";

const popularSets = [
  {
    id: "base1",
    name: "Base Set (151)",
    logo: "https://images.pokemontcg.io/base1/logo.png",
  },
  {
    id: "base2",
    name: "Jungle",
    logo: "https://images.pokemontcg.io/base2/logo.png",
  },
  {
    id: "base3",
    name: "Fossil",
    logo: "https://images.pokemontcg.io/base3/logo.png",
  },
  {
    id: "base4",
    name: "Team Rocket",
    logo: "https://images.pokemontcg.io/base4/logo.png",
  },
  {
    id: "neo1",
    name: "Neo Genesis",
    logo: "https://images.pokemontcg.io/neo1/logo.png",
  },
  {
    id: "gym1",
    name: "Gym Heroes",
    logo: "https://images.pokemontcg.io/gym1/logo.png",
  },
  {
    id: "ex1",
    name: "EX Ruby & Sapphire",
    logo: "https://images.pokemontcg.io/ex1/logo.png",
  },
  {
    id: "swsh1",
    name: "Sword & Shield",
    logo: "https://images.pokemontcg.io/swsh1/logo.png",
  },
  {
    id: "sv9",
    name: "Obsidian Flames",
    logo: "https://images.pokemontcg.io/sv9/logo.png",
  },
];

export default function SetBrowser() {
  return (
    <div className="p-8 flex  flex-col gap-8"
    style={{
        backgroundImage: "url('https://www.chromethemer.com/wallpapers/chromebook-wallpapers/images/960/pokemon-chromebook-wallpaper.jpg')",
        backgroundPosition: "center",
    }}>
      <h1 className="text-3xl font-bold text-center flex items-center justify-center">
        <p className="bg-gray-200 w-fit rounded text-gray-800"> Popular Pokémon Card Sets</p></h1>
      <div className="grid grid-cols-2 gap-6">
        {popularSets.map((set) => (
          <Link key={set.id} href={`/sets/${set.id}`}>
            <div className="cursor-pointer rounded overflow-hidden shadow hover:shadow-lg hover:scale-105 transition">
              <div className="h-32 bg-white flex items-center justify-center p-2">
                <img
                  src={set.logo}
                  alt={set.name}
                  width={120}
                  height={60}
                  
                />
              </div>
              <div className="h-16 flex items-center justify-center bg-gray-200">
                <span className="text-lg font-semibold text-center px-2 text-gray-700">{set.name}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
