import type { Metadata } from "next";
import { listVacancies, type VacancySummary } from "@/entities/vacancy";
import { HiringView } from "@/views/hiring";

// Request-time render: the board reflects live listings, and the backend need
// not be reachable at build time.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Careers",
  description: "Join EV Investment — senior roles across investment, development, and client advisory for premium coastal developments in Quy Nhơn, Vietnam.",
  alternates: { canonical: "/hiring" },
};

export default async function Page() {
  let vacancies: VacancySummary[] = [];
  try {
    const { data } = await listVacancies();
    vacancies = data ?? [];
  } catch {
    // Backend unreachable — render the page shell with an empty board.
    vacancies = [];
  }
  return <HiringView vacancies={vacancies} />;
}
