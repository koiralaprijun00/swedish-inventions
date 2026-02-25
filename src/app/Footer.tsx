'use client';

import Link from 'next/link';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { useTranslations } from "next-intl"

export default function Footer() {
  const t = useTranslations("Translations")

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <div className="site-footer__social">
          <Link
            href="https://www.youtube.com/@allswedish"
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={14} />
          </Link>
          <Link
            href="https://x.com/allthingssweden"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faXTwitter} style={{ width: 14, height: 14 }} />
          </Link>
          <Link
            href="https://www.instagram.com/allfromsweden/"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={14} />
          </Link>
        </div>
        <span>© {new Date().getFullYear()} Swedish Inventions</span>
      </div>
    </footer>
  );
}
