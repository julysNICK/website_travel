import React from "react";
import {motion} from "framer-motion";
import "./styles.css";
export default function BoxText() {
    return (
        <>
            <img src="textureDesign.png" alt="" className="textureDe" />
            <motion.img
                animate={{x: [9000, 0]}}
                transition={{ease: "circOut", duration: 1}}
                src="12Image.png"
                alt=""
                className="textureDeAirplane"
            />
            <img src="airplane01.png" alt="" className="textureDeAirplaneVector" />

            <motion.div
                animate={{x: [-1000, 0]}}
                transition={{ease: "circOut", duration: 1}}
                className="boxText"
            >
                <p className="titleBox">Melhores destinos ao redor do mundo</p>
                <p className="headBox">Viaje, aproveite e viva uma vida nova e plena</p>
                <p className="miniscText">
                    Wicket construído mais admira do que a própria vaidade de Barton faz nele.
                    Preferida aos desportistas, era uma escuta absorta. O portão do parque os vende
                    para o oeste.
                </p>
                <div className="boxinbox">
                    <motion.button
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                        className="readMore"
                    >
                        Leia Mais
                    </motion.button>
                    <motion.div
                        whileHover={{scale: 1.1}}
                        whileTap={{scale: 0.95}}
                        className="buttonPlayBox"
                    >
                        <img src="button01.png" alt="" className="imgButtonPlay" />
                        <p className="textButton">Play</p>
                    </motion.div>
                </div>
            </motion.div>
        </>
    );
}
