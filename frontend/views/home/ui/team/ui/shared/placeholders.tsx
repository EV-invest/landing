import { Users, Globe } from "lucide-react";
import { PlaceholderCard } from "./cards";

/**
 * The two "join us" / "LP network" CTA cards. Rendered as a fragment so the
 * cards sit as direct children of the parent Team grid.
 */
export function TeamPlaceholders() {
  return (
    <>
      <PlaceholderCard
        icon={Users}
        iconClassName="text-main-accent-t1"
        title="Join Us"
        body="We are always looking for talented analysts and asset managers in Quy Nhon and Da Nang."
        cta="Hiring"
        href="/hiring"
        heading="Open Position"
        sub="Investment Analyst"
      />

      <PlaceholderCard
        icon={Globe}
        iconClassName="text-main-accent-t1"
        title="LP Partner Network"
        body="Talk to us about co-investing in Vietnam's coastal real estate."
        cta="IR Contacts"
        href="/contact"
        heading="Investor Relations"
        sub="Investor Relations (IR)"
      />
    </>
  );
}
