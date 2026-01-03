import React, { useEffect, useRef } from "react";
import Contact from "../pages/Contact";
import AboutUs from "../pages/AboutUs";
import Footer from "../pages/Footer";
import HomeSlider from "../pages/HomeSlider";

interface VantaEffectInstance {
    destroy: () => void;
}

interface VantaProps {
    // Add any props you want to support here
}

declare global {
    interface Window {
        VANTA?: {
            CLOUDS: (options: Record<string, any>) => VantaEffectInstance;
            BIRDS: (options: Record<string, any>) => VantaEffectInstance;
            DOTS: (options: Record<string, any>) => VantaEffectInstance;
        };
    }
}
export const VantaBirdsHero: React.FC<VantaProps> = () => {
    // 1. Create a ref to attach to the target DOM element
    const vantaBirdsRef = useRef<HTMLDivElement | null>(null);
    // 2. Create a ref to store the Vanta instance for cleanup
    const vantaEffect = useRef<VantaEffectInstance | null>(null);

    useEffect(() => {
        // 3. Ensure window.VANTA is available before trying to initialize
        if (vantaBirdsRef.current && window.VANTA) {
            // Check if we already initialized Vanta to avoid re-initialization
            if (!vantaEffect.current) {
                // 4. Initialize VANTA.BIRDS
                vantaEffect.current = window.VANTA.BIRDS({
                    el: vantaBirdsRef.current, // Use the ref as the element selector
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.0,
                    minWidth: 200.0,
                    scale: 1.0,
                    scaleMobile: 1.0,
                    backgroundColor: 0x000000,
                    color1: 0x380000,
                    color2: 0xffa500,
                    // Add any custom colors or settings here
                    // color: 0xcccccc
                });
            }
        }

        // 5. Cleanup function: Destroys the Vanta effect when the component unmounts
        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };

        // The empty dependency array [] ensures this effect runs only once after the initial render
    }, []);
    // console.log("Rendering VantaBirdsHero");
    return (
        // 6. Attach the ref to the hero element where Vanta should be rendered
        <div
            ref={vantaBirdsRef}
            className="relative bg-black flex flex-col items-center justify-center min-h-screen w-full"
        >
            {/* Your content goes here */}
            <AboutUs />
        </div>
    );
};
export const VantaCloudsHero: React.FC<VantaProps> = () => {
    // 1. Create a ref to attach to the target DOM element
    const vantaCloudsRef = useRef<HTMLDivElement | null>(null);
    // 2. Create a ref to store the Vanta instance for cleanup
    const vantaEffect = useRef<VantaEffectInstance | null>(null);

    useEffect(() => {
        // 3. Ensure window.VANTA is available before trying to initialize
        if (vantaCloudsRef.current && window.VANTA) {
            // Check if we already initialized Vanta to avoid re-initialization
            if (!vantaEffect.current) {
                // 4. Initialize VANTA.CLOUDS
                vantaEffect.current = window.VANTA.CLOUDS({
                    el: vantaCloudsRef.current, // Use the ref as the element selector
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    // Add any custom colors or settings here
                    skyColor: 0x70a0f,
                    cloudColor: 0x292c2e,
                    sunColor: 0x2e2719,
                    sunGlareColor: 0x492314,
                    sunlightColor: 0x422e1b
                });
            }
        }

        // 5. Cleanup function: Destroys the Vanta effect when the component unmounts
        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };

        // The empty dependency array [] ensures this effect runs only once after the initial render
    }, []);
    // console.log("Rendering VantaCloudsHero");
    return (
        // 6. Attach the ref to the hero element where Vanta should be rendered
        <div
            ref={vantaCloudsRef}
            style={{ width: "100%", height: "100%" }} // Give the container a size!
            className="relative bg-black flex flex-col items-center justify-center min-h-screen w-full overflow-hidden"
        >
            {/* Your content goes here */}
            <Contact />
            <Footer />
        </div>
    );
};
export const VantaDotsHero: React.FC<VantaProps> = () => {
    // 1. Create a ref to attach to the target DOM element
    const vantaDotsRef = useRef<HTMLDivElement | null>(null);
    // 2. Create a ref to store the Vanta instance for cleanup
    const vantaEffect = useRef<VantaEffectInstance | null>(null);

    useEffect(() => {
        // 3. Ensure window.VANTA is available before trying to initialize
        if (vantaDotsRef.current && window.VANTA) {
            // Check if we already initialized Vanta to avoid re-initialization
            if (!vantaEffect.current) {
                // 4. Initialize VANTA.DOTS
                vantaEffect.current = window.VANTA.DOTS({
                    el: vantaDotsRef.current, // Use the ref as the element selector
                    mouseControls: true,
                    touchControls: true,
                    gyroControls: false,
                    minHeight: 200.00,
                    minWidth: 200.00,
                    // Add any custom colors or settings here
                    skyColor: 0x70a0f,
                    cloudColor: 0x292c2e,
                    sunColor: 0x2e2719,
                    sunGlareColor: 0x492314,
                    sunlightColor: 0x422e1b
                });
            }
        }

        // 5. Cleanup function: Destroys the Vanta effect when the component unmounts
        return () => {
            if (vantaEffect.current) {
                vantaEffect.current.destroy();
                vantaEffect.current = null;
            }
        };

        // The empty dependency array [] ensures this effect runs only once after the initial render
    }, []);
    // console.log("Rendering VantaCloudsHero");
    return (
        // 6. Attach the ref to the hero element where Vanta should be rendered
        <div
            ref={vantaDotsRef}
            className=""
        >
            {/* Your content goes here */}
            <HomeSlider />
        </div>
    );
};