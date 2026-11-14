export default function CtaSection() {
  return (
    <footer className="bg-blue-900 px-5 py-8 text-center text-white sm:py-10">
      <h2 className="text-xl font-bold sm:text-2xl">Inspired to start your next journey?</h2>
      <p className="mx-auto mt-2 max-w-xl text-xs leading-5 text-blue-100 sm:text-sm">
        Let us help you plan a meaningful journey with care and attention at every step.
      </p>
      <a
        href="#top"
        className="mt-4 inline-flex min-h-8 items-center justify-center rounded-sm bg-white px-5 text-xs font-semibold text-blue-900 transition-colors hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Get started
      </a>
    </footer>
  );
}