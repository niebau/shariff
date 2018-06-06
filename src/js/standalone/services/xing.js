'use strict'

module.exports = function(shariff) {
  var url = encodeURIComponent(shariff.getURL())
  return {
    popup: true,
    shareText: {
      'bg': 'cподеляне',
      'cs': 'sdílet',
      'da': 'del',
      'de': 'teilen',
      'en': 'share',
      'es': 'compartir',
      'fi': 'Jaa',
      'fr': 'partager',
      'hr': 'podijelite',
      'hu': 'megosztás',
      'it': 'condividi',
      'ja': '共有',
      'ko': '공유하기',
      'nl': 'delen',
      'no': 'del',
      'pl': 'udostępnij',
      'pt': 'compartilhar',
      'ro': 'partajează',
      'ru': 'поделиться',
      'sk': 'zdieľať',
      'sl': 'deli',
      'sr': 'podeli',
      'sv': 'dela',
      'tr': 'paylaş',
      'zh': '分享'
    },
    name: 'xing',
    faPrefix: 'shariff-standalone-icon',
    faName: 'shariff-standalone-icon-xing',
    title: {
      'bg': 'Сподели в XING',
      'cs': 'Sdílet na XINGu',
      'da': 'Del på XING',
      'de': 'Bei XING teilen',
      'en': 'Share on XING',
      'es': 'Compartir en XING',
      'fi': 'Jaa XINGissä',
      'fr': 'Partager sur XING',
      'hr': 'Podijelite na XING',
      'hu': 'Megosztás XINGen',
      'it': 'Condividi su XING',
      'ja': 'XING上で共有',
      'ko': 'XING에서 공유하기',
      'nl': 'Delen op XING',
      'no': 'Del på XING',
      'pl': 'Udostępnij przez XING',
      'pt': 'Compartilhar no XING',
      'ro': 'Partajează pe XING',
      'ru': 'Поделиться на XING',
      'sk': 'Zdieľať na XING',
      'sl': 'Deli na XING',
      'sr': 'Podeli na XING-u',
      'sv': 'Dela på XING',
      'tr': 'XING\'ta paylaş',
      'zh': '分享至XING'
    },
    shareUrl: 'https://www.xing.com/social_plugins/share?url=' + url + shariff.getReferrerTrack()
  }
}
