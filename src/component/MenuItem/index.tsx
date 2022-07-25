import * as React from "react";
import {motion} from "framer-motion";
import "./styles.css";
import {FaArrowDown} from "react-icons/fa";
const variants = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            y: {stiffness: 1000, velocity: -100}
        }
    },
    closed: {
        y: 50,
        opacity: 0,
        transition: {
            y: {stiffness: 1000}
        }
    }
};

export const MenuItem = ({i}: any) => {
    return (
        <>
            <motion.li
                className="listItem"
                variants={variants}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
            >
                <a href="">Destinos</a>
            </motion.li>
            <motion.li
                className="listItem"
                variants={variants}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
            >
                <a href="">Hoteis</a>
            </motion.li>
            <motion.li
                className="listItem"
                variants={variants}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
            >
                <a href="">Voos</a>
            </motion.li>
            <motion.li
                className="listItem"
                variants={variants}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
            >
                <a href="">Livros</a>
            </motion.li>
            <motion.li
                className="listItem"
                variants={variants}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
            >
                <a href="">Login</a>
            </motion.li>
            <motion.li
                className="listItem"
                variants={variants}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
            >
                <a
                    href=""
                    style={{
                        border: "1px solid #FFFFFF",
                        borderRadius: "5px",
                        padding: "0px 10px"
                    }}
                >
                    Signup
                </a>
            </motion.li>
            <motion.li
                className="listItem"
                variants={variants}
                whileHover={{scale: 1.1}}
                whileTap={{scale: 0.95}}
                style={{
                    display: "flex",
                    justifyItems: "center",
                    alignItems: "center"
                }}
            >
                <div className="buttonWithIcon">
                    <a href="">En</a>
                    <FaArrowDown
                        size={8}
                        color="#FFFFFF"
                        style={{
                            marginLeft: "4px",
                            cursor: "pointer"
                        }}
                    />
                </div>
            </motion.li>
        </>
    );
};
