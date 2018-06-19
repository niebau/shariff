'use strict'

const standaloneClasses = {

  "addthis": "shariff-standalone-icon-plus-circle",
  "diaspora": "shariff-standalone-icon-asteriks",
  "facebook": "shariff-standalone-icon-facebook",
  "flattr": "shariff-standalone-icon-money",
  "flipboard": "shariff-standalone-icon-flipboard",
  "googleplus": "shariff-standalone-icon-google-plus-circle",
  "info": "shariff-standalone-icon-info",
  "linkedin": "shariff-standalone-icon-linkedin-square",
  "mail": "shariff-standalone-icon-envelope",
  "pinterest": "shariff-standalone-icon-pinterest",
  "print": "shariff-standalone-icon-print",
  "qzone": "shariff-standalone-icon-qq",
  "reddit": "shariff-standalone-icon-reddit",
  "stumbleupon": "shariff-standalone-icon-stumbleupon",
  "telegram": "shariff-standalone-icon-telegram",
  "tencent-weibo": "shariff-standalone-icon-tencent-weibo",
  "threema": "shariff-standalone-icon-lock",
  "tumblr": "shariff-standalone-icon-tumblr",
  "twitter": "shariff-standalone-icon-twitter",
  "vk": "shariff-standalone-icon-vk",
  "weibo": "shariff-standalone-icon-weibo",
  "whatsapp": "shariff-standalone-icon-whatsapp",
  "xing": "shariff-standalone-icon-xing"

}

module.exports = {

    // returns the shariff standalone font icon service class
    // as defined in standaloneClasses
    getStandaloneClass: function(serviceName) {

        var ret = standaloneClasses[serviceName];
        if (ret) {
            return ret;
        } else {
            return "";
        }

    },

    // returns the shariff standalone font icon base class
    getStandaloneBaseClass: function() {
        return "shariff-standalone-icon";
    }

}