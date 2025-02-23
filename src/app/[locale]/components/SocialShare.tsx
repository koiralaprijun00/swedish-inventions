import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaLinkedin } from 'react-icons/fa';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

interface SocialShareProps {
  url: string;
  title: string;
}

const SocialShare: React.FC<SocialShareProps> = ({ url, title }) => {
  // Encode URL and title for sharing links
  const encodedURL = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex space-x-4">
      {/* Facebook */}
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedURL}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800"
      >
        <FaFacebook size={24} />
      </a>
      {/* Twitter */}
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedURL}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600"
      >
        <FontAwesomeIcon icon={faXTwitter} size="lg" /> {/* Use FontAwesomeIcon */}
      </a>
      {/* Instagram (Note: Instagram does not support direct URL sharing.
          You might use this link to direct users to your Instagram profile) */}
      <a
        href="https://www.instagram.com/your-profile" // replace with your profile link if desired
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 hover:text-pink-800"
      >
        <FaInstagram size={24} />
      </a>
      {/* Pinterest */}
      <a
        href={`https://pinterest.com/pin/create/button/?url=${encodedURL}&description=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-red-600 hover:text-red-800"
      >
        <FaPinterest size={24} />
      </a>
      {/* LinkedIn */}
      <a
        href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodedURL}&title=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

export default SocialShare;
