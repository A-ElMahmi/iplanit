"use client";

import { useFontSize } from "@/app/context/FontSizeContext";
import TextChangeBtns from "@/app/components/TextChangeBtns";

export default function LogoutPage() {
    const { fontSize, setFontSize } = useFontSize();

    return (
        <div>
        {/* Top Bar */}
        <div className="top-bar">
            <div><a href="/">iplanit</a></div>
        </div>

        <div className="container">
            <h1 className="logged-out">You logged out!</h1>
            <a href="/">
                <div className="btn-login">Login</div>
            </a>
        </div>

        {/* <TextChangeBtns fontSize={fontSize} setFontSize={setFontSize} /> */}
        </div>
    );
}