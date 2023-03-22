import React from "react";
// import { ReactNode } from "react";

// interface makeProps {
//     children: ReactNode;
//     padding?: number | string;
// }
export const MakeBggrey = ({ padding, children }) => {
    return (
        <div
            style={{
                backgroundColor: "Lightblue",
                padding: padding ? padding : "2rem",
                margin: " 1rem",
                borderRadius: "0.2rem",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexDirection: "column",
                gap: "1rem",
                boxShadow: "rgb(0 0 0 / 20%) 0px 3px   10px",
                marginTop: "5rem"
            }}
           
        >
            {children}
        </div>
    );
};

export const MakeBgWhite = ({ children }) => {
    return (
        <div
            // style={{
            //     backgroundColor: "white",
            //     // padding: padding ? padding : "1rem",
            //     // margin: " 2rem",
            //     // borderRadius: "0.2rem",
            //     // display: "flex",
            //     // alignItems: "center",
            //     // justifyContent: "center",
            //     // flexDirection: "column",
            //     // gap: "1rem",
            //     // marginTop: "10rem"
            // }}
        >
            {children}
        </div>
    );
};

