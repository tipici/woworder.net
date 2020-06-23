__NUXT_JSONP__("/faq/nginx-proxy", {data:[{},{path:"\u002Fvi\u002Ffaq\u002Fnginx-proxy",section:"faq",page:{attrs:{title:"Using nginx as a reverse proxy",description:"How to use nginx as a reverse proxy"},body:"\u003Cpre\u003E\u003Ccode class=\"hljs nginx\"\u003Emap $sent_http_content_type $expires {\n    \"text\u002Fhtml\"                 epoch;\n    \"text\u002Fhtml; charset=utf-8\"  epoch;\n    default                     off;\n}\n\nserver {\n    listen          80;             # the port nginx is listening on\n    server_name     your-domain;    # setup your domain here\n\n    gzip            on;\n    gzip_types      text\u002Fplain application\u002Fxml text\u002Fcss application\u002Fjavascript;\n    gzip_min_length 1000;\n\n    location \u002F {\n        expires $expires;\n\n        proxy_redirect                      off;\n        proxy_set_header Host               $host;\n        proxy_set_header X-Real-IP          $remote_addr;\n        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto  $scheme;\n        proxy_read_timeout          1m;\n        proxy_connect_timeout       1m;\n        proxy_pass                          http:\u002F\u002F127.0.0.1:3000; # set the address of the Node.js instance here\n    }\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Ch1 id=\"using-nginx-with-generated-pages-and-a-caching-proxy-as-fallback-\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#using-nginx-with-generated-pages-and-a-caching-proxy-as-fallback-\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003EUsing nginx with generated pages and a caching proxy as fallback:\u003C\u002Fh1\u003E\u003Cp\u003EIf you have a high volume website with regularly changing content, you might want to benefit from Nuxt generate capabilities and \u003Ca href=\"https:\u002F\u002Fwww.nginx.com\u002Fblog\u002Fnginx-caching-guide\"\u003Enginx caching\u003C\u002Fa\u003E.\u003C\u002Fp\u003E\n\u003Cp\u003EBelow is an example configuration. Keep in mind that:\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003Eroot folder should be the same as set by \u003Ca href=\"\u002Fapi\u002Fconfiguration-generate#dir\"\u003Econfiguration generate.dir\u003C\u002Fa\u003E\u003C\u002Fli\u003E\n\u003Cli\u003Eexpire headers set by Nuxt are stripped (due to the cache)\u003C\u002Fli\u003E\n\u003Cli\u003Eboth Nuxt as nginx can set additional headers, it&#39;s advised to choose one (if in doubt, choose nginx)\u003C\u002Fli\u003E\n\u003Cli\u003Eif your site is mostly static, increase the \u003Ccode\u003Eproxy_cache_path inactive\u003C\u002Fcode\u003E and \u003Ccode\u003Eproxy_cache_valid\u003C\u002Fcode\u003E numbers\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cp\u003EIf you don&#39;t generate your routes but still wish to benefit from nginx cache:\u003C\u002Fp\u003E\n\u003Cul\u003E\n\u003Cli\u003Eremove the \u003Ccode\u003Eroot\u003C\u002Fcode\u003E entry\u003C\u002Fli\u003E\n\u003Cli\u003Echange \u003Ccode\u003Elocation @proxy {\u003C\u002Fcode\u003E to \u003Ccode\u003Elocation \u002F {\u003C\u002Fcode\u003E\u003C\u002Fli\u003E\n\u003Cli\u003Eremove the other 2 \u003Ccode\u003Elocation\u003C\u002Fcode\u003E entries\u003C\u002Fli\u003E\n\u003C\u002Ful\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs nginx\"\u003Eproxy_cache_path  \u002Fdata\u002Fnginx\u002Fcache levels=1:2 keys_zone=nuxt-cache:25m max_size=1g inactive=60m use_temp_path=off;\n\nmap $sent_http_content_type $expires {\n    \"text\u002Fhtml\"                 1h; # set this to your needs\n    \"text\u002Fhtml; charset=utf-8\"  1h; # set this to your needs\n    default                     7d; # set this to your needs\n}\n\nserver {\n    listen          80;             # the port nginx is listening on\n    server_name     your-domain;    # setup your domain here\n\n    gzip            on;\n    gzip_types      text\u002Fplain application\u002Fxml text\u002Fcss application\u002Fjavascript;\n    gzip_min_length 1000;\n\n    charset utf-8;\n\n    root \u002Fvar\u002Fwww\u002FNUXT_PROJECT_PATH\u002Fdist;\n\n    location ~* \\.(?:ico|gif|jpe?g|png|woff2?|eot|otf|ttf|svg|js|css)$ {\n        expires $expires;\n        add_header Pragma public;\n        add_header Cache-Control \"public\";\n\n        try_files $uri $uri\u002F @proxy;\n    }\n\n    location \u002F {\n        expires $expires;\n        add_header Content-Security-Policy \"default-src 'self' 'unsafe-inline';\";\n        add_header Strict-Transport-Security \"max-age=31536000; includeSubDomains; preload\" always;\n        add_header X-Frame-Options \"SAMEORIGIN\";\n\n        try_files $uri $uri\u002Findex.html @proxy; # for generate.subFolders: true\n        # try_files $uri $uri.html @proxy; # for generate.subFolders: false\n    }\n\n    location @proxy {\n        expires $expires;\n        add_header Content-Security-Policy \"default-src 'self' 'unsafe-inline';\";\n        add_header Strict-Transport-Security \"max-age=31536000; includeSubDomains; preload\" always;\n        add_header X-Frame-Options \"SAMEORIGIN\";\n        add_header X-Cache-Status $upstream_cache_status;\n\n        proxy_redirect                      off;\n        proxy_set_header Host               $host;\n        proxy_set_header X-Real-IP          $remote_addr;\n        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto  $scheme;\n        proxy_ignore_headers        Cache-Control;\n        proxy_http_version          1.1;\n        proxy_read_timeout          1m;\n        proxy_connect_timeout       1m;\n        proxy_pass                  http:\u002F\u002F127.0.0.1:3000; # set the address of the Node.js instance here\n        proxy_cache                 nuxt-cache;\n        proxy_cache_bypass          $arg_nocache; # probably better to change this\n        proxy_cache_valid           200 302  60m; # set this to your needs\n        proxy_cache_valid           404      1m;  # set this to your needs\n        proxy_cache_lock            on;\n        proxy_cache_use_stale error timeout http_500 http_502 http_503 http_504;\n        proxy_cache_key             $uri$is_args$args;\n        proxy_cache_purge           PURGE from 127.0.0.1;\n    }\n}\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Ch1 id=\"nginx-configuration-for-laravel-forge-\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#nginx-configuration-for-laravel-forge-\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003Enginx configuration for Laravel Forge:\u003C\u002Fh1\u003E\u003Cp\u003EChange \u003Ccode\u003EYOUR_WEBSITE_FOLDER\u003C\u002Fcode\u003E to your website folder and \u003Ccode\u003EYOUR_WEBSITE_DOMAIN\u003C\u002Fcode\u003E to your website URL. Laravel Forge will have filled out these values for you but be sure to double check.\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs nginx\"\u003E# FORGE CONFIG (DOT NOT REMOVE!)\ninclude forge-conf\u002FYOUR_WEBSITE_FOLDER\u002Fbefore\u002F*;\n\nmap $sent_http_content_type $expires {\n    \"text\u002Fhtml\"                 epoch;\n    \"text\u002Fhtml; charset=utf-8\"  epoch;\n    default                     off;\n}\n\nserver {\n    listen 80;\n    listen [::]:80;\n    server_name YOUR_WEBSITE_DOMAIN;\n\n    add_header X-Frame-Options \"SAMEORIGIN\";\n    add_header X-XSS-Protection \"1; mode=block\";\n    add_header X-Content-Type-Options \"nosniff\";\n\n    charset utf-8;\n\n    gzip            on;\n    gzip_types      text\u002Fplain application\u002Fxml text\u002Fcss application\u002Fjavascript;\n    gzip_min_length 1000;\n\n    # FORGE CONFIG (DOT NOT REMOVE!)\n    include forge-conf\u002FYOUR_WEBSITE_FOLDER\u002Fserver\u002F*;\n\n    location \u002F {\n        expires $expires;\n\n        proxy_redirect off;\n        proxy_set_header Host               $host;\n        proxy_set_header X-Real-IP          $remote_addr;\n        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto  $scheme;\n        proxy_read_timeout          1m;\n        proxy_connect_timeout       1m;\n        proxy_pass                          http:\u002F\u002F127.0.0.1:3000; # set the address of the Node.js\n    }\n\n    access_log off;\n    error_log  \u002Fvar\u002Flog\u002Fnginx\u002FYOUR_WEBSITE_FOLDER-error.log error;\n\n    location ~ \u002F\\.(?!well-known).* {\n        deny all;\n    }\n}\n\n# FORGE CONFIG (DOT NOT REMOVE!)\ninclude forge-conf\u002FYOUR_WEBSITE_FOLDER\u002Fafter\u002F*;\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E\u003Ch1 id=\"secure-laravel-forge-with-tls-\"\u003E\u003Ca class=\"anchor\" aria-hidden=\"true\" href=\"#secure-laravel-forge-with-tls-\"\u003E\u003Csvg version=\"1.1\" width=\"16\" height=\"16\" viewBox=\"0 0 16 16\" class=\"octicon octicon-link\" aria-hidden=\"true\"\u003E\u003Cpath fill-rule=\"evenodd\" d=\"M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z\"\u002F\u003E\u003C\u002Fsvg\u003E\u003C\u002Fa\u003ESecure Laravel Forge with TLS:\u003C\u002Fh1\u003E\u003Cp\u003EIt&#39;s best to let Laravel Forge do the editing of the \u003Ccode\u003Enginx.conf\u003C\u002Fcode\u003E for you, by clicking on Sites -&gt; YOUR_WEBSITE_DOMAIN (SERVER_NAME) and then click on SSL and install a certificate from one of the providers. Remember to activate the certificate. Your \u003Ccode\u003Enginx.conf\u003C\u002Fcode\u003E should now look something like this:\u003C\u002Fp\u003E\n\u003Cpre\u003E\u003Ccode class=\"hljs nginx\"\u003E# FORGE CONFIG (DOT NOT REMOVE!)\ninclude forge-conf\u002FYOUR_WEBSITE_FOLDER\u002Fbefore\u002F*;\n\nmap $sent_http_content_type $expires {\n    \"text\u002Fhtml\"                 epoch;\n    \"text\u002Fhtml; charset=utf-8\"  epoch;\n    default                     off;\n}\n\nserver {\n    listen 443 ssl http2;\n    listen [::]:443 ssl http2;\n    server_name YOUR_WEBSITE_DOMAIN;\n\n    # FORGE SSL (DO NOT REMOVE!)\n    ssl_certificate \u002Fetc\u002Fnginx\u002Fssl\u002FYOUR_WEBSITE_FOLDER\u002F258880\u002Fserver.crt;\n    ssl_certificate_key \u002Fetc\u002Fnginx\u002Fssl\u002FYOUR_WEBSITE_FOLDER\u002F258880\u002Fserver.key;\n\n    ssl_protocols TLSv1 TLSv1.1 TLSv1.2;\n    ssl_ciphers 'ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:AES128-GCM-SHA256:AES256-GCM-SHA384:AES128-SHA256:AES256-SHA256:AES128-SHA:AES256-SHA:AES:CAMELLIA:DES-CBC3-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!MD5:!PSK:!aECDH:!EDH-DSS-DES-CBC3-SHA:!EDH-RSA-DES-CBC3-SHA:!KRB5-DES-CBC3-SHA:!3DES';\n    ssl_prefer_server_ciphers on;\n    ssl_dhparam \u002Fetc\u002Fnginx\u002Fdhparams.pem;\n\n    add_header X-Frame-Options \"SAMEORIGIN\";\n    add_header X-XSS-Protection \"1; mode=block\";\n    add_header X-Content-Type-Options \"nosniff\";\n\n    charset utf-8;\n\n    gzip            on;\n    gzip_types      text\u002Fplain application\u002Fxml text\u002Fcss application\u002Fjavascript;\n    gzip_min_length 1000;\n\n    # FORGE CONFIG (DOT NOT REMOVE!)\n    include forge-conf\u002FYOUR_WEBSITE_FOLDER\u002Fserver\u002F*;\n\n    location \u002F {\n        expires $expires;\n\n        proxy_set_header Host               $host;\n        proxy_set_header X-Real-IP          $remote_addr;\n        proxy_set_header X-Forwarded-For    $proxy_add_x_forwarded_for;\n        proxy_set_header X-Forwarded-Proto  $scheme;\n        proxy_redirect              off;\n        proxy_read_timeout          1m;\n        proxy_connect_timeout       1m;\n        proxy_pass                          http:\u002F\u002F127.0.0.1:3000; # set the address of the Node.js\n    }\n\n    access_log off;\n    error_log  \u002Fvar\u002Flog\u002Fnginx\u002FYOUR_WEBSITE_FOLDER-error.log error;\n\n    location ~ \u002F\\.(?!well-known).* {\n        deny all;\n    }\n}\n\n# FORGE CONFIG (DOT NOT REMOVE!)\ninclude forge-conf\u002FYOUR_WEBSITE_FOLDER\u002Fafter\u002F*;\u003C\u002Fcode\u003E\u003C\u002Fpre\u003E"},contributors:[]}],fetch:[],mutations:[]});