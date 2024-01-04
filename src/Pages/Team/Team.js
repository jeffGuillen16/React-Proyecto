import React, { useEffect } from "react";
import { team_data } from "../../Data/Team_data";
import { AnimationFade, AnimationIn } from "../../styles/animations/fadein";

import "./Team.scss";

function Team() {
    function adjust_img() {
        var all_col = document.getElementsByClassName("my_col");
        var all_img = document.getElementsByClassName("emp_img");
        for (var j = 0; j < all_col.length; j++) {
            if (all_col[j] && all_img[j]) {
                if (all_col[j].clientHeight > all_img[j].clientHeight) {
                    all_img[j].style.height = "100%";
                    all_img[j].style.width = null;
                } else {
                    all_img[j].style.width = "100%";
                    all_img[j].style.height = null;
                }
                if (all_col[j].clientWidth > all_img[j].clientWidth) {
                    all_img[j].style.width = "100%";
                    all_img[j].style.height = null;
                }
            }
        }
    }

    useEffect(() => {
        // function adjust_img() {
        //     var incr = Math.round(team_data?.length / display);
        //     var my_loop = 0;
        //     for (var k = 0; k <= incr; k++) {
        //         for (var l = my_loop; l < team_data?.length; l++) {
        //             if (document.getElementById((team_data[l]?.name + team_data[l]?.id).replace(/ /g, "")).clientHeight > 510) {
        //                 document.getElementById((team_data[l]?.name + team_data[l]?.id).replace(/ /g, "")).style.width = "100%";
        //                 // document.getElementById((team_data[l]?.name + team_data[l]?.id).replace(/ /g, "")).style.height = "auto";
        //             } else {
        //                 document.getElementById((team_data[l]?.name + team_data[l]?.id).replace(/ /g, "")).style.width = "auto";
        //                 document.getElementById((team_data[l]?.name + team_data[l]?.id).replace(/ /g, "")).style.height = "100%";
        //             }
        //         }
        //     }
        // }
        // if (loop.current) {
        //     var incr = Math.round(team_data?.length / display);
        //     var my_val = display;
        //     var my_loop = 0;

        //     for (var i = 0; i <= incr; i++) {
        //         var row = document.createElement("div");
        //         row.classList.add("row");
        //         for (var j = my_loop; j < team_data?.length; j++) {
        //             if (j < my_val) {
        //                 var col = document.createElement("div");
        //                 // if (j % 2 === 0) col.classList.add("bg-success");
        //                 col.classList.add("col-xxl", "d-flex", "flex-column", "justify-content-center", "align-items-center");
        //                 col.innerHTML = `
        //                     <div class='emp_img_box'>
        //                         <img id='${(team_data[j]?.name + team_data[j]?.id).replace(/ /g, "")}' class='emp_img' src="${
        //                     team_data[j]?.image
        //                 }" alt="${team_data[j]?.name}" />
        //                     </div>
        //                     <div class='details_box'>
        //                         <p class='name'>${team_data[j]?.name}</p>
        //                         <p class='role'>${team_data[j]?.role}</p>
        //                     </div>
        //                 `;
        //                 // col.innerText = team_data[j]?.name;
        //                 row.appendChild(col);
        //                 // console.log(i, team_data[j]?.name, j);
        //                 my_loop = my_loop + 1;
        //             } else {
        //                 my_val = my_val + display;
        //                 break;
        //             }
        //         }
        //         document.getElementById("row_box").appendChild(row);
        //     }
        //     loop.current = false;
        // }

        AnimationFade("FadeLeft");
        AnimationFade("FadeRight");
        AnimationIn("LeftIn");
        AnimationIn("RightIn");
        window.addEventListener("resize", adjust_img);
        window.addEventListener("load", adjust_img);

        return () => {
            window.removeEventListener("resize", adjust_img);
            window.removeEventListener("load", adjust_img);
        };
    }, []);

    return (
        <div id="team" className="team text-center">
            <div className="title">
                <h2>Nuestros equipos que te acompañaran en el proceso de inversión</h2>
            </div>
            {/* <div className="main_team_box">
                <div id="row_box" className="container-fluid"></div>
            </div> */}
            <div className="main_box">
                <div className="container-fluid">
                    <div className="row">
                        {team_data?.map((team, i) => (
                            <div key={i} className={`col-md-6 py-4 my_col ${i % 2 ? "RightIn" : "LeftIn"}`}>
                                <div className="emp_img_box">
                                    <img className="emp_img" src={team.image} alt={team.title} />
                                </div>
                                <div className="details py-3">
                                    <p className="title">{team.title}</p>
                                    <p className="des">{team.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Team;
