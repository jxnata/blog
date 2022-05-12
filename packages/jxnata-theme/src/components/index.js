import React, { useEffect } from "react";
import { connect, Global, Head, styled } from "frontity";
import Switch from "@frontity/components/switch";
import Footer from "./footer";
import globalStyles from "./styles/global-styles";
import Header from "./header";
import Archive from "./archive";
import Loading from "./loading";
import Post from "./post";
import SearchResults from "./search/search-results";
import SkipLink from "./styles/skip-link";
import MetaTitle from "./page-meta-title";
import PageError from "./page-error";
import Toggle from "./toggle";

/**
 * Theme is the root React component of our theme. The one we will export
 * in roots.
 */
const Theme = ({ actions, state }) => {
  // Get information about the current URL.
  const data = state.source.get(state.router.link);
  const { setLightMode, setDarkMode } = actions.theme;

  const changeTheme = (mode) => {
    if (mode === "light") setLightMode();
    else setDarkMode();
    localStorage.setItem("theme", mode);
  };

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    changeTheme(storedTheme || "light");
  }, []);

  return (
    <>
      {/* Add global styles for the whole site, like body or a's or font-faces. 
        Not classes here because we use CSS-in-JS. Only global HTML tags. */}
      <Global styles={globalStyles(state.theme.colors[state.theme.mode])} />
      {/* Add some metatags to the <head> of the HTML. */}
      <MetaTitle />
      <Head>
        <meta name="description" content={state.frontity.description} />
        <html lang="en" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/dracula-prism/dist/css/dracula-prism.min.css"
        />
        <link
          rel="icon"
          href="https://jxnata.files.wordpress.com/2022/05/cropped-favicon.png?w=32"
          sizes="32x32"
        />
        <link
          rel="icon"
          href="https://jxnata.files.wordpress.com/2022/05/cropped-favicon.png?w=192"
          sizes="192x192"
        />
        <link
          rel="apple-touch-icon"
          href="https://jxnata.files.wordpress.com/2022/05/cropped-favicon.png?w=180"
        />
      </Head>

      {/* Accessibility: Provides ability to skip to main content */}
      <SkipLink as="a" href="#main">
        Skip to main content
      </SkipLink>

      <div style={{ minHeight: "calc(100vh - 190px)" }}>
        {/* Add the header of the site. */}
        <Header />

        {/* Add the main section. It renders a different component depending
        on the type of URL we are in. */}
        <Main id="main">
          <Switch>
            <Loading when={data.isFetching} />
            <SearchResults when={data.isSearch} />
            <Archive when={data.isArchive} />
            <Post when={data.isPostType} />
            <PageError when={data.isError} />
          </Switch>
          <Toggle />
        </Main>
      </div>

      <Footer />
    </>
  );
};

export default connect(Theme);

const Main = styled.main`
  display: block;
`;
