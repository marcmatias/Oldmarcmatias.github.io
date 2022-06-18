// Import main css
import "~/assets/style/index.scss";

// Import default layout so we don't need to import it to every page
import DefaultLayout from "~/layouts/Default.vue";

import VueDisqus from 'vue-disqus';

// The Client API can be used here. Learn more: gridsome.org/docs/client-api
export default function(Vue, { router, head, isClient }) {
  Vue.use(VueDisqus, {
    shortname: 'https-marcmatias-github-io'
  })  

  head.script.push({
    src: "https://www.googletagmanager.com/gtag/js?id=UA-232324681-1",
    async: true,
  });

  const username = "marcmatias";
  const img = `https://marcmatias.github.io/author.jpg`;
  const description = `Marcel Marques desenvolvedor de software, bacharel em Sistemas para Internet`;

  head.meta.push(
    {
      key: "google-site-verification",
      name: "google-site-verification",
      content: `KIp4HBhrWREKmS7lQaS44Jd1nBIetiwlqAoSx2DVdJM`,
    },
    {
      key: "og:site_name",
      name: "og:site_name",
      content: "Blog " + username,
    },
    {
      key: "og:title",
      name: "og:title",
      content: `${username} webpage`,
    },
    {
      key: "og:description",
      name: "og:description",
      content: description,
    },
    {
      key: "og:image",
      name: " ",
      content: img,
    },
    {
      key: "twitter:title",
      name: "twitter:title",
      content: "Blog " + username,
    },
    {
      key: "twitter:creator",
      name: "twitter:creator",
      content: `@${username}`,
    },
    {
      key: "twitter:description",
      name: "twitter:description",
      content: description,
    },
    {
      key: "twitter:card",
      name: "twitter:card",
      content: `summary_large_image`,
    },
    {
      key: "twitter:image",
      name: "twitter:image",
      content: img,
    }
  );

  if (isClient) {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      dataLayer.push(arguments);
    }
    gtag("js", new Date());
    gtag("config", "TRACKING_ID");
    window.gtag = gtag; // expose gtag function to global scope
  }

  // Set default layout as a global component
  Vue.component("Layout", DefaultLayout);
}
