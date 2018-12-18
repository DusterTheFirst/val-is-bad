/*!
 * Copyright (C) 2018  Zachary Kohnen (DusterTheFirst)
 */

import Head from "next/head";
import OpenGraph from "../components/OpenGraph";

export default () => (
    <div>
        <Head>
            <title>404: Page not found</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <OpenGraph title="DusterTheFirsts cool website man" url="https://dusterthefirst.ddns.net/" description="idk man, its better than vals tho"/>
        <p>404: Page not found</p>
    </div>
);