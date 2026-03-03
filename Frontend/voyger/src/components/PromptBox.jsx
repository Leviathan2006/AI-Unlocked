import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function PromptBox() {
  const phrases = [
    "Modify my trip to include luxury stays...",
    "Add adventure activities...",
    "Make it budget friendly...",
    "Include local food experiences..."
  ];

  const [displayText, setDisplayText] = useState("");
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentPhrase = phrases[phraseIndex];
    const typingSpeed = isDeleting ? 40 : 60;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(currentPhrase.substring(0, displayText.length + 1));

        if (displayText === currentPhrase) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayText(currentPhrase.substring(0, displayText.length - 1));

        if (displayText === "") {
          setIsDeleting(false);
          setPhraseIndex((prev) => (prev + 1) % phrases.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, phraseIndex]);

  return (
    <div className="max-w-2xl mx-auto mb-16">
      <div className="bg-neutral-900 border border-neutral-800 
                      rounded-2xl px-6 py-4 flex items-center 
                      justify-between shadow-md">
  
        <div className="text-white text-base flex items-center">
          {displayText}
          <span className="ml-1 w-[2px] h-5 bg-orange-500 animate-pulse"></span>
        </div>
  
        <button className="bg-white text-black p-2.5 rounded-full 
                           hover:scale-105 transition">
          <ArrowUp size={16} />
        </button>
      </div>
    </div>
  );
}