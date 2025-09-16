// app/request-access/page.js (SERVER)
import RequestAccess from "../components/RequestAccess";

export default function RequestAccessPage({ searchParams }) {
  const variant = searchParams?.variant === "demo" ? "demo" : "free";
  return (
    <section className="py-16">
      <RequestAccess variant={variant} />
    </section>
  );
}
