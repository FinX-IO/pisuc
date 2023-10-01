import {useEffect, useState} from "react";
import AppBar from "../../components/AppBar/AppBar";
import PrivateFiles from "../PrivateFiles/PrivateFiles";
import "@cloudscape-design/global-styles/index.css"

import {defaultBreadcrumbs} from "../../components/breadcrumbs-items";

export default function Main(props) {

    useEffect(() => {
        console.log('Main props', props);
    },[]);

    return (
        <>
            <AppBar/>
            <PrivateFiles
                level={props.level}
                breadcrumbs={defaultBreadcrumbs}
            />
        </>
    );
}