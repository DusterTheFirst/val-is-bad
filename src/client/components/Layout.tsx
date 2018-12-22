/*!
 * Copyright (C) 2018  Zachary Kohnen (DusterTheFirst)
 */

import Head from "next/head";
import Footer from "./Footer";
import Header from "./Header";
import OpenGraph, { IOpenGraph } from "./OpenGraph";

interface IProps {
    graph: IOpenGraph;
    children: JSX.Element[];
    actualPath: string;
}

export default ({graph, children, actualPath}: IProps) => (
    <div className="app">
        <Head>
            <OpenGraph {...graph}/>
            <title>{graph.title}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <link href="https://fonts.googleapis.com/css?family=Source+Code+Pro:200,300,400,500,600,700,900" rel="stylesheet"/>
        </Head>
        <Header path={actualPath}/>
        <div className="body">{children}</div>
        <Footer/>
        <style jsx={true}>{`
            .app {
                height: 100%;
                margin: 0;
            }

            .body {
                background-color: #2C2F33;
                padding: 10px;
                overflow: hidden;
                min-height: calc(100% - 220px);
            }
        `}</style>
        <style jsx={true} global={true}>{`
            html, body, #__next {
                height: 100%;
                width: 100%;
                margin: 0;

                background-color: #23272A;
                color: #FFFFFF99;
            }

            * {
                font-family: 'Source Code Pro', monospace;
            }
        `}</style>
    </div>
);