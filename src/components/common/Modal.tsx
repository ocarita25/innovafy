// src/components/Modal.jsx
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import  { useEffect, useRef, useState } from "react";
import TitleUp from "./TitleUp"; 

type ModalProps = {
  handleCloseModal: () => void;
};

const springConfig = {
  stiffness: 200,
  damping: 25,
  mass: 0.5
};

const isLargeScreen = typeof window !== 'undefined' && window.innerWidth >= 768; 

export const Modal = ({ handleCloseModal }: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const scrollY = useMotionValue(0);
  
  // ANIMACIÓN DEL TÍTULO
  const [titleAnimState, setTitleAnimState] = useState("hidden");

  useEffect(() => {
    // Retrasar la animación del título
    const timer = setTimeout(() => {
        setTitleAnimState("visible"); 
    }, 450); 

    document.body.style.overflow = "hidden";
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "auto";
    };
  }, []);


  useEffect(() => {
    const handleScroll = () => {
      if (modalRef.current) {
        scrollY.set(modalRef.current.scrollTop);
      }
    };

    const modal = modalRef.current;
    if (modal) {
      modal.addEventListener("scroll", handleScroll);
      return () => modal.removeEventListener("scroll", handleScroll);
    }
  }, [scrollY]);


  const initialHeight = isLargeScreen ? "70vh" : "60vh";
  const initialWidth = isLargeScreen ? "95%" : "90%"; 
  
  const targetHeight = useTransform(scrollY, [0, 100], [initialHeight, "100vh"], { clamp: true });
  const targetWidth = useTransform(scrollY, [0, 100], [initialWidth, "100vw"], { clamp: true });
  const targetLeft = useTransform(scrollY, [0, 100], ["50%", "0%"], { clamp: true });
  const targetBorderRadius = useTransform(scrollY, [0, 100], [24, 0]);
  const targetTranslateX = useTransform(scrollY, [0, 100], ["-50%", "0%"], { clamp: true });

  const backgroundColor = useTransform(scrollY, [0, 800], ["#acd9d4", "#f7f7f7"]);
  
  const height = useSpring(targetHeight, springConfig);
  const width = useSpring(targetWidth, springConfig);
  const left = useSpring(targetLeft, springConfig);
  const borderRadius = useSpring(targetBorderRadius, springConfig);
  const translateX = useSpring(targetTranslateX, springConfig);


  return (
    <motion.div
      className="fixed bottom-0 z-50 overflow-hidden shadow-lg py-6"
      style={{
        height,
        width,
        left,
        translateX,
        backgroundColor,
        borderRadius: useTransform(borderRadius, (v) => `${v}px ${v}px 0 0`),
      }}
      initial={{ opacity: 0, y: "100%" }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: "100%" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
    >
      <div
        ref={modalRef}
        className="h-full overflow-y-auto" 
        style={{ maxHeight: "100vh" }}
      >
       
        <div className="flex justify-end mb-4 px-5 md:px-10">
          <button
            onClick={handleCloseModal}
            className="w-8 h-8 flex items-center justify-center bg-[#939389] text-white rounded-full hover:bg-white hover:text-[#939389] transition fixed top-6 right-6 md:right-10 cursor-pointer z-10" 
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            </svg>
          </button>
        </div>



        <div className="px-5 md:px-10"> 
          <div className="flex flex-col md:flex-row py-7 mb-10 md:mb-20 ">

            <div className="w-full md:w-1/2 mx-auto flex-shrink-0 mb-8 md:mb-0"> 
              <img
                className="rounded-3xl w-full max-w-sm md:max-w-none mx-auto h-auto object-cover "
                src="https://a-us.storyblok.com/f/1017006/1856x2464/0881d4341b/crowd.png/m/500x670/filters:quality(80)"
                alt="Illustration of diverse people including someone in a wheelchair"
              />
            </div>


            <div className="w-full md:w-1/2 flex flex-col md:pl-10"> 
              <div className="w-full">

 
                <h1 className="text-4xl sm:text-5xl md:text-6xl font-medium text-gray-800 leading-tight mb-3">
                  <TitleUp title="Understanding WCAG 2.2" animateState={titleAnimState} /> 
                </h1>

                <div className="flex items-center gap-2 text-sm text-gray-600 mb-8 md:mb-14">
                  <span>Accessibility, Development</span>
                  <span>•</span>
                  <span>6 min read</span>
                </div>
                
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-8"> 
                    WCAG 2.2 brings nine new accessibility criteria, with several targeting 
                    cognitive and learning barriers. With these changes come clearer plans 
                    for building websites that don’t leave users lost or stuck.
                </p>

                <div className="flex items-center gap-4 pt-4 border-t border-gray-300">
                  <img
                    className="rounded-full w-10 h-10 object-cover"
                    src="https://a-us.storyblok.com/f/1017006/521x521/462e3fe36e/teegan.jpg/m/35x35/filters:quality(80)"
                    alt="Teegan Lincoln"
                  />
                  <div>
                    <span className="block text-sm font-medium text-gray-800">
                      Teegan Lincoln
                    </span>
                    <span className="block text-xs text-gray-500">
                      18 September 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div className="w-full mx-auto md:w-11/12 lg:w-2/3 max-w-4xl text-base sm:text-lg space-y-8 ">

            <p className="text-base sm:text-lg">Since its release on Oct 5, 2023, WCAG (Web Content Accessibility Guidelines) 2.2 has offered 9 new recommendations for building a more accessible web. It came as a welcome update, 5 years since the last WCAG 2.1 release. </p>
            <p className="text-base sm:text-lg">With about half of the new content having a focus on helping those with cognitive, language, and learning disabilities, this latest release provides some much needed recommendations useful for developers looking to improve the accessibility of their websites and apps.</p>

            <p className="text-base sm:text-lg">In this post, we’ll go through the new success criteria, and provide some suggestions on how to best meet them.</p>

  
            <h1 className="text-3xl md:text-4xl">2.4.11 Focus Not Obscured (Minimum) (AA) and 2.4.12 Focus Not Obscured (Enhanced) (AAA)</h1>
            <p className="text-base sm:text-lg">Imagine trying to use a website with a mouse, but the pointer is invisible. It’d get frustrating pretty quickly right - and that’s the reality for sighted users who rely on non-mouse assistive technologies, like keyboard, an ability switch, or voice input when navigating websites that don’t meet the WCAG Focus Not Obscured criteria.</p>

            <p className="text-base sm:text-lg">These criteria require all user interface components such as form inputs, buttons and links to be at least partially visible (AA) or completely visible (AAA) upon receiving keyboard focus. Focus indicators can commonly get obscured by author-created content, such as popup dialogs, sticky headers/footers or cookie banners, which can make navigating via a keyboard really tricky. Keyboard users need to be able to see which element is currently focused, to know where they ‘are’, and WCAG criteria 2.4.11 and 2.4.12 aims to improve that.</p>

            <h1 className="text-3xl md:text-4xl">2.4.13 Focus Appearance (AAA)</h1>
            <p className="text-base sm:text-lg">Smaller changes in the visual appearance of a focused element can be easy to miss, especially for people with visual impairments. This criteria’s focus is improving the visibility of a focus indicator by ensuring it displays with a sufficient size and colour contrast ratio. </p>

            <p className="text-base sm:text-lg">In order to meet WCAG’s highest level of compliance you’ll need to ensure all focus indicators are at least as large as a 2px thick perimeter of the unfocused target, which can be met simply by having a 2px outline on target focus. </p>

            <p className="text-base sm:text-lg">In addition to the perimeters size, the focus indicator must also meet the minimum contrast ratio of 3:1 - the same contrast ratio specified in 1.4.11 Non-text Contrast (AA) - aiming to ensure that the focus indicator will stand out sufficiently against its background colour.</p>

            <p className="text-base sm:text-lg">Dragging can be a complex gesture for those who have difficulty with fine motor control, and a straight up challenge for those using specialised input devices like head pointers or speech-controlled mouse emulators. Much like WCAG criteria 2.5.1 Pointer Gestures introduced in WCAG 2.1, Dragging Movements (AA) encourages developers and designers to offer alternative methods of interaction that don’t rely on a dragging gesture.</p>

            <p className="text-base sm:text-lg">This criteria requires that all functionality that uses dragging (an operation where the pointer engages with an element on the down event and the element follows the pointer until an up event), can be achieved by a single pointer, such as a mouse click, or a finger on a touch screen. An example of providing alternative functionality to meet this criteria would be adding arrows to move you to the previous or next element of a carousel or slider with a single click.</p>


            <h1 className="text-3xl md:text-4xl">Conclusion</h1>
            <p className="text-base sm:text-lg">WCAG 2.2 has added some much needed improvements to the guidelines, especially for those with cognitive impairments. It is great to know that the specification continues to grow and adapt to an ever-changing landscape to help facilitate a more accessible web.</p>
          </div>
 
          <div className="w-full mx-auto md:w-11/12 lg:w-2/3 max-w-4xl mt-16 pb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#32453f] mb-8">Up Next</h2> 
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 rounded-3xl p-4 md:p-6 ">

              <div className="w-full md:w-1/3 flex-shrink-0 mb-4 md:mb-0 md:mr-6">
                <img
                  className="w-full h-auto object-cover rounded-2xl"
                  src="https://a-us.storyblok.com/f/1017006/1856x2464/0881d4341b/crowd.png" 
                  alt="Illustration of diverse people interacting with digital elements"
                />
              </div>

   
              <div className="w-full md:w-2/3">
                <h3 className="text-2xl sm:text-3xl font-bold text-[#32453f] mb-2">
                  Accessibility means designing for yourself too
                </h3>
                <div className="flex flex-wrap items-center gap-2 text-sm text-gray-600 mb-4">
                  <span>Accessibility, Design</span>
                  <span className="text-[#8B5CF6]">✦</span> 
                  <span>3 min read</span>
                </div>
                <p className="text-sm sm:text-base text-gray-700 mb-6">
                  Accessibility isn’t just for "other people", it’s for all of us, including you. Whether it’s a migraine,
                  slow internet, or simply growing older, everyone faces temporary or permanent limitations at
                  some point, making accessible design a gift to your future self.
                </p>

 
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-4 border-t border-gray-200 gap-4 sm:gap-0">
                  <button className="flex items-center bg-[#212e1a] md:hover:bg-[#91e889] px-4 py-2 rounded-full text-[#fefefe] md:hover:text-[#212e1a] font-medium transition">
                    Read Article
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-4 h-4 ml-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
                    </svg>
                  </button>

                  <div className="flex items-center">
                    <img
                      className="rounded-full w-8 h-8 object-cover mr-2"
                      src="https://a-us.storyblok.com/f/1017006/521x521/462e3fe36e/teegan.jpg/m/35x35/filters:quality(80)"
                      alt="Author Photo"
                    />
                    <span className="text-sm font-medium text-gray-800">
                      Paul Spencer • 15 July 2025
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>


        </div> 
      </div>
    </motion.div>
  );
};