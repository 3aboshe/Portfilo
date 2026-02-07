import { useState, useEffect } from 'react';
import { useInView } from './hooks/useScrollProgress';
import InfiniteGallery from './components/ui/3d-gallery-photography';
import homepageMe from '/images/homepage-me.png';
import nationalCTF from '/images/National CyberSecurity CTF.png';
import ncseCTF from '/images/NCSE_CTF_3rd.JPG';
import innovationHonoring from '/images/2nd Place – Innovation Challenge Bootcamp 2025 (American University of Kurdistan, Duhok) Honoring.jpeg';
import innovationPitching from '/images/2nd Place – Innovation Challenge Bootcamp 2025 (American University of Kurdistan, Duhok) Me Pitching.jpeg';
import innovationPitching2 from '/images/2nd Place – Innovation Challenge Bootcamp 2025 (American University of Kurdistan, Duhok) Me Pitching 2.jpeg';
import cyberkhanaPitching from '/images/CyberKhana-Me-Pitching.jpg';
import cyberkhanaPitching2 from '/images/CyberKhana-Me-Pitching 2.jpg';
import cyberkhanaAudience from '/images/CyberKhana-Me-Pitching and front of me audience.jpg';
import cyberkhanaPlayers from '/images/CyberKhana-Players-Solving.jpg';
import voluntaryAward from '/images/Honoring-Me-For-3rd Place – National Voluntary Excellence Award.jpg';
import hackathonWinning from '/images/Me-Winning-University-Of-Mosul_Hackathon-Second-Place.jpg';
import facilitating from '/images/Me-Facilititing-Conversitoinal_Club.jpg';
import nullOSLogo from '/images/NullOS.png';
import edconaLogo from '/images/EdconaIcon.png';
import universityLogo from '/images/university_of_mosul_logo.png';
import hackviserLogo from '/images/Hackviser_logo.jpeg';
import ineLogo from '/images/ine_logo.webp';

// Gallery images - homepage-me.png is NOT included (shown separately at end)
const galleryImages = [
  ncseCTF,
  nationalCTF,
  innovationHonoring,
  innovationPitching,
  innovationPitching2,
  cyberkhanaPitching,
  cyberkhanaPitching2,
  cyberkhanaAudience,
  cyberkhanaPlayers,
  voluntaryAward,
  hackathonWinning,
  facilitating,
];

// Hero Section with 3D Gallery and Scroll-Jacking
function Hero() {
  // Check if user is at top of page on load
  const isAtTop = typeof window !== 'undefined' && window.scrollY < 100;
  const [isLocked, setIsLocked] = useState(isAtTop);
  const [galleryComplete, setGalleryComplete] = useState(!isAtTop);
  const [showFinalImage, setShowFinalImage] = useState(!isAtTop);

  // Lock body scroll only when at hero section and gallery not complete
  useEffect(() => {
    // If user scrolled down before page load, skip the animation
    if (window.scrollY > 100) {
      setIsLocked(false);
      setGalleryComplete(true);
      setShowFinalImage(true);
      return;
    }

    if (isLocked) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isLocked]);

  const handleGalleryComplete = () => {
    setGalleryComplete(true);
    // Show the final image with animation
    setTimeout(() => {
      setShowFinalImage(true);
    }, 300);
    // Unlock scroll after final image appears
    setTimeout(() => {
      setIsLocked(false);
    }, 1000);
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-amber-50">
      {/* 3D Gallery Background - scrolls through achievement images */}
      <div className={`transition-opacity duration-400 ${galleryComplete ? 'opacity-0' : 'opacity-100'}`}>
        <InfiniteGallery
          images={galleryImages}
          speed={2.0}
          zSpacing={2.5}
          visibleCount={6}
          singleLoop={true}
          finalImageIndex={-1}
          onComplete={handleGalleryComplete}
          fadeSettings={{
            fadeIn: { start: 0.0, end: 0.15 },
            fadeOut: { start: 0.85, end: 1.0 },
          }}
          blurSettings={{
            blurIn: { start: 0.0, end: 0.1 },
            blurOut: { start: 0.85, end: 1.0 },
            maxBlur: 6.0,
          }}
          className="h-screen w-full"
        />
      </div>

      {/* Final profile image - appears from center after gallery completes */}
      <div
        className={`absolute inset-0 flex items-center justify-center transition-all duration-500 ease-out ${
          showFinalImage
            ? 'opacity-100 scale-100'
            : 'opacity-0 scale-50'
        }`}
        style={{ zIndex: 5 }}
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur-3xl opacity-30 scale-110" />
          <img
            src={homepageMe}
            alt="Abdulrahman Majid Adnan"
            className="relative max-h-[70vh] max-w-[90vw] object-contain rounded-2xl shadow-2xl"
          />
        </div>
      </div>

      {/* Quote Overlay - Clean centered text */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center px-6 z-10">
        <div className="relative text-center">
          <p className={`font-display text-4xl md:text-6xl lg:text-7xl font-medium leading-tight tracking-tight transition-all duration-500 ${
            showFinalImage
              ? 'text-white drop-shadow-[0_2px_15px_rgba(0,0,0,0.7)]'
              : 'text-amber-950 drop-shadow-lg'
          }`}>
            "I create change, therefore I am."
          </p>

          {/* Scroll hint - hide when complete */}
          <div className={`mt-12 flex flex-col items-center gap-3 transition-opacity duration-500 ${galleryComplete ? 'opacity-0' : 'opacity-100'}`}>
            <div className="w-6 h-10 border-2 border-amber-800/30 rounded-full flex justify-center pt-2">
              <div className="w-1 h-3 bg-amber-800/50 rounded-full animate-bounce" />
            </div>
            <p className="text-amber-700/60 text-sm uppercase tracking-wider">Scroll to explore</p>
          </div>
        </div>
      </div>

      {/* Continue hint after final image appears */}
      {showFinalImage && (
        <div className="absolute bottom-12 left-0 right-0 text-center pointer-events-none animate-pulse z-10">
          <div className="flex flex-col items-center gap-2">
            <svg className="w-6 h-6 text-white/80 animate-bounce drop-shadow-lg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
            <p className="text-white/80 text-sm uppercase tracking-wider drop-shadow-lg">Scroll to continue</p>
          </div>
        </div>
      )}

      {/* Navigation hint at bottom - only show while gallery is active */}
      {!galleryComplete && (
        <div className="absolute bottom-8 left-0 right-0 text-center pointer-events-none">
          <p className="font-mono uppercase text-[11px] font-semibold text-amber-800/50">
            Use mouse wheel or arrow keys to navigate
          </p>
        </div>
      )}
    </section>
  );
}

// Identity Reveal Section
function IdentityReveal() {
  const [ref, inView] = useInView(0.1);
  const [nameRef, nameInView] = useInView(0.15);

  return (
    <section ref={ref} className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1
          ref={nameRef}
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-amber-900 via-orange-900 to-amber-950 bg-clip-text text-transparent tracking-tight transition-all duration-500 ${
            nameInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          ABDULRAHMAN MAJID ADNAN
        </h1>

        <div
          className={`mt-10 flex flex-wrap justify-center gap-4 text-sm text-amber-800/80 font-medium transition-all duration-500 delay-300 ${
            nameInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { text: 'Cybersecurity Student' },
            { text: 'Ethical Hacker' },
            { text: 'Builder' },
            { text: 'Community Founder' },
          ].map((role, i) => (
            <div
              key={i}
              className="group px-6 py-3 bg-white/60 backdrop-blur border border-amber-200/50 rounded-full hover:bg-white/80 hover:border-amber-400/50 transition-all duration-300 cursor-default"
            >
              <span>{role.text}</span>
            </div>
          ))}
        </div>

        {/* Stats preview */}
        <div
          className={`mt-16 grid grid-cols-3 gap-8 max-w-2xl mx-auto transition-all duration-500 delay-500 ${
            nameInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '3rd', label: 'National CTF' },
            { value: '100+', label: 'Students' },
            { value: '3', label: 'Certifications' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-amber-950">{stat.value}</p>
              <p className="text-amber-700/60 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Philosophy Section
function Philosophy() {
  const [ref1, inView1] = useInView(0.1);
  const [ref2, inView2] = useInView(0.1);
  const [ref3, inView3] = useInView(0.1);
  const [ref4, inView4] = useInView(0.1);

  const thoughts = [
    { ref: ref1, inView: inView1, text: "I prioritize hands-on experience. Every tool I build solves a real problem.", delay: "" },
    { ref: ref2, inView: inView2, text: "Security research requires both offensive and defensive perspectives.", delay: "delay-200" },
    { ref: ref3, inView: inView3, text: "Complex vulnerabilities need clear documentation and proof of concept.", delay: "delay-400" },
    { ref: ref4, inView: inView4, text: "Teaching and knowledge sharing strengthen the entire security community.", delay: "delay-600" },
  ];

  return (
    <section className="py-32 bg-amber-50 relative">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-amber-600 font-medium mb-4">MY APPROACH</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-950">Philosophy</h2>
        </div>

        {thoughts.map((thought, index) => (
          <div
            key={index}
            ref={thought.ref}
            className={`mb-16 group transition-all duration-500 ${thought.delay} ${
              thought.inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="flex items-start gap-6">
              <div className="w-2 h-2 bg-amber-400 rounded-full mt-8 flex-shrink-0"></div>
              <p className="font-display text-2xl md:text-4xl text-amber-950 leading-relaxed">
                {thought.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// National CTF - Main Centerpiece
function NationalCTF() {
  const [ref, inView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.1);

  return (
    <section ref={ref} className="relative py-32 bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50 text-amber-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-amber-300/20 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-300/20 rounded-full filter blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-500 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur rounded-full mb-6 border border-amber-200/50">
              <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm font-medium">CAREER HIGHLIGHT</span>
            </div>

            <h2 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              4th Place<br />
              <span className="text-amber-700">National Cybersecurity CTF</span>
            </h2>
            <p className="text-amber-800/60 text-xl mb-10">Ministry of Interior — 2025</p>

            <div
              ref={statsRef}
              className={`space-y-6 transition-all duration-500 delay-500 ${
                statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-6 group">
                <span className="text-5xl md:text-6xl font-display font-bold text-amber-950 group-hover:text-amber-700 transition-colors">580</span>
                <span className="text-amber-800/60 text-lg">competitors</span>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-amber-400/50 to-transparent" />
              <div className="flex items-center gap-6 group">
                <span className="text-5xl md:text-6xl font-display font-bold text-amber-950 group-hover:text-amber-700 transition-colors">80</span>
                <span className="text-amber-800/60 text-lg">finalists</span>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-amber-400/50 to-transparent" />
              <div className="flex items-center gap-6 group">
                <span className="text-5xl md:text-6xl font-display font-bold text-amber-600">4</span>
                <span className="text-amber-950 text-lg font-medium">nationally ranked</span>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-500 delay-400 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur-2xl opacity-20" />
              <div className="relative overflow-hidden rounded-2xl border border-amber-200/50 shadow-xl">
                <img
                  src={nationalCTF}
                  alt="National Cybersecurity CTF"
                  className="w-full h-auto hover:scale-105 transition-transform duration-400"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// NCSE CTF 3rd Place - Major Achievement
function NCSECyberEvent() {
  const [ref, inView] = useInView(0.1);
  const [statsRef, statsInView] = useInView(0.1);

  return (
    <section ref={ref} className="relative py-24 bg-gradient-to-br from-orange-100 via-amber-50 to-orange-50 text-amber-950 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-300/20 rounded-full filter blur-[128px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber-300/20 rounded-full filter blur-[128px]" />
      </div>

      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
          <div
            className={`relative transition-all duration-500 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-amber-400 rounded-2xl blur-2xl opacity-20" />
              <div className="relative overflow-hidden rounded-2xl border border-amber-200/50 shadow-xl">
                <img
                  src={ncseCTF}
                  alt="3rd Place National Cybersecurity Event"
                  className="w-full h-auto hover:scale-105 transition-transform duration-400"
                />
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-500 delay-400 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/60 backdrop-blur rounded-full mb-4 border border-amber-200/50">
              <svg className="w-4 h-4 text-orange-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-xs font-medium uppercase tracking-wide">Major Achievement</span>
            </div>

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              3rd Place
            </h2>
            <h3 className="font-display text-xl md:text-2xl text-orange-700 font-semibold mb-2">
              National Cybersecurity Event
            </h3>
            <p className="text-amber-800/60 text-base mb-6">Ministry of Communications — 2025</p>

            <div
              ref={statsRef}
              className={`grid grid-cols-3 gap-4 mb-6 transition-all duration-500 delay-500 ${
                statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="text-center p-3 bg-white/40 rounded-xl">
                <span className="text-2xl md:text-3xl font-display font-bold text-amber-950 block">200+</span>
                <span className="text-amber-800/60 text-xs">teams</span>
              </div>
              <div className="text-center p-3 bg-white/40 rounded-xl">
                <span className="text-2xl md:text-3xl font-display font-bold text-amber-950 block">~800</span>
                <span className="text-amber-800/60 text-xs">participants</span>
              </div>
              <div className="text-center p-3 bg-white/40 rounded-xl">
                <span className="text-2xl md:text-3xl font-display font-bold text-orange-600 block">3rd</span>
                <span className="text-amber-950 text-xs font-medium">nationally</span>
              </div>
            </div>

            <div className="p-4 bg-white/40 backdrop-blur rounded-xl border border-amber-200/30">
              <p className="text-amber-800/70 text-sm leading-relaxed">
                <span className="font-semibold text-amber-950">Honored by H.E. Dr. Hiyam Al-Yasiri</span>, Minister of Communications, for outstanding achievement. Recognized for strong teamwork and technical problem-solving across qualification and final stages.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Achievement Moment Component
function AchievementMoment({ image, title, subtitle, description, reverse = false }) {
  const [ref, inView] = useInView(0.1);

  return (
    <section ref={ref} className="py-24 bg-orange-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
          <div
            className={`relative transition-all duration-500 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } ${reverse ? 'md:col-start-2' : ''}`}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-orange-400 rounded-2xl blur-xl opacity-20" />
              <div className="relative overflow-hidden rounded-2xl border border-amber-200/50 shadow-lg">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto hover:scale-105 transition-transform duration-400"
                />
              </div>
            </div>
          </div>

          <div
            className={`transition-all duration-500 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } ${reverse ? 'md:col-start-1' : ''}`}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-amber-100 rounded-full text-amber-700 text-sm mb-4">
              <span>ACHIEVEMENT</span>
            </div>
            <h3 className="font-display text-3xl md:text-4xl font-bold text-amber-950 mb-2">{title}</h3>
            <p className="text-amber-700 text-lg mb-4">{subtitle}</p>
            <p className="text-amber-800/60 leading-relaxed">{description}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

// Achievements Collection
function Achievements() {
  return (
    <>
      <AchievementMoment
        image={innovationPitching}
        title="2nd Place"
        subtitle="Innovation Challenge Bootcamp 2025"
        description="American University of Kurdistan, Duhok — Competed among innovators, presenting solutions to complex challenges."
      />

      <AchievementMoment
        image={hackathonWinning}
        title="2nd Place"
        subtitle="University of Mosul Hackathon"
        description="Demonstrated technical excellence under pressure, solving challenges that stumped most participants."
        reverse
      />

      <AchievementMoment
        image={voluntaryAward}
        title="3rd Place"
        subtitle="National Science Day for Voluntary Work Award"
        description="Honored by the College of Computer Science and Mathematics, University of Mosul, for winning with team 'Let's Talk UOM' at the national level in Iraq. Received a certificate of appreciation from Dean Dr. Doha Bashir Abdullah for outstanding contributions to community service and volunteer initiatives."
      />

      <AchievementMoment
        image={facilitating}
        title="Facilitator & Speaker"
        subtitle="Conversational Club"
        description="Leading discussions, mentoring peers, and fostering intellectual growth through structured dialogue."
        reverse
      />
    </>
  );
}

// Cyber Khana Section
function CyberKhana() {
  const [ref, inView] = useInView(0.1);
  const [contentRef, contentInView] = useInView(0.1);

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-amber-50 to-orange-50 relative">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-200/20 rounded-full filter blur-[128px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <div
          ref={contentRef}
          className={`text-center mb-16 transition-all duration-500 ${
            contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur rounded-full mb-6 border border-amber-200/50">
            <svg className="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
            </svg>
            <span className="text-sm font-medium text-amber-800/70">FOUNDED & LED</span>
          </div>

          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-amber-950 mb-6">
            Cyber Khana Student Club
          </h2>
          <p className="text-xl text-amber-800/60 max-w-2xl mx-auto">
            Building the next generation of cybersecurity professionals through hands-on experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {[
            { value: "150+", label: "Students Impacted" },
            { value: "Custom", label: "CTF Platform" },
            { value: "Real-world", label: "Challenges" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`group text-center p-8 bg-white/60 backdrop-blur border border-amber-200/50 rounded-2xl hover:bg-white/80 hover:border-amber-400/30 transition-all duration-500 ${
                contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <p className="font-display text-3xl md:text-4xl font-bold text-amber-950 mb-2 group-hover:text-amber-700 transition-colors">{stat.value}</p>
              <p className="text-amber-700/60">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Images Grid - Asymmetrical */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-2xl">
            <img
              src={cyberkhanaAudience}
              alt="CyberKhana Audience"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-400"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={cyberkhanaPitching}
              alt="CyberKhana Pitching"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-400"
            />
          </div>
          <div className="overflow-hidden rounded-2xl">
            <img
              src={cyberkhanaPitching2}
              alt="CyberKhana Pitching 2"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-400"
            />
          </div>
          <div className="md:col-span-3 overflow-hidden rounded-2xl">
            <img
              src={cyberkhanaPlayers}
              alt="CyberKhana Players"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-400"
            />
          </div>
        </div>

        {/* Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <a
            href="https://www.cyberkhana.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-500 text-white rounded-full hover:shadow-lg hover:shadow-amber-500/25 transition-all duration-300"
          >
            <span>Visit Platform</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/ccsmuom/posts/pfbid02uoPdEdCcp3zcmBEzcZAevpJRa3f8bVtQQLdKncHAM8FSfceU2sa32LQt5XJTm4NVl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-amber-300/50 text-amber-900 rounded-full hover:bg-amber-100 transition-all duration-300"
          >
            <span>See Announcement</span>
          </a>
        </div>
      </div>
    </section>
  );
}

// Projects Section
function Projects() {
  const [ref, inView] = useInView(0.1);

  const projects = [
    {
      name: "NullOS",
      description: "An immersive cybersecurity educational game that simulates real-world scenarios.",
      highlight: "Educational Game",
      icon: nullOSLogo,
      links: [],
    },
    {
      name: "EdCona",
      description: "A mobile app for connecting Parents and Teachers, streamlining communication and student progress tracking.",
      highlight: "Mobile App",
      icon: edconaLogo,
      links: [
        { label: "App Store", url: "https://apps.apple.com/us/app/edcona/id6757746545", icon: "apple" },
        { label: "Google Play", url: "https://play.google.com/store/apps/details?id=com.edcona.app&pcampaignid=web_share", icon: "android" },
      ],
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-amber-50">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-amber-600 font-medium mb-4">CREATED</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-950">Projects</h2>
        </div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`transition-all duration-400 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-8 bg-white/60 backdrop-blur border border-amber-200/50 rounded-2xl hover:bg-white/80 hover:border-amber-400/30 transition-all duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 rounded-xl overflow-hidden flex-shrink-0 shadow-md">
                    <img src={project.icon} alt={project.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <p className="text-amber-600 text-sm uppercase tracking-widest mb-2">{project.highlight}</p>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-amber-950 mb-3">
                      {project.name}
                    </h3>
                    <p className="text-amber-800/60 leading-relaxed mb-4">{project.description}</p>

                    {project.links.length > 0 && (
                      <div className="flex flex-wrap gap-3">
                        {project.links.map((link, linkIndex) => (
                          <a
                            key={linkIndex}
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 hover:bg-amber-200 text-amber-900 rounded-full text-sm font-medium transition-colors"
                          >
                            {link.icon === "apple" && (
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                              </svg>
                            )}
                            {link.icon === "android" && (
                              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M17.6 9.48l1.84-3.18c.16-.31.04-.69-.26-.85-.29-.15-.65-.06-.83.22l-1.88 3.24c-1.4-.59-2.94-.92-4.47-.92s-3.07.33-4.47.92L5.65 5.67c-.19-.29-.54-.38-.84-.22-.3.16-.42.54-.26.85L6.4 9.48C3.3 11.25 1.28 14.44 1 18h22c-.28-3.56-2.3-6.75-5.4-8.52zM7 15.25c-.69 0-1.25-.56-1.25-1.25S6.31 12.75 7 12.75s1.25.56 1.25 1.25-.56 1.25-1.25 1.25zm10 0c-.69 0-1.25-.56-1.25-1.25s.56-1.25 1.25-1.25 1.25.56 1.25 1.25-.56 1.25-1.25 1.25z"/>
                              </svg>
                            )}
                            {link.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Education Section
function Education() {
  const [ref, inView] = useInView(0.1);

  const education = [
    {
      school: "University of Mosul",
      degree: "B.Sc. Computer Science — Cybersecurity Department",
      period: "Level 3",
      description: "Specializing in cybersecurity, network security, and ethical hacking.",
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-amber-50">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-amber-600 font-medium mb-4">EDUCATION</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-950">Academic Background</h2>
        </div>

        <div className="space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className={`transition-all duration-400 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-8 bg-white/60 backdrop-blur border border-amber-200/50 rounded-2xl hover:bg-white/80 hover:border-amber-400/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl overflow-hidden flex-shrink-0 bg-white">
                      <img src={universityLogo} alt="University of Mosul" className="w-full h-full object-contain" />
                    </div>
                    <div>
                      <h3 className="font-display text-2xl md:text-3xl font-bold text-amber-950 mb-1">{edu.school}</h3>
                      <p className="text-amber-700 text-lg">{edu.degree}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-amber-600 font-medium">{edu.period}</p>
                  </div>
                </div>
                <p className="mt-4 text-amber-800/60 pl-16">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// Certifications Section
function Certifications() {
  const [ref, inView] = useInView(0.1);

  const certs = [
    {
      name: "Certified Associate Penetration Tester (CAPT)",
      url: "https://hackviser.com/verify?id=HV-CAPT-AQ5ADMRR",
      logo: hackviserLogo,
    },
    {
      name: "Certified Web Security Expert (CSWE)",
      url: "https://hackviser.com/verify?id=HV-CWSE-2CV22SMN",
      logo: hackviserLogo,
    },
    {
      name: "eLearnSecurity Web Application Penetration Tester eXtreme (eWPTX)",
      url: "https://certs.ine.com/b3ab8536-2069-41d0-8a06-98d96de68e36#acc.yKVHUBxY",
      logo: ineLogo,
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-amber-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-amber-600 font-medium mb-4">VERIFIED CREDENTIALS</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-950">Certifications</h2>
        </div>

        <div className="space-y-6">
          {certs.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block group transition-all duration-400 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="p-8 bg-white/60 backdrop-blur border border-amber-200/50 rounded-2xl group-hover:bg-white/80 group-hover:border-amber-400/30 transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg overflow-hidden flex-shrink-0">
                      <img src={cert.logo} alt={cert.name} className="w-full h-full object-cover" />
                    </div>
                    <h3 className="font-display text-xl md:text-2xl font-bold text-amber-950">{cert.name}</h3>
                  </div>
                  <div className="flex items-center gap-2 text-amber-600">
                    <span className="text-sm">Verify</span>
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

// Contact Section
function Contact() {
  const [ref, inView] = useInView(0.1);

  const contacts = [
    { label: "Email", value: "abdmajed547@gmail.com", link: "mailto:abdmajed547@gmail.com" },
    { label: "Phone", value: "+964 773 841 8489", link: "tel:+9647738418489" },
    { label: "LinkedIn", value: "linkedin.com/in/abdulrahman-majid", link: "https://www.linkedin.com/in/abdulrahman-majid/" },
  ];

  return (
    <section ref={ref} className="min-h-screen py-32 bg-gradient-to-b from-orange-50 to-amber-100 flex items-center relative">
      <div className="absolute inset-0">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber-300/20 rounded-full filter blur-[128px]" />
      </div>

      <div className="max-w-4xl mx-auto px-6 w-full relative z-10">
        <div
          className={`text-center mb-20 transition-all duration-500 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-amber-600 font-medium mb-4">GET IN TOUCH</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-amber-950 mb-4">Let's Connect</h2>
          <p className="text-amber-800/60 text-lg">Open to opportunities and collaborations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className={`group block p-6 bg-white/60 backdrop-blur border border-amber-200/50 rounded-2xl hover:bg-white/80 hover:border-amber-400/30 transition-all duration-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-amber-400 to-orange-400 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-amber-700/60 text-sm mb-1">{contact.label}</p>
                  <p className="font-display text-lg text-amber-950">{contact.value}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className={`mt-24 text-center transition-all duration-500 delay-500 ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}>
          <div className="inline-block p-8 bg-white/60 backdrop-blur border border-amber-200/50 rounded-3xl">
            <p className="text-amber-800/70 font-display text-2xl italic">"I create change, therefore I am."</p>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-20 text-center text-amber-700/40 text-sm">
          <p>© 2025 Abdulrahman Majid Adnan. Built with passion.</p>
        </div>
      </div>
    </section>
  );
}

// Scroll Progress Indicator
function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progressValue = scrollTop / docHeight;
      setProgress(Math.min(progressValue, 1));
    };

    window.addEventListener('scroll', updateScroll, { passive: true });
    updateScroll();

    return () => window.removeEventListener('scroll', updateScroll);
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-amber-200/50 z-50">
      <div
        className="h-full bg-gradient-to-r from-amber-500 to-orange-500 transition-all duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

// Main App
function App() {
  return (
    <div className="min-h-screen bg-amber-50">
      <ScrollProgress />
      <Hero />
      <IdentityReveal />
      <Philosophy />
      <NCSECyberEvent />
      <NationalCTF />
      <Achievements />
      <CyberKhana />
      <Projects />
      <Education />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
