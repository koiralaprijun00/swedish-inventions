"use client";

import React, { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import { FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXTwitter } from "@fortawesome/free-brands-svg-icons";

interface QuizQuestion {
  id: number;
  question: {
    en: string;
    sv: string;
  };
  options: {
    en: string[];
    sv: string[];
  };
  correctAnswer: number;
  explanation: {
    en: string;
    sv: string;
  };
  inventionRelated?: string; // Optional link to invention
}

const quizData: QuizQuestion[] = [
  {
    id: 1,
    question: {
      en: "Who invented the three-point seatbelt?",
      sv: "Vem uppfann trepunktsbältet?"
    },
    options: {
      en: ["Alfred Nobel", "Nils Bohlin", "Anders Celsius", "Gideon Sundbäck"],
      sv: ["Alfred Nobel", "Nils Bohlin", "Anders Celsius", "Gideon Sundbäck"]
    },
    correctAnswer: 1, // Index of correct answer (Nils Bohlin)
    explanation: {
      en: "Nils Bohlin invented the three-point seatbelt while working at Volvo in 1959. The design was so effective that Volvo made the patent freely available to other car manufacturers to save lives.",
      sv: "Nils Bohlin uppfann trepunktsbältet medan han arbetade på Volvo 1959. Designen var så effektiv att Volvo gjorde patentet fritt tillgängligt för andra biltillverkare för att rädda liv."
    },
    inventionRelated: "Three-Point Seatbelt"
  },
  {
    id: 2,
    question: {
      en: "Which Swedish company revolutionized the way we listen to music with their streaming service?",
      sv: "Vilket svenskt företag revolutionerade hur vi lyssnar på musik med sin streamingtjänst?"
    },
    options: {
      en: ["Skype", "IKEA", "Spotify", "H&M"],
      sv: ["Skype", "IKEA", "Spotify", "H&M"]
    },
    correctAnswer: 2, // Spotify
    explanation: {
      en: "Spotify was founded in 2006 by Daniel Ek and Martin Lorentzon in Stockholm, Sweden. It has since become one of the world's largest music streaming platforms.",
      sv: "Spotify grundades 2006 av Daniel Ek och Martin Lorentzon i Stockholm, Sverige. Det har sedan dess blivit en av världens största musikstreamingtjänster."
    },
    inventionRelated: "Spotify"
  },
  {
    id: 3,
    question: {
      en: "Which of these popular video games was created in Sweden?",
      sv: "Vilket av dessa populära videospel skapades i Sverige?"
    },
    options: {
      en: ["Fortnite", "Minecraft", "Call of Duty", "Super Mario"],
      sv: ["Fortnite", "Minecraft", "Call of Duty", "Super Mario"]
    },
    correctAnswer: 1, // Minecraft
    explanation: {
      en: "Minecraft was created by Swedish game developer Markus 'Notch' Persson in 2009 and later developed by Mojang Studios, also based in Sweden.",
      sv: "Minecraft skapades av den svenska spelutvecklaren Markus 'Notch' Persson 2009 och vidareutvecklades senare av Mojang Studios, också baserat i Sverige."
    },
    inventionRelated: "Minecraft"
  },
  {
    id: 4,
    question: {
      en: "What temperature does water freeze at on the Celsius scale?",
      sv: "Vid vilken temperatur fryser vatten på Celsiusskalan?"
    },
    options: {
      en: ["0°C", "32°C", "100°C", "-273°C"],
      sv: ["0°C", "32°C", "100°C", "-273°C"]
    },
    correctAnswer: 0, // 0°C
    explanation: {
      en: "The Celsius temperature scale was invented by Swedish astronomer Anders Celsius in 1742. On this scale, water freezes at 0°C and boils at 100°C at standard atmospheric pressure.",
      sv: "Celsiusskalan uppfanns av den svenska astronomen Anders Celsius 1742. På denna skala fryser vatten vid 0°C och kokar vid 100°C vid standardatmosfärstryck."
    },
    inventionRelated: "Celsius Temperature Scale"
  },
  {
    id: 5,
    question: {
      en: "Who invented dynamite?",
      sv: "Vem uppfann dynamiten?"
    },
    options: {
      en: ["Alfred Nobel", "Gustav Dalén", "Håkan Lans", "Carl Munters"],
      sv: ["Alfred Nobel", "Gustav Dalén", "Håkan Lans", "Carl Munters"]
    },
    correctAnswer: 0, // Alfred Nobel
    explanation: {
      en: "Alfred Nobel invented dynamite in 1867. His fortune from this and other inventions was used to establish the Nobel Prizes.",
      sv: "Alfred Nobel uppfann dynamit 1867. Hans förmögenhet från denna och andra uppfinningar användes för att etablera Nobelprisen."
    },
    inventionRelated: "Dynamite"
  },
  {
    id: 6,
    question: {
      en: "Which of these packaging solutions was invented in Sweden?",
      sv: "Vilken av dessa förpackningslösningar uppfanns i Sverige?"
    },
    options: {
      en: ["Aluminum can", "Plastic bottle", "Tetra Pak", "Paper bag"],
      sv: ["Aluminiumburk", "Plastflaska", "Tetra Pak", "Papperspåse"]
    },
    correctAnswer: 2, // Tetra Pak
    explanation: {
      en: "Tetra Pak was invented by Erik Wallenberg and Ruben Rausing in 1951. The tetrahedron-shaped packaging revolutionized the storage and transportation of liquids like milk and juice.",
      sv: "Tetra Pak uppfanns av Erik Wallenberg och Ruben Rausing 1951. Den tetraederformade förpackningen revolutionerade lagringen och transporten av vätskor som mjölk och juice."
    },
    inventionRelated: "Tetra Pak"
  },
  {
    id: 7,
    question: {
      en: "What medical technology was pioneered by Swedish researchers Inge Edler and Hellmuth Hertz?",
      sv: "Vilken medicinsk teknik utvecklades av de svenska forskarna Inge Edler och Hellmuth Hertz?"
    },
    options: {
      en: ["X-ray", "MRI", "Ultrasound", "CT scan"],
      sv: ["Röntgen", "MRI", "Ultraljud", "CT-scanning"]
    },
    correctAnswer: 2, // Ultrasound
    explanation: {
      en: "Inge Edler and Hellmuth Hertz developed medical ultrasound technology in the 1950s. Their work led to the first ultrasound images of the heart, revolutionizing cardiac diagnostics.",
      sv: "Inge Edler och Hellmuth Hertz utvecklade medicinsk ultraljudsteknik på 1950-talet. Deras arbete ledde till de första ultraljudsbilderna av hjärtat, vilket revolutionerade hjärtdiagnostik."
    },
    inventionRelated: "Ultrasound Technology"
  },
  {
    id: 8,
    question: {
      en: "Which of these everyday tools was invented by Johan Petter Johansson?",
      sv: "Vilket av dessa vardagsverktyg uppfanns av Johan Petter Johansson?"
    },
    options: {
      en: ["Screwdriver", "Hammer", "Adjustable wrench", "Drill"],
      sv: ["Skruvmejsel", "Hammare", "Skiftnyckel", "Borr"]
    },
    correctAnswer: 2, // Adjustable wrench
    explanation: {
      en: "Johan Petter Johansson invented the adjustable wrench (or adjustable spanner) in 1892. He patented the design while working at Bahco, and it remains largely unchanged today.",
      sv: "Johan Petter Johansson uppfann skiftnyckeln 1892. Han patenterade designen medan han arbetade på Bahco, och den förblir i stort sett oförändrad idag."
    },
    inventionRelated: "Adjustable Wrench"
  },
  {
    id: 9,
    question: {
      en: "Which Swedish innovation helps reduce food waste and makes liquids easier to store?",
      sv: "Vilken svensk innovation hjälper till att minska matsvinn och gör vätskor lättare att förvara?"
    },
    options: {
      en: ["Refrigerator", "Ball bearings", "Safety matches", "Tetra Pak"],
      sv: ["Kylskåp", "Kullager", "Säkerhetständstickor", "Tetra Pak"]
    },
    correctAnswer: 3, // Tetra Pak
    explanation: {
      en: "Tetra Pak's innovative aseptic packaging technology allows food and beverages to be stored without refrigeration for months, significantly reducing food waste globally.",
      sv: "Tetra Paks innovativa aseptiska förpackningsteknik gör att mat och dryck kan förvaras utan kylning i månader, vilket avsevärt minskar matsvinn globalt."
    },
    inventionRelated: "Tetra Pak"
  },
  {
    id: 10,
    question: {
      en: "Which wireless technology was developed by Swedish company Ericsson?",
      sv: "Vilken trådlös teknik utvecklades av det svenska företaget Ericsson?"
    },
    options: {
      en: ["Wi-Fi", "Bluetooth", "5G", "GPS"],
      sv: ["Wi-Fi", "Bluetooth", "5G", "GPS"]
    },
    correctAnswer: 1, // Bluetooth
    explanation: {
      en: "Bluetooth technology was developed by Dr. Jaap Haartsen while working for Ericsson in the 1990s. It was named after the 10th-century Danish king Harald Bluetooth.",
      sv: "Bluetooth-tekniken utvecklades av Dr. Jaap Haartsen medan han arbetade för Ericsson på 1990-talet. Den fick sitt namn efter den danske kungen Harald Blåtand från 900-talet."
    },
    inventionRelated: "Bluetooth Technology"
  }
];

const QuizComponent: React.FC = () => {
  const { locale } = useParams() as { locale: "en" | "sv" };
  
  // UI text based on locale
  const uiText = {
    title: locale === "en" ? "Swedish Inventions Quiz" : "Quiz om Svenska Uppfinningar",
    intro: locale === "en" 
      ? "Test your knowledge about famous Swedish inventions and innovations!" 
      : "Testa dina kunskaper om berömda svenska uppfinningar och innovationer!",
    startButton: locale === "en" ? "Start Quiz" : "Starta Quiz",
    nextButton: locale === "en" ? "Next Question" : "Nästa Fråga",
    resultsButton: locale === "en" ? "See Results" : "Se Resultat",
    tryAgainButton: locale === "en" ? "Try Again" : "Försök Igen",
    questionCount: (current: number, total: number) => 
      locale === "en" ? `Question ${current}/${total}` : `Fråga ${current}/${total}`,
    explanation: locale === "en" ? "Explanation:" : "Förklaring:",
    results: locale === "en" ? "Quiz Results" : "Quizresultat",
    scoreMessage: (score: number, total: number) => 
      locale === "en" ? `You scored ${score} out of ${total}!` : `Du fick ${score} av ${total} poäng!`,
    perfect: locale === "en" 
      ? "Congratulations! You're a Swedish invention expert!" 
      : "Grattis! Du är en svensk uppfinningsexpert!",
    great: locale === "en" 
      ? "Great job! You know a lot about Swedish inventions!" 
      : "Bra jobbat! Du vet mycket om svenska uppfinningar!",
    good: locale === "en" 
      ? "Good try! There's more to learn about Sweden's amazing innovations." 
      : "Bra försök! Det finns mer att lära om Sveriges fantastiska innovationer.",
    shareResults: locale === "en" ? "Share your results:" : "Dela dina resultat:",
    learnMore: (invention: string) => 
      locale === "en" ? `Learn more about ${invention}` : `Lär dig mer om ${invention}`,
    shareText: (score: number, total: number) => 
      locale === "en" 
        ? `I scored ${score} out of ${total} on the Swedish Inventions Quiz! Test your knowledge too!` 
        : `Jag fick ${score} av ${total} poäng på Svenska Uppfinningar Quiz! Testa dina kunskaper du också!`,
    addInfo: locale === "en" 
      ? "Answer 10 questions and see how much you know about Sweden's contributions to the world."
      : "Svara på 10 frågor och se hur mycket du vet om Sveriges bidrag till världen."
  };
  
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [score, setScore] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [answered, setAnswered] = useState<boolean>(false);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [quizStarted, setQuizStarted] = useState<boolean>(false);

  // Start the quiz
  const startQuiz = () => {
    setQuizStarted(true);
    shuffleQuestions();
  };

  // Shuffle the questions to make the quiz different each time
  const shuffleQuestions = () => {
    // No need to actually modify the original array
    // Just start at a random position
    setCurrentQuestion(Math.floor(Math.random() * 5));
  };

  // Handle option selection
  const handleOptionClick = (optionIndex: number) => {
    if (answered) return;
    
    setSelectedOption(optionIndex);
    setAnswered(true);
    
    const correctAnswerIndex = quizData[currentQuestion].correctAnswer;
    
    if (optionIndex === correctAnswerIndex) {
      setScore(score + 1);
    }
    
    // Update user answers
    const newUserAnswers = [...userAnswers];
    newUserAnswers[currentQuestion] = optionIndex;
    setUserAnswers(newUserAnswers);
  };

  // Move to the next question or show results
  const handleNextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
      setAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  // Reset the quiz
  const resetQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setAnswered(false);
    setUserAnswers([]);
    shuffleQuestions();
  };

  // Generate share URL
  const getShareUrl = () => {
    return window.location.href.split('?')[0]; // Remove any existing query params
  };

  // Share to Twitter
  const shareToTwitter = () => {
    const text = uiText.shareText(score, quizData.length);
    const url = getShareUrl();
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`, '_blank');
  };

  // Share to Facebook
  const shareToFacebook = () => {
    const url = getShareUrl();
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  // Share to LinkedIn
  const shareToLinkedIn = () => {
    const text = uiText.shareText(score, quizData.length);
    const url = getShareUrl();
    window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`, '_blank');
  };

  if (!quizStarted) {
    return (
      <div className="bg-white border border-gray-100 rounded-lg shadow-sm p-8 max-w-2xl mx-auto my-24">
      <div className="text-center">
        <h1 className="text-3xl font-semibold text-gray-800 mb-4">
          {locale === "en"
            ? "Swedish Inventions Quiz"
            : "Quiz om Svenska Uppfinningar"}
        </h1>
        <div className="w-16 h-1 bg-primaryBlue/30 mx-auto mb-6"></div>
        <p className="text-gray-600 mb-10 max-w-lg mx-auto leading-relaxed">
          {locale === "en"
            ? "Test your knowledge about famous Swedish inventions and innovations! Answer 10 questions and see how much you know about Sweden's contributions to the world."
            : "Testa dina kunskaper om berömda svenska uppfinningar och innovationer! Svara på 10 frågor och se hur mycket du vet om Sveriges bidrag till världen."}
        </p>
        <button
          onClick={startQuiz}
          className="px-10 py-3 bg-white border border-primaryBlue text-primaryBlue rounded-full font-medium hover:bg-primaryBlue hover:text-white transition-all duration-300"
        >
          {uiText.startButton}
        </button>
      </div>
    </div>
    );
  }

  if (showResult) {
    return (
      <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto my-24">
        <h2 className="text-2xl font-bold text-primaryBlue mb-4">
          {uiText.results}
        </h2>
        <p className="text-xl mb-4">
          {uiText.scoreMessage(score, quizData.length)}
        </p>
        
        {score === quizData.length && (
          <div className="bg-green-50 border border-green-200 rounded-md p-4 mb-6">
            <p className="text-green-700">
              {uiText.perfect}
            </p>
          </div>
        )}
        
        {score >= quizData.length * 0.7 && score < quizData.length && (
          <div className="bg-blue-50 border border-blue-200 rounded-md p-4 mb-6">
            <p className="text-blue-700">
              {uiText.great}
            </p>
          </div>
        )}
        
        {score < quizData.length * 0.7 && (
          <div className="bg-yellow-50 border border-yellow-200 rounded-md p-4 mb-6">
            <p className="text-yellow-700">
              {uiText.good}
            </p>
          </div>
        )}
        
        <div className="mb-8">
          <h3 className="font-bold text-lg mb-2">
            {uiText.shareResults}
          </h3>
          <div className="flex space-x-4">
            <button 
              onClick={shareToTwitter}
              className="text-[#1DA1F2] hover:opacity-80"
              aria-label="Share on Twitter"
            >
              <FontAwesomeIcon icon={faXTwitter} size="lg" />
            </button>
            <button 
              onClick={shareToFacebook}
              className="text-[#4267B2] hover:opacity-80"
              aria-label="Share on Facebook"
            >
              <FaFacebook size={24} />
            </button>
            <button 
              onClick={shareToLinkedIn}
              className="text-[#0077B5] hover:opacity-80"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedin size={24} />
            </button>
          </div>
        </div>
        
        <button
          onClick={resetQuiz}
          className="w-full bg-primaryBlue text-white py-3 rounded-md font-medium hover:bg-blue-700 transition duration-200"
        >
          {uiText.tryAgainButton}
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl mx-auto my-24">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-primaryBlue">
          {uiText.title}
        </h2>
        <span className="text-sm text-gray-500">
          {uiText.questionCount(currentQuestion + 1, quizData.length)}
        </span>
      </div>
      
      <div className="mb-6">
        <h3 className="text-lg font-medium mb-4">{quizData[currentQuestion].question[locale]}</h3>
        <div className="space-y-3">
          {quizData[currentQuestion].options[locale].map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(index)}
              disabled={answered}
              className={`w-full text-left p-3 border rounded-md transition ${
                answered && index === quizData[currentQuestion].correctAnswer
                  ? "bg-green-100 border-green-500"
                  : answered && index === selectedOption && index !== quizData[currentQuestion].correctAnswer
                  ? "bg-red-100 border-red-500"
                  : selectedOption === index
                  ? "bg-blue-100 border-blue-500"
                  : "hover:bg-gray-100 border-gray-300"
              }`}
            >
              {option}
            </button>
          ))}
        </div>
      </div>
      
      {answered && (
        <div className="mb-6 p-4 bg-gray-50 rounded-md">
          <p className="font-medium mb-2">
            {uiText.explanation}
          </p>
          <p>{quizData[currentQuestion].explanation[locale]}</p>
          
          {quizData[currentQuestion].inventionRelated && (
            <p className="mt-2 text-primaryBlue">
              <a href={`/${locale}/invention/${quizData[currentQuestion].inventionRelated?.replace(/\s+/g, '-').toLowerCase()}`} className="hover:underline">
                {uiText.learnMore(quizData[currentQuestion].inventionRelated)}
              </a>
            </p>
          )}
        </div>
      )}
      
      <button
        onClick={handleNextQuestion}
        disabled={!answered}
        className={`w-full py-3 rounded-md font-medium transition ${
          answered
            ? "bg-primaryBlue text-white hover:bg-blue-700"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
      >
        {currentQuestion < quizData.length - 1
          ? uiText.nextButton
          : uiText.resultsButton}
      </button>
    </div>
  );
};

export default QuizComponent;