import { News } from "./api/News";

interface Props {
  searchParams: Promise<{ [key: string]: string | undefined }>;
}

export default async function Home({ searchParams }: Props) {
  const resolvedSearchParams = await searchParams;
  const category = resolvedSearchParams?.category || "general";

  return (
    <div>
      <News category={category} />
    </div>
  );
}
