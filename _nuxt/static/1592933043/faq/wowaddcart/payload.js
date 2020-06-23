__NUXT_JSONP__("/faq/wowaddcart", {data:[{},{path:"\u002Fvi\u002Ffaq\u002Fwowaddcart",section:"faq",page:{attrs:{title:"Async data in components?",description:"Async data in NuxtJS components?"},body:"\u003Cp\u003EBecause components do not have an \u003Ccode\u003EasyncData\u003C\u002Fcode\u003E method, you cannot directly fetch async data server side within a component. In order to get around this limitation you have two basic options:\u003C\u002Fp\u003E\n\u003Col\u003E\n\u003Cli\u003EMake the API call in the \u003Ccode\u003Emounted\u003C\u002Fcode\u003E hook and set data properties when loaded. \u003Cem\u003EDownside: Won&#39;t work for server side rendering.\u003C\u002Fem\u003E\u003C\u002Fli\u003E\n\u003Cli\u003EMake the API call in the \u003Ccode\u003EasyncData\u003C\u002Fcode\u003E or \u003Ccode\u003Efetch\u003C\u002Fcode\u003E methods of the page component and pass the data as props to the sub components. Server rendering will work fine. \u003Cem\u003EDownside: the \u003Ccode\u003EasyncData\u003C\u002Fcode\u003E or \u003Ccode\u003Efetch\u003C\u002Fcode\u003E of the page might be less readable because it&#39;s loading the data for other components\u003C\u002Fem\u003E.\u003C\u002Fli\u003E\n\u003C\u002Fol\u003E\n"},contributors:[]}],fetch:[],mutations:[]});