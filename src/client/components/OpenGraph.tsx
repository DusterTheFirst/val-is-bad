/*!
 * Copyright (C) 2018  Zachary Kohnen (DusterTheFirst)
 */

export interface IOpenGraph {
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
    /** The overlying site name */
    site_name?: string;
    /** The color theme of the site */
    theme?: string;
    /** Keywords for search engines */
    keywords?: string[];
}

export default ({
    title,
    url,
    description,
    theme = "#435eb7",
    type = "website",
    image = "https://forum.dusterthefirst.com/static/exorsize.png",
    locale = "en_US",
    site_name = "DusterTheFirst Forum",
    keywords = ["forum", "dusterthefirst"]
}: IOpenGraph) => (
    <>
        {/* OpenGraph META */}
        <meta property="og:title" content={title}/>
        <meta property="og:url" content={url}/>
        <meta property="og:description" content={description}/>
        <meta property="og:type" content={type}/>
        <meta property="og:image" content={image}/>
        <meta property="og:locale" content={locale}/>
        <meta property="og:site_name" content={site_name}/>

        {/* Unknown */}
        <meta name="theme-color" content={theme}/>

        {/* General META */}
        <meta name="description" content={description}/>
        <meta name="keywords" content={keywords.join(",")}/>
        <link rel="author" href="DusterTheFirst" />
        <link rel="canonical" href={url} />
    </>
);