const Mario =()=>{
    return (
        <div className={"view"}>
            <div className={"sky"}>
                <div className={"clouds"}>
                    <div className={"circle"} id={"circle1"}></div>
                    <div className={"circle"} id={"circle2"}></div>
                    <div className={"circle"} id={"circle3"}></div>
                </div>
            </div>
            <div className={"grass"}>
                <div className={"trees"}>
                    <div className={"leaves"}></div>
                    <div className={"stem"}></div>
                </div>
                <div className={"trees"}>
                    <div className={"leaves"}></div>
                    <div className={"stem"}></div>
                </div>
            </div>
            <div className={"road"}>
                <img src={"src/assets/mario-kart-dsb-luigi-removebg-preview.png"} className={"cart1"}/>
                <div className={"marks"}></div>
                <img src={"src/assets/mario-kart-dsb-luigi-removebg-preview.png"} className={"cart2"}/>
            </div>
        </div>
    )
}
export default Mario