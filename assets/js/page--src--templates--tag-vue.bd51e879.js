(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"2qYH":function(t,a,s){"use strict";s.r(a);var e=s("A6W1"),i=s("BA+P"),o={components:{Author:e.a,PostCard:i.a},metaInfo:{title:"Hello, world!"}},r=s("KHd+"),c=null,n=Object(r.a)(o,(function(){var t=this.$createElement,a=this._self._c||t;return a("Layout",[a("h1",{staticClass:"tag-title text-center space-bottom"},[this._v("\n    # "+this._s(this.$page.tag.title)+"\n  ")]),a("div",{staticClass:"posts"},this._l(this.$page.tag.belongsTo.edges,(function(t){return a("PostCard",{key:t.node.id,attrs:{post:t.node}})})),1)])}),[],!1,null,null,null);"function"==typeof c&&c(n);a.default=n.exports},"7qvl":function(t,a,s){},A6W1:function(t,a,s){"use strict";var e={props:["showTitle"]},i=(s("ArLL"),s("KHd+")),o=s("Kw5r"),r=o.a.config.optionMergeStrategies.computed,c={metadata:{userName:"@marcmatias",socCodePen:"//codepen.io/marcmatias",socGithub:"//github.com/marcmatias",socIn:"//www.linkedin.com/in/marcel-matias-836a04208/",socTwitter:"//twitter.com/marcmatias",siteDescription:"Marcel Marques desenvolvedor de software, bacharel em Sistemas para Internet"}},n=function(t){var a=t.options;a.__staticData?a.__staticData.data=c:(a.__staticData=o.a.observable({data:c}),a.computed=r({$static:function(){return a.__staticData.data}},a.computed))},l=Object(i.a)(e,(function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"author"},[e("g-image",{staticClass:"author__image",attrs:{alt:"Author image",src:s("GHUe"),width:"180",height:"180",blur:"5"}}),t.showTitle?e("h1",{staticClass:"author__site-title"},[t._v("\n\t\t"+t._s(t.$static.metadata.userName)+"\n\t")]):t._e(),e("p",{staticClass:"author__intro"},[t._v("\n\t\t"+t._s(t.$static.metadata.siteDescription)+"\n\t")]),e("div",{staticClass:"author__buttons"},[t.$static.metadata.socCodePen?e("a",{attrs:{target:"_blank",href:t.$static.metadata.socCodePen,title:"Codepen"}},[e("svg",{attrs:{viewBox:"0 0 512 512",width:"40"}},[e("path",{attrs:{d:"M427 201.9c-0.6-4.2-2.9-8-6.4-10.3L264.2 87.3c-4.9-3.3-11.4-3.3-16.3 0L91.4 191.6c-4 2.7-6.5 7.4-6.5 12.2v104.3c0 4.8 2.5 9.6 6.5 12.2l156.4 104.3c4.9 3.3 11.4 3.3 16.3 0L420.6 320.4c4-2.6 6.6-7.4 6.6-12.2V203.9C427.1 203.2 427.1 202.6 427 201.9 427 201.7 427.1 202.6 427 201.9zM270.7 127.1l115.2 76.8 -51.5 34.4 -63.8-42.7V127.1zM241.3 127.1v68.6l-63.8 42.7 -51.5-34.4L241.3 127.1zM114.3 231.4l36.8 24.6 -36.8 24.6V231.4zM241.3 384.9L126.1 308.1l51.5-34.4 63.8 42.6V384.9zM256 290.8l-52-34.8 52-34.8 52 34.8L256 290.8zM270.7 384.9V316.3l63.8-42.6 51.5 34.4L270.7 384.9zM397.7 280.6l-36.8-24.6 36.8-24.6V280.6z"}})])]):t._e(),t.$static.metadata.socGithub?e("a",{attrs:{target:"_blank",href:t.$static.metadata.socGithub,title:"Github"}},[e("svg",{attrs:{viewBox:"0 0 512 512",width:"40"}},[e("path",{attrs:{d:"M256 70.7c-102.6 0-185.9 83.2-185.9 185.9 0 82.1 53.3 151.8 127.1 176.4 9.3 1.7 12.3-4 12.3-8.9V389.4c-51.7 11.3-62.5-21.9-62.5-21.9 -8.4-21.5-20.6-27.2-20.6-27.2 -16.9-11.5 1.3-11.3 1.3-11.3 18.7 1.3 28.5 19.2 28.5 19.2 16.6 28.4 43.5 20.2 54.1 15.4 1.7-12 6.5-20.2 11.8-24.9 -41.3-4.7-84.7-20.6-84.7-91.9 0-20.3 7.3-36.9 19.2-49.9 -1.9-4.7-8.3-23.6 1.8-49.2 0 0 15.6-5 51.1 19.1 14.8-4.1 30.7-6.2 46.5-6.3 15.8 0.1 31.7 2.1 46.6 6.3 35.5-24 51.1-19.1 51.1-19.1 10.1 25.6 3.8 44.5 1.8 49.2 11.9 13 19.1 29.6 19.1 49.9 0 71.4-43.5 87.1-84.9 91.7 6.7 5.8 12.8 17.1 12.8 34.4 0 24.9 0 44.9 0 51 0 4.9 3 10.7 12.4 8.9 73.8-24.6 127-94.3 127-176.4C441.9 153.9 358.6 70.7 256 70.7z"}})])]):t._e(),t.$static.metadata.socIn?e("a",{attrs:{target:"_blank",href:t.$static.metadata.socIn,title:"Linkedin"}},[e("svg",{attrs:{viewBox:"0 0 512 512",width:"40"}},[e("path",{attrs:{d:"M186.4 142.4c0 19-15.3 34.5-34.2 34.5 -18.9 0-34.2-15.4-34.2-34.5 0-19 15.3-34.5 34.2-34.5C171.1 107.9 186.4 123.4 186.4 142.4zM181.4 201.3h-57.8V388.1h57.8V201.3zM273.8 201.3h-55.4V388.1h55.4c0 0 0-69.3 0-98 0-26.3 12.1-41.9 35.2-41.9 21.3 0 31.5 15 31.5 41.9 0 26.9 0 98 0 98h57.5c0 0 0-68.2 0-118.3 0-50-28.3-74.2-68-74.2 -39.6 0-56.3 30.9-56.3 30.9v-25.2H273.8z"}})])]):t._e(),t.$static.metadata.socTwitter?e("a",{attrs:{target:"_blank",href:t.$static.metadata.socTwitter,title:"Twitter"}},[e("svg",{attrs:{viewBox:"0 0 512 512",width:"40"}},[e("path",{attrs:{d:"M419.6 168.6c-11.7 5.2-24.2 8.7-37.4 10.2 13.4-8.1 23.8-20.8 28.6-36 -12.6 7.5-26.5 12.9-41.3 15.8 -11.9-12.6-28.8-20.6-47.5-20.6 -42 0-72.9 39.2-63.4 79.9 -54.1-2.7-102.1-28.6-134.2-68 -17 29.2-8.8 67.5 20.1 86.9 -10.7-0.3-20.7-3.3-29.5-8.1 -0.7 30.2 20.9 58.4 52.2 64.6 -9.2 2.5-19.2 3.1-29.4 1.1 8.3 25.9 32.3 44.7 60.8 45.2 -27.4 21.4-61.8 31-96.4 27 28.8 18.5 63 29.2 99.8 29.2 120.8 0 189.1-102.1 185-193.6C399.9 193.1 410.9 181.7 419.6 168.6z"}})])]):t._e()])],1)}),[],!1,null,null,null);"function"==typeof n&&n(l);a.a=l.exports},AO8t:function(t,a,s){},ArLL:function(t,a,s){"use strict";s("AO8t")},"BA+P":function(t,a,s){"use strict";var e=s("n6yM"),i=s("PpWc"),o={components:{PostMeta:e.a,PostTags:i.a},props:["post"]},r=(s("YDir"),s("KHd+")),c=Object(r.a)(o,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"post-card content-box",class:{"post-card--has-poster":t.post.poster}},[s("div",{staticClass:"post-card__header"},[t.post.cover_image?s("g-image",{staticClass:"post-card__image",attrs:{alt:"Cover image",src:t.post.cover_image}}):t._e()],1),s("div",{staticClass:"post-card__content"},[s("h2",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__title",domProps:{innerHTML:t._s(t.post.title)}}),s("p",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post-card__description",domProps:{innerHTML:t._s(t.post.description)}}),s("PostMeta",{staticClass:"post-card__meta",attrs:{post:t.post}}),s("PostTags",{staticClass:"post-card__tags",attrs:{post:t.post}}),s("g-link",{staticClass:"post-card__link",attrs:{to:t.post.path}},[t._v("Link")])],1)])}),[],!1,null,null,null);a.a=c.exports},GHUe:function(t,a){t.exports={type:"image",mimeType:"image/webp",src:"/assets/static/author.e6b6009.1106619795f71052ea303ddae44f01ee.webp",size:{width:180,height:180},sizes:"(max-width: 180px) 100vw, 180px",srcset:["/assets/static/author.e6b6009.1106619795f71052ea303ddae44f01ee.webp 180w"],dataUri:"data:image/svg+xml,%3csvg fill='none' viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3e%3cdefs%3e%3cfilter id='__svg-blur-7ebad845fe4370de0df21917594b6d71'%3e%3cfeGaussianBlur in='SourceGraphic' stdDeviation='5'/%3e%3c/filter%3e%3c/defs%3e%3cimage x='0' y='0' filter='url(%23__svg-blur-7ebad845fe4370de0df21917594b6d71)' width='180' height='180' xlink:href='data:image/webp%3bbase64%2cUklGRpgCAABXRUJQVlA4IIwCAABQDACdASpAAEAAPm0qkUWkIqGXC28YQAbEoAxfxHyfh%2bPI7ba7gN6HbvqoAU%2biaD5HFPfwI1HAL21Y6miavRHqwRk161KXXT%2bBThf32NNTq3l1oP264YYP4NZNfZPipBVypMzLFOKZ7kmGoAD%2b/FN2XMo10u1g7mTCqvsW/Rlg/R0vA//O2FGToS7X/FutvYE3QwQN%2bn2Xh%2bxtdCVz/9kIG5RhBttkzgKTg/Lz6uoh2Qtxx5DV/wGa/2Hj8qVHCAoGlXhf/Oy6zerm28cGfl8/52T2e9TOPu2kStm526nK8BWUQHit4fxelofwmnlzrmA9FhCfrVldILSfXnx2gHlmbtOu6rJw9LwY8OzvROCivQQlHn1l7SQ9t8fTL8F0ghlMtAaXCu5qMfGH1d4U3n2uY0K4v0PuyaWtKNFrycWwYVLWlP9Tvz3O0Vp5kOVsgj6Cw8UyUgqKI2t2SFjx7qFREwSJMxOXzPEGlURqhPmQPNIodNIIy8w5mJ4yegriZzxEypxR7/j0SLbQsMYDwUa0%2b9HT48J0OgsH95jW1SPyio5J6eXFB/c9ahiN49fgOIWToJOl9UuFVdAHsuTrtAwA6hI8lEGCmoRB4WGyuxe/vFrS9GFYIKBmv0lXuHyjLMf%2b3D5zGzo6MuYuvsV%2b3kE0P/Th4VOKvvSDDbofhqvw/E8SGL6j5Y74AMKHsvjt4KV7DbwdJ574XolWGz9w5u0wlfCRZ2w7Ez/2KPE3bBExIO0VvzhZWKfrpv6JArcEDczQ4NFDaGYmOXvUW8IRT2Lv0oxmUBLovzIHkxHlerJzVKV1ntg9PrBwlz7d8WsMhU/qjUV3Vi3K07ZyvO/E3N7d%2b6T5FVy1HkvAAAAA' /%3e%3c/svg%3e"}},GsXb:function(t,a,s){"use strict";s("7qvl")},NAO6:function(t,a,s){},PpWc:function(t,a,s){"use strict";var e={props:["post"]},i=(s("GsXb"),s("KHd+")),o=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"post-tags"},t._l(t.post.tags,(function(a){return s("g-link",{key:a.id,staticClass:"post-tags__link",attrs:{to:a.path}},[s("span",[t._v("#")]),t._v(" "+t._s(a.title)+"\n\t\t")])})),1)}),[],!1,null,null,null);a.a=o.exports},YDir:function(t,a,s){"use strict";s("NAO6")},YIUa:function(t,a,s){"use strict";s("hpwU")},hpwU:function(t,a,s){},n6yM:function(t,a,s){"use strict";var e={props:["post"]},i=(s("YIUa"),s("KHd+")),o=Object(i.a)(e,(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{staticClass:"post-meta"},[t._v("\n   Postado "+t._s(t.post.date)+" |\n   "),t.post.timeToRead?[s("strong",[t._v(t._s(t.post.timeToRead)+" min leitura")])]:t._e()],2)}),[],!1,null,null,null);a.a=o.exports}}]);