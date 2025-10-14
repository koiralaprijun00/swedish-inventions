'use client';

import Link from 'next/link';
import { FaYoutube, FaInstagram } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import SocialShare from './[locale]/components/SocialShare';
import { useTranslations } from "next-intl"

export default function Footer() {

  const t = useTranslations("Translations")

  return (
    <footer>
      <div className="w-full mx-auto pt-10 pb-16 text-center">
        <div className="flex flex-wrap items-center justify-center gap-4 mb-8">
          <p className="text-gray-700 font-semibold">
            {t("followUs")}
          </p>
          <Link
            href="https://www.youtube.com/@allswedish" // Replace with actual URL
            aria-label="YouTube"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-red-600 transition-colors"
          >
            <FaYoutube size={20} />
          </Link>
          <Link
            href="https://x.com/allthingssweden" // Replace with actual URL
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-500 transition-colors"
          >
            <FontAwesomeIcon icon={faXTwitter} size="lg" /> {/* Use FontAwesomeIcon */}
          </Link>
          <Link
            href="https://www.instagram.com/allfromsweden/" // Replace with actual URL
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-pink-500 transition-colors"
          >
            <FaInstagram size={20} />
          </Link>
        </div>

        {/* Bottom row: back to top and share */}
        <div className="flex flex-col items-center justify-center gap-4 border-t border-gray-200 pt-4 px-4 sm:px-0">
          <div>
            <Link href="#" className="text-sm text-gray-600 hover:underline">
              {t("Back to top")}
            </Link>
          </div>
          <div className="flex items-center justify-center gap-2">
            <p className="text-gray-700 font-semibold">
              {t("share")}:
            </p>
            <SocialShare
              url="https://swedishinventions.com" // Replace with actual URL
              title="Check out this awesome website!"
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
