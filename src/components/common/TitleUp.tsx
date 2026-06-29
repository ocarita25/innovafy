import { motion } from "framer-motion"; 
import type { Variants } from "framer-motion";

type TitleProps = {
    title: string;
    animateState: string; 
};

const containerVariants: Variants = {
    hidden: { 
        transition: { 
            staggerChildren: 0.05, 
            delayChildren: 0.1 
        } 
    },
    visible: {
        transition: {
            staggerChildren: 0.05
        }
    }
};


const wordVariants: Variants = {
    hidden: {
        y: -20, 
        opacity: 0,
        willChange: 'transform, opacity', 
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1] 
        }
    },
    visible: {
        y: 0, 
        opacity: 1,
        willChange: 'transform, opacity',
        transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1]
        }
    }
};


const TitleUp = ({ title, animateState }: TitleProps) => { 

    if (!title) return null; 

    const words = title.split(" ");

    return (
        <motion.span
            className='flex flex-wrap'
            variants={containerVariants} 
            initial="hidden"
  
            animate={animateState} 
        >
            {words.map((word, index) => (
                <span 
                    key={index} 
                    className="overflow-hidden inline-block leading-none tracking-[0.05rem] mr-2" 
                >
                    <motion.span
                        variants={wordVariants}
                        className="inline-block"
                        style={{ display: "inline-block" }}
                    >
                        {word + " "} 
                    </motion.span>
                </span>
            ))}
        </motion.span>
    )
}

export default TitleUp;