"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  User,
  FileText,
  Lightbulb,
  GraduationCap,
  TrendingUp,
  Search,
  RefreshCw,
  Heart,
  Menu,
  X
} from "lucide-react";

export default function Home() {
  const [currentRotation, setCurrentRotation] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const services = [
    { icon: User, label: "Political consulting" },
    { icon: Lightbulb, label: "Think Tanks" },
    { icon: TrendingUp, label: "Research" },
    { icon: Search, label: "MLA/MP internships" },
    { icon: GraduationCap, label: "Fellowships" },
    { icon: FileText, label: "Public Policy" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRotation(prev => prev + 60);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (isMobileMenuOpen && !(event.target as Element).closest('header')) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMobileMenuOpen]);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="px-4 sm:px-6 py-4 bg-gray-50 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-orange-500 rounded-md flex items-center justify-center">
              <div className="w-4 h-4 bg-white rounded-sm transform rotate-12"></div>
            </div>
            <div className="text-sm font-bold text-gray-800">
              <div>BUILDING</div>
              <div>BHARAT</div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Button
              variant="default"
              className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full"
            >
              Home
            </Button>
            <button className="text-gray-700 hover:text-white hover:bg-orange-500 px-6 py-2 rounded-full font-medium transition-all duration-200">
              Courses
            </button>
            <button className="text-gray-700 hover:text-white hover:bg-orange-500 px-6 py-2 rounded-full font-medium transition-all duration-200">
              For College
            </button>
            <button className="text-gray-700 hover:text-white hover:bg-orange-500 px-6 py-2 rounded-full font-medium transition-all duration-200">
              Internships
            </button>
            <button className="text-gray-700 hover:text-white hover:bg-orange-500 px-6 py-2 rounded-full font-medium transition-all duration-200">
              Blogs
            </button>
          </nav>

          <div className="hidden lg:block">
            <Button
              variant="outline"
              className="border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-2 rounded-full"
            >
              Start Learning
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-md text-gray-700 hover:text-orange-500 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 pt-4">
              <Button
                variant="default"
                className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded-full mx-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Button>
              <button
                className="text-gray-700 hover:text-white hover:bg-orange-500 px-6 py-2 rounded-full font-medium transition-all duration-200 mx-4 text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Courses
              </button>
              <button
                className="text-gray-700 hover:text-white hover:bg-orange-500 px-6 py-2 rounded-full font-medium transition-all duration-200 mx-4 text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                For College
              </button>
              <button
                className="text-gray-700 hover:text-white hover:bg-orange-500 px-6 py-2 rounded-full font-medium transition-all duration-200 mx-4 text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Internships
              </button>
              <button
                className="text-gray-700 hover:text-white hover:bg-orange-500 px-6 py-2 rounded-full font-medium transition-all duration-200 mx-4 text-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blogs
              </button>
              <Button
                variant="outline"
                className="border-orange-500 text-orange-500 hover:bg-orange-50 px-6 py-2 rounded-full mx-4 mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Start Learning
              </Button>
            </nav>
          </div>
        )}
      </header>

      <main className="px-4 sm:px-6 py-8 sm:py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="space-y-6 sm:space-y-8 text-center lg:text-left">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-teal-800 leading-tight">
                Crack Political and policies roles with Confidence!
              </h1>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold">
                <span className="text-orange-500">Learn. Lead. Transform </span>
                <span className="text-teal-800">Bharat</span>
              </h2>

              <p className="text-base sm:text-lg text-gray-700 leading-relaxed max-w-lg mx-auto lg:mx-0">
                We offer a world class curriculum and expert mentorship to help
                you break into politics and policy roles. No background needed
                just your passion to lead and transform Bharat.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:space-x-4 justify-center lg:justify-start">
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto"
                >
                  Start Learning For Free
                </Button>
                <Button
                  className="bg-orange-500 hover:bg-orange-600 text-white px-6 sm:px-8 py-3 rounded-full text-base sm:text-lg w-full sm:w-auto"
                >
                  Join premium
                </Button>
              </div>
            </div>

            <div className="relative w-80 h-80 sm:w-96 sm:h-96 lg:w-[28rem] lg:h-[28rem] mx-auto mt-8 lg:mt-0">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-lg sm:text-xl lg:text-2xl font-bold">
                  <div className="text-teal-800">Building</div>
                  <div className="text-orange-500">BHARAT</div>
                </div>
              </div>

              <div
                className="absolute inset-0 transition-transform duration-1000 ease-in-out"
                style={{ transform: `rotate(${currentRotation}deg)` }}
              >
                {services.map((service, index) => {
                  const angle = (index * 60) - 90;
                  // Much larger radius for better spacing - responsive values
                  const radius = 140; // Base radius - will look good on all screen sizes
                  const x = Math.cos(angle * Math.PI / 180) * radius;
                  const y = Math.sin(angle * Math.PI / 180) * radius;

                  return (
                    <div
                      key={service.label}
                      className="absolute transform -translate-x-1/2 -translate-y-1/2"
                      style={{
                        left: `calc(50% + ${x}px)`,
                        top: `calc(50% + ${y}px)`,
                      }}
                    >
                      <div
                        className="flex flex-col items-center text-center space-y-1 sm:space-y-2 transition-transform duration-1000 ease-in-out"
                        style={{ transform: `rotate(${-currentRotation}deg)` }}
                      >
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 border-2 border-orange-400 rounded-full flex items-center justify-center bg-white shadow-md">
                          <service.icon className="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8 text-orange-500" />
                        </div>
                        <span className="text-gray-800 font-semibold text-xs sm:text-sm whitespace-nowrap max-w-20 sm:max-w-24 leading-tight">
                          {service.label}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </main>



      <section className="px-4 sm:px-6 py-8 sm:py-16 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex animate-scroll whitespace-nowrap">
            <div className="flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8 mr-4 sm:mr-6 lg:mr-8">
              <div className="bg-red-600 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded font-bold text-xs sm:text-sm">
                Chanakya
              </div>
              <div className="text-red-500 font-bold text-lg sm:text-xl lg:text-2xl">
                dex
              </div>
              <div className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-yellow-400 rounded"></div>
                  <span className="text-xs sm:text-sm font-semibold">Smart Neta</span>
                </div>
              </div>
              <div className="text-red-600 font-bold text-sm sm:text-base lg:text-lg">
                Political<br />EDGE
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="text-green-600 font-bold text-sm sm:text-base">|||</div>
                <span className="text-xs sm:text-sm">VOTER<br />we are the voice of the nation</span>
              </div>
              <div className="border border-gray-300 px-2 sm:px-3 py-1 sm:py-2 rounded">
                <div className="text-orange-500 font-bold text-sm sm:text-base lg:text-lg">3C</div>
              </div>
              <div className="text-gray-400 font-bold text-sm sm:text-base lg:text-lg">
                BUILDING
              </div>
              <div className="bg-blue-600 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded font-bold text-xs sm:text-sm">
                Democracy
              </div>
              <div className="text-purple-500 font-bold text-lg sm:text-xl">
                VoteChain
              </div>
              <div className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-green-400 rounded"></div>
                  <span className="text-xs sm:text-sm font-semibold">E-Voting</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8 mr-4 sm:mr-6 lg:mr-8">
              <div className="bg-red-600 text-white px-4 py-2 rounded font-bold text-sm">
                Chanakya
              </div>
              <div className="text-red-500 font-bold text-2xl">
                dex
              </div>
              <div className="border border-gray-300 px-4 py-2 rounded">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-yellow-400 rounded"></div>
                  <span className="text-sm font-semibold">Smart Neta</span>
                </div>
              </div>
              <div className="text-red-600 font-bold text-lg">
                Political<br />EDGE
              </div>
              <div className="flex items-center space-x-2">
                <div className="text-green-600 font-bold">|||</div>
                <span className="text-sm">VOTER<br />we are the voice of the nation</span>
              </div>
              <div className="border border-gray-300 px-3 py-2 rounded">
                <div className="text-orange-500 font-bold text-lg">3C</div>
              </div>
              <div className="text-gray-400 font-bold text-lg">
                BUILDING
              </div>
              <div className="bg-blue-600 text-white px-4 py-2 rounded font-bold text-sm">
                Democracy
              </div>
              <div className="text-purple-500 font-bold text-xl">
                VoteChain
              </div>
              <div className="border border-gray-300 px-4 py-2 rounded">
                <div className="flex items-center space-x-2">
                  <div className="w-6 h-6 bg-green-400 rounded"></div>
                  <span className="text-sm font-semibold">E-Voting</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8 mr-4 sm:mr-6 lg:mr-8">
              <div className="bg-indigo-600 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded font-bold text-xs sm:text-sm">
                CivicTech
              </div>
              <div className="text-teal-500 font-bold text-lg sm:text-xl">
                PollMaster
              </div>
              <div className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-pink-400 rounded"></div>
                  <span className="text-xs sm:text-sm font-semibold">Transparency</span>
                </div>
              </div>
              <div className="text-blue-600 font-bold text-sm sm:text-base lg:text-lg">
                GovTech<br />Solutions
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="text-yellow-600 font-bold text-sm sm:text-base">★</div>
                <span className="text-xs sm:text-sm">CITIZEN<br />power to the people</span>
              </div>
              <div className="border border-gray-300 px-2 sm:px-3 py-1 sm:py-2 rounded">
                <div className="text-red-500 font-bold text-sm sm:text-base lg:text-lg">4D</div>
              </div>
              <div className="text-gray-500 font-bold text-sm sm:text-base lg:text-lg">
                INNOVATION
              </div>
              <div className="bg-green-600 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded font-bold text-xs sm:text-sm">
                Republic
              </div>
              <div className="text-orange-600 font-bold text-lg sm:text-xl">
                BallotBox
              </div>
              <div className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-purple-400 rounded"></div>
                  <span className="text-xs sm:text-sm font-semibold">Digital Rights</span>
                </div>
              </div>
            </div>

            <div className="flex justify-center items-center space-x-4 sm:space-x-6 lg:space-x-8">
              <div className="bg-indigo-600 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded font-bold text-xs sm:text-sm">
                CivicTech
              </div>
              <div className="text-teal-500 font-bold text-lg sm:text-xl">
                PollMaster
              </div>
              <div className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-pink-400 rounded"></div>
                  <span className="text-xs sm:text-sm font-semibold">Transparency</span>
                </div>
              </div>
              <div className="text-blue-600 font-bold text-sm sm:text-base lg:text-lg">
                GovTech<br />Solutions
              </div>
              <div className="flex items-center space-x-1 sm:space-x-2">
                <div className="text-yellow-600 font-bold text-sm sm:text-base">★</div>
                <span className="text-xs sm:text-sm">CITIZEN<br />power to the people</span>
              </div>
              <div className="border border-gray-300 px-2 sm:px-3 py-1 sm:py-2 rounded">
                <div className="text-red-500 font-bold text-sm sm:text-base lg:text-lg">4D</div>
              </div>
              <div className="text-gray-500 font-bold text-sm sm:text-base lg:text-lg">
                INNOVATION
              </div>
              <div className="bg-green-600 text-white px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded font-bold text-xs sm:text-sm">
                Republic
              </div>
              <div className="text-orange-600 font-bold text-lg sm:text-xl">
                BallotBox
              </div>
              <div className="border border-gray-300 px-2 sm:px-3 lg:px-4 py-1 sm:py-2 rounded">
                <div className="flex items-center space-x-1 sm:space-x-2">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 bg-purple-400 rounded"></div>
                  <span className="text-xs sm:text-sm font-semibold">Digital Rights</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="px-4 sm:px-6 py-8 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 text-center mb-8 sm:mb-12 lg:mb-16">
            Stories That Inspire
          </h2>

          <div className="relative overflow-hidden">
            <div className="carousel-container">
              <div className="carousel-slide active">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
                  <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                      From Doubt to Impactful Career Path
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      I used to believe students from tier 3 colleges couldn't compete. But
                      Building Bharat changed my mindset. Through their programs, I built a
                      strong portfolio, worked on local issues, and even led a state-level
                      hackathon! This journey isn't just about jobs - it's about purpose. I'm more
                      confident, skilled, and connected to a mission bigger than myself.
                    </p>
                    <div className="space-y-1 sm:space-y-2">
                      <h4 className="text-lg sm:text-xl font-bold text-orange-500">Sneha Joshi</h4>
                      <p className="text-sm sm:text-base text-gray-600">UX Intern & Community Volunteer, Pune</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden bg-gray-300">
                      <img
                        src="https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400&h=400&fit=crop"
                        alt="Sneha Joshi"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-slide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
                  <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                      Small Village to National Level Fellowship
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      Before Building Bharat, I had big dreams but no direction. The courses
                      opened up opportunities I never thought possible – from rural innovation
                      challenges to real-world community projects. The mentors treated us like
                      family and pushed us to aim higher. Today, I'm mentoring students from
                      my own village and applying for fellowships that once felt out of reach.
                      This platform is a launchpad for every Indian youth who wants to create
                      change.
                    </p>
                    <div className="space-y-1 sm:space-y-2">
                      <h4 className="text-lg sm:text-xl font-bold text-orange-500">Ravi Kumar</h4>
                      <p className="text-sm sm:text-base text-gray-600">Youth Fellow, Bihar</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden bg-gray-300">
                      <img
                        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Young Man"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="carousel-slide">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 sm:mb-16 lg:mb-20">
                  <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800">
                      Student to Social Impact Leader
                    </h3>
                    <p className="text-sm sm:text-base lg:text-lg text-gray-700 leading-relaxed">
                      Building Bharat transformed the way I learn and think. With hands-on
                      projects, expert mentorship, and constant support, I discovered my
                      leadership potential. I never imagined I'd lead initiatives in my own town
                      while learning from top mentors across India. The journey wasn't easy, but
                      the Building Bharat team made it achievable every step, every doubt, every
                      win was celebrated. If you're serious about growing and giving back to
                      India, this is where you start.
                    </p>
                    <div className="space-y-1 sm:space-y-2">
                      <h4 className="text-lg sm:text-xl font-bold text-orange-500">Priya Sharma</h4>
                      <p className="text-sm sm:text-base text-gray-600">Student Leader, Nagpur</p>
                    </div>
                  </div>

                  <div className="flex justify-center">
                    <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-3xl overflow-hidden bg-gray-300">
                      <img
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Professional Woman"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-3 mt-8">
            <div className="w-3 h-3 bg-gray-800 rounded-full dot active" data-slide="0"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full dot" data-slide="1"></div>
            <div className="w-3 h-3 bg-gray-300 rounded-full dot" data-slide="2"></div>
          </div>
        </div>

        <script dangerouslySetInnerHTML={{
          __html: `
      (function() {
        let currentSlide = 0;
        const slides = document.querySelectorAll('.carousel-slide');
        const dots = document.querySelectorAll('.dot');
        const totalSlides = slides.length;

        function showSlide(index) {
          // Hide all slides
          slides.forEach(slide => slide.classList.remove('active'));
          dots.forEach(dot => dot.classList.remove('active'));
          
          // Show current slide
          slides[index].classList.add('active');
          dots[index].classList.add('active');
        }

        function nextSlide() {
          currentSlide = (currentSlide + 1) % totalSlides;
          showSlide(currentSlide);
        }

        // Auto advance slides every 5 seconds
        setInterval(nextSlide, 2000);

        // Add click functionality to dots
        dots.forEach(dot => {
          dot.addEventListener('click', () => {
            currentSlide = parseInt(dot.getAttribute('data-slide'));
            showSlide(currentSlide);
          });
        });
      })();
    `
        }}></script>

        <style dangerouslySetInnerHTML={{
          __html: `
        .carousel-container {
        position: relative;
        width: 100%;
        height: auto;
      }

      .carousel-slide {
        display: none;
      }

      .carousel-slide.active {
        display: block;
      }

      .dot {
        cursor: pointer;
        transition: background-color 0.3s ease;
      }

      .dot.active {
        background-color: #1f2937;
      }
    `
        }}></style>
      </section>

      <section className="px-4 sm:px-6 py-8 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-teal-800 mb-2 sm:mb-4">
              Who Is This Initiative For?
            </h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600">
              Perfect for Aspiring Political and policy professionals from all Backgrounds
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 text-center space-y-4 sm:space-y-6">
              <div className="flex justify-center">
                <GraduationCap className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-orange-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-teal-800">College Students</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Students from any discipline looking to build a career in politics and policy
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 text-center space-y-4 sm:space-y-6">
              <div className="flex justify-center">
                <RefreshCw className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-orange-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-teal-800">Career Switchers</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Professionals from other fields wanting to transition into political consulting
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 text-center space-y-4 sm:space-y-6">
              <div className="flex justify-center">
                <User className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-orange-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-teal-800">Young Professionals</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Early-career professionals seeking to specialize in government and policy work
              </p>
            </div>

            <div className="bg-gray-50 rounded-3xl p-6 sm:p-8 text-center space-y-4 sm:space-y-6">
              <div className="flex justify-center">
                <Heart className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 text-orange-500" strokeWidth={1.5} />
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-teal-800">Policy Enthusiasts</h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                Anyone passionate about public service and creating positive social impact
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}