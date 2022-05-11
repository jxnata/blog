import Theme from "./components";
import image from "@frontity/html2react/processors/image";
import link from "@frontity/html2react/processors/link";
import prism from "./processors/prism";

const jxnataTheme = {
  name: "jxnata-theme",
  roots: {
    theme: Theme,
  },
  state: {
    theme: {
      mode: "light",
      colors: {
        light: {
          gray: {
            base: "#6D6D6D",
            light: "#efefef",
          },
          primary: "#00a484",
          headerBg: "#ffffff",
          footerBg: "#ffffff",
          bodyBg: "#ffffff",
          accent: "#383838",
        },
        dark: {
          gray: {
            base: "#5e5e5e",
            light: "#333333",
          },
          primary: "#00a484",
          headerBg: "#0e0e0e",
          footerBg: "#0e0e0e",
          bodyBg: "#0e0e0e",
          accent: "#f1f1f1",
        },
      },
      // Whether to show the search button in page header
      showSearchInHeader: true,
      // Menu links to display in the header
      menu: [],
      // State for the menu on mobile
      isMobileMenuOpen: false,
      // State for the search modal on mobile
      isSearchModalOpen: false,
      // Whether to show all post content or only excerpt (summary) in archive view
      showAllContentOnArchive: false,
      // Settings for the featured media (image or video)
      featuredMedia: {
        // Whether to show it on archive view
        showOnArchive: true,
        // Whether to show it on post
        showOnPost: true,
      },
      // Whether to auto-fetch links on a page. Values can be "no" | "all" | "in-view" | "hover"
      autoPrefetch: "in-view",

      /**
       * At the moment, we only include the ascii characters of Inter font.
       * Values can be "us-ascii" | "latin" | "all".
       */
      fontSets: "all",
    },
  },

  /**
   * Actions are functions that modify the state or deal with other parts of
   * Frontity like libraries.
   */
  actions: {
    theme: {
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      },
      openSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = true;
      },
      closeSearchModal: ({ state }) => {
        state.theme.isSearchModalOpen = false;
      },
      setLightMode: ({ state }) => {
        state.theme.mode = "light";
      },
      setDarkMode: ({ state }) => {
        state.theme.mode = "dark";
      },
    },
  },
  libraries: {
    html2react: {
      /**
       * Add a processor to `html2react` so it processes the `<img>` tags
       * and internal link inside the content HTML.
       * You can add your own processors too.
       */
      processors: [image, link, prism],
    },
  },
};

export default jxnataTheme;
