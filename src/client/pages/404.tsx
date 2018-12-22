/*!
 * Copyright (C) 2018  Zachary Kohnen (DusterTheFirst)
 */

import { withRouter } from "next/router";
import Layout from "../components/Layout";
import RouterError from "../components/RouterError";

interface IQuery {
    path: string;
}

export default withRouter<{}, IQuery>((props) => props.router && props.router.query ? (
    <Layout actualPath={props.router.query.path} graph={{title: "Page not found", description: `"${props.router.query.path}" does not exist`, url: `https://forum.dusterthefirst.com${props.router.query.path}`}}>
        <h1>404: Page Not Found</h1>
        <p>"{props.router.query && props.router.query.path}" does not exist</p>
        <style jsx={true}>{`
            h1 {
                color: #FF808080;
            }
        `}</style>
    </Layout>
) : <RouterError/>);