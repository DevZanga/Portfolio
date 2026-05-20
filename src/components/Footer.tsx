export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="footer" className="border-t border-line bg-ink py-8 text-white">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-center text-xs leading-relaxed text-white/50">
          Copyright © {year} DevZanga. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
