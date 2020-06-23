__NUXT_JSONP__("/blog/nuxtjs-from-terminal-to-browser", {data:[{path:"\u002Fvi\u002Fblog\u002Fnuxtjs-from-terminal-to-browser",post:{path:"vi\u002Fblog\u002Fnuxtjs-from-terminal-to-browser.md",slug:"nuxtjs-from-terminal-to-browser",readtime:{text:"3 min read",minutes:2.075,time:124500.00000000001,words:415},title:"NuxtJS: From Terminal to Browser",description:"How we changed the developer experience to stop switching between the terminal and browser.",imgUrl:"blog\u002Fnuxtjs-from-terminal-to-browser\u002Fmain.png",date:"2019-06-04T00:00:00.000Z",authors:[{name:"Sébastien Chopin",avatarUrl:"https:\u002F\u002Fpbs.twimg.com\u002Fprofile_images\u002F1042510623962275840\u002F1Iw_Mvud_400x400.jpg",link:"https:\u002F\u002Ftwitter.com\u002Fatinux"}],tags:["webpack","DX"],body:"\u003Cp\u003EHow we changed the developer experience to stop switching between the terminal and browser.\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003ENuxt.js is a Vue.js framework to create different kind of web applications with the \u003Cstrong\u003Esame directory structure &amp; conventions\u003C\u002Fstrong\u003E: Universal, Single Page, PWA or Static Generated.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E\u003Cem\u003Eℹ️ These features are all available with \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u002Freleases\u002Ftag\u002Fv2.8.0\"\u003Ev2.8.0 release\u003C\u002Fa\u003E.\u003C\u002Fem\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"-a-href-problems-a-problems\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#-a-href-problems-a-problems\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Ca href=\"#problems\"\u003E\u003C\u002Fa\u003EProblems\u003C\u002Fh2\u003E\u003Col\u003E\n\u003Cli\u003EDeveloping JavaScript applications with Webpack or any bundler requires to switch between your browser and terminal for debugging purpose.\u003C\u002Fli\u003E\n\u003Cli\u003EUsing \u003Ccode\u003Econsole.log\u003C\u002Fcode\u003E to debug when the app is server rendered requires to remember that logs will be displayed on the terminal when refreshing the page.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch2 id=\"-a-href-solutions-a-solutions\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#-a-href-solutions-a-solutions\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Ca href=\"#solutions\"\u003E\u003C\u002Fa\u003ESolutions\u003C\u002Fh2\u003E\u003Col\u003E\n\u003Cli\u003EForwarding Webpack build state right in the browser and display them in a fancy manner.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--1u6wSHPt--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fuser-images.githubusercontent.com\u002F904724\u002F58880743-ec7a3280-86d8-11e9-8856-8d9d22b89b70.gif\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--1u6wSHPt--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fuser-images.githubusercontent.com\u002F904724\u002F58880743-ec7a3280-86d8-11e9-8856-8d9d22b89b70.gif\" alt=\"foward-webpack-build-state\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003ESame for Hot Module Replacement (really useful when the project gets bigger and takes more time to re-build).\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--faVtF222--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fuser-images.githubusercontent.com\u002F904724\u002F58547105-129a6100-8207-11e9-9c61-a93956a17727.gif\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--faVtF222--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fuser-images.githubusercontent.com\u002F904724\u002F58547105-129a6100-8207-11e9-9c61-a93956a17727.gif\" alt=\"nuxt-build-indicator-hmr\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003EForwarding SSR logs to the browser in development mode\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003E\u003Ca href=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--bwQ8iEq2--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fuser-images.githubusercontent.com\u002F904724\u002F58566291-a3396700-8230-11e9-9dd6-09c3ff8578d2.gif\"\u003E\u003Cimg src=\"https:\u002F\u002Fres.cloudinary.com\u002Fpracticaldev\u002Fimage\u002Ffetch\u002Fs--bwQ8iEq2--\u002Fc_limit%2Cf_auto%2Cfl_progressive%2Cq_66%2Cw_880\u002Fhttps:\u002F\u002Fuser-images.githubusercontent.com\u002F904724\u002F58566291-a3396700-8230-11e9-9dd6-09c3ff8578d2.gif\" alt=\"nuxt-ssr-logs-forwarding\"\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"-a-href-nuxtjs-vision-a-nuxtjs-vision\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#-a-href-nuxtjs-vision-a-nuxtjs-vision\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003E\u003Ca href=\"#nuxtjs-vision\"\u003E\u003C\u002Fa\u003ENuxtJS Vision\u003C\u002Fh2\u003E\u003Cp\u003EThe purpose to these changes is to use the terminal for commands only.\u003C\u002Fp\u003E\n\u003Cp\u003ENow you can focus right on your code and its visual result 🙂\u003C\u002Fp\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003EBe lazy, be smart, be Nuxt.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003ELinks:\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EDocumentation: \u003Ca href=\"https:\u002F\u002Fnuxtjs.org\"\u003Ehttps:\u002F\u002Fnuxtjs.org\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003EGitHub: \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\"\u003Ehttps:\u002F\u002Fgithub.com\u002Fnuxt\u002Fnuxt.js\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003ELoading Screen source code: \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fnuxt\u002Floading-screen\"\u003Ehttps:\u002F\u002Fgithub.com\u002Fnuxt\u002Floading-screen\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003ETwitter: \u003Ca href=\"https:\u002F\u002Ftwitter.com\u002Fnuxt_js\"\u003Ehttps:\u002F\u002Ftwitter.com\u002Fnuxt_js\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n",links:{previous:{title:"Understanding how fetch works in Nuxt 2.12",slug:"understanding-how-fetch-works-in-nuxt-2-12"},next:{title:"Introducing Smart Prefeching",slug:"introducing-smart-prefetching"}}}}],fetch:[],mutations:[]});