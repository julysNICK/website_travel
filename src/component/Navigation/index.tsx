import React from "react";
import {motion} from "framer-motion";
import {MenuItem} from "../MenuItem";
import "./styles.css";
const variants = {
    open: {
        transition: {staggerChildren: 0.07, delayChildren: 0.2}
    },
    closed: {
        transition: {staggerChildren: 0.05, staggerDirection: -1}
    }
};
export default function Navigation() {
    return (
        <motion.ul variants={variants} className="listItems">
            <MenuItem />
        </motion.ul>
    );
}
const itemIds = [0, 1, 2, 3, 4];
