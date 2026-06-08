import type { Metadata } from "next";
import { services, businessName } from "@/lib/booking/config";
import Booker from "./Booker";
import "./book.css";

export const metadata: Metadata = {
  title: "Book Online",
  description:
    "Book your Thai massage at Layan in Frankston — pick a treatment, choose a time, done. Or call 0451 250 064.",
};

export default function BookPage() {
  return (
    <div className="sb bg-cream dark:bg-gray-900">
      <div className="wrap">
        <div className="card">
          <h1>Book a time</h1>
          <p className="sub">
            {businessName} — pick a treatment, then a time. That&apos;s it.
          </p>
          <Booker services={services} />
        </div>
      </div>
    </div>
  );
}
