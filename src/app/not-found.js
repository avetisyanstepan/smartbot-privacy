// app/not-found.js
export default function NotFound() {
  return (
    <div className="mx-auto max-w-xl py-16 text-center">
      <h1 className="text-3xl font-bold">Страница не найдена</h1>
      <a href="/" className="mt-6 inline-block rounded-xl bg-purple-600 px-5 py-3 font-semibold text-white">
        На главную
      </a>
    </div>
  );
}
