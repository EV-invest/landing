import { cache } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getVacancy, type VacancyDetail } from "@/entities/vacancy";
import { VacancyView } from "@/views/vacancy";

export const dynamic = "force-dynamic";

// Deduped within a request, so generateMetadata and the page share one fetch.
const fetchVacancy = cache(async (slug: string): Promise<VacancyDetail | null> => {
  try {
    const { data } = await getVacancy({ path: { slug } });
    return data ?? null;
  } catch {
    return null;
  }
});

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const vacancy = await fetchVacancy(slug);
  if (!vacancy) return { title: "Role not found" };
  return {
    title: `${vacancy.title} — Careers`,
    description: vacancy.summary,
    alternates: { canonical: `/hiring/${vacancy.slug}` },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const vacancy = await fetchVacancy(slug);
  if (!vacancy) notFound();
  return <VacancyView vacancy={vacancy} />;
}
