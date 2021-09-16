// Copyright 2019 The El Empleo Authors. All Rights Reserved.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/// jquery library is required


window.GTM = {

  dataLayertagName: "dataLayerTag",
  actionPrefix: "EEW - ",

  addDataLayer: function (category, action, text, value, element) {

    var elementValue = "";
    var url;
    var alt;

    if (element) {
      if ($(element).is("input")) {
        elementValue = $(element).val().trim();
      }
      else {
        elementValue = $(element).text().trim();
        url = $(element).attr("href");
        alt = $(element).attr("alt") != undefined ? $(element).attr("alt") : "";
      }
    }

    var data = {
      "event": "ga_event",
      "category": category,
      "action": (window.GTM.actionPrefix + action.replace("{{value}}", elementValue).replace("{{url}}", url).replace("{{alt}}", alt)).GetCleanName(),
      "label": (text.replace("{{value}}", elementValue).replace("{{url}}", url).replace("{{alt}}", alt)).GetCleanName()
    };

    if (value) {
      data.value = value;
    }

    dataLayer.push(data);

  },
  addCustomDataLayer: function (data) {

    var json;
    if (typeof data === 'string') {
      json = JSON.parse(data);
    }
    else json = data;
    dataLayer.push(json);
  },
  addDataLayerTagToElement: function (category, action, text, element) {

    if (element && $(element).length > 0 && !$(element).attr(window.GTM.dataLayertagName)) {
      $(element).attr(window.GTM.dataLayertagName, category + ";" + action + ";" + text);
    }
  },
  addCustomDataLayerTagToElement: function (value, element) {

    var jsonString = JSON.stringify(value);
    if (element && $(element).length > 0 && !$(element).attr(window.GTM.dataLayertagName)) {
      $(element).attr(window.GTM.dataLayertagName, jsonString);
    }
  },

  addTagClickEvent: function () {

    var isCustom = true;
    var gtmlValue = $(this).attr(window.GTM.dataLayertagName);

    try { JSON.parse(gtmlValue); } catch (e) { isCustom = false; }
    if (isCustom) {

      elementValue = "";
      if ($(this).is("input")) {
        elementValue = $(this).val().trim();
      }
      else {
        elementValue = $(this).text().trim();
        url = $(this).attr("href");
      }
      gtmlValue = gtmlValue.replace("{{value}}", elementValue).replace("{{url}}", url).GetCleanName();
      window.GTM.addCustomDataLayer(gtmlValue);
    }

    else {

      var values = gtmlValue.split(';');

      if (values && values.length == 4) {
        window.GTM.addDataLayer(values[0], values[1], values[2], values[3], this);
      }

      if (values && values.length == 3) {
        window.GTM.addDataLayer(values[0], values[1], values[2], null, this);
      }

      else if (values && values.length == 2) {
        window.GTM.addDataLayer(values[0], values[1], "{{value}}", null, this);
      }
    }
  },

  addClickEventForTagedElement: function (element) {

    if (element && $(element).length > 0 && !$(element).isBound('click', window.GTM.addTagClickEvent)) {
      $(element).bind('click', window.GTM.addTagClickEvent);
    }
  },

  addClickEvent: function (category, action, text, element) {

    if (element && $(element).length > 0 && !$(element).isBound('click', window.GTM.addTagClickEvent)) {
      window.GTM.addDataLayerTagToElement(category, action, text, element);
      $(element).bind('click', window.GTM.addTagClickEvent);
    }
  },

  addCustomClickEvent: function (data, element) {

    if (element && $(element).length > 0 && !$(element).isBound('click', window.GTM.addTagClickEvent)) {
      window.GTM.addCustomDataLayerTagToElement(data, element);
      $(element).bind('click', window.GTM.addTagClickEvent);
    }
  },

  addChangeEvent: function (category, action, text, element) {

    if (element && $(element).length > 0 && !$(element).isBound('blur', window.GTM.addTagClickEvent)) {
      window.GTM.addDataLayerTagToElement(category, action, text, element);
      $(element).bind('change', window.GTM.addTagClickEvent);
    }
  },

  addBlurEvent: function (category, action, text, element) {

    if (element && $(element).length > 0 && !$(element).isBound('blur', window.GTM.addTagClickEvent)) {
      window.GTM.addDataLayerTagToElement(category, action, text, element);
      $(element).bind('blur', window.GTM.addTagClickEvent);
    }
  },

  addCallBackClickEvent: function (callback, element, bind) {

    if (element && $(element).length > 0 && callback && (bind || !$(element).isBound('click', callback))) {
      $(element).bind('click', callback);
    }
  },

  addCallBackChangeEvent: function (callback, element, bind) {

    if (element && $(element).length > 0 && (bind || !$(element).isBound('change', callback))) {
      $(element).bind('change', callback);
    }
  },

  addCallBackKeyDownEnterEvent: function (callback, element, bind) {

    if (element && $(element).length > 0 && callback && (bind || !$(element).isBound('keydown', callback))) {
      $(element).bind('keydown', callback);
    }
  },

  addCallBackBlurEvent: function (callback, element, bind) {

    if (element && $(element).length > 0 && (bind || !$(element).isBound('blur', callback))) {
      $(element).bind('blur', callback);
    }
  }
}

// function to detect is bind is attached to de event
$.fn.isBound = function (type, fn) {
  if (!this) return false;

  var dataEvents = $._data(this[0], 'events');
  if (dataEvents && dataEvents[type]) {

    var data = dataEvents[type];

    if (data === undefined || data.length === 0) {
      return false;
    }

    for (var i = 0; i < data.length; i++) {
      if (data[i].handler.toString() === fn.toString()) { return true; }
    }
  }
  return false;
}

function replacer(key, value) {
  if (typeof value === 'string' || value instanceof String) {
    return value.normalize("NFD").replace(/[\u0300-\u036f]/g, '');
  }
  return value;
}

// remove breaks lins and  remove multiple spaces with single space
Object.defineProperty(String.prototype, "GetCleanName", {
  value: function GetCleanName() {
    return this.replace(/(\r\n|\n|\r)/gm, "").replace(/ +/g, " ").normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\n/g, "").trim();
  },
  writable: true,
  configurable: true
});

// get date of string
Object.defineProperty(String.prototype, "GetGtmDate", {
  value: function GetGtmDate() {

    var localMonths = moment.monthsShort('-MMM-');

    if (moment && localMonths.length == 12) {

      var result = this.toLowerCase();
      var monthsShortEsCO = ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
      var monthEsCO = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

      for (var i = 0; i < monthsShortEsCO.length; i++) result = result.replace(monthsShortEsCO[i].toLowerCase(), localMonths[i]);
      for (var i = 0; i < monthEsCO.length; i++) result = result.replace(monthEsCO[i].toLowerCase(), localMonths[i]);

      return moment(result, 'DD MMM YYYY').format('DD/MM/YYYY');
    }

    return this;
  },
  writable: true,
  configurable: true
});
