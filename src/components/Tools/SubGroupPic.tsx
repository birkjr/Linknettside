"use client"; // This directive ensures the component is rendered on the client side

import React from "react";

type SubGroupPicProps = {
    src: string;
    alt: string;
    className?: string;
};

const SubGroupPic: React.FC<SubGroupPicProps> = ({ src, alt, className }) => {
    return <img src={src} alt={alt} className={className} loading="lazy" />;
};

export default SubGroupPic;