[rewrite_local]
# > 网易云音乐test
^https?:\/\/.*\/eapi\/(music|s(ong|ingle|earch)|album|link|zone|content|p(laylist|rivilege|laymode|urchased)|r(esni|nca)che|vip(auth|pro|(new)?center)|music-vip-membership).+ url script-request-header https://raw.githubusercontent.com/kencfd/testjs/master/test.js
^https?:\/\/.*\/api\/clientlog\/encrypt\/upload url reject-array
^https?:\/\/.*\/eapi\/ad\/.+ url reject-array
[mitm] 
hostname = *music.163.com, 115.236.121.4, 115.236.118.34, 115.238.119.68, 183.136.182.19

*******************************/
let headers = $response.headers;
headers['X-Real-IP'] = '117.136.39.0';
headers['Forwarded-For'] = '117.136.39.0';
$done({'headers':headers})
