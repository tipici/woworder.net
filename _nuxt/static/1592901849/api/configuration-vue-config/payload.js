__NUXT_JSONP__("/api/configuration-vue-config", {data:[{},{path:"\u002Fvi\u002Fapi\u002Fconfiguration-vue-config",section:"api",page:{attrs:{title:"API: The vue.config Property",description:"A config object for Vue.config"},body:"\u003Cul\u003E\n\u003Cli\u003EType: \u003Ccode\u003EObject\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003Cli\u003EDefault: \u003Ccode\u003E{ silent: !isDev, performance: isDev }\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cblockquote\u003E\n\u003Cp\u003EThe vue.config property provides a direct configuration bridge for the \u003Ccode\u003EVue.config\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003C\u002Fblockquote\u003E\n\u003Cp\u003E\u003Cstrong\u003EExample\u003C\u002Fstrong\u003E\u003C\u002Fp\u003E\n\u003Cp\u003E\u003Ccode\u003Enuxt.config.js\u003C\u002Fcode\u003E\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs js\"\u003E\u003Cspan class=\"hljs-keyword\"\u003Eexport\u003C\u002Fspan\u003E \u003Cspan class=\"hljs-keyword\"\u003Edefault\u003C\u002Fspan\u003E {\n  \u003Cspan class=\"hljs-attr\"\u003Evue\u003C\u002Fspan\u003E: {\n    \u003Cspan class=\"hljs-attr\"\u003Econfig\u003C\u002Fspan\u003E: {\n      \u003Cspan class=\"hljs-attr\"\u003EproductionTip\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-literal\"\u003Etrue\u003C\u002Fspan\u003E,\n      \u003Cspan class=\"hljs-attr\"\u003Edevtools\u003C\u002Fspan\u003E: \u003Cspan class=\"hljs-literal\"\u003Efalse\u003C\u002Fspan\u003E\n    }\n  }\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003EThis configuration will lead to the following Vue.config:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs js\"\u003EVue.config.productionTip \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F true\u003C\u002Fspan\u003E\nVue.config.devtools \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F false\u003C\u002Fspan\u003E\nVue.config.silent \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F !isDev [default value]\u003C\u002Fspan\u003E\nVue.config.performance \u003Cspan class=\"hljs-comment\"\u003E\u002F\u002F isDev [default value]\u003C\u002Fspan\u003E\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Cp\u003ETo learn more about the \u003Ccode\u003EVue.config\u003C\u002Fcode\u003E API, check out the \u003Ca href=\"https:\u002F\u002Fvuejs.org\u002Fv2\u002Fapi\u002F#Global-Config\"\u003Eofficial Vue documentation\u003C\u002Fa\u003E\u003C\u002Fp\u003E\n"},contributors:[]}],fetch:[],mutations:[]});