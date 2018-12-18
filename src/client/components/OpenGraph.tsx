/*!
 * Copyright (C) 2018  Zachary Kohnen (DusterTheFirst)
 */

import Head from "next/head";

interface IProps {
    /** The title of the page */
    title: string;
    /** The description of the page */
    description: string;
    /** The page url */
    url: string;
    /** A link to an image for the page */
    image?: string;
    /**
     * The type of content on the page
     * @see http://ogp.me/#types
     */
    type?: string;
    /** The locale for the site */
    locale?: string;
    /** THe overlying site name */
    site_name?: string;
}

export default ({title, type, image, url, description, locale, site_name}: IProps) => (
    <Head>
        <meta property="og:title" content={title}/>
        <meta property="og:type" content={type === undefined ? "website" : type}/>
        {/* <meta property="og:image" content={image}/> */}
        <meta property="og:url" content={url}/>
        <meta property="og:description" content={description}/>
        <meta property="og:locale" content={locale === undefined ? "en_US" : locale}/>
        <meta property="og:site_name" content={site_name === undefined ? "DusterTheFirst's Website that is better than vals" : site_name}/>
    </Head>
);