export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-[#1C1A17] text-[#F4E8D5]">
      <div className="container-width grid gap-10 py-12 md:grid-cols-3">
        <div>
          <h3 className="text-3xl font-semibold text-[#F6D9A0]">Goldenwick</h3>
          <p className="mt-3 text-sm text-[#D8C4A9]">Light up every moment</p>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#F6D9A0]">Quick Links</h4>
          <div className="mt-4 flex flex-wrap gap-3 text-sm text-[#E8D8C2]">
            <a href="#home">Home</a>
            <a href="#products">Products</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms</a>
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold text-[#F6D9A0]">Follow Us</h4>
          <div className="mt-4 flex gap-4 text-sm text-[#E8D8C2]">
            <a href="#" aria-label="Instagram">
              Instagram
            </a>
            <a href="#" aria-label="Facebook">
              Facebook
            </a>
            <a href="#" aria-label="WhatsApp">
              WhatsApp
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[#D8C4A9]">
        © {year} Goldenwick. All rights reserved. Made with love in India.
      </div>
    </footer>
  );
}
