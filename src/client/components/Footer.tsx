/*!
 * Copyright (C) 2018  Zachary Kohnen (DusterTheFirst)
 */

import Link from "next/link";

export default () => (
    <footer>
        {/* <hr/> */}
        <table>
            <tbody>
                <tr>
                    <td className="copyright" colSpan={3}>
                        <Link href="/"><a>© DusterTheFirst 2018</a></Link>
                    </td>
                </tr>
                <tr>
                    <td><Link href="/help/about"><a>About</a></Link></td>
                    <td><Link href="/help/terms"><a>Terms</a></Link></td>
                    <td><Link href="/help/api"><a>API</a></Link></td>
                </tr>
                <tr>
                    <td><Link href="/help/contact"><a>Contact</a></Link></td>
                    <td><Link href="/help/privacy"><a>Privacy</a></Link></td>
                    <td><Link href="/help/source"><a>Source</a></Link></td>
                </tr>
                <tr>
                    <td><Link href="/help"><a>Help</a></Link></td>
                    <td><Link href="/help/license"><a>License</a></Link></td>
                </tr>
            </tbody>
        </table>
        <style jsx={true}>{`
            footer {
                background: #23272A;
            }

            table {
                padding: 20px 10px;
                margin: 0 auto;
            }
            table td {
                width: 100px
            }

            .copyright {
                padding-bottom: 10px;
            }

            a {
                display: block;
                text-decoration: none;
                color: #FFFFFF99;
                user-select: none;
            }
            a:hover {
                color: #7289DA;
            }

            hr {
                width: 75%;
                border-color: #a0a0a0;
                border-style: solid;
                border-bottom: none;
                margin-top: 0;
            }
        `}</style>
    </footer>
);