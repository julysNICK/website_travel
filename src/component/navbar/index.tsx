import {useCycle, motion, AnimatePresence} from "framer-motion";
import React, {useRef} from "react";
import {FaArrowDown} from "react-icons/fa";
import {MenuToggle} from "../MenuToggle";
import Navigation from "../Navigation";
import {useDimensions} from "../useDimensions";
import "./styles.css";

const sidebar = {
    open: (height = 1000) => ({
        clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
        transition: {
            type: "spring",
            stiffness: 20,
            restDelta: 2
        }
    }),
    closed: {
        clipPath: "circle(30px at 40px 40px)",
        transition: {
            delay: 0.5,
            type: "spring",
            stiffness: 400,
            damping: 40
        }
    }
};

export default function Navbar() {
    const [isOpen, toggleOpen] = useCycle(false, true);
    const containerRef = useRef(null);
    const {height} = useDimensions(containerRef);
    return (
        <AnimatePresence>
            <motion.nav
                initial={false}
                animate={isOpen ? "open" : "closed"}
                custom={height}
                ref={containerRef}
            >
                <div className="rowNavbar">
                    <motion.img
                        animate={{y: [10, 0]}}
                        transition={{ease: "linear", duration: 0.5}}
                        src="Logo.png"
                        alt="logo"
                        className="logoNav"
                    />
                    <div className="rowLinks">
                        <motion.a
                            animate={{y: [10, 0]}}
                            transition={{ease: "linear", duration: 0.5}}
                            exit={{opacity: 0}}
                            href=""
                        >
                            Destinos
                        </motion.a>

                        <motion.a
                            animate={{y: [10, 0]}}
                            transition={{ease: "linear", duration: 0.5}}
                            href=""
                        >
                            Hoteis
                        </motion.a>
                        <motion.a
                            animate={{y: [10, 0]}}
                            transition={{ease: "linear", duration: 0.5}}
                            href=""
                        >
                            Voos
                        </motion.a>
                        <motion.a
                            animate={{y: [10, 0]}}
                            transition={{ease: "linear", duration: 0.5}}
                            href=""
                        >
                            Livros
                        </motion.a>
                        <motion.a
                            animate={{y: [10, 0]}}
                            transition={{ease: "linear", duration: 0.5}}
                            href=""
                        >
                            Login
                        </motion.a>

                        <motion.a
                            animate={{y: [10, 0]}}
                            transition={{ease: "linear", duration: 0.5}}
                            href=""
                            style={{
                                border: "1px solid #FFFFFF",
                                borderRadius: "5px",
                                padding: "0px 10px"
                            }}
                        >
                            Signup
                        </motion.a>
                        <motion.div
                            animate={{y: [10, 0]}}
                            transition={{ease: "linear", duration: 0.5}}
                            className="buttonWithIcon"
                        >
                            <a href="">En</a>
                            <FaArrowDown
                                size={8}
                                color="#FFFFFF"
                                style={{
                                    marginLeft: "4px",
                                    cursor: "pointer"
                                }}
                            />
                        </motion.div>
                    </div>
                    <div className="threeList">
                        <motion.div className="background" variants={sidebar}>
                            <Navigation />
                        </motion.div>
                        <MenuToggle toggle={() => toggleOpen()} />
                    </div>
                </div>
            </motion.nav>
        </AnimatePresence>
    );
}
