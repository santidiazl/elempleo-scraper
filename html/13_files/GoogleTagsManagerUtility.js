!function (global) {
  'use strict';

  var previouscallGoogleTagsManagerUtility = global.GoogleTagsManagerUtility;

  function GoogleTagsManagerUtility(options) {
    var $globalConfData;
    var $gtmAdbidEnable;

    function init() {
      $globalConfData = $('.js-conf-global-data');
      $gtmAdbidEnable = $globalConfData.data('gtmadbid-enable') ? $globalConfData.data('gtmadbid-enable').toLowerCase() == "true" : false;
    }

    function setEventAdbidOfferApply(jobOfferId) {
      if ($gtmAdbidEnable) {
        dataLayer.push({
          'id': jobOfferId,
          'event': 'APLICACION',
        });
      }
    }

    function setEventAdbidOfferViewDetail(jobOfferId) {
      if ($gtmAdbidEnable) {
        dataLayer.push({
          'id': jobOfferId,
          'event': 'PRODUCT_VIEW',
        });
      }
    }

    function setEventAdbidCv(status) {
      if ($gtmAdbidEnable) {
        dataLayer.push({
          'estado': status,
          'event': 'HOJADEVIDA',
        });
      }
    }

    function setEventAdbidPayIntentionVip(transactionId, transactionTotal) {
      if ($gtmAdbidEnable) {
        dataLayer.push({
          'transactionId': transactionId,
          'transactionTotal': transactionTotal,
          'transactionProducts':[{
            'sku': '001',
            'name': 'Empleo VIP',
            'category': 'Empleo VIP',
            'price': transactionTotal,
            'quantity': 1
          }]
        });

        dataLayer.push({
          'event': 'COMPRA',
        });
      }
    }

    init();

    return {
      SetEventAdbidOfferApply: setEventAdbidOfferApply,
      SetEventAdbidOfferViewDetail: setEventAdbidOfferViewDetail,
      SetEventAdbidCV: setEventAdbidCv,
      SetEventAdbidPayIntentionVip: setEventAdbidPayIntentionVip
    }
  }

  GoogleTagsManagerUtility.noConflict = function noConflict() {
    global.GoogleTagsManagerUtility = previouscallGoogleTagsManagerUtility;
    return GoogleTagsManagerUtility;
  };

  global.GoogleTagsManagerUtility = GoogleTagsManagerUtility;

}(this);
