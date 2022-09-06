import React from "react"
import "../../assets/styles/modules/footer.scss"

import Button from "../atoms/Button"

const Footer = ({data}) => {
    return(
        <div className={"footer " + (!data.display ? "inline" : "") + (data.display==="inline" ? "inline" : "") + (data.display==="column" ? "column" : "")}>
            <div className="infos">
                <div className="infos-container">
                    <div className="col">
                        <h1>
                            scc
                        </h1>
                        <p>
                            Instagram<br />
                            Youtube<br />
                            Facebook<br />
                            Medium 
                        </p>
                    </div>
                    <div className="col">
                        <h1>
                        About
                        </h1>
                        <p>
                            Career <br />
                            Help Center <br />
                            Terms <br />
                            Privacy
                        </p>
                    </div>
                    <div className="col">
                        <h1>
                        Contact
                        </h1>
                        <p>
                            hello@scc.fr <br />
                            cloud@scc.fr
                        </p>
                    </div>
                </div>
            </div>

            <div className="top">
                <a href="#top">
                    Back to the top
                    <Button
                    type="arrow"
                    link={true}
                    />
                </a>
            </div>
        </div>
    )
}

export default Footer