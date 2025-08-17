'use client';

import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';
import marcPic from '@/app/artists/marc.png';

type AnswerMap = Record<string, string>;

const QUESTIONS = [
  {
    id: 'interest',
    text: 'What are you looking for today?',
    options: ['Tattoo', 'Piercing', 'Cover-Up', 'Re-Work'],
  },
  {
    id: 'style',
    text: 'What tattoo style are you interested in?',
    options: [
      'Black & Grey Realism',
      'Traditional',
      'Neo-Traditional',
      'Japanese / Oriental',
      'Anime',
      'Fine Line',
      'Color Realism',
    ],
    dependsOn: { key: 'interest', value: 'Tattoo' },
  },
  {
    id: 'size',
    text: 'Preferred size?',
    options: ['Small (<3")', 'Medium (3-6")', 'Large (Sleeve/Back)'],
    dependsOn: { key: 'interest', value: 'Tattoo' },
  },
  {
    id: 'placement',
    text: 'Where on your body?',
    options: ['Arm', 'Leg', 'Back/Chest', 'Hand/Foot', 'Neck/Face', 'Other'],
    dependsOn: { key: 'interest', value: 'Tattoo' },
  },
  {
    id: 'color',
    text: 'Color preference?',
    options: ['Black & Grey', 'Color'],
    dependsOn: { key: 'interest', value: 'Tattoo' },
  },
  {
    id: 'budget',
    text: 'Budget range?',
    options: ['<$200', '$200-$500', '$500-$1000', '$1000+'],
  },
  {
    id: 'timeline',
    text: 'When would you like to book?',
    options: ['ASAP (within 2 weeks)', '1-2 months', '3+ months'],
  },
  {
    id: 'reference',
    text: 'Do you have a reference image ready?',
    options: ['Yes', 'No'],
    dependsOn: { key: 'interest', value: 'Tattoo' },
  },
  {
    id: 'artistPreference',
    text: 'Do you have an artist in mind?',
    options: ['Marc Patino', 'Tatiana Rodriguez', 'NightOne', 'Not sure'],
  },
  {
    id: 'policy',
    text: 'Have you reviewed our studio policies?',
    options: ['Yes', 'Not yet'],
  },
];

function chooseRecommendedArtist(answers: AnswerMap): string {
  const interest = answers['interest'];
  const style = answers['style'];
  const userPick = answers['artistPreference'];
  if (userPick && userPick !== 'Not sure') return userPick;
  if (interest === 'Piercing') return 'NightOne';
  if (style === 'Black & Grey Realism') return 'Marc Patino';
  if (style === 'Traditional' || style === 'Neo-Traditional' || style === 'Fine Line' || interest === 'Re-Work') return 'Tatiana Rodriguez';
  if (style === 'Japanese / Oriental' || style === 'Anime' || interest === 'Cover-Up' || style === 'Color Realism') return 'NightOne';
  return 'Marc Patino';
}

function Recommendation({ answers }: { answers: AnswerMap }) {
  const artist = chooseRecommendedArtist(answers);
  const interest = answers['interest'];
  const timeline = answers['timeline'];
  const policy = answers['policy'];

  const reasons: string[] = [];
  if (interest) reasons.push(`Interest: ${interest}`);
  if (answers['style']) reasons.push(`Style: ${answers['style']}`);
  if (answers['color']) reasons.push(`Color: ${answers['color']}`);
  if (answers['size']) reasons.push(`Size: ${answers['size']}`);
  if (answers['placement']) reasons.push(`Placement: ${answers['placement']}`);

  const cta: { label: string; href: string }[] = [
    { label: 'View Artists', href: '/artists' },
    { label: 'View Portfolio', href: '/portfolio' },
    { label: 'Book Now', href: '/booking' },
  ];
  if (policy === 'Not yet') cta.unshift({ label: 'Read Policy', href: '/policy' });
  if (interest === 'Tattoo') cta.push({ label: 'Aftercare', href: '/aftercare' });

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-gray-800/60 rounded-xl p-4">
        <p className="text-sm text-gray-300">Recommended artist</p>
        <p className="text-lg font-heraldic text-amber-400">{artist}</p>
        {reasons.length > 0 && (
          <ul className="mt-2 text-xs text-gray-400 list-disc list-inside">
            {reasons.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ul>
        )}
        {timeline && (
          <p className="mt-2 text-xs text-gray-400">Timeline: {timeline}</p>
        )}
      </div>
      <div className="flex flex-wrap gap-2">
        {cta.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="bg-amber-400 text-black rounded-full px-3 py-2 text-sm hover:bg-amber-300 transition-colors"
          >
            {item.label}
          </a>
        ))}
      </div>
      {/* Selections Summary */}
      <div className="mt-2 bg-gray-800/40 rounded-xl p-3">
        <p className="text-sm text-gray-300 mb-2">Your selections</p>
        <ul className="space-y-1">
          {QUESTIONS.filter((q) => !q.dependsOn || answers[q.dependsOn.key] === q.dependsOn.value)
            .map((q) => ({ q: q.text, a: answers[q.id] }))
            .filter((item) => !!item.a)
            .map((item) => (
              <li key={item.q} className="text-xs text-gray-400">
                <span className="text-gray-300">{item.q}</span>: {item.a}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerMap>({});

  const visibleQuestions = useMemo(() => {
    return QUESTIONS.filter((q) => {
      if (!q.dependsOn) return true;
      return answers[q.dependsOn.key] === q.dependsOn.value;
    });
  }, [answers]);

  const totalSteps = visibleQuestions.length;
  const isComplete = currentIndex >= totalSteps;

  const handleChoose = (value: string) => {
    const question = visibleQuestions[currentIndex];
    if (!question) return;
    setAnswers((prev) => ({ ...prev, [question.id]: value }));
    setCurrentIndex((prev) => prev + 1);
  };

  const handleBack = () => {
    // find the previous question key and remove its answer when stepping back
    setCurrentIndex((prev) => Math.max(0, prev - 1));
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentIndex(0);
  };

  const currentQuestion = visibleQuestions[currentIndex];

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 flex items-center gap-3">
        <AnimatePresence>
          {!isOpen && (
            <motion.div
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              transition={{ delay: 2, duration: 0.3, ease: 'easeOut' }}
              className="bg-gray-800/80 backdrop-blur-md text-white py-2 px-4 rounded-full shadow-lg"
            >
              <p className="font-luxury text-sm whitespace-nowrap">
                Get a quick recommendation
              </p>
            </motion.div>
          )}
        </AnimatePresence>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="bg-amber-400 text-black rounded-full w-[56px] h-[56px] shadow-lg flex items-center justify-center relative"
          aria-label="Open recommendation assistant"
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <>
              <Image
                src={marcPic}
                alt="Open assistant"
                width={56}
                height={56}
                className="rounded-full object-cover"
              />
            </>
          )}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="fixed bottom-24 right-8 w-[calc(100vw-4rem)] max-w-sm h-[70vh] max-h-[600px] bg-gray-900/80 backdrop-blur-md rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-white/10"
          >
            <div className="p-4 bg-gray-800/50 border-b border-white/10 flex items-center justify-between">
              <h3 className="font-heraldic text-2xl text-white">Capio Assistant</h3>
              <div className="text-xs text-gray-300">
                {isComplete ? 'Done' : `Step ${Math.min(currentIndex + 1, totalSteps)} / ${totalSteps}`}
              </div>
            </div>

            <div className="flex-1 p-4 overflow-y-auto">
              {!isComplete && currentQuestion && (
                <div className="flex flex-col gap-4">
                  <p className="text-white font-luxury text-lg">{currentQuestion.text}</p>
                  <div className="flex flex-wrap gap-2">
                    {currentQuestion.options.map((opt) => (
                      <button
                        key={opt}
                        onClick={() => handleChoose(opt)}
                        className="bg-gray-800 hover:bg-gray-700 text-white rounded-full px-4 py-2 text-sm border border-white/10"
                      >
                        {opt}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {isComplete && <Recommendation answers={answers} />}
            </div>

            <div className="p-4 bg-gray-800/50 border-t border-white/10 flex items-center justify-between">
              <button
                onClick={handleRestart}
                className="text-xs text-gray-300 hover:text-white underline"
              >
                Restart
              </button>
              <div className="flex items-center gap-2">
                <button
                  onClick={handleBack}
                  disabled={currentIndex === 0 || isComplete}
                  className="text-xs text-gray-300 disabled:opacity-40"
                >
                  Back
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;
