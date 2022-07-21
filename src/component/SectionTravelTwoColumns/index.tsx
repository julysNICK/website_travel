import React from "react";
import "./styles.css";
import {AiFillCar} from "react-icons/ai";
import {IoMdPodium} from "react-icons/io";
export default function SectionTravelTwoColumns() {
    return (
        <div className="twoColumns">
            <div className="columFlex">
                <p className="titleOneColumn">Fácil e Rápido</p>
                <p className="describeOneColumn">Reserve sua próxima viagem em 3 etapas fáceis</p>
                <div className="rowDescribeText" style={{marginTop: "2rem"}}>
                    <img src="" alt="" className="imgDescribe" />
                    <AiFillCar size={30} />
                    <div className="columnDescribeText" style={{marginLeft: "1rem"}}>
                        <p className="textDescribe">Escolha o destino</p>
                        <p className="describeOne">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor
                            tempus.
                        </p>
                    </div>
                </div>
                <div className="rowDescribeText" style={{marginTop: "2rem"}}>
                    <img src="" alt="" className="imgDescribe" />
                    <AiFillCar size={30} />
                    <div className="columnDescribeText" style={{marginLeft: "1rem"}}>
                        <p className="textDescribe">Escolha o destino</p>
                        <p className="describeOne">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor
                            tempus.
                        </p>
                    </div>
                </div>
                <div className="rowDescribeText" style={{marginTop: "2rem"}}>
                    <img src="" alt="" className="imgDescribe" />
                    <AiFillCar size={30} />
                    <div className="columnDescribeText" style={{marginLeft: "1rem"}}>
                        <p className="textDescribe">Escolha o destino</p>
                        <p className="describeOne">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor
                            tempus.
                        </p>
                    </div>
                </div>
            </div>
            <div className="columnImage">
                <div className="backgrounWhiteCard">
                    <img src="./photogreecie.jpg" alt="" className="greecie" />
                    <div className="columnCard01">
                        <p className="titleCard01">Viagem à Grécia</p>
                        <p className="descCard01">14-29 de junho | por Robbin Joseph</p>
                        <div className="rowSimbol">
                            <AiFillCar size={20} />
                            <AiFillCar
                                style={{
                                    margin: "0px 2rem"
                                }}
                                size={20}
                            />
                            <AiFillCar size={20} />
                        </div>
                        <div className="rowText">
                            <IoMdPodium
                                size={20}
                                style={{
                                    marginRight: "1rem"
                                }}
                            />
                            <p className="textName">24 pessoas indo</p>
                        </div>
                    </div>
                </div>
                <div className="otherBack">
                    <img src="./simboltravel01.png" alt="" className="otherImg" />
                    <div className="columText">
                        <p className="titleDetails01">Ongoing</p>
                        <p className="subDetails01">Viagem para roma</p>
                        <p className="percentDetails">40% completed</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
