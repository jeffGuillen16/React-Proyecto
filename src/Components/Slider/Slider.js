import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { icons } from "../../Data/Icons";
import Carousel from "react-multi-carousel";

import "./Slider.scss";

function Slider({ data, selected, setSelected }) {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 2048, min: 1400 },
            items: 5,
        },
        desktop: {
            breakpoint: { max: 1400, min: 1200 },
            items: 4,
        },
        tablet: {
            breakpoint: { max: 1200, min: 820 },
            items: 3,
        },
        mobile: {
            breakpoint: { max: 820, min: 560 },
            items: 2,
        },
        mobilesmall: {
            breakpoint: { max: 560, min: 0 },
            items: 1,
        },
    };

    return (
        <div className="slider">
            <Carousel responsive={responsive}>
                {data?.map((d, i) => (
                    <div key={i} className={`item ${i === selected ? "item-selected" : ""}`} onClick={() => setSelected(i)}>
                        <img src={d.images[0]} alt={d.name} />
                    </div>
                ))}
            </Carousel>
            {/* <button className="left_arrow_box d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={icons.AngleLeft} size="2xl" />
            </button>

            <div className="item">
                <img src={data[0].images[0]} alt={data[0].name} />
            </div>

            <div className="all_items d-flex justify-content-between align-items-center">
                {data?.map((d, i) => (
                    <div key={i} className="item">
                        <img src={d.images[0]} alt={d.name} />
                    </div>
                ))}
            </div>

            <button className="right_arrow_box d-flex justify-content-center align-items-center">
                <FontAwesomeIcon icon={icons.AngleRight} size="2xl" />
            </button> */}
        </div>
    );
}

export default Slider;
