import Link from "next/link";
import { Building2, Link as LinkIcon, Play } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-[#112720] px-5 py-14 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2.5 text-xl font-semibold"
            >
              <span className="grid size-9 place-items-center rounded-full bg-[#d9a66b] text-[#18342d]">
                <Building2 size={20} />
              </span>
              RentNest
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-6 text-white/55">
              Making the search for home feel a little more like coming home.
            </p>
            <div className="mt-7 flex gap-2">
              <a
                href="#top"
                aria-label="Instagram"
                className="grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-[#d9a66b] hover:text-[#d9a66b]"
              >
                <LinkIcon size={16} />
              </a>
              <a
                href="#top"
                aria-label="Facebook"
                className="grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-[#d9a66b] hover:text-[#d9a66b]"
              >
                <Play size={16} />
              </a>
              <a
                href="#top"
                aria-label="LinkedIn"
                className="grid size-9 place-items-center rounded-full border border-white/15 text-white/70 transition hover:border-[#d9a66b] hover:text-[#d9a66b]"
              >
                <LinkIcon size={16} />
              </a>
            </div>
          </div>
          <div>
            <p className="footer-heading">Explore</p>
            <div className="footer-links">
              <Link href="/all-properties">Find a home</Link>
              <Link href="/all-properties">List your property</Link>
              <Link href="/about">How it works</Link>
              <Link href="/about">Journal</Link>
            </div>
          </div>
          <div>
            <p className="footer-heading">Company</p>
            <div className="footer-links">
              <Link href="/about">About RentNest</Link>
              <Link href="/services">Our services</Link>
              <Link href="/about">Careers</Link>
              <Link href="/about">Contact us</Link>
            </div>
          </div>
          <div>
            <p className="footer-heading">Visit us</p>
            <div className="footer-links">
              <p>hello@rentnest.com</p>
              <p>+1 800 555 0148</p>
              <p>
                100 Congress Ave
                <br />
                Austin, TX 78701
              </p>
            </div>
          </div>
        </div>
        <div className="mt-14 flex flex-wrap justify-between gap-3 border-t border-white/10 pt-6 text-xs text-white/40">
          <p>© {new Date().getFullYear()} RentNest, Inc. All rights reserved.</p>
          <div className="flex gap-5">
            <Link href="/about" className="hover:text-white">
              Privacy
            </Link>
            <Link href="/about" className="hover:text-white">
              Terms
            </Link>
            <Link href="/about" className="hover:text-white">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
