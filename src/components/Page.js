/* eslint-disable no-loop-func */
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { colour } from "../constants"

const Page = (props) => {

    const { name, url, topic, subtopic } = props;

    function loadInjections() {
        let z, i, elmnt, file, xhttp;
        /* Loop through a collection of all HTML elements: */
        z = document.getElementsByTagName("*");
        for (i = 0; i < z.length; i++) {
            elmnt = z[i];
            /*search for elements with a certain atrribute:*/
            file = elmnt.getAttribute("inject");
            if (file) {
                /* Make an HTTP request using the attribute value as the file name: */
                xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function () {
                    if (this.readyState === 4) {
                        if (this.status === 200) { elmnt.innerHTML = this.responseText; }
                        if (this.status === 404) { elmnt.innerHTML = "Page not found."; }
                        /* Remove the attribute, and call this function once more: */
                        elmnt.removeAttribute("inject");
                        if (window.MathJax != undefined) {
                            console.log("Typesetting!")
                            window.MathJax.typeset();
                        }
                        loadInjections();
                    }
                }
                xhttp.open("GET", file, true);
                xhttp.send();
                /* Exit the function: */
                return;
            }
        }


        // var finished_script = document.createElement("script");
        // finished_script.type = "text/javascript";
        // finished_script.innerHTML = "MathJax.Hub.Configured()"
        // document.getElementsByTagName("head")[0].appendChild(finished_script);
    }

    useEffect(() => {
        loadInjections();
    })

    return (name && url) ? (
        <div className="page-container">
            <div className="page-head">
                {topic && subtopic && (
                    <Link to={"/"} className="crumbs">
                        <div 
                          className="left"
                          style={{
                              background: colour[topic]
                          }}>
                            {topic}
                        </div>
                        <div 
                          className="right"
                          style={{
                              color: colour[topic],
                              borderColor: colour[topic]
                          }}>
                            {subtopic}
                        </div>
                    </Link>
                )}
                <h3>{name}</h3> 
            </div>
            <div className="page-content">
                <div inject={`/concepts/${url}`}></div>
            </div>
        </div>
    ) : 'name and/or url props not passed to this Page component';

}

export default Page