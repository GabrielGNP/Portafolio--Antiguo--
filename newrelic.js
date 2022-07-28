'use strict'
exports.config={app_name:['Portafolio'],
                license_key:process.env.LICENSE_KEY,
                logging:{level:'info'},
                allow_all_headers:true,
                attributes:{exclude:['request.headers.cookie','request.headers.authorization','request.headers.proxyAuthorization','request.headers.setCookie*','request.headers.x*','response.headers.cookie','response.headers.authorization','response.headers.proxyAuthorization','response.headers.setCookie*','response.headers.x*']}}// Replace this comment with the code found in Lesson 1.2 of the Hello New Relic course
