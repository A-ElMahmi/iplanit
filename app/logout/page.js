"use client";

import { useFontSize } from "@/app/context/FontSizeContext";
import TextChangeBtns from "@/app/components/TextChangeBtns";

export default function LogoutPage() {
    const { fontSize, setFontSize } = useFontSize();

    console.log(fontSize);

    return (
        <div>
        {/* Top Bar */}
        <div className="top-bar">
            <div>iplanit</div>
        </div>

        <div className="container">
            <h1>What's up</h1>
            <p><a href="/">Go Back</a></p>
        </div>

        <TextChangeBtns fontSize={fontSize} setFontSize={setFontSize} />
        </div>
    );
}