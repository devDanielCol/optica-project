import React, { FC } from "react";
import Head from "next/head";
import useTheme from "../../util/hooks/useTheme";

interface Props {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  url?: string;
}

const HeadDocument: FC<Props> = ({
  title,
  description,
  keywords,
  ogImage,
  url,
}) => {
  const theme = useTheme();

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="favicon/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="favicon/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="favicon/favicon-16x16.png"
      />
      <link
        rel="mask-icon"
        href="favicon/safari-pinned-tab.svg"
        color="#5bbad5"
      />
      <meta name="msapplication-TileColor" content="#da532c" />
      <meta name="theme-color" content={theme.palette.background.default} />
      <meta charSet="utf-8" />
      <meta name="og:image" content="" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="keywords"
        content={
          keywords ||
          "optica, ojos, oftalmologo, gafas, brigadas empresariales "
        }
      ></meta>
      <meta property="og:title" content={title}></meta>
      <meta property="og:description" content={description}></meta>
      <meta property="og:image" content={ogImage || ""}></meta>
      <meta property="og:type" content="website"></meta>
      <meta property="og:url" content={url}></meta>
    </Head>
  );
};
export default HeadDocument;
