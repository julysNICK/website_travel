import React from "react";
import "./styles.css";
import {FaSearchLocation} from "react-icons/fa";
import {motion} from "framer-motion";
export default function SectionDestination() {
    return (
        <section className="boxDestination">
            <img src="avionCorrect.png" alt="" className="AirplaneCorrect" />
            <p className="title">Mais vendido</p>
            <h1 className="Captilize">Principais destinos</h1>
            <div className="rowCardsDest">
                <motion.div
                    whileHover={{
                        scale: 1.1,
                        transition: {duration: 0.5}
                    }}
                    whileTap={{scale: 0.95}}
                    className="cardDest"
                >
                    <img src="destination01.png" alt="" className="cardImgDest" />
                    <div className="cardDescribe">
                        <div className="rowDescribe">
                            <p className="titleDest">Rome, Italty</p>
                            <p className="pricedest">$5,42k</p>
                        </div>
                        <div className="rowDescribeSimb">
                            <FaSearchLocation
                                size={20}
                                style={{
                                    marginLeft: "1rem"
                                }}
                            />
                            <p
                                style={{
                                    marginLeft: "1rem"
                                }}
                                className="loc"
                            >
                                10 Days Trip
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.1, transition: {duration: 0.5}}}
                    whileTap={{scale: 0.95}}
                    className="cardDest"
                >
                    <img src="destination01.png" alt="" className="cardImgDest" />
                    <div className="cardDescribe">
                        <div className="rowDescribe">
                            <p className="titleDest">Rome, Italty</p>
                            <p className="pricedest">$5,42k</p>
                        </div>
                        <div className="rowDescribeSimb">
                            <FaSearchLocation
                                size={20}
                                style={{
                                    marginLeft: "1rem"
                                }}
                            />
                            <p
                                style={{
                                    marginLeft: "1rem"
                                }}
                                className="loc"
                            >
                                10 Days Trip
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.1, transition: {duration: 0.5}}}
                    whileTap={{scale: 0.95}}
                    className="cardDest"
                >
                    <img src="destination01.png" alt="" className="cardImgDest" />
                    <div className="cardDescribe">
                        <div className="rowDescribe">
                            <p className="titleDest">Rome, Italty</p>
                            <p className="pricedest">$5,42k</p>
                        </div>
                        <div className="rowDescribeSimb">
                            <FaSearchLocation
                                size={20}
                                style={{
                                    marginLeft: "1rem"
                                }}
                            />
                            <p
                                style={{
                                    marginLeft: "1rem"
                                }}
                                className="loc"
                            >
                                10 Days Trip
                            </p>
                        </div>
                    </div>
                </motion.div>
                <motion.div
                    whileHover={{scale: 1.1, transition: {duration: 0.5}}}
                    whileTap={{scale: 0.95}}
                    className="cardDest"
                >
                    <img src="destination01.png" alt="" className="cardImgDest" />
                    <div className="cardDescribe">
                        <div className="rowDescribe">
                            <p className="titleDest">Rome, Italty</p>
                            <p className="pricedest">$5,42k</p>
                        </div>
                        <div className="rowDescribeSimb">
                            <FaSearchLocation
                                size={20}
                                style={{
                                    marginLeft: "1rem"
                                }}
                            />
                            <p
                                style={{
                                    marginLeft: "1rem"
                                }}
                                className="loc"
                            >
                                10 Days Trip
                            </p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
