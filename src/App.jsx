import { useState, useEffect, useRef } from 'react';
import { useInView, useScrollProgress } from './hooks/useScrollProgress';
import homepageMe from './assets/homepage-me.png';
import nationalCTF from './assets/National CyberSecurity CTF.png';
import innovationHonoring from './assets/2nd Place – Innovation Challenge Bootcamp 2025 (American University of Kurdistan, Duhok) Honoring.jpeg';
import innovationPitching from './assets/2nd Place – Innovation Challenge Bootcamp 2025 (American University of Kurdistan, Duhok) Me Pitching.jpeg';
import innovationPitching2 from './assets/2nd Place – Innovation Challenge Bootcamp 2025 (American University of Kurdistan, Duhok) Me Pitching 2.jpeg';
import cyberkhanaPitching from './assets/CyberKhana-Me-Pitching.jpg';
import cyberkhanaPitching2 from './assets/CyberKhana-Me-Pitching 2.jpg';
import cyberkhanaAudience from './assets/CyberKhana-Me-Pitching and front of me audience.jpg';
import cyberkhanaPlayers from './assets/CyberKhana-Players-Solving.jpg';
import voluntaryAward from './assets/Honoring-Me-For-3rd Place – National Voluntary Excellence Award.jpg';
import hackathonWinning from './assets/Me-Winning-University-Of-Mosul_Hackathon-Second-Place.jpg';
import facilitating from './assets/Me-Facilititing-Conversitoinal_Club.jpg';

// Hero Section
function Hero({ onScrollProgress }) {
  const [ref, inView] = useInView(0.1);
  const quoteScale = Math.max(0.6, 1 - onScrollProgress * 0.8);
  const quoteOpacity = Math.max(0, 1 - onScrollProgress * 2);

  return (
    <section ref={ref} className="relative h-screen w-full overflow-hidden flex items-center justify-center film-grain">
      <div
        className="absolute inset-0 w-full h-full object-cover"
        style={{
          transform: `scale(${1 + onScrollProgress * 0.3})`,
          opacity: 1 - onScrollProgress * 0.7,
        }}
      >
        <img
          src={homepageMe}
          alt="Abdulrahman Majid"
          className="w-full h-full object-cover object-center"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/30" />

      <div
        className="relative z-10 text-center px-6"
        style={{
          transform: `scale(${quoteScale})`,
          opacity: quoteOpacity,
        }}
      >
        <p className="font-display text-4xl md:text-6xl lg:text-7xl text-white font-medium leading-tight tracking-tight">
          "I create change, therefore I am."
        </p>
      </div>

      <div
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: 1 - onScrollProgress * 3 }}
      >
        <div className="w-px h-16 bg-white/40 animate-pulse" />
      </div>
    </section>
  );
}

// Identity Reveal Section
function IdentityReveal() {
  const [ref, inView] = useInView(0.3);
  const [nameRef, nameInView] = useInView(0.5);

  return (
    <section ref={ref} className="relative min-h-[70vh] flex items-center justify-center bg-off-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h1
          ref={nameRef}
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-accent tracking-tight transition-all duration-1000 ${
            nameInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          ABDULRAHMAN MAJID ADNAN
        </h1>

        <div
          className={`mt-8 flex flex-wrap justify-center gap-4 md:gap-6 text-sm md:text-base text-gray-600 font-light tracking-wide transition-all duration-1000 delay-300 ${
            nameInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span className="px-4 py-2 border border-gray-200 rounded-full">Cybersecurity Student</span>
          <span className="px-4 py-2 border border-gray-200 rounded-full">Ethical Hacker</span>
          <span className="px-4 py-2 border border-gray-200 rounded-full">Builder</span>
          <span className="px-4 py-2 border border-gray-200 rounded-full">Community Founder</span>
        </div>
      </div>
    </section>
  );
}

// Philosophy Section
function Philosophy() {
  const [ref1, inView1] = useInView(0.6);
  const [ref2, inView2] = useInView(0.6);
  const [ref3, inView3] = useInView(0.6);
  const [ref4, inView4] = useInView(0.6);

  const thoughts = [
    { ref: ref1, inView: inView1, text: "Security is not a skill—it is a responsibility.", delay: "" },
    { ref: ref2, inView: inView2, text: "I build tools, not just learn theory.", delay: "delay-200" },
    { ref: ref3, inView: inView3, text: "Leadership through action, not titles.", delay: "delay-400" },
    { ref: ref4, inView: inView4, text: "Continuous learning is a system, not a goal.", delay: "delay-600" },
  ];

  return (
    <section className="py-32 md:py-48 bg-soft-gray">
      <div className="max-w-4xl mx-auto px-6">
        {thoughts.map((thought, index) => (
          <div
            key={index}
            ref={thought.ref}
            className={`mb-16 md:mb-24 transition-all duration-1000 ${thought.delay} ${
              thought.inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <p className="font-display text-2xl md:text-4xl text-accent leading-relaxed">
              {thought.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

// National CTF - Main Centerpiece
function NationalCTF() {
  const [ref, inView] = useInView(0.2);
  const [statsRef, statsInView] = useInView(0.4);

  return (
    <section ref={ref} className="relative py-32 bg-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div
            className={`transition-all duration-1200 delay-200 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            }`}
          >
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Achievement</p>
            <h2 className="font-display text-4xl md:text-6xl font-semibold mb-6 leading-tight">
              4th Place<br />
              <span className="text-gray-500">National Cybersecurity CTF</span>
            </h2>
            <p className="text-gray-400 text-xl mb-8">Ministry of Interior — 2025</p>

            <div
              ref={statsRef}
              className={`space-y-6 transition-all duration-1000 delay-500 ${
                statsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="flex items-center gap-6">
                <span className="text-5xl md:text-6xl font-display font-semibold">580</span>
                <span className="text-gray-400 text-lg">competitors</span>
              </div>
              <div className="w-16 h-px bg-gray-700" />
              <div className="flex items-center gap-6">
                <span className="text-5xl md:text-6xl font-display font-semibold">80</span>
                <span className="text-gray-400 text-lg">finalists</span>
              </div>
              <div className="w-16 h-px bg-gray-700" />
              <div className="flex items-center gap-6">
                <span className="text-5xl md:text-6xl font-display font-semibold text-white">4</span>
                <span className="text-white text-lg font-medium">nationally</span>
              </div>
            </div>
          </div>

          <div
            className={`relative transition-all duration-1200 delay-400 ${
              inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="relative overflow-hidden rounded-lg">
              <img
                src={nationalCTF}
                alt="National Cybersecurity CTF"
                className="w-full h-auto hover:scale-105 transition-transform duration-700"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Achievement Moment Component
function AchievementMoment({ image, title, subtitle, description, reverse = false }) {
  const [ref, inView] = useInView(0.3);

  return (
    <section ref={ref} className="py-24 md:py-32 bg-off-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`grid md:grid-cols-2 gap-8 md:gap-16 items-center ${reverse ? 'md:grid-flow-col-dense' : ''}`}>
          <div
            className={`relative overflow-hidden rounded-lg transition-all duration-1000 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } ${reverse ? 'md:col-start-2' : ''}`}
          >
            <img
              src={image}
              alt={title}
              className="w-full h-auto hover:scale-105 transition-transform duration-700"
            />
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${
              inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            } ${reverse ? 'md:col-start-1' : ''}`}
          >
            <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">Achievement</p>
            <h3 className="font-display text-3xl md:text-4xl font-semibold text-accent mb-2">{title}</h3>
            <p className="text-gray-500 text-lg mb-4">{subtitle}</p>
            <p className="text-gray-600 leading-relaxed">{description}</p>
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
        subtitle="National Voluntary Excellence Award"
        description="Recognized for outstanding contributions to community service and volunteer initiatives."
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
  const [ref, inView] = useInView(0.2);
  const [contentRef, contentInView] = useInView(0.3);

  return (
    <section ref={ref} className="py-32 bg-gradient-to-b from-soft-gray to-off-white">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={contentRef}
          className={`text-center mb-16 transition-all duration-1000 ${
            contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Founded & Led</p>
          <h2 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-accent mb-6">
            Cyber Khana Student Club
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Building the next generation of cybersecurity professionals through hands-on experience.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            { value: "100+", label: "Students Impacted" },
            { value: "Custom", label: "CTF Platform" },
            { value: "Real-world", label: "Challenges" },
          ].map((stat, index) => (
            <div
              key={index}
              className={`text-center p-8 bg-white rounded-lg transition-all duration-700 delay-${index * 200} ${
                contentInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="font-display text-3xl md:text-4xl font-semibold text-accent mb-2">{stat.value}</p>
              <p className="text-gray-500">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Images Grid - Asymmetrical */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="md:col-span-2 md:row-span-2 overflow-hidden rounded-lg">
            <img
              src={cyberkhanaAudience}
              alt="CyberKhana Audience"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={cyberkhanaPitching}
              alt="CyberKhana Pitching"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="overflow-hidden rounded-lg">
            <img
              src={cyberkhanaPitching2}
              alt="CyberKhana Pitching 2"
              className="w-full h-64 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div className="md:col-span-3 overflow-hidden rounded-lg">
            <img
              src={cyberkhanaPlayers}
              alt="CyberKhana Players"
              className="w-full h-96 object-cover hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Links */}
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          <a
            href="https://www.cyberkhana.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-white rounded-full hover:bg-gray-800 transition-colors"
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
            className="inline-flex items-center gap-2 px-8 py-4 border-2 border-accent text-accent rounded-full hover:bg-accent hover:text-white transition-colors"
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
  const [ref, inView] = useInView(0.2);

  const projects = [
    {
      name: "NullOS",
      description: "An immersive cybersecurity educational game that simulates real-world scenarios.",
      highlight: "Educational Game",
    },
    {
      name: "R4TCH3T",
      description: "An automated web penetration testing tool designed for efficiency and comprehensive analysis.",
      highlight: "Pentesting Tool",
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-off-white">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Built</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-accent">Projects</h2>
        </div>

        <div className="space-y-16">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group transition-all duration-1000 delay-${index * 200} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <div className="border-b border-gray-200 pb-8 group-hover:border-accent/30 transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div>
                    <p className="text-gray-400 text-sm uppercase tracking-widest mb-2">{project.highlight}</p>
                    <h3 className="font-display text-3xl md:text-4xl font-semibold text-accent mb-4">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 text-lg leading-relaxed max-w-xl">{project.description}</p>
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

// Certifications Section
function Certifications() {
  const [ref, inView] = useInView(0.3);

  const certs = [
    {
      name: "Certified Associate Penetration Tester (CAPT)",
      url: "https://hackviser.com/verify?id=HV-CAPT-AQ5ADMRR",
    },
    {
      name: "Certified Web Security Expert (CSWE)",
      url: "https://hackviser.com/verify?id=HV-CWSE-2CV22SMN",
    },
  ];

  return (
    <section ref={ref} className="py-32 bg-soft-gray">
      <div className="max-w-4xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <p className="text-gray-400 text-sm uppercase tracking-widest mb-4">Verified</p>
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-accent">Certifications</h2>
        </div>

        <div className="space-y-6">
          {certs.map((cert, index) => (
            <a
              key={index}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block group transition-all duration-700 delay-${index * 200} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <div className="bg-white p-8 md:p-10 rounded-lg group-hover:bg-accent group-hover:text-white transition-all duration-300">
                <div className="flex items-start justify-between gap-4">
                  <h3 className="font-display text-xl md:text-2xl font-medium">{cert.name}</h3>
                  <svg className="w-5 h-5 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </div>
                <p className="text-sm opacity-50 mt-2 group-hover:text-white/70">Click to verify</p>
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
  const [ref, inView] = useInView(0.3);

  const contacts = [
    { label: "University Email", value: "abdulerahman.majid@uomosul.edu.iq", link: "mailto:abdulerahman.majid@uomosul.edu.iq" },
    { label: "Personal Email", value: "abdulrahman.majad.adnan@gmail.com", link: "mailto:abdulrahman.majad.adnan@gmail.com" },
    { label: "LinkedIn", value: "linkedin.com/in/abdulrahman-majid-adnan", link: "https://linkedin.com/in/abdulrahman-majid-adnan" },
    { label: "Phone", value: "+964 770 574 9291", link: "tel:+9647705749291" },
  ];

  return (
    <section ref={ref} className="min-h-screen py-32 bg-off-white flex items-center">
      <div className="max-w-4xl mx-auto px-6 w-full">
        <div
          className={`text-center mb-20 transition-all duration-1000 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <h2 className="font-display text-4xl md:text-5xl font-semibold text-accent mb-4">Let's connect</h2>
          <p className="text-gray-500 text-lg">Open to opportunities and collaborations.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-4">
          {contacts.map((contact, index) => (
            <a
              key={index}
              href={contact.link}
              className={`group block p-8 bg-white rounded-lg hover:bg-accent hover:text-white transition-all duration-300 delay-${index * 100} ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              <p className="text-sm opacity-50 mb-2 group-hover:text-white/70">{contact.label}</p>
              <p className="font-display text-lg md:text-xl">{contact.value}</p>
            </a>
          ))}
        </div>

        <div className={`mt-24 text-center transition-all duration-1000 delay-500 ${
          inView ? 'opacity-100' : 'opacity-0'
        }`}>
          <p className="text-gray-400 font-display text-2xl italic">"I create change, therefore I am."</p>
        </div>
      </div>
    </section>
  );
}

// Scroll Progress Indicator
function ScrollProgress() {
  const progress = useScrollProgress();

  return (
    <div className="fixed top-0 left-0 right-0 h-1 bg-gray-100 z-50">
      <div
        className="h-full bg-accent transition-all duration-150 ease-out"
        style={{ width: `${progress * 100}%` }}
      />
    </div>
  );
}

// Main App
function App() {
  const scrollProgress = useScrollProgress();

  return (
    <div className="min-h-screen">
      <ScrollProgress />
      <Hero onScrollProgress={scrollProgress} />
      <IdentityReveal />
      <Philosophy />
      <NationalCTF />
      <Achievements />
      <CyberKhana />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
