import { React, useState, useRef } from "react";
import "./screens.css";
import hiba from "@/assets/Hiba.jpeg";
import mangas from "@/assets/mangas.jpg";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { useEasterEgg } from "@/context/EasterEggContext";
import { CoolMode } from "@/components/ui/cool-particle";
import { LinkPreview } from "@/components/ui/link-preview";
import {
  Briefcase,
  GraduationCap,
  Rocket,
  Target,
  Heart,
  Camera,
  Music,
  Globe2,
  Quote,
  MapPin,
  Flag,
  X,
  Calendar,
  Sparkles,
} from "lucide-react";
import { toast } from "react-hot-toast";
import * as Dialog from "@radix-ui/react-dialog";
import {
  DraggableCardBody,
  DraggableCardContainer,
} from "@/components/ui/draggable-card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/ToolTip";
import FadeIn from "@/components/FadeIn";

export default function AboutScreen() {
  const navigate = useNavigate();
  const { } = useEasterEgg();
  const {
    foundEggs,
    eggsFounded,
    incrementEggs,
    resetEggs,
    eggsTotal,
    eggMission,
    completedMissions,
    completeMission,
  } = useEasterEgg();
  const eggLongPressTimer = useRef(null);
  const egg3Found = Array.isArray(foundEggs) ? foundEggs.includes("#3") : false;

  const items = [
    {
      title: "Mangas",
      image: mangas,
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Nature",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?q=80&w=2560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-0 lg:px-8">
      <section className="h-screen w-full flex items-center justify-center">
        <FadeIn className="flex flex-col items-center text-center space-y-4">
          {/* Photo */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-rose-200 dark:border-rose-400 shadow-md">
            <img
              src={hiba}
              alt="Hiba Rahil Soussah"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Nom principal */}
          <h1 className="text-3xl md:text-5xl font-sfbold tracking-tight text-lightPrimary dark:text-darkPrimary flex flex-col justify-center items-center gap-2">
            Hiba Rahil Soussah
          </h1>

          {/* Nom en arabe + phonétique */}
          <div className="flex items-baseline gap-4">
            <span className="font-InkBrushArabic bg-brandgradient bg-clip-text text-transparent text-2xl md:text-3xl px-1">
              هبة رحيل سوسة
            </span>
            <span className="text-sm md:text-base text-lightPrimary dark:text-darkPrimary font-sfregular">
              / hɪbæː ræˈhiːl suːˈsæː /
            </span>
          </div>

          {/* Description */}
          <p className="text-sm md:text-base lg:text-lg text-lightPrimary dark:text-darkPrimary font-sfregular text-justify md:text-center leading-relaxed ">
            Born in {" "}
            <span
              onClick={() => incrementEggs("#2")}
              className="inline tracking-[0.5px] text-foreground/90 transition-all duration-300
             font-sfbold hover:bg-gradient-to-r hover:from-[#009246] hover:via-white hover:to-[#CE2B37]
             hover:text-transparent hover:bg-clip-text"
            >
              Spain
            </span>{" "}
            to Moroccan parents and raised in France, I grew up between cultures, languages, and perspectives.
            I first studied Biotechnology, driven by my love for science and understanding how life works. Later, I joined IAE Montpellier to explore how digital transformation can shape the future of innovation.

            Now, I focus on connecting scientific thinking and digital creativity — building meaningful, human-centered projects while discovering new cultures around the world.
          </p>
          <div className=" h-1 w-24 bg-brandgradient rounded-full hidden md:flex" />
        </FadeIn>
      </section>


      {/* //////////////////////////////////////////////.  Journey Section ///////////////////////////////////////////////////////////// */}




      <section id="philosophy" className=" w-full">
        <div className="w-full max-w-6xl mx-auto">
          {/* Header */}
          <FadeIn className="" i={0}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-ramidots bg-brandgradient bg-clip-text text-transparent w-fit inline-block">
              My Style & Philosophy
            </h2>
            <div className="mt-3 h-1 w-24 bg-brandgradient rounded-full" />
            <p className="mt-5 text-lightPrimary dark:text-darkPrimary font-sfregular leading-relaxed text-sm md:text-base lg:text-lg text-justify">
              As an entrepreneur, my overarching goal is to invest in myself,
              especially in discipline so I can show up better every day. I want
              to simplify people’s daily lives with automated, practical
              solutions. Additionally, I aim to travel, discover new cultures
              and viewpoints, and form my own understanding of the world.
            </p>
          </FadeIn>

          {/* Cards */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {/* 1. Invest in myself */}
            <FadeIn
              className="rounded-2xl dark:bg-darkContainer bg-bgLight border border-ultralightGray dark:border-darkBorder p-6 hover:shadow-md transition-shadow"
              i={0.1}
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder flex items-center justify-center">
                  <Rocket className="size-5 text-lightPrimary dark:text-darkPrimary font-sfregular" aria-hidden="true" />
                </div>
                <h3 className="text-lg md:text-xl font-sfbold text-lightPrimary dark:text-darkPrimary">
                  Invest in Myself
                </h3>
              </div>
              <p className="mt-3 text-lightPrimary dark:text-darkPrimary font-sfregular text-sm md:text-base text-justify">
                As a young entrepreneur, continuous learning and discipline are
                my leverage. I invest time in skills, health, and mindset so I
                can move faster and smarter.
              </p>
            </FadeIn>

            {/* 2. Build solutions that simplify work */}
            <FadeIn
              className="rounded-2xl dark:bg-darkContainer bg-bgLight border border-ultralightGray dark:border-darkBorder p-6 hover:shadow-md transition-shadow"
              i={0.2}
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full bg-bgLight dark:bg-bgDark border border-ultralightGray dark:border-darkBorder flex items-center justify-center">
                  <Target className="size-5 text-lightPrimary dark:text-darkPrimary font-sfregular" aria-hidden="true" />
                </div>
                <h3 className="text-lg md:text-xl font-sfbold text-lightPrimary dark:text-darkPrimary">
                  Build to Solve Real Needs
                </h3>
              </div>
              <p className="mt-3 text-lightPrimary dark:text-darkPrimary font-sfregular text-sm md:text-base text-justify">
                I want to develop solutions that remove friction and make work
                simpler. Clarity, speed, and utility grounded in real user
                needs.
              </p>
            </FadeIn>

            {/* 3. Travel & broaden perspective */}
            <FadeIn
              className="rounded-2xl dark:bg-darkContainer bg-bgLight border border-ultralightGray dark:border-darkBorder p-6 hover:shadow-md transition-shadow"
              i={0.3}
            >
              <div className="flex items-center gap-3">
                <div className="size-10 rounded-full dark:bg-bgDark bg-bgLight border border-ultralightGray dark:border-darkBorder flex items-center justify-center">
                  <TooltipProvider>
                    {completedMissions.includes("tip#1") &&
                      !completedMissions.includes("tip#2") ? (
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <Globe2
                            className="size-5 text-lightPrimary dark:text-darkPrimary font-sfregular"
                            aria-hidden="true"
                          />
                        </TooltipTrigger>
                        <TooltipContent>
                          <div className="flex items-center px-4 py-2 rounded-full bg-bgLight dark:bg-darkContainer shadow-sm w-fit space-x-2">
                            <span className="text-lightPrimary dark:text-darkPrimary font-sfregular">
                              Hidden Tip #2
                            </span>
                            <button
                              onClick={() => completeMission("tip#2")}
                              className="px-3 py-1 text-xs font-sfbold text-lightPrimary dark:text-darkPrimary bg-bgLight dark:bg-bgDark rounded-full hover:bg-gray-200 "
                            >
                              Discover Tip
                            </button>
                          </div>
                        </TooltipContent>
                      </Tooltip>
                    ) : (
                      <Globe2
                        className="size-5 text-lightPrimary dark:text-darkPrimary font-sfregular"
                        aria-hidden="true"
                      />
                    )}
                  </TooltipProvider>
                </div>
                <h3 className="text-lg md:text-xl font-sfbold text-lightPrimary dark:text-darkPrimary">
                  Travel & Expand Perspective
                </h3>
              </div>
              <p className="mt-3 text-lightPrimary dark:text-darkPrimary font-sfregular text-sm md:text-base text-justify">
                I want to travel to discover new cultures and new ways of seeing
                the world.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>
      {/* <section
        id="passions"
        className=" w-full flex flex-col items-center mt-16 min-h-screen "
      >
        <FadeIn
          className="w-full max-w-4xl mx-auto flex flex-col items-center text-center"
          i={0}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-ramidots bg-brandgradient bg-clip-text text-transparent px-1">
            Beyond Code: Things I Love
          </h2>
          <div className="mt-3 h-1 w-24 bg-brandgradient rounded-full" />

          <p className="mt-6 text-lightPrimary dark:text-darkPrimary font-sfregular leading-relaxed max-w-2xl text-sm md:text-base lg:text-lg">
            I’m driven by curiosity and movement. Outside of engineering, I
            recharge by spending time with my wife, watching/reading mangas,
            riding bike or chasing fresh powder in the mountains with my
            brother.
          </p>
        </FadeIn>
        <div className="relative overflow-visible"> */}
      {/* <DraggableCardContainer className="relative flex w-full items-center justify-center overflow-visible">
            {!egg3Found && (
              <FadeIn
                className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center text-center font-sfregular"
                i={0.1}
              >
                <h2 className="text-lightPrimary dark:text-darkPrimary text-2xl font-sfbold tracking-tight">
                  Looks like you found something?
                </h2>
                <CoolMode>
                  <button
                    type="button"
                    onMouseDown={() => {
                      eggLongPressTimer.current = setTimeout(() => {
                        incrementEggs("#3");
                        eggLongPressTimer.current = null;
                      }, 1000);
                    }}
                    onMouseUp={() => {
                      if (eggLongPressTimer.current) {
                        clearTimeout(eggLongPressTimer.current);
                        eggLongPressTimer.current = null;
                        toast("Try to hold it", { duration: 4000 });
                      }
                    }}
                    onMouseLeave={() => {
                      if (eggLongPressTimer.current) {
                        clearTimeout(eggLongPressTimer.current);
                        eggLongPressTimer.current = null;
                        toast("Try to hold it", { duration: 4000 });
                      }
                    }}
                    onTouchStart={() => {
                      eggLongPressTimer.current = setTimeout(() => {
                        incrementEggs("#3");
                        eggLongPressTimer.current = null;
                      }, 1000);
                    }}
                    onTouchEnd={() => {
                      if (eggLongPressTimer.current) {
                        clearTimeout(eggLongPressTimer.current);
                        eggLongPressTimer.current = null;
                        toast("Try to hold it", { duration: 4000 });
                      }
                    }}
                    className="pointer-events-auto mt-4 inline-flex items-center gap-2 rounded-full dark:bg-darkContainer bg-bgLight /90 px-4 py-2 text-sm text-lightPrimary dark:text-darkPrimary font-sfregular shadow-sm hover: hover:shadow-md transition-all"
                    data-cursor-icon="egg"
                  >
                    <Sparkles className="size-4" />
                    Reveal Easter Egg
                  </button>
                </CoolMode>
              </FadeIn>
            )}

            // Cartes draggable
            {items.map((item, idx) => (
              <DraggableCardBody
                className={cn(item.className, "z-20 mt-10")}
                whileDrag={{ zIndex: 50 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                />
                <h3 className="mt-4 text-center text-4xl font-ramidots bg-brandgradient bg-clip-text text-transparent w-fit">
                  {item.title}
                </h3>
              </DraggableCardBody>
            ))}
          </DraggableCardContainer> */}
      {/* </div>
      </section > */}
    </div >
  );
}

/* ——— Petit composant Badge réutilisable ——— */
function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-ultralightGray dark:bg-bgDark px-3 py-1 text-xs text-lightPrimary dark:text-darkPrimary font-sfregular">
      {children}
    </span>
  );
}
