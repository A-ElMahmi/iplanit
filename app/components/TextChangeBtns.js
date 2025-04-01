import { useEffect } from "react";
import Image from "next/image";
import TextIncreaseIcon from "@/public/text_increase.svg";
import TextDecreaseIcon from "@/public/text_decrease.svg";

export default function TextChangeBtns({ fontSize, setFontSize }) {
    useEffect(() => {
        document.documentElement.style.fontSize = `${fontSize}px`;
    }, [fontSize]);

    const increaseFontSize = () => {
        setFontSize(Math.min(fontSize + 1, 28));
    };

    const decreaseFontSize = () => {
        setFontSize(Math.max(fontSize - 1, 10));
    };

    return (
        <div className="text-change-btns">
            <button onClick={decreaseFontSize}>
            <Image className="smaller" src={TextDecreaseIcon} alt="Test Decrase Icon" />
            </button>
            <button onClick={increaseFontSize}>
            <Image className="bigger" src={TextIncreaseIcon} alt="Test Decrase Icon" />
            </button>
        </div>
    )
}