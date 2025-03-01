"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { useParams, useRouter } from "next/navigation";
import { FaQuestionCircle } from "react-icons/fa";

const QuizFloatingButton: React.FC = () => {
  const { locale } = useParams() as { locale: string };
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [hasSeenPromo, setHasSeenPromo] = useState(false);

  // Check if user has dismissed the promo before
  useEffect(() => {
    const hasSeenPromo = localStorage.getItem("quizPromoDismissed");
    if (hasSeenPromo) {
      setHasSeenPromo(true);
    } else {
      // Show the promo automatically after 10 seconds
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 10000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleStartQuiz = () => {
    router.push(`/${locale}/quiz`);
    handleClose();
  };

  const handleClose = () => {
    setIsOpen(false);
    // Remember that user has seen the promo
    localStorage.setItem("quizPromoDismissed", "true");
    setHasSeenPromo(true);
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-4 right-4 bg-primaryBlue text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-blue-700 transition-all z-40"
        aria-label={locale === "en" ? "Take Swedish Inventions Quiz" : "Ta Svenska Uppfinningar Quiz"}
      >
        <FaQuestionCircle size={24} />
      </button>

      {/* Mini promo popup */}
      {isOpen && (
        <div className="fixed bottom-20 right-4 bg-white rounded-lg shadow-xl z-50 w-64 overflow-hidden">
          {/* Header with close button */}
          <div className="flex justify-between items-center p-3 bg-primaryBlue text-white">
            <h3 className="text-sm font-medium">
              {locale === "en" ? "Swedish Inventions Quiz" : "Quiz om Svenska Uppfinningar"}
            </h3>
            <button
              onClick={handleClose}
              className="text-white hover:text-gray-200"
              aria-label="Close"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Content */}
          <div className="p-3">
            <p className="text-gray-700 text-sm mb-3">
              {locale === "en"
                ? "Test your knowledge about famous Swedish inventions!"
                : "Testa dina kunskaper om berömda svenska uppfinningar!"}
            </p>
            <button
              onClick={handleStartQuiz}
              className="w-full bg-primaryBlue text-white py-2 rounded text-sm font-medium hover:bg-blue-700 transition"
            >
              {locale === "en" ? "Start Quiz" : "Starta Quiz"}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default QuizFloatingButton;