__NUXT_JSONP__("/guide/commands", {data:[{},{path:"\u002Fvi\u002Fguide\u002Fcommands",section:"guide",page:{attrs:{title:"Commands and Deployment",description:"Nuxt.js comes with a set of useful commands, both for development and production purpose."},body:"\u003Cblockquote\u003E\n\u003Cp\u003ENuxt.js comes with a set of useful commands, both for development and production purpose.\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch2 id=\"list-of-commands\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#list-of-commands\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EList of Commands\u003C\u002Fh2\u003E\u003Ctable\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth\u003ECommand\u003C\u002Fth\u003E\n\u003Cth\u003EDescription\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\u003Ctr\u003E\n\u003Ctd\u003Enuxt\u003C\u002Ftd\u003E\n\u003Ctd\u003ELaunch a development server on localhost:3000 with hot-reloading.\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003Enuxt build\u003C\u002Ftd\u003E\n\u003Ctd\u003EBuild your application with webpack and minify the JS &amp; CSS (for production).\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003Enuxt start\u003C\u002Ftd\u003E\n\u003Ctd\u003EStart the server in production mode (after running \u003Ccode\u003Enuxt build\u003C\u002Fcode\u003E).\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003Ctr\u003E\n\u003Ctd\u003Enuxt generate\u003C\u002Ftd\u003E\n\u003Ctd\u003EBuild the application and generate every route as a HTML file (used for static hosting).\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\n\u003Ch4 id=\"arguments\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#arguments\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EArguments\u003C\u002Fh4\u003E\u003Cp\u003EYou can use \u003Ccode\u003E--help\u003C\u002Fcode\u003E with any command to get detailed usage. Common arguments are:\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003E\u003Cstrong\u003E\u003Ccode\u003E--config-file\u003C\u002Fcode\u003E or \u003Ccode\u003E-c\u003C\u002Fcode\u003E:\u003C\u002Fstrong\u003E specify the path to \u003Ccode\u003Enuxt.config.js\u003C\u002Fcode\u003E file.\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cstrong\u003E\u003Ccode\u003E--spa\u003C\u002Fcode\u003E or \u003Ccode\u003E-s\u003C\u002Fcode\u003E:\u003C\u002Fstrong\u003E Runs command in SPA mode and disables server side rendering.\u003C\u002Fli\u003E\n\u003Cli\u003E\u003Cstrong\u003E\u003Ccode\u003E--unix-socket\u003C\u002Fcode\u003E or \u003Ccode\u003E-n\u003C\u002Fcode\u003E:\u003C\u002Fstrong\u003E specify the path to a UNIX socket.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Ch4 id=\"hooks\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#hooks\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EHooks\u003C\u002Fh4\u003E\u003Ctable\u003E\n\u003Cthead\u003E\n\u003Ctr\u003E\n\u003Cth\u003EHook\u003C\u002Fth\u003E\n\u003Cth\u003EObjective\u003C\u002Fth\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Fthead\u003E\n\u003Ctbody\u003E\u003Ctr\u003E\n\u003Ctd\u003E\u003Ccode\u003Ecli:buildError\u003C\u002Fcode\u003E\u003C\u002Ftd\u003E\n\u003Ctd\u003ECaptures build errors in dev mode and display them on loading screen\u003C\u002Ftd\u003E\n\u003C\u002Ftr\u003E\n\u003C\u002Ftbody\u003E\u003C\u002Ftable\u003E\n\u003Ch4 id=\"using-in-package-json\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#using-in-package-json\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EUsing in package.json\u003C\u002Fh4\u003E\u003Cp\u003EYou should put these commands in the \u003Ccode\u003Epackage.json\u003C\u002Fcode\u003E:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs json\"\u003E\"scripts\": {\n  \"dev\": \"nuxt\",\n  \"build\": \"nuxt build\",\n  \"start\": \"nuxt start\",\n  \"generate\": \"nuxt generate\"\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003EThen, you can launch your commands via \u003Ccode\u003Enpm run &lt;command&gt;\u003C\u002Fcode\u003E (example: \u003Ccode\u003Enpm run dev\u003C\u002Fcode\u003E).\u003C\u002Fp\u003E\n\u003Cdiv class=\"Alert Alert--nuxt-green\"\u003E\n\n\u003Cp\u003E\u003Cb\u003EPro tip:\u003C\u002Fb\u003E to pass arguments to npm commands, you need an extra \u003Ccode\u003E--\u003C\u002Fcode\u003E script name (example: \u003Ccode\u003Enpm run dev -- --spa\u003C\u002Fcode\u003E).\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Ch2 id=\"development-environment\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#development-environment\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EDevelopment Environment\u003C\u002Fh2\u003E\u003Cp\u003ETo launch Nuxt in development mode with hot reloading:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs bash\"\u003Enuxt\n\u002F\u002F OR\nnpm run dev\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Ch2 id=\"production-deployment\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#production-deployment\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EProduction Deployment\u003C\u002Fh2\u003E\u003Cp\u003ENuxt.js lets you choose between three modes to deploy your application: SSR, Static Generated, or SPA.\u003C\u002Fp\u003E\n\u003Ch3 id=\"server-side-rendered-deployment-universal-ssr-\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#server-side-rendered-deployment-universal-ssr-\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EServer-Side Rendered Deployment (Universal SSR)\u003C\u002Fh3\u003E\u003Cp\u003ETo deploy, instead of running \u003Ccode\u003Enuxt\u003C\u002Fcode\u003E, you probably want to build ahead of time. Therefore, building and starting are separate commands:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs bash\"\u003Enuxt build\nnuxt start\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003EYou can also set \u003Ccode\u003Eserver.https\u003C\u002Fcode\u003E in your \u003Ccode\u003Enuxt.config.js\u003C\u002Fcode\u003E with the same set of options passed to \u003Ca href=\"https:\u002F\u002Fnodejs.org\u002Fapi\u002Fhttps.html\"\u003E\u003Ccode\u003Ehttps.createServer\u003C\u002Fcode\u003E\u003C\u002Fa\u003E, should you choose to serve Nuxt.js in HTTPS mode.\nUnix sockets are also available if you set the \u003Ccode\u003Eserver.socket\u003C\u002Fcode\u003E option in \u003Ccode\u003Enuxt.config.js\u003C\u002Fcode\u003E (or \u003Ccode\u003E-n\u003C\u002Fcode\u003E in the \u003Ca href=\"https:\u002F\u002Fnuxtjs.org\u002Fguide\u002Fcommands#list-of-commands\"\u003ECLI\u003C\u002Fa\u003E).\nWhen using \u003Ca href=\"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FBerkeley_sockets\"\u003EUnix sockets\u003C\u002Fa\u003E, make sure not to set the \u003Ccode\u003Ehost\u003C\u002Fcode\u003E and \u003Ccode\u003Eport\u003C\u002Fcode\u003E parameters otherwise the \u003Ccode\u003Esocket\u003C\u002Fcode\u003E parameter is ignored.\u003C\u002Fp\u003E\n\u003Cp\u003EThe \u003Ccode\u003Epackage.json\u003C\u002Fcode\u003E like follows is recommended:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs json\"\u003E{\n  \u003Cspan class=\"hljs-attr\"\u003E\"name\"\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E\"my-app\"\u003C\u002Fspan\u003E,\n  \u003Cspan class=\"hljs-attr\"\u003E\"dependencies\"\u003C\u002Fspan\u003E: {\n    \u003Cspan class=\"hljs-attr\"\u003E\"nuxt\"\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E\"latest\"\u003C\u002Fspan\u003E\n  },\n  \u003Cspan class=\"hljs-attr\"\u003E\"scripts\"\u003C\u002Fspan\u003E: {\n    \u003Cspan class=\"hljs-attr\"\u003E\"dev\"\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E\"nuxt\"\u003C\u002Fspan\u003E,\n    \u003Cspan class=\"hljs-attr\"\u003E\"build\"\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E\"nuxt build\"\u003C\u002Fspan\u003E,\n    \u003Cspan class=\"hljs-attr\"\u003E\"start\"\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-string\"\u003E\"nuxt start\"\u003C\u002Fspan\u003E\n  }\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003ENote: we recommend putting \u003Ccode\u003E.nuxt\u003C\u002Fcode\u003E in \u003Ccode\u003E.npmignore\u003C\u002Fcode\u003E or \u003Ccode\u003E.gitignore\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\u003Ch3 id=\"static-generated-deployment-pre-rendered-\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#static-generated-deployment-pre-rendered-\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EStatic Generated Deployment (Pre-rendered)\u003C\u002Fh3\u003E\u003Cp\u003ENuxt.js gives you the ability to host your web application on any static hosting.\u003C\u002Fp\u003E\n\u003Cp\u003ETo generate our web application into static files:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs bash\"\u003Enpm run generate\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003EIt will create a \u003Ccode\u003Edist\u003C\u002Fcode\u003E folder with everything inside ready to be deployed on a static hosting site.\u003C\u002Fp\u003E\n\u003Cp\u003ETo return a non-zero status code when a page error is encountered and let the CI\u002FCD fail the deployment or build, you can use the \u003Ccode\u003E--fail-on-error\u003C\u002Fcode\u003E argument.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs bash\"\u003Enpm run generate --fail-on-error\n\n\u002F\u002F OR\n\nyarn generate --fail-on-error\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003EIf you have a project with \u003Ca href=\"\u002Fguide\u002Frouting#dynamic-routes\"\u003Edynamic routes\u003C\u002Fa\u003E, take a look at the \u003Ca href=\"\u002Fapi\u002Fconfiguration-generate\"\u003Egenerate configuration\u003C\u002Fa\u003E to tell Nuxt.js how to generate these dynamic routes.\u003C\u002Fp\u003E\n\u003Cdiv class=\"Alert\"\u003E\n\n\u003Cp\u003EWhen generating your web application with \u003Ccode\u003Enuxt generate\u003C\u002Fcode\u003E, \u003Ca href=\"\u002Fapi\u002Fcontext\"\u003Ethe context\u003C\u002Fa\u003E given to \u003Ca href=\"\u002Fguide\u002Fasync-data\"\u003EasyncData\u003C\u002Fa\u003E and \u003Ca href=\"\u002Fguide\u002Fvuex-store#the-fetch-method\"\u003Efetch\u003C\u002Fa\u003E will not have \u003Ccode\u003Ereq\u003C\u002Fcode\u003E and \u003Ccode\u003Eres\u003C\u002Fcode\u003E.\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n\n\u003Ch3 id=\"single-page-application-deployment-spa-\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#single-page-application-deployment-spa-\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003ESingle Page Application Deployment (SPA)\u003C\u002Fh3\u003E\u003Cp\u003E\u003Ccode\u003Enuxt generate\u003C\u002Fcode\u003E still needs its SSR engine during build\u002Fgenerate time while having the advantage of having all our pages pre rendered, and have a high SEO and page load score. The content is generated at \u003Cem\u003Ebuild time\u003C\u002Fem\u003E. For example, we can&#39;t use it for applications where content depends on user authentication or a real time API (at least for the first load).\u003C\u002Fp\u003E\n\u003Cp\u003EThe SPA idea is simple! When SPA mode is enabled using \u003Ccode\u003Emode: &#39;spa&#39;\u003C\u002Fcode\u003E or \u003Ccode\u003E--spa\u003C\u002Fcode\u003E flag, and we run build, generation automatically starts after the build. This generation contains common meta and resource links, but not page content.\u003C\u002Fp\u003E\n\u003Cp\u003ESo, for an SPA deployment, you must do the following:\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003EChange \u003Ccode\u003Emode\u003C\u002Fcode\u003E in \u003Ccode\u003Enuxt.config.js\u003C\u002Fcode\u003E to \u003Ccode\u003Espa\u003C\u002Fcode\u003E.\u003C\u002Fli\u003E\n\u003Cli\u003ERun \u003Ccode\u003Enpm run build\u003C\u002Fcode\u003E.\u003C\u002Fli\u003E\n\u003Cli\u003EDeploy the created \u003Ccode\u003Edist\u002F\u003C\u002Fcode\u003E folder to your static hosting like Surge, GitHub Pages or nginx.\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EAnother possible deployment method is to use Nuxt as a middleware in frameworks while in \u003Ccode\u003Espa\u003C\u002Fcode\u003E mode. This helps reduce server load and uses Nuxt in projects where SSR is not possible.\u003C\u002Fp\u003E\n\u003Cdiv class=\"Alert\"\u003E\n\n\u003Cp\u003ERead our \u003Ca href=\"\u002Ffaq\"\u003EFAQ\u003C\u002Fa\u003E and find nifty examples for deployments to popular hosts.\u003C\u002Fp\u003E\n\u003C\u002Fdiv\u003E\n"},contributors:[]}],fetch:[],mutations:[]});