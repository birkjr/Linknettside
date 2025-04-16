"use client"; // This directive ensures the component is rendered on the client side

import React from "react";

type BoardPicProps = {
    src: string;
    alt: string;
    className?: string;
};

const BoardPic: React.FC<BoardPicProps> = ({ src, alt, className }) => {
    return <img src={src} alt={alt} className={className} loading="lazy" />;
};

export default BoardPic;