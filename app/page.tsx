import { MainContent } from "@/components/layout/MainContent/MainContent";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        {/* Open Graph */}
        <meta property="og:title" content="Main Page CAD-EX'r" />
        <meta
          property="og:description"
          content="Description for Open Graph: CAD exchanger site"
        />
        <meta property="og:image" content="https://example.com/og-image.jpg" />
        <meta property="og:url" content="https://example.com" />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Main page CAD-EX'r" />
        <meta
          name="twitter:description"
          content="Description for Twitter: CAD exchanger site"
        />
        <meta
          name="twitter:image"
          content="https://example.com/twitter-image.jpg"
        />
      </Head>
      <MainContent />
    </>
  );
}
