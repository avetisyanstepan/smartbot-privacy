import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl py-16 text-center">
      <h1 className="text-3xl font-bold">Страница не найдена</h1>
      <p className="mt-2 text-gray-600">Պատճառը կարող է լինել սխալ հղումը։</p>
      <Link
        href="/"
        className="mt-6 inline-block rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white"
      >
        Վերադառնալ գլխավոր
      </Link>
    </div>
  );
}

// Если хочешь жёстко запретить SSG для not-found:
export const dynamic = 'force-dynamic';
