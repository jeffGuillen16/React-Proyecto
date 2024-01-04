import React, { useEffect, useRef } from "react";
import Slider from "../../Components/Slider/Slider";
import { projects_data } from "../../Data/Projects_data";
import Carousel from "react-multi-carousel";
import { AnimationFade, AnimationIn } from "../../styles/animations/fadein";

import "./Projects.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../../Data/Icons";

function Projects({ selected, setSelected }) {
    const carouselRef = useRef();

    const category_adjust = () => {
        // console.log(document.getElementById("category_id"));
        var category = document.getElementsByClassName("category");
        var category_icon = document.getElementsByClassName("category_icon");
        for (var i = 0; i < category.length; i++) {
            if (window.innerWidth <= 768) {
                category[i].classList.add("col-6");
                category_icon[i].style.fontSize = "24px";
            } else {
                category[i].classList.add("col-3");
                category_icon[i].style.fontSize = "32px";
            }
        }
    };

    useEffect(() => {
        AnimationFade("FadeDown");
        AnimationIn("DownIn");
        // console.log("useEffect", carouselRef, carouselRef.current, activeIndex);
        if (carouselRef && carouselRef.current) {
            carouselRef.current.goToSlide(0);
        }

        window.addEventListener("load", category_adjust);
        window.addEventListener("resize", category_adjust);

        return () => {
            window.removeEventListener("load", category_adjust);
            window.removeEventListener("resize", category_adjust);
        };
    }, [carouselRef, selected]);

    const responsive = {
        mobilesmall: {
            breakpoint: { max: 2048, min: 0 },
            items: 1,
        },
    };

    return (
        <div id="projects" className="projects DownIn">
            <div className="container-fluid my-3">
                <div className="row">
                    {/* Project Images */}
                    <div className="col-lg-4">
                        <div className="project_img_box d-flex flex-column justify-content-center">
                            <Carousel responsive={responsive} ref={carouselRef}>
                                {projects_data[selected].images.map((image, i) => (
                                    <div className="img_box d-flex align-items-center justify-content-center" key={i}>
                                        <img src={image} alt={"main_" + projects_data[selected] + "_" + i} />
                                    </div>
                                ))}
                            </Carousel>
                        </div>
                    </div>

                    {/* Projects Details */}
                    <div className="col-lg-8 px-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>{projects_data[selected].name}</h2>
                            <button
                                className="my_btn"
                                onClick={() =>
                                    window.location.assign(
                                        `${
                                            process.env.NODE_ENV === "development"
                                                ? "http://localhost:3000"
                                                : "https://stately-bonbon-538c0d.netlify.app"
                                        }/projects?name=${projects_data[selected].name}`
                                    )
                                }
                            >
                                <FontAwesomeIcon icon={icons.ArrowUpRightFromSquare} size="lg" style={{ color: "gray" }} />
                            </button>
                        </div>
                        <p>{projects_data[selected].description}</p>

                        {/* Projects description */}
                        <h4 style={{ fontWeight: 700 }}>Descripción</h4>
                        <div className="container-fluid p-3 m-2">
                            <div className="row">
                                {projects_data[selected]?.Dirección ? (
                                    <div className="col-lg-6 d-flex py-2">
                                        <div className="icon_box d-flex justify-content-center align-items-center">
                                            <FontAwesomeIcon icon={icons.LocationDot} size="2xl" />
                                        </div>
                                        <div className="d-flex flex-column justify-content-between info_direction">
                                            <div className="title">Dirección</div>
                                            <div>{projects_data[selected]?.Dirección}</div>
                                        </div>
                                    </div>
                                ) : null}
                                {projects_data[selected]?.Barrio ? (
                                    <div className="col-lg-6 d-flex py-2">
                                        <div className="icon_box d-flex justify-content-center align-items-center">
                                            <FontAwesomeIcon icon={icons.House} size="2xl" />
                                        </div>
                                        <div className="d-flex flex-column justify-content-between info_direction">
                                            <div className="title">Barrio</div>
                                            <div>{projects_data[selected]?.Barrio}</div>
                                        </div>
                                    </div>
                                ) : null}
                            </div>
                        </div>

                        {/* Projects Categories */}
                        <h4 style={{ fontWeight: 700 }}>Características y comodidades</h4>
                        <div className="container-fluid category_container">
                            <div className="row">
                                {projects_data[selected]?.Categories.map((cat, i) => (
                                    <div className="category my_cate_col" key={i}>
                                        <div className="tick_box">
                                            <FontAwesomeIcon icon={icons.CircleCheck} className="category_icon" size="2xl" />
                                            <span>{cat}</span>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="text-end">
                            <button id="infomodal" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#moreinfomodal">
                                Más información
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Slider */}
            <Slider data={projects_data} selected={selected} setSelected={setSelected} />
        </div>
    );
}

export default Projects;
