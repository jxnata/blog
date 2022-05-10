const settings = {
  name: "jxnata",
  state: {
    frontity: {
      url: "https://jxnata66294838.wordpress.com",
      title: "jxnata.dev",
      description: "Programação, crypto e inovações",
    },
  },
  packages: [
    {
      name: "@frontity/jxnata-theme",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Dev", "/category/dev/"],
            ["Crypto", "/category/crypto/"],
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://jxnata66294838.wordpress.com",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
