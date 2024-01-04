import React, { useCallback, useEffect, useState } from "react";

import "./Select.scss";
import { projects_data } from "../../Data/Projects_data";

function Select({ placeholder, handleChange, slider = false, drop_values = [] }) {
    const [selected, setSelected] = useState("");
    const [slider_val_1, setSliderVal1] = useState(Math.min(...projects_data?.map((ele) => ele.price)));
    const [slider_val_2, setSliderVal2] = useState(Math.max(...projects_data?.map((ele) => ele.price)));
    const minGap = 0;

    const slideOne = useCallback(() => {
        let sliderOne = document.getElementById("slider-1");
        let sliderTwo = document.getElementById("slider-2");
        let displayValOne = document.getElementById("range1");
        // let minGap = 0;
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderOne.value = parseInt(sliderTwo.value) - minGap;
        }
        setSliderVal1(sliderOne.value);
        displayValOne.textContent = sliderOne.value + "K";
        fillColor();
    }, []);

    const slideTwo = useCallback(() => {
        let sliderOne = document.getElementById("slider-1");
        let sliderTwo = document.getElementById("slider-2");
        let displayValTwo = document.getElementById("range2");
        // let minGap = 0;
        if (parseInt(sliderTwo.value) - parseInt(sliderOne.value) <= minGap) {
            sliderTwo.value = parseInt(sliderOne.value) + minGap;
        }
        setSliderVal2(sliderTwo.value);
        displayValTwo.textContent = sliderTwo.value + "K";
        fillColor();
    }, []);

    function fillColor() {
        let sliderOne = document.getElementById("slider-1");
        let sliderTwo = document.getElementById("slider-2");
        let sliderTrack = document.querySelector(".slider-track");
        let sliderMaxValue = document.getElementById("slider-1").max;
        let percent1 = (sliderOne.value / sliderMaxValue) * 100;
        let percent2 = (sliderTwo.value / sliderMaxValue) * 100;
        sliderTrack.style.background = `linear-gradient(to right, #dadae5 ${percent1}% , #3264fe ${percent1}% , #3264fe ${percent2}%, #dadae5 ${percent2}%)`;
    }

    useEffect(() => {
        window.addEventListener("load", () => {
            slideOne();
            slideTwo();
        });
        return () => {
            window.addEventListener("load", () => {
                slideOne();
                slideTwo();
            });
        };
    }, [slideOne, slideTwo]);

    return (
        <div className="select_comp d-flex justify-content-center">
            <div className="main_selected dropdown">
                <button
                    className="btn select_btn dropdown-toggle w-100 d-flex justify-content-between align-items-center"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                >
                    {selected === "" ? placeholder : selected}
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    {slider ? (
                        <div className="p-2">
                            {/* <div className="px-3 w-100 d-flex flex-column"> */}
                            {/* <label htmlFor="customRange1" className="form-label">
                                Example range
                            </label>
                            <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange1"></input>
                            <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange1"></input>
                            <div className="d-flex justify-content-between">
                                <span>100K</span>
                                <span>500K</span>
                            </div> */}
                            <div className="mywrapper">
                                <div className="values">
                                    <span id="range1">{slider_val_1}K</span>
                                    <span> - </span>
                                    <span id="range2">{slider_val_2}K</span>
                                </div>
                                <div className="mycontainer d-flex justify-content-center align-items-center">
                                    <div className="slider-track"></div>
                                    <input
                                        type="range"
                                        min={Math.min(...projects_data?.map((ele) => ele.price))}
                                        max={Math.max(...projects_data?.map((ele) => ele.price))}
                                        value={slider_val_1}
                                        step={5}
                                        id="slider-1"
                                        onInput={slideOne}
                                        // onChange={(e) => setSliderVal1(e.target.value)}
                                    />
                                    <input
                                        type="range"
                                        min={Math.min(...projects_data?.map((ele) => ele.price))}
                                        max={Math.max(...projects_data?.map((ele) => ele.price))}
                                        value={slider_val_2}
                                        step={5}
                                        id="slider-2"
                                        onInput={slideTwo}
                                        // onChange={(e) => setSliderVal2(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="max_min d-flex justify-content-between">
                                <span>{Math.min(...projects_data?.map((ele) => ele.price))}K</span>
                                <span>{Math.max(...projects_data?.map((ele) => ele.price))}K</span>
                            </div>
                        </div>
                    ) : (
                        <>
                            <div className="dropdown-item w-100">
                                <input type="text" className="w-100" onChange={handleChange} />
                            </div>
                            <div className="items_only">
                                {drop_values?.map((opt, i) => (
                                    <div key={i} className="dropdown-item" onClick={() => setSelected(opt)}>
                                        {opt}
                                    </div>
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Select;
