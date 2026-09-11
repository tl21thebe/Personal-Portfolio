import React from "react";
import Typewriter from "typewriter-effect";

export const TypewriterComponent: React.FC = () => {
    return (
        <Typewriter
            options={{
                strings: [
                    "UI Engineer",
                    "Front-End Developer",
                    "DevOps Engineer",
                    "Backend Developer",
                    "BioTech Enthusiast",
                ]
            }}
            />
    );
}

export default TypewriterComponent;