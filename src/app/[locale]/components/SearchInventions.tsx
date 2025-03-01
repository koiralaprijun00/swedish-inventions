"use client";

import React, { useState, useEffect, useCallback } from "react";
import { useParams, useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import Image from "next/image";
import inventionsData from "../../inventionsData.js";
import { debounce } from "lodash";

interface SearchItem {
  id: number;
  name: {
    en: string;
    sv: string;
  };
  inventorName: string;
  description: {
    en: string;
    sv: string;
  };
  imageSrc: string;
  category: string;
  slug: string;
}

const SearchInventions: React.FC = () => {
  const { locale } = useParams() as { locale: "en" | "sv" };
  const router = useRouter();
  const t = useTranslations("Translations");
  
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [searchResults, setSearchResults] = useState<SearchItem[]>([]);
  const [isSearching, setIsSearching] = useState<boolean>(false);
  const [allInventions, setAllInventions] = useState<SearchItem[]>([]);
  const [showResults, setShowResults] = useState<boolean>(false);

  // Prepare all inventions data on component mount
  useEffect(() => {
    const inventions = inventionsData.flatMap(category => 
      category.items.map(item => {
        // Generate a slug for the URL - maintain original capitalization
        // This matches the format your site expects
        const slug = encodeURIComponent(item.name.en);
        
        return {
          id: item.id,
          name: item.name,
          inventorName: item.inventorName || "Unknown",
          description: item.description,
          imageSrc: item.imageSrc,
          category: category.category,
          slug: slug
        };
      })
    );
    
    setAllInventions(inventions);
  }, []);

  // Debounced search function
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const debouncedSearch = useCallback(
    debounce((term: string) => {
      if (!term.trim()) {
        setSearchResults([]);
        setIsSearching(false);
        return;
      }

      const searchLower = term.toLowerCase();
      
      const results = allInventions.filter(item => {
        // Check if the search term is in the name (in current locale)
        const nameMatch = item.name[locale]?.toLowerCase().includes(searchLower);
        
        // Check if search term is in inventor name
        const inventorMatch = item.inventorName.toLowerCase().includes(searchLower);
        
        // Check if search term is in description (in current locale)
        const descriptionMatch = item.description[locale]?.toLowerCase().includes(searchLower);
        
        // Check if search term is in category translation
        const categoryMatch = t(`categories.${item.category}`)?.toLowerCase().includes(searchLower);
        
        return nameMatch || inventorMatch || descriptionMatch || categoryMatch;
      });
      
      setSearchResults(results);
      setIsSearching(false);
    }, 300),
    [allInventions, locale]
  );

  // Handle search input change
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value;
    setSearchTerm(term);
    setIsSearching(true);
    setShowResults(true);
    debouncedSearch(term);
  };

  // Navigate to invention detail page
  const handleInventionClick = (slug: string) => {
    router.push(`/${locale}/invention/${slug}`);
    setShowResults(false);
    setSearchTerm("");
  };

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest('.search-container')) {
        setShowResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="search-container relative max-w-md mx-auto">
      <div className="relative">
        <input
          type="text"
          value={searchTerm}
          onChange={handleSearchChange}
          placeholder={t("searchPlaceholder")}
          className="w-full py-2 pl-10 pr-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primaryBlue focus:border-transparent transition-all"
          onFocus={() => setShowResults(true)}
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
        {searchTerm && (
          <button 
            onClick={() => {
              setSearchTerm("");
              setSearchResults([]);
              setShowResults(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
      </div>
      
      {/* Search Results Dropdown */}
      {showResults && searchTerm && (
        <div className="absolute p-4 mt-2 w-[400px] left-1/2 -translate-x-1/2 bg-white rounded-lg shadow-lg max-h-96 overflow-y-auto z-50 border-2 border-primaryBlue">
          {isSearching ? (
            <div className="py-4 px-4 text-center text-gray-500">
              <div className="animate-spin inline-block w-5 h-5 border-2 border-gray-300 border-t-primaryBlue rounded-full mr-2"></div>
              {t("searching")}...
            </div>
          ) : searchResults.length === 0 ? (
            <div className="py-4 px-4 text-center text-gray-500">
              {t("noResultsFound")}
            </div>
          ) : (
            <div>
              <div className="px-4 py-2 border-b border-gray-200 text-sm text-gray-500">
                {t("resultsFound", { count: searchResults.length })}
              </div>
              <ul>
                {searchResults.map(item => (
                  <li key={item.id} className="border-b border-gray-100 last:border-b-0">
                    <button
                      onClick={() => handleInventionClick(item.slug)}
                      className="w-full px-4 py-3 hover:bg-gray-50 text-left flex items-center space-x-3 transition-colors"
                    >
                      <div className="relative w-12 h-12 rounded-md overflow-hidden flex-shrink-0">
                        <Image
                          src={item.imageSrc}
                          alt={item.name[locale]}
                          fill
                          sizes="48px"
                          className="object-cover"
                        />
                      </div>
                      <div className="flex-1 w-[30rem]">
                        <h4 className="text-sm font-medium text-gray-900 truncate">
                          {item.name[locale]}
                        </h4>
                        <p className="text-xs text-gray-500 truncate">
                          {item.inventorName}
                        </p>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
              <div className="px-4 py-2 border-t border-gray-200 bg-gray-50 text-center">
                <button 
                  onClick={() => setShowResults(false)}
                  className="text-sm text-gray-500 hover:text-primaryBlue"
                >
                  {t("closeResults")}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInventions;