import {AnimatePresence, motion} from "framer-motion";
import {wrap} from "popmotion";
import React, {useState} from "react";
import {AiOutlineArrowDown, AiOutlineArrowUp} from "react-icons/ai";
import "./styles.css";
const variants = {
    enter: (direction: number) => {
        return {
            y: direction > 0 ? 2000 : -2000,
            opacity: 0
        };
    },
    center: {
        zIndex: 1,
        y: 0,
        opacity: 1
    },
    exit: (direction: number) => {
        return {
            zIndex: 0,
            y: direction < 0 ? 2000 : -2000,
            opacity: 0
        };
    }
};
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
};
export default function SliderTwoColumn() {
    const arrayPhras = [
        "Embora ambos [Platão e a verdade] nos sejam caros, o dever moral nos impõe preferir a verdade. (em Ética a Nicômaco)",
        "Sou amigo de Platão, mas sou mais amigo da verdade.",
        "Não espere por uma crise para descobrir o que é importante em sua vida."
    ];
    const authorPhrase = ["Aristóteles", "Aristóteles", "Aristóteles"];
    const [[page, direction], setPage] = useState([0, 0]);

    const imageIndex = wrap(0, arrayPhras.length, page);

    const paginate = (newDirection: number) => {
        setPage([page + newDirection, newDirection]);
    };
    return (
        <div className="twoColumnSlider">
            <div className="textColumnOne">
                <p className="textSlider">Testimonials</p>
                <p className="TextBigSlider">What people say about Us.</p>
            </div>

            {/*   two Column */}
            <AnimatePresence initial={false} custom={direction}>
                <div className="boxTwoColumn">
                    <motion.div
                        className="boxBackground"
                        key={page}
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{
                            x: {type: "spring", stiffness: 300, damping: 30},
                            opacity: {duration: 0.8}
                        }}
                        drag="x"
                        dragConstraints={{top: 0, bottom: 0}}
                        dragElastic={9}
                        onDragEnd={(e, {offset, velocity}) => {
                            const swipe = swipePower(offset.y, velocity.y);

                            if (swipe < -swipeConfidenceThreshold) {
                                paginate(1);
                            } else if (swipe > swipeConfidenceThreshold) {
                                paginate(-1);
                            }
                        }}
                    >
                        <div className="boxFront">
                            <p className="phraseAutor">{arrayPhras[imageIndex]}</p>
                            <p className="nameAutor">{authorPhrase[imageIndex]}</p>
                        </div>
                    </motion.div>
                    <div className="boxArrows">
                        <AiOutlineArrowUp onClick={() => paginate(1)} />
                        <AiOutlineArrowDown onClick={() => paginate(-1)} />
                    </div>
                </div>
            </AnimatePresence>
        </div>
    );
}
