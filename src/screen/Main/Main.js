import {useEffect, useState} from "react";
import AppBar from "../../components/AppBar/AppBar";
import PrivateFiles from "../PrivateFiles/PrivateFiles";
import "@cloudscape-design/global-styles/index.css"

import {defaultBreadcrumbs} from "../../components/breadcrumbs-items";
import TableListFiles from "../../components/TableListFiles/TableListFiles";
import UploadFileCard from "../../components/UploadFileCard/UploadFileCard";
import {SpaceBetween} from "@cloudscape-design/components";

export default function Main(props) {

    useEffect(() => {
        console.log('Main props', props);
    },[]);

    return (
        <>
            <AppBar/>
            <PrivateFiles
                breadcrumbs={defaultBreadcrumbs}
                title={props.level == 'private' ? "My private files" : "All public files"}
            />
        </>
    );
}