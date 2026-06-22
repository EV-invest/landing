import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Whitepaper",
  description:
    "EV Investment whitepaper — our institutional thesis on coastal real estate in Quy Nhơn, Vietnam.",
  alternates: { canonical: "/whitepaper" },
};

// The PDF is built from the `whitepaper` flake input and copied to
// public/whitepaper.pdf by the nix dev shell / runFrontend. Browsers render it
// with their native viewer; no JS PDF lib needed.
export default function Page() {
  return (
    <object
      data="/whitepaper.pdf"
      type="application/pdf"
      className="fixed inset-0 h-screen w-screen"
    >
      <a href="/whitepaper.pdf">Download the whitepaper</a>
    </object>
  );
}
