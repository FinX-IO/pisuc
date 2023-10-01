import {useEffect, useState} from "react";
import FilesAppLayout from "../../components/FilesAppLayout/FilesAppLayout";
import "@cloudscape-design/global-styles/index.css"

import {defaultBreadcrumbs} from "../../components/breadcrumbs-items";
import TableListFiles from "../../components/TableListFiles/TableListFiles";
import UploadFileCard from "../../components/UploadFileCard/UploadFileCard";
import {SpaceBetween} from "@cloudscape-design/components";

export default function PrivateFiles(props) {

    useEffect(() => {
        console.log('Private Files props', props);
    },[]);


    return (
        <>
            <FilesAppLayout
                breadcrumbs={defaultBreadcrumbs}
                title={props.level == 'private' ? "My private files" : "All public files"}
            >
                <SpaceBetween size="l">
                    <UploadFileCard level={props.level}/>
                    <TableListFiles level={props.level}/>
                </SpaceBetween>
            </FilesAppLayout>
        </>
    );
}