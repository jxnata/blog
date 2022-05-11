const settings = {
  name: "jxnata",
  state: {
    frontity: {
      url: "https://jxnata.wordpress.com",
      title: "Jonatã Oliveira",
      description: "Programação, crypto e inovações",
    },
  },
  packages: [
    {
      name: "jxnata-theme",
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
          url: "https://jxnata.wordpress.com",
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
