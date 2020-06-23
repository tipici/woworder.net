__NUXT_JSONP__("/guide/upgrading", {data:[{},{path:"\u002Fvi\u002Fguide\u002Fupgrading",section:"guide",page:{attrs:{title:"Upgrading",description:"Upgrading Nuxt.js is quick, but more involved than updating your package.json"},body:"\u003Cblockquote\u003E\n\u003Cp\u003EUpgrading Nuxt.js is quick, but more involved than updating your package.json\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Ch2 id=\"getting-started\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#getting-started\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EGetting Started\u003C\u002Fh2\u003E\u003Col\u003E\n\u003Cli\u003ECheck the \u003Ca href=\"\u002Fguide\u002Frelease-notes\"\u003Erelease notes\u003C\u002Fa\u003E for the version you wish to upgrade to see if there are any additional instructions for that particular release.\u003C\u002Fli\u003E\n\u003Cli\u003EUpdate the version specified for the \u003Ccode\u003Enuxt\u003C\u002Fcode\u003E package in your \u003Ccode\u003Epackage.json\u003C\u002Fcode\u003E file.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Cp\u003EAfter this step instructions vary depending upon whether you are using Yarn or NPM. \u003Cem\u003E\u003Ca href=\"https:\u002F\u002Fyarnpkg.com\u002Fen\u002Fdocs\u002Fusage\"\u003EYarn\u003C\u002Fa\u003E is the preferred package manager for working with Nuxt as it is the development tool which tests have been written against.\u003C\u002Fem\u003E\u003C\u002Fp\u003E\n\u003Ch2 id=\"yarn\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#yarn\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EYarn\u003C\u002Fh2\u003E\u003Col start=\"3\"\u003E\n\u003Cli\u003Eremove \u003Ccode\u003Eyarn.lock\u003C\u002Fcode\u003E file\u003C\u002Fli\u003E\n\u003Cli\u003Eremove \u003Ccode\u003Enode_modules\u003C\u002Fcode\u003E directory\u003C\u002Fli\u003E\n\u003Cli\u003ERun the \u003Ccode\u003Eyarn\u003C\u002Fcode\u003E command\u003C\u002Fli\u003E\n\u003Cli\u003EAfter installation has completed and you have run your tests consider upgrading other dependencies as well. The \u003Ccode\u003Eyarn outdated\u003C\u002Fcode\u003E command can be used.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n\u003Ch2 id=\"npm\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#npm\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003ENPM\u003C\u002Fh2\u003E\u003Col start=\"3\"\u003E\n\u003Cli\u003Eremove \u003Ccode\u003Epackage-lock.json\u003C\u002Fcode\u003E file\u003C\u002Fli\u003E\n\u003Cli\u003Eremove \u003Ccode\u003Enode_modules\u003C\u002Fcode\u003E directory\u003C\u002Fli\u003E\n\u003Cli\u003ERun the \u003Ccode\u003Enpm install\u003C\u002Fcode\u003E command\u003C\u002Fli\u003E\n\u003Cli\u003EAfter installation has completed and you have run your tests consider upgrading other dependencies as well. The \u003Ccode\u003Enpm outdated\u003C\u002Fcode\u003E command can be used.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n"},contributors:[]}],fetch:[],mutations:[]});