import { mount } from "childReact/reactApp";
import React , {useRef, useEffect } from "react";

export default () => {
    console.log(mount)
    const ref = useRef(null)

    useEffect (() => {
        mount(ref.current)
    })
    return <div ref={ref}></div>
}