import Document, { Html, Main, NextScript, Head } from "next/document";

class CustomDocument extends Document {
  render(): JSX.Element {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default CustomDocument;
