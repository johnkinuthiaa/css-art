import "./spongebob.css"
const Spongebob =()=>{
    return(
        <div className={"spongie_container"}>
            <div className={"sea"}></div>
            <div className={"sand"}></div>
            <div className={"tarmac"}>
                <div className={"body"}>
                    <div className={"upper"}>
                        <div className={"eyes"}>
                            <div className={"left"}>
                                <div className={"pupil"}></div>
                            </div>
                            <div className={"right"}>
                                <div className={"pupil"}></div>
                            </div>
                        </div>
                        <div className={"nose"}></div>
                        <div className={"mouth"}>
                            <div className={"cheeks"}>
                                <div className={"cheek1"}></div>
                                <div className={"cheek2"}></div>
                            </div>
                            <div className={"teeth"}>
                                <div className={"tooth"}></div>
                                <div className={"tooth"}></div>
                            </div>
                            <div className={"tongue"}></div>
                            <div className={"lower__chin"}></div>
                        </div>
                    </div>
                    <div className={"lower"}>
                        <div className={"shirt"}>
                            <div className={"colar"}>
                                <div className={"tie"}>
                                    <div className={"tie__top"}></div>
                                    <div className={"tie__bottom"}>
                                        <div className={"tie_a"}></div>
                                        <div className={"tie_b"}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={"short"}>
                            <div className={"marks__on__short"}></div>
                        </div>
                    </div>
                    <div className={"legs"}>
                        <div className={"leg"}></div>
                        <div className={"leg"}></div>
                    </div>
                </div>
                <div className={"marks_on_tarmac"}></div>
            </div>
        </div>
    )
}
export default Spongebob