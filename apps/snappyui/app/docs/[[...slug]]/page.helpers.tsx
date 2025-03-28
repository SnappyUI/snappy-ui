import { notFound } from "next/navigation";

import { source } from "@/lib/source";

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page)
    notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
