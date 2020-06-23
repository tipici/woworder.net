__NUXT_JSONP__("/examples/auth-routes", {data:[{},{path:"\u002Fvi\u002Fexamples\u002Fauth-routes",section:"examples",page:{attrs:{title:"Auth Routes",description:"Authenticated routes example with Nuxt.js",github:"auth-routes",livedemo:"https:\u002F\u002Fnuxt-auth-routes.gomix.me",liveedit:"https:\u002F\u002Fgomix.com\u002F#!\u002Fproject\u002Fnuxt-auth-routes"},body:"\u003Ch1 id=\"documentation\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#documentation\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EDocumentation\u003C\u002Fh1\u003E\u003Cblockquote\u003E\n\u003Cp\u003ENuxt.js can be used to create authenticated routes easily.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch2 id=\"official-code-auth-module-code-\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#official-code-auth-module-code-\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EOfficial \u003Ccode\u003Eauth-module\u003C\u002Fcode\u003E\u003C\u002Fh2\u003E\u003Cp\u003EIf you want to implement complex authentication flows, for example OAuth2, we suggest using the official \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fnuxt-community\u002Fauth-module\"\u003E\u003Ccode\u003Eauth-module\u003C\u002Fcode\u003E\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"using-express-and-sessions\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#using-express-and-sessions\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EUsing Express and Sessions\u003C\u002Fh2\u003E\u003Cp\u003ETo add the sessions feature in our application, we will use \u003Ccode\u003Eexpress\u003C\u002Fcode\u003E and \u003Ccode\u003Eexpress-session\u003C\u002Fcode\u003E, for this, we need to use Nuxt.js programmatically.\u003C\u002Fp\u003E\n\u003Cp\u003EFirst, we install the dependencies:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs bash\"\u003Eyarn add express express-session body-parser whatwg-fetch\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003E\u003Cem\u003EWe will talk about \u003Ccode\u003Ewhatwg-fetch\u003C\u002Fcode\u003E later.\u003C\u002Fem\u003E\u003C\u002Fp\u003E\n\u003Cp\u003EThen we create our \u003Ccode\u003Eserver.js\u003C\u002Fcode\u003E:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs js\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E { Nuxt, Builder } = \u003Cspan class=\"hljs-built_in\"\u003Erequire\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-string\"\u003E'nuxt'\u003C\u002Fspan\u003E)\n\u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E bodyParser = \u003Cspan class=\"hljs-built_in\"\u003Erequire\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-string\"\u003E'body-parser'\u003C\u002Fspan\u003E)\n\u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E session = \u003Cspan class=\"hljs-built_in\"\u003Erequire\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-string\"\u003E'express-session'\u003C\u002Fspan\u003E)\n\u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E app = \u003Cspan class=\"hljs-built_in\"\u003Erequire\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-string\"\u003E'express'\u003C\u002Fspan\u003E)()\n\n\u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F Body parser, to access `req.body`\u003C\u002Fspan\u003E\napp.use(bodyParser.json())\n\n\u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F Sessions to create `req.session`\u003C\u002Fspan\u003E\napp.use(session({\n  \u003Cspan class=\"hljs-attr\"\u003Esecret\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E'super-secret-key'\u003C\u002Fspan\u003E,\n  \u003Cspan class=\"hljs-attr\"\u003Eresave\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-literal\"\u003Efalse\u003C\u002Fspan\u003E,\n  \u003Cspan class=\"hljs-attr\"\u003EsaveUninitialized\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-literal\"\u003Efalse\u003C\u002Fspan\u003E,\n  \u003Cspan class=\"hljs-attr\"\u003Ecookie\u003C\u002Fspan\u003E: { \u003Cspan class=\"hljs-attr\"\u003EmaxAge\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-number\"\u003E60000\u003C\u002Fspan\u003E }\n}))\n\n\u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F POST `\u002Fapi\u002Flogin` to log in the user and add him to the `req.session.authUser`\u003C\u002Fspan\u003E\napp.post(\u003Cspan class=\"hljs-string\"\u003E'\u002Fapi\u002Flogin'\u003C\u002Fspan\u003E, \u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Efunction\u003C\u002Fspan\u003E (\u003Cspan class=\"hljs-params\"\u003Ereq, res\u003C\u002Fspan\u003E) \u003C\u002Fspan\u003E{\n  \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E (req.body.username === \u003Cspan class=\"hljs-string\"\u003E'demo'\u003C\u002Fspan\u003E &amp;&amp; req.body.password === \u003Cspan class=\"hljs-string\"\u003E'demo'\u003C\u002Fspan\u003E) {\n    req.session.authUser = { \u003Cspan class=\"hljs-attr\"\u003Eusername\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E'demo'\u003C\u002Fspan\u003E }\n    \u003Cspan class=\"hljs-keyword\"\u003Ereturn\u003C\u002Fspan\u003E res.json({ \u003Cspan class=\"hljs-attr\"\u003Eusername\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E'demo'\u003C\u002Fspan\u003E })\n  }\n  res.status(\u003Cspan class=\"hljs-number\"\u003E401\u003C\u002Fspan\u003E).json({ \u003Cspan class=\"hljs-attr\"\u003Eerror\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E'Bad credentials'\u003C\u002Fspan\u003E })\n})\n\n\u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F POST `\u002Fapi\u002Flogout` to log out the user and remove it from the `req.session`\u003C\u002Fspan\u003E\napp.post(\u003Cspan class=\"hljs-string\"\u003E'\u002Fapi\u002Flogout'\u003C\u002Fspan\u003E, \u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Efunction\u003C\u002Fspan\u003E (\u003Cspan class=\"hljs-params\"\u003Ereq, res\u003C\u002Fspan\u003E) \u003C\u002Fspan\u003E{\n  \u003Cspan class=\"hljs-keyword\"\u003Edelete\u003C\u002Fspan\u003E req.session.authUser\n  res.json({ \u003Cspan class=\"hljs-attr\"\u003Eok\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-literal\"\u003Etrue\u003C\u002Fspan\u003E })\n})\n\n\u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F We instantiate Nuxt.js with the options\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E isProd = process.env.NODE_ENV === \u003Cspan class=\"hljs-string\"\u003E'production'\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E nuxt = \u003Cspan class=\"hljs-keyword\"\u003Enew\u003C\u002Fspan\u003E Nuxt({ \u003Cspan class=\"hljs-attr\"\u003Edev\u003C\u002Fspan\u003E: !isProd })\n\u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F No build in production\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E (!isProd) {\n  \u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E builder = \u003Cspan class=\"hljs-keyword\"\u003Enew\u003C\u002Fspan\u003E Builder(nuxt)\n  builder.build()\n}\napp.use(nuxt.render)\napp.listen(\u003Cspan class=\"hljs-number\"\u003E3000\u003C\u002Fspan\u003E)\n\u003Cspan class=\"hljs-built_in\"\u003Econsole\u003C\u002Fspan\u003E.log(\u003Cspan class=\"hljs-string\"\u003E'Server is listening on http:\u002F\u002Flocalhost:3000'\u003C\u002Fspan\u003E)\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003EAnd we update our \u003Ccode\u003Epackage.json\u003C\u002Fcode\u003E scripts:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs json\"\u003E\u002F\u002F ...\n\"scripts\": {\n  \"dev\": \"node server.js\",\n  \"build\": \"nuxt build\",\n  \"start\": \"cross-env NODE_ENV=production node server.js\"\n}\n\u002F\u002F ...\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003ENote: You&#39;ll need to run \u003Ccode\u003Enpm install --save-dev cross-env\u003C\u002Fcode\u003E for the above example to work. If you&#39;re \u003Cem\u003Enot\u003C\u002Fem\u003E developing on Windows you can leave cross-env out of your \u003Ccode\u003Estart\u003C\u002Fcode\u003E script and set \u003Ccode\u003ENODE_ENV\u003C\u002Fcode\u003E directly.\u003C\u002Fp\u003E\n\u003Ch2 id=\"using-the-store\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#using-the-store\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EUsing the store\u003C\u002Fh2\u003E\u003Cp\u003EWe need a global state to let our application know if the user is connected \u003Cstrong\u003Eacross the pages\u003C\u002Fstrong\u003E.\u003C\u002Fp\u003E\n\u003Cp\u003ETo let Nuxt.js use Vuex, we create a \u003Ccode\u003Estore\u002Findex.js\u003C\u002Fcode\u003E file:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs js\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Eimport\u003C\u002Fspan\u003E Vue \u003Cspan class=\"hljs-keyword\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E'vue'\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-keyword\"\u003Eimport\u003C\u002Fspan\u003E Vuex \u003Cspan class=\"hljs-keyword\"\u003Efrom\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-string\"\u003E'vuex'\u003C\u002Fspan\u003E\n\nVue.use(Vuex)\n\n\u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F Polyfill for `window.fetch()`\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-built_in\"\u003Erequire\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-string\"\u003E'whatwg-fetch'\u003C\u002Fspan\u003E)\n\n\u003Cspan class=\"hljs-keyword\"\u003Econst\u003C\u002Fspan\u003E store = \u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-params\"\u003E()\u003C\u002Fspan\u003E =&gt;\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Enew\u003C\u002Fspan\u003E Vuex.Store({\n\n  \u003Cspan class=\"hljs-attr\"\u003Estate\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-params\"\u003E()\u003C\u002Fspan\u003E =&gt;\u003C\u002Fspan\u003E ({\n    \u003Cspan class=\"hljs-attr\"\u003EauthUser\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-literal\"\u003Enull\u003C\u002Fspan\u003E\n  }),\n\n  \u003Cspan class=\"hljs-attr\"\u003Emutations\u003C\u002Fspan\u003E: {\n    SET_USER (state, user) {\n      state.authUser = user\n    }\n  },\n\n  \u003Cspan class=\"hljs-attr\"\u003Eactions\u003C\u002Fspan\u003E: {\n    \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F ...\u003C\u002Fspan\u003E\n  }\n\n})\n\n\u003Cspan class=\"hljs-keyword\"\u003Eexport\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Edefault\u003C\u002Fspan\u003E store\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Col\u003E\n\u003Cli\u003EWe import \u003Ccode\u003EVue\u003C\u002Fcode\u003E and \u003Ccode\u003EVuex\u003C\u002Fcode\u003E (included in Nuxt.js) and we tell Vue to use Vuex to let us use \u003Ccode\u003E$store\u003C\u002Fcode\u003E in our components.\u003C\u002Fli\u003E\n\u003Cli\u003EWe \u003Ccode\u003Erequire(&#39;whatwg-fetch&#39;)\u003C\u002Fcode\u003E to polyfill the \u003Ccode\u003Efetch()\u003C\u002Fcode\u003E method across all browsers (see \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Fgithub\u002Ffetch\"\u003Efetch repo\u003C\u002Fa\u003E).\u003C\u002Fli\u003E\n\u003Cli\u003EWe create our \u003Ccode\u003ESET_USER\u003C\u002Fcode\u003E mutation which will set the \u003Ccode\u003Estate.authUser\u003C\u002Fcode\u003E to the connected user.\u003C\u002Fli\u003E\n\u003Cli\u003EWe export our store instance to Nuxt.js can inject it to our main application.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch3 id=\"nuxtserverinit-action\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#nuxtserverinit-action\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EnuxtServerInit() action\u003C\u002Fh3\u003E\u003Cp\u003ENuxt.js will call a specific action called \u003Ccode\u003EnuxtServerInit\u003C\u002Fcode\u003E with the context in argument, so when the app will be loaded, the store will be already filled with some data we can get from the server.\u003C\u002Fp\u003E\n\u003Cp\u003EIn our \u003Ccode\u003Estore\u002Findex.js\u003C\u002Fcode\u003E, we can add the \u003Ccode\u003EnuxtServerInit\u003C\u002Fcode\u003E action:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs js\"\u003EnuxtServerInit ({ commit }, { req }) {\n  \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E (req.session &amp;&amp; req.session.authUser) {\n    commit(\u003Cspan class=\"hljs-string\"\u003E'SET_USER'\u003C\u002Fspan\u003E, req.session.authUser)\n  }\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003ETo make the data method asynchronous, Nuxt.js offers you different ways, choose the one you&#39;re the most familiar with:\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003Ereturning a \u003Ccode\u003EPromise\u003C\u002Fcode\u003E, Nuxt.js will wait for the promise to be resolved before rendering the component.\u003C\u002Fli\u003E\n\u003Cli\u003EUsing the \u003Ca href=\"https:\u002F\u002Fgithub.com\u002Flukehoban\u002Fecmascript-asyncawait\"\u003E\u003Ccode\u003Easync\u003C\u002Fcode\u003E\u002F\u003Ccode\u003Eawait\u003C\u002Fcode\u003E proposal\u003C\u002Fa\u003E (\u003Ca href=\"https:\u002F\u002Fzeit.co\u002Fblog\u002Fasync-and-await\"\u003Elearn more about it\u003C\u002Fa\u003E).\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch3 id=\"login-action\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#login-action\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003Elogin() action\u003C\u002Fh3\u003E\u003Cp\u003EWe add a \u003Ccode\u003Elogin\u003C\u002Fcode\u003E action which will be called from our pages component to log in the user:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs js\"\u003Elogin ({ commit }, { username, password }) {\n  \u003Cspan class=\"hljs-keyword\"\u003Ereturn\u003C\u002Fspan\u003E fetch(\u003Cspan class=\"hljs-string\"\u003E'\u002Fapi\u002Flogin'\u003C\u002Fspan\u003E, {\n    \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F Send the client cookies to the server\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-attr\"\u003Ecredentials\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E'same-origin'\u003C\u002Fspan\u003E,\n    \u003Cspan class=\"hljs-attr\"\u003Emethod\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E'POST'\u003C\u002Fspan\u003E,\n    \u003Cspan class=\"hljs-attr\"\u003Eheaders\u003C\u002Fspan\u003E: {\n      \u003Cspan class=\"hljs-string\"\u003E'Content-Type'\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E'application\u002Fjson'\u003C\u002Fspan\u003E\n    },\n    \u003Cspan class=\"hljs-attr\"\u003Ebody\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-built_in\"\u003EJSON\u003C\u002Fspan\u003E.stringify({\n      username,\n      password\n    })\n  })\n  .then(\u003Cspan class=\"hljs-function\"\u003E(\u003Cspan class=\"hljs-params\"\u003Eres\u003C\u002Fspan\u003E) =&gt;\u003C\u002Fspan\u003E {\n    \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E (res.status === \u003Cspan class=\"hljs-number\"\u003E401\u003C\u002Fspan\u003E) {\n      \u003Cspan class=\"hljs-keyword\"\u003Ethrow\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Enew\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-built_in\"\u003EError\u003C\u002Fspan\u003E(\u003Cspan class=\"hljs-string\"\u003E'Bad credentials'\u003C\u002Fspan\u003E)\n    } \u003Cspan class=\"hljs-keyword\"\u003Eelse\u003C\u002Fspan\u003E {\n      \u003Cspan class=\"hljs-keyword\"\u003Ereturn\u003C\u002Fspan\u003E res.json()\n    }\n  })\n  .then(\u003Cspan class=\"hljs-function\"\u003E(\u003Cspan class=\"hljs-params\"\u003EauthUser\u003C\u002Fspan\u003E) =&gt;\u003C\u002Fspan\u003E {\n    commit(\u003Cspan class=\"hljs-string\"\u003E'SET_USER'\u003C\u002Fspan\u003E, authUser)\n  })\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Ch3 id=\"logout-method\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#logout-method\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003Elogout() method\u003C\u002Fh3\u003E\u003Cpre\u003E\u003Ccode class=\"hljs js\"\u003Elogout ({ commit }) {\n  \u003Cspan class=\"hljs-keyword\"\u003Ereturn\u003C\u002Fspan\u003E fetch(\u003Cspan class=\"hljs-string\"\u003E'\u002Fapi\u002Flogout'\u003C\u002Fspan\u003E, {\n    \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F Send the client cookies to the server\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-attr\"\u003Ecredentials\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E'same-origin'\u003C\u002Fspan\u003E,\n    \u003Cspan class=\"hljs-attr\"\u003Emethod\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E'POST'\u003C\u002Fspan\u003E\n  })\n  .then(\u003Cspan class=\"hljs-function\"\u003E\u003Cspan class=\"hljs-params\"\u003E()\u003C\u002Fspan\u003E =&gt;\u003C\u002Fspan\u003E {\n    commit(\u003Cspan class=\"hljs-string\"\u003E'SET_USER'\u003C\u002Fspan\u003E, \u003Cspan class=\"hljs-literal\"\u003Enull\u003C\u002Fspan\u003E)\n  })\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Ch2 id=\"pages-components\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#pages-components\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EPages components\u003C\u002Fh2\u003E\u003Cp\u003EThen we can use \u003Ccode\u003E$store.state.authUser\u003C\u002Fcode\u003E in our pages components to check if the user is connected in our application or not.\u003C\u002Fp\u003E\n\u003Ch3 id=\"redirect-user-if-not-connected\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#redirect-user-if-not-connected\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003ERedirect user if not connected\u003C\u002Fh3\u003E\u003Cp\u003ELet&#39;s add a \u003Ccode\u003E\u002Fsecret\u003C\u002Fcode\u003E route where only the connected user can see its content:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs html\"\u003E\u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Etemplate\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Ediv\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Eh1\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003ESuper secret page\u003Cspan class=\"hljs-tag\"\u003E&lt;\u002F\u003Cspan class=\"hljs-name\"\u003Eh1\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n    \u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Erouter-link\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-attr\"\u003Eto\u003C\u002Fspan\u003E=\u003Cspan class=\"hljs-string\"\u003E\"\u002F\"\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003EBack to the home page\u003Cspan class=\"hljs-tag\"\u003E&lt;\u002F\u003Cspan class=\"hljs-name\"\u003Erouter-link\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n  \u003Cspan class=\"hljs-tag\"\u003E&lt;\u002F\u003Cspan class=\"hljs-name\"\u003Ediv\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n\u003Cspan class=\"hljs-tag\"\u003E&lt;\u002F\u003Cspan class=\"hljs-name\"\u003Etemplate\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\n\n\u003Cspan class=\"hljs-tag\"\u003E&lt;\u003Cspan class=\"hljs-name\"\u003Escript\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\u003Cspan class=\"javascript\"\u003E\n\u003Cspan class=\"hljs-keyword\"\u003Eexport\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Edefault\u003C\u002Fspan\u003E {\n  \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F we use fetch() because we do not need to set data to this component\u003C\u002Fspan\u003E\n  fetch ({ store, redirect }) {\n    \u003Cspan class=\"hljs-keyword\"\u003Eif\u003C\u002Fspan\u003E (!store.state.authUser) {\n      \u003Cspan class=\"hljs-keyword\"\u003Ereturn\u003C\u002Fspan\u003E redirect(\u003Cspan class=\"hljs-string\"\u003E'\u002F'\u003C\u002Fspan\u003E)\n    }\n  }\n}\n\u003C\u002Fspan\u003E\u003Cspan class=\"hljs-tag\"\u003E&lt;\u002F\u003Cspan class=\"hljs-name\"\u003Escript\u003C\u002Fspan\u003E&gt;\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003EWe can see in the \u003Ccode\u003Efetch\u003C\u002Fcode\u003E method that we call \u003Ccode\u003Eredirect(&#39;\u002F&#39;)\u003C\u002Fcode\u003E when our user is not connected.\u003C\u002Fp\u003E\n"},contributors:[]}],fetch:[],mutations:[]});