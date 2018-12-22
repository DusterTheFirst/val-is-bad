/*!
 * Copyright (C) 2018  Zachary Kohnen (DusterTheFirst)
 */

import Link from "next/link";

export default (props: { path: string }) => (
    <header className="header-container">
        <div className="header left">
            <Link href="/"><a className={props.path === "/" ? "selected" : ""}>Home</a></Link>
            <Link href="/users"><a className={props.path === "/users" ? "selected" : ""}>Users</a></Link>
            <a>&gt; {props.path}</a>
        </div>
        <div className="header right">
            <Link href="/login"><a>Login</a></Link>
            <Link href="/regester"><a>Regester</a></Link>
        </div>
        <style jsx={true}>{`
            .header-container {
                position: relative;
                overflow: hidden;

                background-color: #23272A;
                margin: 0;
                padding: 0;

                user-select: none;
            }

            a {
                text-decoration: none;
                color: #FFFFFF99;
                user-select: none;
            }

            .header a {
                position: relative;
                display: inline-block;
                padding: 10px 15px;
                background-color: #23272A;
            }

            .header a.selected {
                background-color: #2C2F33;
            }

            .header.left {
                float: left;
            }

            .header.right {
                float: right;
            }
        `}</style>
    </header>
);