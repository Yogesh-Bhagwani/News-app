import Navbar from "@/components/Navbar";
import Image from "next/image";
import { News } from "./api/News";

interface Props {
  searchParams: { [key: string]: string | undefined };
}


export default async function Home({searchParams}:Props) {
  const category = await searchParams.category || "general"; 

  return (
    <div>
      <div>
        <News category={category}/>
      </div>
    </div>
  );
}
