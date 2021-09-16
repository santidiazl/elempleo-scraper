// Copyright 2019 The El Empleo Authors. All Rights Reserved.
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS-IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


$(document).ready(function () {
    loadUniversitiesGTM();
});

//$(window).load(function () {
//  AddHeaderGTM();
//});


function AddErrorLog(mesagge) {
    console.error(mesagge);
}

function loadUniversitiesGTM() {

    window.GTM.actionPrefix = "EEPW - ";

    try { AddUserGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in user process: " + e.message);
    }

    try { AddHeaderGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in header: " + e.message);
    }

    try { AddHomeViewGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in home view: " + e.message);
    }

    try { AddLoginViewGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in login view: " + e.message);
    }

    try { InitSessionGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in init session view: " + e.message);
    }

    try { AddProductClick(); } catch (e) {
        AddErrorLog("GTM ERROR in init session view: " + e.message);
    }

    try { RegisterCVStepZeroGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in register Cv step zero view: " + e.message);
    }

    try { RegisterCVStepOneGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in register Cv step one view: " + e.message);
    }

    try { CreateAccountGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in create account view: " + e.message);
    }

    try { AddResumeeGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in resumee view: " + e.message);
    }
    try { AddRelatedOfferGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in relate offer box: " + e.message);
    }

    try { UpdatePhoneViewGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in update phone view: " + e.message);
    }
    try { BreadCrumbGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in breadcrumb: " + e.message);
    }
    try { AddOfferDetailGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in offer detail view: " + e.message);
    }
    try { AddCompanyDetailGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in company detail view: " + e.message);
    }
    try { AddBaseCompanyDetailGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in base company view: " + e.message);
    }
    try { AddCompanySearchGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in company search view: " + e.message);
    }
    try { AddOperativeregisterGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in operative register view: " + e.message);
    }
    try { AddAlertsGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in alerts view: " + e.message);
    }
    try { AddMyAccountGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in my account view: " + e.message);
    }
    try { AddStatisticsGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in statistics view: " + e.message);
    }
    try { AddOfferApplicationGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in offer application view: " + e.message);
    }
    try { AddJobOfferResultGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in offer result view: " + e.message);
    }
    try { AddMyCompaniesGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in my companies view: " + e.message);
    }

    try { AddBuyVipGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in buy VIP view: " + e.message);
    }

    try { AddBuyVipToGatewayGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in vipTo Gateway view: " + e.message);
    }

    try { AddPaymentGatewayGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in buy product Gateway view: " + e.message);
    }
    try { AddPayAppropriationPaymentGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in buy by pay apropriation: " + e.message);
    }

    try { AddMyVipGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in My VIP view: " + e.message);
    }
    try { AddContactView(); } catch (e) {
        AddErrorLog("GTM ERROR in contact view: " + e.message);
    }

    try { AddPdaTestGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in pda view: " + e.message);
    }

    try { AddPdaResultPage(); } catch (e) {
        AddErrorLog("GTM ERROR in pda resulta view: " + e.message);
    }

    try { AdviceGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in advice view: " + e.message);
    }

    try { MyAdviceGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in my advice view: " + e.message);
    }

    try { AddFooterGTM(); } catch (e) {
        AddErrorLog("GTM ERROR in footer: " + e.message);
    }


    //add click event to all dataLayerTags that have gtm tag but not have bind event
    var tgElements = $("[" + window.GTM.dataLayertagName + "]");

    $.each(tgElements, function (key, value) {
        window.GTM.addClickEventForTagedElement($(value));
    });

}


function AddLoginGTM(userId, state) {


    var stateText;
    if (state) stateText = "Exitoso";
    else stateText = "Fallido";


    var data = {
        "event": "ga_event",
        "category": "Iniciar sesion",
        "action": "EEPW - Ingresar",
        "label": stateText,
        "userID": userId
    };
    window.GTM.addCustomDataLayer(data);
}

function AddUserGTM() {
    var userGTM = $("[id$='userGTM']");
    if (userGTM.length > 0) {
        window.GTM.addDataLayer("Inicio pagina", "Usuario", userGTM.val(), null, userGTM[0]);
    }
}


function AddHeaderGTM() {

    var container = $(".header");
    if (container.length > 0) {

        var headerMenu = $(".js-header-menu-container a");
        $.each(headerMenu, function (key, value) {

            var rootMenuLink = $(value).closest(".dropdown-menu").closest("li").find("a:first");
            if (rootMenuLink && rootMenuLink.length > 0 && rootMenuLink != $(value)) {

                var parentText = rootMenuLink.text().GetCleanName();
                window.GTM.addClickEvent("Header", parentText + " - Submenu", "{{value}}", value);
            }
            else {
                var text = $(value).find("span:visible").text().GetCleanName();
                if (!text) text = "{{value}}"; // this is for special case in calculadora menu
                window.GTM.addClickEvent("Header", "Menu principal", text, value);
            }
        });

        //add logo tag
        var logo = $(".js-logo-container img");
        var text = "Inicio";
        window.GTM.addClickEvent("Home Logo", "Logo Home", text, logo);

        //add log btn tag
        var logginBtn = $("#btnRegisterCV");
        var text = $("#btnRegisterCV span:first").text().GetCleanName();
        if (text.length > 0) window.GTM.addClickEvent("Header", "Registrar hoja de vida", text, logginBtn);

        // add log off tag
        var statusText = $(".js-status-text:visible").text().GetCleanName();
        var data = {
            "event": "ga_event",
            "category": "Header",
            "action": "EEPW - Estado usuario",
            "label": "{{value}}",
            "estadoCurriculo": statusText
        };

        var logOffLink = $(".js-logOff");
        var myResumeeLink = $(".js-my-resumee-link");

        window.GTM.addCustomClickEvent(data, logOffLink);
        window.GTM.addCustomClickEvent(data, myResumeeLink);


        //add search panel
        var searchBtnClick = function (e) {
            var searchBox = container.find(".js-searchbox-input.tt-input").val();
            var queryLinks = container.find(".js-query-links").text().GetCleanName();


            if ($(e.currentTarget).is("a")) {
                searchBox = $(e.currentTarget).text().GetCleanName();
            }

            var searchData = {
                "event": "ga_event",
                "category": "Busqueda",
                "action": "EEPW - Buscador",
                "label": "Buscar",
                "terminoBuscado": searchBox,
                "ultimasBusquedas": queryLinks
            };

            window.GTM.addCustomDataLayer(searchData);

        }

        var searchKeyDownInput = function (e) {

            if (e.isComposing || e.keyCode === 13) {

                var searchBox = container.find(".js-searchbox-input.tt-input").val();
                var queryLinks = container.find(".js-query-links").text().GetCleanName();

                var searchData = {
                    "event": "ga_event",
                    "category": "Busqueda",
                    "action": "EEPW - Buscador",
                    "label": "Buscar",
                    "terminoBuscado": searchBox,
                    "ultimasBusquedas": queryLinks
                };

                window.GTM.addCustomDataLayer(searchData);
            }

        }

        var searchBtn = container.find(".js-btn-search:visible");

        window.GTM.addCallBackClickEvent(searchBtnClick, searchBtn);
        window.GTM.addCallBackKeyDownEnterEvent(searchKeyDownInput, searchBtn);


        //var queryLinkNotification = function (targetNode) {
        //  console.log("entro aqui");
        //  var querySearchLinks = targetNode.find("a");
        //  window.GTM.addCallBackClickEvent(function () { alert("AAAAAA"); }, querySearchLinks);
        //  return false;
        //}

        //var targetNodeQueryLink = $(".js-searchbox-form");
        //AddMutatorEvent(targetNodeQueryLink, queryLinkNotification, false, true);
        //queryLinkNotification(targetNodeQueryLink);
    }
}


function AddHomeViewGTM() {

    var container = $(".js-home-container");
    if (container.length > 0) {

        //add search button tag
        var searchBtn = $(".js-searchHeader");
        var searchBtnClick = function (e) {

            var searchText = $("#searchBox").val();
            var city = $(".js-cities-searchbox.tt-input").val();
            var data = {
                "event": "ga_event",
                "category": "Home",
                "action": "EEPW - Buscador",
                "label": searchText,
                "ciudad": city
            };
            window.GTM.addCustomDataLayer(data);

        }
        window.GTM.addCallBackClickEvent(searchBtnClick, searchBtn);

        // add banner link tag
        var bannerLink = $(".js-banner-link");
        window.GTM.addClickEvent("Home", "Banner carrusel", "{{value}}", bannerLink);

        //add banner rows btns
        var controlsBannerBtns = $(".js-carousel-container .carousel-control");

        var changeItemBannerClick = function (e) {

            var index = $(e.currentTarget).parent().find(".item.active").index('.js-carousel-featured-banner .item');
            var direction = $(e.currentTarget).data("slide");
            var product = $(e.currentTarget).parent().parent().find(".item.active").find(".js-banner-link").text().GetCleanName();

            var searchText = $("#searchBox").val();
            var city = $(".js-cities-searchbox.tt-input").val();
            var data = {
                "event": "ga_event",
                "category": "Home",
                "action": "EEPW - " + product + " - Slider" + (index + 1),
                "label": direction == "prev" ? "Back" : "Next"
            };
            window.GTM.addCustomDataLayer(data);

        }
        window.GTM.addCallBackClickEvent(changeItemBannerClick, controlsBannerBtns);


        //add last created offers
        var lastJobOffers = $(".js-last-published-offers");

        var lastOfferDataImp = {
            "event": "product-list-impressions",
            "ecommerce": {
                'impressions': []
            }
        };


        $.each(lastJobOffers, function (key, value) {

            var offerName = $(value).find("a").attr("title");
            var offerId = $(value).find(".js-offer-id").attr("value");
            var rangeSalary = $(value).find(".offer-salary").text().GetCleanName();
            var companyName = $(value).find("img").attr("title");

            var lastOfferData = {
                "event": "productClick",
                "ecommerce": {
                    'click': {
                        "actionField": { 'list': 'home' },
                        "products": [
                            {
                                'name': offerName,
                                'id': offerId,
                                'brand': "oferta - home",
                                'category': "ultimos empleos publicados",
                                'position': key + 1,
                                'dimension7': companyName,
                                "dimension21": rangeSalary
                            }]
                    }
                }
            };

            lastOfferDataImp.ecommerce.impressions.push({
                'name': offerName,
                'id': offerId,
                'brand': "oferta - home",
                'category': "ultimos empleos publicados",
                'list': 'home',
                'position': key + 1,
                'dimension7': companyName,
                "dimension21": rangeSalary
            });

            window.GTM.addCustomClickEvent(lastOfferData, value);
        });

        window.GTM.addCustomDataLayer(lastOfferDataImp);


        //watch all companies btn add tag
        var watchCompaniesBtn = $(".btn-watch-companies");
        window.GTM.addClickEvent("Carrusel Home", "Carrusel empresas", "{{value}}", watchCompaniesBtn);

        //companies carrrousel add tags
        var carouselCompaniesContainer = $(".js-carousel-companies");
        if (carouselCompaniesContainer.length > 0) {

            const targetNode = carouselCompaniesContainer[0];
            const config = { attributes: true, childList: true, subtree: true };

            const companiesCarrouselCallback = function (mutationsList, observer) {

                var prevButton = carouselCompaniesContainer.find(".slick-prev");
                var nextButton = carouselCompaniesContainer.find(".slick-next");

                window.GTM.addClickEvent("Carrusel Home", "Carrusel empresas", "Back", prevButton);
                window.GTM.addClickEvent("Carrusel Home", "Carrusel empresas", "Next", nextButton);

                var companies = carouselCompaniesContainer.find(".slick-slide a");
                if (companies && companies.length > 0) {

                    var comapaniesDataImp = {
                        "event": "product-list-impressions",
                        "ecommerce": {
                            'impressions': []
                        }
                    };

                    $.each(companies, function (key, value) {

                        var companyName = $(value).find("p").text().GetCleanName();
                        var linkUrl = $(value).attr("href");
                        var index1 = linkUrl.lastIndexOf("/") + 1;
                        var companyId = index1 > 0 ? linkUrl.substring(index1, linkUrl.length - 1) : "";

                        var comapaniesData = {
                            "event": "productClick",
                            "ecommerce": {
                                'click': {
                                    "actionField": { 'list': 'home' },
                                    "products": [
                                        {
                                            'name': companyName,
                                            'id': companyId,
                                            'brand': "carrousel empresas",
                                            'category': "empresas",
                                            'position': key + 1
                                        }
                                    ]
                                }
                            }
                        };

                        comapaniesDataImp.ecommerce.impressions.push({
                            'name': companyName,
                            'id': companyId,
                            'brand': "carrousel empresas",
                            'category': "empresas",
                            'position': key + 1
                        });

                        window.GTM.addCustomClickEvent(comapaniesData, value);
                    });

                    window.GTM.addCustomDataLayer(comapaniesDataImp);
                    carouselObserver.disconnect();
                }
            };

            const carouselObserver = new MutationObserver(companiesCarrouselCallback);
            carouselObserver.observe(targetNode, config);

        }

        //add offers by city tag
        var offersCities = $(".offers-by-city a");
        $.each(offersCities, function (key, value) {
            var name = $(value).find(".js-city-name");
            window.GTM.addClickEvent("Empleo por ciudad", "Por ciudad", "{{value}}", value);
        });

        //add vip link
        //var vipLink = $(".js-vip-link");
        //window.GTM.addClickEvent("Empleo VIP", "El empleo VIP", "{{value}}", vipLink);

        // add recommende offers
        var recommendedOfers = $(".js-recommended-offers");
        if (recommendedOfers.length > 0) {

            var recommendedOffers = recommendedOfers.find("a");

            $.each(recommendedOffers, function (key, value) {
                var areaText = $(value).find(".js-area-text").text();
                window.GTM.addClickEvent("Busqueda recomendadas ", "Busqueda recomendadas ", "{{value}}", value);
            });
        }

        //add btn-go-contact
        var contactBtn = $(".js-go-contact-btn");
        var questionsBtn = $(".js-questions-btn");
        window.GTM.addClickEvent("Servicio al cliente", "Servicio al cliente", "ir a: {{value}}", contactBtn);
        window.GTM.addClickEvent("Servicio al cliente", "Servicio al cliente", "ir a: {{value}}", questionsBtn);

        //add statistics section tags
        var statisticsLink = $(".js-statistics-link");
        var buyVipBtn = $(".js-buy-vip-btn");
        window.GTM.addClickEvent("Estadisticas de hoja de vida", "Ver Estadisticas", "{{value}}", statisticsLink);
        window.GTM.addClickEvent("Estadisticas de hoja de vida", "Empleo VIP", "{{value}}", buyVipBtn);

        //add prefooter list
        var prefooterList = $(".js-prefooter-list a");
        $.each(prefooterList, function (key, value) {
            window.GTM.addClickEvent("Busquedas Rapidas", "Busquedas rapidas", "Busquedas de empleo rapidas - {{value}}", value);
        })

    }
}


function AddLoginViewGTM() {

    var container = $(".js-login-view-container");
    if (container.length > 0) {

        var recoverPassLink = $(".jsRecoverPassword");
        var changeEmailLink = $(".js-change-email");
        var RegisterCVLogin = $("#btnRegisterCVLogin");

        window.GTM.addClickEvent("Iniciar Sesion", "Ingresar", "{{value}}", recoverPassLink);
        window.GTM.addClickEvent("Iniciar Sesion", "Ingresar", "{{value}}", changeEmailLink);
        window.GTM.addClickEvent("Iniciar Sesion", "RegistroCurriculo", "{{value}}", RegisterCVLogin);
    }
}

function InitSessionGTM() {

    var recoverByIdContainer = $(".js-is-recover-by-identity");
    var recoverByEmailContainer = $(".js-recovery-by-email");
    if (recoverByIdContainer.length > 0 || recoverByEmailContainer.length > 0) {


        // add change mode links tags
        var changeFormBtns = $(".js-change-form-button");
        $.each(changeFormBtns, function (key, value) {
            window.GTM.addClickEvent("Iniciar Sesion", "Recuperar Contraseña", "{{value}}", value);
        });

        // add recover buttons tags
        var recoverBtns = $(".js-btn-create-psw");
        $.each(recoverBtns, function (key, value) {

            var btn = $(value);
            var recoverBtnClick = function () {

                var forms = $(".js-recover-form");
                $.each(forms, function (formKey, formValue) {
                    var form = $(formValue);
                    if (form.is(":visible") && form.valid()) {
                        window.GTM.addDataLayer("Iniciar Sesion", "Recuperar Contraseña", "{{value}}", null, value);
                    }
                });
            };

            btn.bind('click', recoverBtnClick);
        });
    }

    //add change email tags
    var changeEmailContainer = $(".js-change-email-container");
    if (changeEmailContainer.length > 0) {

        var chnageEmailBtnClick = function (e) {

            if (form.valid()) {
                window.GTM.addDataLayer("Iniciar Sesion", "Recuperar Cuenta", "{{value}}", null, $(e.currentTarget));
            }
        }

        var changeEmailBtn = changeEmailContainer.find(".js-btn-change-email");
        window.GTM.addCallBackClickEvent(chnageEmailBtnClick, changeEmailBtn);

        var form = $(".js-change-email-by-id-form");

        //add change email notification link
        var addChangeEmailNotification = function (targetNode) {

            var notificationlink = $(".js-notifications a");
            window.GTM.addClickEvent("Iniciar Sesion", "Recuperar Cuenta - Mensaje", "{{value}}", notificationlink);
            return (notificationlink.length > 0);
        }

        var targetNode = $(".js-notifications");
        AddMutatorEvent(targetNode, addChangeEmailNotification, false);
    }
}

function RegisterCVStepZeroGTM() {

    var container = $(".js-container-step-zero");
    if (container.length > 0) {

        //add btn tag
        var createCvBtn = container.find(".btn-create-cv");

        var createCvBtnClick = function (e) {

            var form = container.find(".js-form-step-zero");

            if (form.valid()) {
                var identificationType = container.find(".js-identificationType select option:selected").text();
                var btnName = $(e.currentTarget).text().GetCleanName();

                var data = {
                    "event": "ga_event",
                    "category": "Crear Cuenta",
                    "action": "EEPW - RegistroCurriculo",
                    "label": btnName,
                    "TipoIdentificacion": identificationType
                };
                window.GTM.addCustomDataLayer(data);
            }

        }
        createCvBtn.bind('click', createCvBtnClick);
    }
}

function RegisterCVStepOneGTM() {

    var container = $(".js-container-step-one");
    if (container.length > 0) {

        //add btn tag
        var createCvStep2Btn = container.find(".js-createCurriculom");

        var createCvStep2BtnClick = function (e) {

            var form = container.find(".js-form-step-one");

            if (form.valid()) {
                var educationlevel = container.find(".js-education-level select option:selected").text();
                var hasExperience = container.find("#HasLaboralExperience_SelectedId:checked").val();
                var btnName = $(e.currentTarget).text().GetCleanName();

                var data = {
                    "event": "ga_event",
                    "category": "Crear Cuenta",
                    "action": "EEPW - RegistroCurriculo",
                    "label": btnName,
                    "NivelDeEstudios": educationlevel,
                    "Experiencia": hasExperience == "true" ? "si" : "no",
                };
                window.GTM.addCustomDataLayer(data);
            }

        }
        createCvStep2Btn.bind('click', createCvStep2BtnClick);
    }
}


function CreateAccountGTM() {

    var container = $(".js-create-user-container");
    if (container.length > 0) {

        //add btn tag
        var createAccountBtn = container.find(".js-create-account");

        var createAccountBtnClick = function (e) {

            var form = container.find(".js-register-form");

            if (form.valid()) {
                var identificationType = container.find(".js-identificationType select option:selected").text();
                var position = container.find(".js-position input").val();
                var btnName = $(e.currentTarget).text().GetCleanName();

                var data = {
                    "event": "ga_event",
                    "category": "Crear Cuenta",
                    "action": "EEPW - Crear cuenta",
                    "label": btnName,
                    "TipoIdentificacion": identificationType,
                    "UltimoCargo": position
                };
                window.GTM.addCustomDataLayer(data);
            }

        }
        createAccountBtn.bind('click', createAccountBtnClick);

        // add terms an condicions and privacy notice tags
        var terms = container.find(".js-terms-and-conditions");
        var privacyNotice = container.find(".js-privacy-notice");

        window.GTM.addClickEvent("Crear Cuenta", "Crear cuenta - Ir a", "{{value}}", terms);
        window.GTM.addClickEvent("Crear Cuenta", "Crear cuenta - Ir a", "{{value}}", privacyNotice);
    }
}

function AddRelatedOfferGTM() {

    //  add related offers tags
    //var relatedOffers = $(".js-related-offert-container");

    //if (relatedOffers.length > 0) {

    //  var relatedOffersImp = {
    //    "event": "product-list-impressions",
    //    "ecommerce": {
    //      'impressions': []
    //    }
    //  };

    //  $.each(relatedOffers, function (key, value) {

    //    var offerLink = $(value).find("a");
    //    var jobOfferTitle = offerLink.attr("title");
    //    var jobOfferId = $(value).find(".js-offer-id").val();
    //    var companyName = $(value).find(".js-company-name").text().GetCleanName();
    //    var salary = $(value).find(".js-salary").text().GetCleanName();

    //    relatedOffersImp.ecommerce.impressions.push({
    //      "name": jobOfferTitle,
    //      "id": jobOfferId,
    //      "brand": "Oferta",
    //      "category": "Detalle Oferta",
    //      "list":"OportinidadesParaTi",
    //      "position": (key + 1),
    //      "dimension7": companyName,
    //      "dimension21": salary,
    //    });


    //    var relatedOffersClick = function (e) {

    //      var data = {
    //        "event": "product-click",
    //        "ecommerce": {
    //          "click": {
    //            "actionField": { 'list': 'OportinidadesParaTi' },
    //            "products": [
    //                       {
    //                         "name": jobOfferTitle,
    //                         "id": jobOfferId,
    //                         "brand": "Oferta",
    //                         "category": "Detalle Oferta",
    //                         "position": (key + 1),
    //                         "dimension7": companyName,
    //                         "dimension21": salary,
    //                       }]
    //          }
    //        }
    //      };

    //      window.GTM.addCustomDataLayer(data);

    //    };
    //    window.GTM.addCallBackClickEvent(relatedOffersClick, offerLink);
    //  });

    //  window.GTM.addCustomDataLayer(relatedOffersImp);
    //}

    //add similar offer link 
    //var resultJobOfferLink = $(".js-similar-joboffer-link");
    //var similarOfferTitle = $(".js-similar-joboffer-title").text().GetCleanName();
    //if (resultJobOfferLink.length > 0) window.GTM.addClickEvent("Detalle Oferta", "AplicarOferta - " + similarOfferTitle, "{{value}}", resultJobOfferLink);

}

function AddResumeeGTM() {

    var container = $(".js-myresume-wrapper");
    if (container.length > 0) {

        //add new user tag
        var $conf = $('.js-conf');
        if ($conf.length > 0) {
            var isNewRegister = $conf.data('is-new-register');
            var userGTM = $("[id$='userGTM']").val();

            if (isNewRegister && isNewRegister.toLowerCase() === 'true' && userGTM) {
                var data = {
                    "event": "ga_event",
                    "category": "Crear Cuenta",
                    "action": "EEPW - Crear cuenta",
                    "label": "Crear Cuenta Exitosa",
                    "userId": userGTM
                };
                window.GTM.addCustomDataLayer(data);
            }
        }

        //add optional personal info module tags
        var optionalProfessionalInfoModule = $(".info-anchors-optional li");
        $.each(optionalProfessionalInfoModule, function (key, value) {
            var links = $(value).find("a");

            if (links.length > 0) {

                var link1 = links.eq(0);
                var title = $(value).closest("ul").find("span")[0].innerText.GetCleanName().replace(":", "");
                window.GTM.addClickEvent("Home - Hoja de vida", title, "{{value}}", link1);
            }
        });

        //add personal info module tags
        var professionalInfoModule = $(".js-professional-info-module li");
        $.each(professionalInfoModule, function (key, value) {
            var links = $(value).find("a");

            if (links.length > 1) {

                var link1 = links.eq(0);
                var link2 = links.eq(1);
                var title = link1.text().GetCleanName();

                window.GTM.addClickEvent("Columna editor de perfil", "Completar hoja de vida", "{{value}}", link1);
                window.GTM.addClickEvent("Columna editor de perfil", "Completar hoja de vida", title + " - {{value}}", link2);
            }
        });

        //add top links tags
        var navbarContainer = $(".js-resumee-navbar-container a");
        $.each(navbarContainer, function (navbarKey, navbarValue) {
            window.GTM.addClickEvent("Configuracion Perfil", "Sub-menu - Curriculo", "{{value}}", navbarValue);
        });

        //  add pda test tags
        var pdaTestBtn = $(".js-pda-test-bnt");
        if (pdaTestBtn.length > 0) window.GTM.addClickEvent("Configuracion Perfil", "EditarPerfil - PruebaConductual", "{{value}}", pdaTestBtn);

        var pdaPanelCollapseMutator = function (targetNode) {

            var pdaContainerTestBtn = targetNode.find(".js-pda-test-bnt");
            if (pdaContainerTestBtn.length > 0) {
                window.GTM.addClickEvent("Configuracion Perfil", "EditarPerfil - PruebaConductual", "{{value}}", pdaContainerTestBtn);
                return true;
            }
        }
        var pdaPanelCollapse = $(".js-pda-content");
        if (pdaPanelCollapse.length > 0) AddMutatorEvent(pdaPanelCollapse, pdaPanelCollapseMutator, false);

        //  add statistics tags
        var statisticsBtn = $(".js-statistics");
        if (statisticsBtn.length > 0) window.GTM.addClickEvent("Configuracion Perfil", "EditarPerfil - Estadisticas", "{{value}}", statisticsBtn);

        //add delete modal tags
        var deleteModalSaveBtn = $(".js-modal-delete .js-modal-btn-delete");
        var deleteModalCancelBtn = $(".js-modal-delete .js-modal-btn-cancel");

        if (deleteModalSaveBtn.length > 0) window.GTM.addClickEvent("Configuracion Perfil", "ConfirmacionEliminacion", "{{value}}", deleteModalSaveBtn);
        if (deleteModalCancelBtn.length > 0) window.GTM.addClickEvent("Configuracion Perfil", "ConfirmacionEliminacion", "{{value}}", deleteModalCancelBtn);


        //add share resumee modal
        var shareresumeeBtn = $(".js-modal-share-resume .js-share-resume-btn");
        var shareOfferBtnClick = function (e) {
            var form = $(".js-modal-share-resume form");
            if (form.valid()) {
                window.GTM.addDataLayer("Configuracion Perfil", "Compartir - Curriculo", $(e.currentTarget).text().GetCleanName(), null, null);
            }
        };
        window.GTM.addCallBackClickEvent(shareOfferBtnClick, shareresumeeBtn);


        //add resume modules tags
        var modules = $(".resume-module");

        $.each(modules, function (key, value) {

            //get inner text but ignore text of js-btn-edit  tooltip
            var title = $(value).find(".module-title").contents().filter(function () {
                return !$(this).hasClass("cta-edit");
            }).text().GetCleanName();

            var subModules = $(value).children("div");
            $.each(subModules, function (subModuleKey, subModuleValue) {

                var subModule = $(subModuleValue);

                var subModuleMutatorEvent = function (targetNode) {

                    var subModuleName = targetNode.find("h3.h4").text().GetCleanName();
                    if (subModuleName) subModuleName = " - " + subModuleName;
                    //add butons tags
                    var editLink = targetNode.find(".js-edit-form, .js-btn-add, .js-btn-add-summary");
                    $.each(editLink, function (keyLink, valueLink) {

                        //get inner text but ignore text of js-btn-edit  tooltip
                        var labelValue = $(valueLink).contents().filter(function () {
                            return !$(this).hasClass("cta-edit");
                        }).text().GetCleanName();

                        if ($(valueLink).find(".js-profile-photo").length > 0) {
                            labelValue = "Foto";
                        }

                        window.GTM.addClickEvent("Configuracion Perfil", "Editar perfil - " + title + subModuleName, labelValue, valueLink);
                    });

                    //add save button for attached files module
                    var attachedFilesSaveBtn = $(".js-box-attachments .js-btn-save");
                    if (attachedFilesSaveBtn.length > 0) window.GTM.addClickEvent("Configuracion Perfil", "Formulario - " + title + subModuleName, "{{value}}", attachedFilesSaveBtn);

                    //add forms tags
                    var forms = $(subModuleValue).find("form");

                    $.each(forms, function (keyForm, valueForm) {

                        var form = $(valueForm);
                        var btnSaveForm = form.find(".btn-save");
                        var btnDeleteForm = form.find(".btn-delete");
                        if (btnDeleteForm.length > 0) window.GTM.addClickEvent("Configuracion Perfil", "Formulario - " + title + subModuleName, "{{value}}", btnDeleteForm);

                        var photoUpload = form.find(".js-load-photo");
                        var photoLabel = form.find(".js-load-photo-label").text().GetCleanName();
                        if (photoUpload.length > 0) window.GTM.addClickEvent("Configuracion Perfil", "Formulario - " + title + subModuleName, photoLabel, photoUpload);

                        var contactIdBtn = form.find(".js-contact-identification-id");
                        if (contactIdBtn.length > 0) window.GTM.addClickEvent("Configuracion Perfil", "Formulario - " + title + subModuleName, "{{value}}", contactIdBtn);

                        if (btnSaveForm.length > 0) {

                            var btnSaveFormClick = function (e) {
                                if (form.valid()) {

                                    var data = {
                                        "event": "ga_event",
                                        "category": "Configuracion Perfil",
                                        "action": "EEPW - Formulario - " + title + subModuleName,
                                        "label": $(e.currentTarget).text().GetCleanName()
                                    };

                                    var maritalStatus = form.find(".js-maritalStatus option:selected").text();
                                    var gender = form.find(".js-gender-controller :checked").val() == "1" ? "Femenino" : "Masculino";
                                    var city = form.find(".js-cities-typeahead .tt-input").val();

                                    var experienceYears = form.find(".js-profile-experienceyears select option:selected").text();
                                    var salaryAspiration = form.find(".js-profile-salaries select option:selected").text();
                                    var profession = form.find(".js-profile-professions.tt-input").val();
                                    var canMove = form.find(".btn-can-move.active span:visible").map(function () { return $(this).text(); }).get().join();

                                    var sector = form.find(".js-sector select option:selected").text();
                                    var subSector = form.find(".js-sub-sector select option:selected").text();
                                    var position = form.find(".js-position input").val();
                                    var equivalentPos = form.find(".js-equivalent-position select option:selected").text();
                                    var positionLevel = form.find(".js-position-level select option:selected").text();
                                    var area = form.find(".js-area select option:selected").text();

                                    var educationLevel = form.find(".js-education-level select option:selected").text();
                                    var finishStudy = form.find(".js-input-finish-study select option:selected").text();
                                    var basicKnowledge = form.find(".js-basic-knowledge select option:selected").text();

                                    var educationType = form.find(".js-select-education-type select option:selected").text();
                                    var educationTitle = form.find(".js-education-title input").val();
                                    var area2 = form.find(".js-areas-typeahead .tt-input").val();

                                    var nativeLenguage = form.find(".js-native-lenguage select option:selected").text();

                                    var additionalLenguage = form.find(".js-lenguage select option:selected").text();
                                    var writtenLevel = form.find(".js-written-level input:checked").val();
                                    var spokenLevel = form.find(".js-spoken-level input:checked").val();
                                    var readLevel = form.find(".js-read-level input:checked").val();
                                    var listeningLevel = form.find(".js-listening-level input:checked").val();

                                    var licences = $(".js-form-driver-license").is(":visible") ? $(".js-driver-license-added .label-info .name").map(function () { return $(this).text(); }).get().join() : "";
                                    var skills = $(".js-form-skills").is(":visible") ? $(".js-skills-added .label-info .name").map(function () { return $(this).text(); }).get().join() : "";
                                    var socialNetwork = form.find(".js-social-network-list .js-list-content-social-network span").map(function () { return $(this).text().GetCleanName().replace(":", ""); }).get().join();


                                    if (maritalStatus) data["estadoCivil"] = maritalStatus;
                                    if (gender) data["genero"] = gender;
                                    if (city) data["ciudad"] = city;

                                    if (experienceYears) data["tiempoExperiencia"] = experienceYears;
                                    if (salaryAspiration) data["aspiracionSalarial"] = salaryAspiration;
                                    if (profession) data["profesion"] = profession;
                                    if (canMove) data["movilidadLaboral"] = canMove;

                                    if (sector) data["Sector"] = sector;
                                    if (subSector) data["SubSector"] = subSector;
                                    if (position) data["Cargo"] = position;
                                    if (equivalentPos) data["cargoEquivalente"] = equivalentPos;
                                    if (positionLevel) data["nivelCargo"] = positionLevel;
                                    if (area) data["Area"] = area;

                                    if (educationLevel) data["nivelEstudio"] = educationLevel;
                                    if (finishStudy) data["estadoEstudio"] = finishStudy;
                                    if (basicKnowledge) data["Area"] = basicKnowledge;

                                    if (educationType) data["tipoEstudio"] = educationType;
                                    if (educationTitle) data["tituloEstudio"] = educationTitle;
                                    if (area2) data["Area"] = area2;


                                    if (nativeLenguage) data["idiomaNativo"] = nativeLenguage;

                                    if (additionalLenguage) data["idioma"] = additionalLenguage;
                                    if (writtenLevel) data["nivelEscrito"] = writtenLevel;
                                    if (spokenLevel) data["nivelHablado"] = spokenLevel;
                                    if (readLevel) data["nivelLectura"] = readLevel;
                                    if (listeningLevel) data["nivelEscucha"] = listeningLevel;

                                    if (licences) data["licencia"] = licences;
                                    if (skills) data["habilidad"] = skills;
                                    if (socialNetwork) data["redoSocial"] = socialNetwork;

                                    window.GTM.addCustomDataLayer(data);
                                }

                            };

                            window.GTM.addCallBackClickEvent(btnSaveFormClick, btnSaveForm);

                        }
                    });
                    return true;
                }

                subModuleMutatorEvent(subModule);
                AddMutatorEvent(subModule, subModuleMutatorEvent, false);

            });
        });

        //add notification tags
        //var notificationContainer = $(".js-notifications");
        //if (notificationContainer.length > 0) {

        //  var notifications = notificationContainer.find(".alert:visible");
        //  $.each(notifications, function (key, value) {

        //    var offerId = $(".js-conf").data("quick-offer-id");
        //    var notificationTitle = $(value).find("h3").text();

        //    var data = {
        //      "event": "ga_event",
        //      "category": "Confirmacion Aplicacion",
        //      "action": "EEPW - Aplicacion - Mi Curriculo",
        //      "label": notificationTitle,
        //      "idOferta": offerId
        //    };

        //    window.GTM.addCustomDataLayer(data);
        //  });

        //}

        var quickOfferId = $(".js-conf").data("quick-offer-id");
        if (quickOfferId && quickOfferId != "0") {
            var data = {
                "event": "ga_event",
                "category": "Confirmacion Aplicacion",
                "action": "EEPW - Aplicacion - Mi Curriculo",
                "label": "Exitosa",
                "idOferta": quickOfferId
            };

            window.GTM.addCustomDataLayer(data);
        }

    }
}

function UpdatePhoneViewGTM() {
    var container = $(".js-change-view-container");
    if (container.length > 0) {

        var skipUpdatePhoneBtn = $(".js-skip-update-phone");
        if (skipUpdatePhoneBtn.length > 0) window.GTM.addClickEvent("Configuracion Perfil", "ActualizarInformacion", "{{value}}", skipUpdatePhoneBtn);

        var updatePhoneBtn = $(".js-update-phone-btn");
        var updatePhoneClick = function (e) {

            var form = $(".js-update-phone-number-form");
            if (form.valid()) {
                window.GTM.addDataLayer("Configuracion Perfil", "ActualizarInformacion", $(e.currentTarget).text().GetCleanName(), null, null);
            }
        }
        window.GTM.addCallBackClickEvent(updatePhoneClick, updatePhoneBtn);
    }
}

function BreadCrumbGTM() {

    var container = $(".breadcrumb");
    if (container.length > 0) {

        var breadCrumbs = container.find("a");
        $.each(breadCrumbs, function (key, value) {
            var routeName = $("#routeNameGTM").val();

            var quickApplicationData = {
                "event": "ga_event",
                "category": routeName,
                "action": "MigaPan",
                "label": "{{value}}"
            };

            window.GTM.addCustomClickEvent(quickApplicationData, value);
        });
    }
}

function GetOfferState() {

    var offerState = "";
    var notificationState = $("#eJobOfferState");
    if (notificationState.length > 0) {

        var state = notificationState.val();

        switch (state) {
            case "Expired":
                offerState = "expirada";
                break;
            case "NonPublished":
                offerState = "no publicada";
                break;
            case "Published":
                offerState = "Publicada";
                break;
            case "Removed":
                offerState = "Eliminada";
                break;
            case "UnPublished":
                offerState = "no publicada";
                break;
        }
    }
    return offerState;
}

function GetOfferApplyResult() {

    var applyOfferResult = "";
    var notificationState = $("#eJobOfferValidate");
    if (notificationState.length > 0) {

        var offerValidate = notificationState.val();

        switch (offerValidate) {
            case "Nothing":
                applyOfferResult = "";
                break;
            case "ResumeeDeactivate":
                applyOfferResult = "HvDesactivada";
                break;
            case "ResumeeOutDate":
                applyOfferResult = "HvDesactualizada";
                break;
            case "ResumeeIncomplete":
                applyOfferResult = "HvIncompleta";
                break;
            case "CanNotApplyToJobOfferWithOutIdentityCardInUniversity":
                offerState = "OfertaNoDisponible";
                break;
            case "UserAlreadyAppliedForThisJobOffer":
                applyOfferResult = "OfertaYaAplicada";
                break;
            case "NotEmployeeCanNotApplyToInternalOffer":
                applyOfferResult = "OfertaExclusivaUsuariosEmpresa";
                break;
            case "SuccessfulApplication":
                applyOfferResult = "Exitosa";
                break;

        }
    }
    return applyOfferResult;
}

function AddOfferDetailGTM() {

    var container = $(".js-offer-detail-container");
    if (container.length > 0) {

        var jobOfferTitle = container.find(".js-jobOffer-title").text().GetCleanName();
        var jobOfferId = container.find(".js-offer-id").text().GetCleanName();
        var companyName = container.find(".js-company-name strong").text().GetCleanName();
        var salary = container.find(".js-joboffer-salary").text().GetCleanName();
        var city = container.find(".js-joboffer-city").text().GetCleanName().split("/")[0].GetCleanName();
        var publishDate = container.find('.js-publish-date').text().GetGtmDate();
        var vacancy = container.find(".js-vacancy").text().GetCleanName();
        var area = container.find(".js-position-area").text().GetCleanName();
        var areas = $("#AreasLightBox .js-area").map(function () { return $(this).text(); }).get().join().GetCleanName();
        var educationLevel = container.find(".js-education-level").text();
        var profession = container.find(".js-profession").text().GetCleanName();
        var professions = $("#ProfessionLightBox .js-profession").map(function () { return $(this).text(); }).get().join().GetCleanName();
        var sector = container.find(".js-sector").text().GetCleanName();
        var sectors = $("#SectorsLightBox .js-sector").map(function () { return $(this).text(); }).get().join().GetCleanName();
        var offerState = GetOfferState();

        //add offer detail impression
        var impressionData = {
            "event": "product-detail",
            "ecommerce": {
                "detail": {
                    'actionField': { 'list': 'Detalle Oferta' },
                    "products": [{
                        "name": jobOfferTitle,
                        "id": jobOfferId,
                        "brand": "Oferta",
                        "category": "Detalle Oferta",
                        "dimension7": companyName,
                        "dimension10": sectors ? sectors : sector,
                        "dimension11": city,
                        "dimension21": salary,
                        "dimension13": publishDate,
                        "dimension14": vacancy,
                        "dimension15": educationLevel,
                        "dimension16": areas ? areas : area,
                        "dimension17": professions ? professions : profession,
                        "dimension18": offerState
                    }]
                }
            }
        };

        window.GTM.addCustomDataLayer(impressionData);

        //add apply offer button tag
        var appyBtns = $(".js-apply-offer, .js-apply-offer-vip");
        if (appyBtns.length > 0) {

            //add click btn
            var appyBtnClick = function (e) {


                var data = {
                    'event': 'ga_event',
                    'category': 'Datos Complementarios',
                    'action': 'EEPW - Aplicar',
                    'label': jobOfferTitle,
                    'Oferta ID': jobOfferId,
                    'rangoSalarial': salary,
                    'ciudad': city,
                    'fechaPublicacion': publishDate,
                    'areaTrabajo': areas ? areas : area,
                    'vacantes': vacancy
                };

                window.GTM.addCustomDataLayer(data);
            };

            window.GTM.addCallBackClickEvent(appyBtnClick, appyBtns);
        }

        // add apply result tag
        var offerDataContainer = $(".js-offer-data-container");
        if (offerDataContainer.length) {

            var applyOfferResultTags = function (targetNode) {

                var applyOfferResult = GetOfferApplyResult();

                if (applyOfferResult) {

                    var data = {
                        "event": "ga_event",
                        "category": "Confirmacion Aplicacion",
                        "action": "EEPW - Aplicacion - Detalle Oferta",
                        "label": applyOfferResult,
                        "idOferta": jobOfferId
                    };
                    window.GTM.addCustomDataLayer(data);

                }
                return true;
            }

            applyOfferResultTags(offerDataContainer);
            AddMutatorEvent(offerDataContainer, applyOfferResultTags, false, true);

        }


        //add company links tags
        var companyLinkClick = function (e) {

            var companyIndustry = $(".js-company-industry").text();
            var label = $(e.currentTarget).text().GetCleanName();
            label = label ? label : $(e.currentTarget).attr("title");

            var data = {
                "event": "ga_event",
                "category": "Detalle Oferta",
                "action": "EEPW - DetalleEmpresa",
                "label": label,
                "idOferta": jobOfferId,
                "empresa": companyName,
                "sector": companyIndustry,
            };

            window.GTM.addCustomDataLayer(data);

        };
        var companyLinks = container.find(".js-company-link");
        window.GTM.addCallBackClickEvent(companyLinkClick, companyLinks);

        // add social network buttons tags
        //var socialBtns = $(".js-social-network-container a");
        //var socialBtnClick = function (e) {

        //  var data = {
        //    "event": "ga_event",
        //    "category": "Detalle Oferta",
        //    "action": "EEPW - AplicarOferta - Compartir",
        //    "label": $(e.currentTarget).attr("social-network"),
        //    "idOferta": jobOfferId
        //  };

        //  window.GTM.addCustomDataLayer(data);

        //};
        //window.GTM.addCallBackClickEvent(socialBtnClick, socialBtns);

        // add vip link
        //var vipBtn = $(".js-vip-link");
        //if (vipBtn.length > 0) window.GTM.addClickEvent("Detalle Oferta", "AplicarOferta - Empleo VIP", "{{value}}", vipBtn);

        //add similar joboffers 
        var shareBtn = $(".js-modal-share .js-share-btn");
        var shareOfferBtnClick = function (e) {
            var form = $(".js-modal-share form");
            if (form.valid()) {
                window.GTM.addDataLayer("Configuracion Perfil", "Compartir anuncio", $(e.currentTarget).text().GetCleanName(), null, null);
            }
        };
        window.GTM.addCallBackClickEvent(shareOfferBtnClick, shareBtn);

        //add create alert tag
        var addAlertBtn = $(".js-btn-create-alert");
        if (addAlertBtn.length > 0) window.GTM.addClickEvent("Detalle Oferta", "AplicarOferta - Crear alerta de empleo", "{{value}}", addAlertBtn);

        //add vip modal comment tags 
        var vipBtnComment = $(".js-vipnote-modal .js-apply-with-note");
        var vipBtnSkipt = $(".js-vipnote-modal .js-apply-offer-lightbox");

        var vipModalNoteBtnClick = function (e) {

            var form = $(".js-vipnote-modal .js-offer-apply");
            var vipAlertTitle = $(".js-vipnote-modal .modal-title").text().GetCleanName();

            if (form.valid()) {
                window.GTM.addDataLayer("Resultados busqueda - Ofertas", "AplicacionRapida - " + vipAlertTitle, $(e.currentTarget).text().GetCleanName(), null, null);
            }
        };
        window.GTM.addCallBackClickEvent(vipModalNoteBtnClick, vipBtnComment);
        window.GTM.addCallBackClickEvent(vipModalNoteBtnClick, vipBtnSkipt);

        //add to quick application job offer modal
        var quickApplication = $("#QuickApplicationApplyOffer");
        if (quickApplication.length > 0) {

            var quickApplicationData = {
                "event": "ga_event",
                "category": "Detalle Oferta",
                "action": "EEPW - AplicacionRapida - " + jobOfferTitle,
                "label": "{{value}}",
                "empresa": companyName,
                "ciudad": city,
                "idOferta": jobOfferId,
                "publicacion": publishDate,
            };

            var quickApplicationBtn = quickApplication.find(".js-apply-quick-offer");
            window.GTM.addCustomClickEvent(quickApplicationData, quickApplicationBtn);

        }

        //add modal alert tag
        var modalAlertBtn = $(".js-confirm-alert .js-btn-confirm-create, .js-register-hv-btn");
        var modalAlertLinkClick = function (e) {

            var alertTitle = $(".js-confirm-alert .modal-title").text();
            var btnName = $(e.currentTarget).text().GetCleanName();

            var modalAlertData = {
                "event": "ga_event",
                "category": "Resultados busqueda - Ofertas",
                "action": "EEPW - ResultadoBusquedaOferta - " + alertTitle,
                "label": btnName
            };
            window.GTM.addCustomDataLayer(modalAlertData);
        }
        window.GTM.addCallBackClickEvent(modalAlertLinkClick, modalAlertBtn);

    }
}

function AddCompanyDetailGTM() {

    var container = $(".js-company-detail-container");
    if (container.length > 0) {

        var totalOffersBtn = $(".js-total-offers");
        var totalOffers = container.find(".js-total-offers-text").text().GetCleanName();
        var title = container.find(".js-title").text().GetCleanName();

        var data = {
            "event": "ga_event",
            "category": "Detalle Empresa",
            "action": "EEPW - Empresa - " + title,
            "label": "{{value}}",
            "cantidadVacantes": totalOffers
        };

        window.GTM.addCustomClickEvent(data, totalOffersBtn);

        //add show more link tag
        var showMoreBtn = container.find(".js-btn-show-more");
        if (showMoreBtn.length > 0) window.GTM.addClickEvent("Detalle Oferta", "Empresa", "{{value}}", showMoreBtn);

    }
}

function AddBaseCompanyDetailGTM() {

    var container = $(".js-base-company-container");
    if (container.length > 0) {

        var title = container.find(".js-company-name").text().GetCleanName();
        var totalOffersBtn = container.find(".js-total-offers");
        var registerCompanyBtn = container.find(".js-register-company-base");
        var gotoSiteBtn = container.find(".js-goto-webpage");
        var updateResumeeBtn = container.find(".js-update-resumee");
        var totalOffers = totalOffersBtn.find(".js-total-offers-text").text().GetCleanName();

        var conf = $('.js-conf');
        var companyId = conf.data('companyid');



        //add impresion data tags
        var companyDataImp = {
            "event": "productDetail",
            "ecommerce": {
                "detail": {
                    'products': [{
                        'name': title,
                        'id': companyId,
                        'brand': "Empresas",
                        'category': "homeEmpresas"
                    }]
                }
            }
        };

        window.GTM.addCustomDataLayer(companyDataImp);

        var data = {
            "event": "ga_event",
            "category": "Resultado empresa",
            "action": "EEPW - Menu resultado empresa",
            "label": "{{value}}",
            "empresa": title
        };

        window.GTM.addCustomClickEvent(data, totalOffersBtn);
        window.GTM.addCustomClickEvent(data, registerCompanyBtn);
        window.GTM.addCustomClickEvent(data, gotoSiteBtn);
        window.GTM.addCustomClickEvent(data, updateResumeeBtn);

        //add show more link tag
        var showMoreBtn = container.find(".js-btn-show-more");
        if (showMoreBtn.length > 0) window.GTM.addClickEvent("Resultado empresa", "Empresa", "{{value}}", showMoreBtn);

        //add notification link 
        var notificationLink = $(".js-resumee-notification-link");
        if (notificationLink.length > 0) {

            var notificationData = {
                "event": "ga_event",
                "category": "Resultado empresa",
                "action": "EEPW - Confirmacion inscripcion",
                "label": "{{value}}",
                "empresa": title
            };

            window.GTM.addCustomClickEvent(notificationData, notificationLink);
        }

        //add last published offers

        var lastPublishedOfferDataImp = {
            "event": "product-list-impressions",
            "ecommerce": {
                'impressions': []
            }
        };
        var lastPublishedOfferLinks = $(".js-last-published-offers .js-offer-item");
        $.each(lastPublishedOfferLinks, function (key, value) {

            var offerLink = $(value).find(".js-offer-link");
            var offerName = $(value).find(".js-offer-link").text().GetCleanName();
            var offerId = $(value).find(".js-offer-link").data("offer-id");
            var publishDate = $(value).find(".js-publish-date").text().GetGtmDate();

            var lastPublishedOfferData = {
                "event": "productClick",
                "ecommerce": {
                    'click': {
                        "actionField": { 'list': 'homeEmpresas' },
                        "products": [
                            {
                                'name': offerName,
                                'id': offerId,
                                'brand': 'Oferta',
                                'category': 'homeEmpresas',
                                'position': key + 1,
                                'dimension13': publishDate,
                            }
                        ]
                    }
                }
            };

            lastPublishedOfferDataImp.ecommerce.impressions.push({
                'name': offerName,
                'id': offerId,
                'brand': "Oferta",
                'category': "homeEmpresas",
                'list': 'homeEmpresas',
                'position': key + 1,
                'dimension13': publishDate
            });

            window.GTM.addCustomClickEvent(lastPublishedOfferData, offerLink);

        });
        window.GTM.addCustomDataLayer(lastPublishedOfferDataImp);

        var showMoreOffers = container.find(".js-show-more-offers");
        if (showMoreOffers.length > 0) window.GTM.addClickEvent("Resultado empresa", "Mas anuncios", "{{value}}", showMoreOffers);
    }
}
function AddCompanySearchGTM() {

    var container = $(".js-company-search");
    if (container.length > 0) {

        //add filter tags
        var serarh = $(".js-filters-bar")
        //add company filters tags
        var searchCompaniesCurrentValue = "";
        function searchCompaniesEvent() {
            if (searchCompaniesCurrentValue != this.value) {

                searchCompaniesCurrentValue = this.value;
                var text = $(this).val();

                var data = {
                    "event": "ga_event",
                    "category": "Home empresas",
                    "action": "EEPW - Filtros - busqueda empresas",
                    "label": "empresa:" + text
                };
                window.GTM.addCustomDataLayer(data);
            };
        }

        function sectorFilterEvent() {

            var text = $(this).find("option:selected").text().GetCleanName();

            var data = {
                "event": "ga_event",
                "category": "Home empresas",
                "action": "EEPW - Filtros - busqueda empresas",
                "label": "sector:" + text
            };
            window.GTM.addCustomDataLayer(data);
        };

        var filterContainer = container.find(".js-filters-bar");
        var searchFilter = filterContainer.find(".js-search-company");
        window.GTM.addCallBackBlurEvent(searchCompaniesEvent, searchFilter);

        var sectorFilter = filterContainer.find(".js-sector");
        window.GTM.addCallBackChangeEvent(sectorFilterEvent, sectorFilter);

        // add company highlight tags
        var companyLink = $(".js-company-highlight .js-company-link");
        if (companyLink.length > 0) window.GTM.addClickEvent("Home empresas", "Resumen empresa", "{{value}}", companyLink);
        var showMoreBtn = $(".js-company-highlight .js-btn-show-more");
        if (showMoreBtn.length > 0) window.GTM.addClickEvent("Home empresas", "Resumen empresa", "{{value}}", showMoreBtn);

        //add results tags
        var resultContainer = $(".js-results-container");

        var seeAllCompaniesBtn = $(".js-company-result-container .js-see-all");
        if (seeAllCompaniesBtn.length > 0) window.GTM.addClickEvent("Home empresas", "Mas empresas", "{{value}}", seeAllCompaniesBtn);

        //companies results
        const companiesResultCallback = function (targetNode) {

            var companies = resultContainer.find(".result-item");

            var companyDataImp = {
                "event": "product-list-impressions",
                "ecommerce": {
                    'impressions': []
                }
            };

            if (companies.length > 0) {
                $.each(companies, function (key, value) {

                    var companyViewBtn = $(value).find(".js-view-company");
                    var areaBind = $(value).find(".js-area-bind");
                    var companyName = $(value).find(".js-redirect").text().GetCleanName();
                    var companyId = companyViewBtn.data("company-id");
                    var sector = $(value).find(".info-sector").text().GetCleanName();


                    var companyData = {
                        "event": "productClick",
                        "ecommerce": {
                            'click': {
                                "actionField": { 'list': 'busquedaEmpresas' },
                                "products": [
                                    {
                                        'name': companyName,
                                        'id': companyId,
                                        'brand': "Empresas",
                                        'category': "homeEmpresas",
                                        'position': key + 1,
                                        'dimension10': sector
                                    }
                                ]
                            }
                        }
                    };

                    companyDataImp.ecommerce.impressions.push({
                        'name': companyName,
                        'id': companyId,
                        'brand': "Empresas",
                        'category': "homeEmpresas",
                        'list': 'busquedaEmpresas',
                        'position': key + 1,
                        'dimension10': sector
                    });

                    window.GTM.addCustomClickEvent(companyData, areaBind);
                });

                window.GTM.addCustomDataLayer(companyDataImp);
            }

            return true;
        };

        companiesResultCallback(resultContainer);
        AddMutatorEvent(resultContainer, companiesResultCallback, false, false, false);

    }
}


function AddOperativeregisterGTM() {
    var container = $(".js-operative-register");

    if (container.length > 0) {

        var jobOfferId = container.find("#JobOfferId").val().GetCleanName();
        var city = container.find(".js-city").text().GetCleanName();
        var cities = $("#CitiesLightBox .js-city").map(function () { return $(this).text(); }).get().join().GetCleanName();
        var salary = container.find(".js-salary").text().GetCleanName();
        var area = container.find(".js-position-area").text().GetCleanName();
        var areas = $("#AreasLightBox .js-area").map(function () { return $(this).text(); }).get().join().GetCleanName();


        // addd title link tag
        var offerTilte = container.find(".js-jobOffer-title");
        var offerTilteClick = function (e) {

            var data = {
                "event": "ga_event",
                "category": "Registro Rapido",
                "action": "EEPW - AplicarOferta - CrearCuenta",
                "label": $(e.currentTarget).text().GetCleanName(),
                "idOferta": jobOfferId,
                "ciudad": cities ? cities : city,
                "salario": salary,
                "area": areas ? areas : area
            };
            window.GTM.addCustomDataLayer(data);
        };
        window.GTM.addCallBackClickEvent(offerTilteClick, offerTilte);

        // add company link tag
        var companyLink = container.find(".js-company-name");
        var companyLinkClick = function (e) {

            var data = {
                "event": "ga_event",
                "category": "Registro Rapido",
                "action": "EEPW - AplicarOferta - CrearCuenta",
                "label": $(e.currentTarget).text().GetCleanName(),
                "idOferta": jobOfferId,
                "empresa": $(e.currentTarget).text().GetCleanName(),
            };
            window.GTM.addCustomDataLayer(data);
        }
        window.GTM.addCallBackClickEvent(companyLinkClick, companyLink);

        // add company link tag
        var readMoreLinkClick = function (e) {
            var data = {
                "event": "ga_event",
                "category": "Registro Rapido",
                "action": "EEPW - AplicarOferta - CrearCuenta",
                "label": $(e.currentTarget).text().GetCleanName(),
                "idOferta": jobOfferId,
            };
            window.GTM.addCustomDataLayer(data);
        }

        var companyDescriptionContainer = $(".js-description");
        var companyDescriptionMutatorEvent = function (targetNode) {

            var readMoreLink = targetNode.find("#read-more");
            window.GTM.addCallBackClickEvent(readMoreLinkClick, readMoreLink);

            return true;
        };

        companyDescriptionMutatorEvent(companyDescriptionContainer);
        AddMutatorEvent(companyDescriptionContainer, companyDescriptionMutatorEvent, false, false);

        //add create account btn step zero tag
        var createAccountBtn = container.find(".js-button-operative-step-zero");
        var createAccountBtnClick = function (e) {
            var form = $(".js-operative-form-step-zero");
            if (form.valid()) {

                window.GTM.addDataLayer("Registro Rapido", "AplicarOferta - CrearCuenta", $(e.currentTarget).text().GetCleanName(), null, null);
            }
        };
        window.GTM.addCallBackClickEvent(createAccountBtnClick, createAccountBtn);

        //add create account btn step one tag
        var createAccountSteoOneBtnClick = function (e) {
            var form = $(".js-operative-register-form");
            if (form.valid()) {

                var occupation = $(".js-occupations-typeahead .tt-input").val();
                var occupations = $(".js-occupations-added .name").map(function () { return $(this).text(); }).get().join();
                var data = {
                    "event": "ga_event",
                    "category": "Registro Rapido",
                    "action": "EEPW - AplicarOferta - CrearCuenta",
                    "label": $(e.currentTarget).text().GetCleanName(),
                    "cargo": occupations ? occupations : occupation,
                };
                window.GTM.addCustomDataLayer(data);
            }
        };

        //add login link tag
        var loginLink = container.find(".js-login-link, js-terms-and-conditions, js-privacy-notice");
        if (loginLink.length > 0) window.GTM.addClickEvent("Registro Rapido", "AplicarOferta - CrearCuenta", "{{value}}", loginLink);


        var formContainer = $(".js-operative-step-one");
        var formContainerMutatorEvent = function (targetNode) {

            var createAccountSteoOneBtn = targetNode.find(".js-create-account");
            if (createAccountSteoOneBtn.length > 0) {

                //add form links tags
                var links = targetNode.find(".js-terms-and-conditions, .js-privacy-notice");
                $.each(links, function (key, value) {
                    window.GTM.addClickEvent("Registro Rapido", "AplicarOferta - CrearCuenta", "{{value}}", value);
                });

                //add create account btn step one tag
                window.GTM.addCallBackClickEvent(createAccountSteoOneBtnClick, createAccountSteoOneBtn);
                return true;
            }
            return false;
        };

        AddMutatorEvent(formContainer, formContainerMutatorEvent, true, false);
    }
}

function AddAlertsGTM() {

    var container = $(".js-alerts-container");
    if (container.length > 0) {

        var alertFrequency = container.find(".js-frequency-panel select");

        //add alert frequency tag
        var alertFrequencyChange = function (e) {

            var textValue = $(this).find("option:selected").text();
            var data = {
                "event": "ga_event",
                "category": "Crear Alerta",
                "action": "EEPW - CrearAlerta",
                "label": "Frecuencia",
                "frecuenciaAlerta": textValue,
            };
            window.GTM.addCustomDataLayer(data);
        };

        window.GTM.addCallBackChangeEvent(alertFrequencyChange, alertFrequency);


        var resultContainerNotification = function (targetNode) {

            // add help secction tag
            var helpSections = $(".js-help-section, .js-all-help-link, .js-alert-new, .btn-remove-alert, .js-btn-edit-alert a, .js-close-alert");
            $.each(helpSections, function (key, value) {
                window.GTM.addClickEvent("Crear Alerta", "CrearAlerta", "{{value}}", value);
            });

            // add save alerts btn
            var formsAlerts = $(".js-save-alert-form");
            $.each(formsAlerts, function (key, value) {

                var form = $(value);
                var saveAlertBtn = form.find(".js-btn-save-alert");

                var saveAlertBtnClick = function (e) {
                    if (form.valid()) {

                        var keyword = form.find(".js-keyword input").val();
                        var cities = form.find(".js-cities-typeahead .tt-input").val();
                        var salaries = form.find(".js-salary-items input:checked").parent().map(function () { return $(this).text().GetCleanName(); }).get().join();

                        var data = {
                            "event": "ga_event",
                            "category": "Crear Alerta",
                            "action": "EEPW - CrearAlerta",
                            "label": $(e.currentTarget).text().GetCleanName(),
                            "palabraClave": keyword,
                            "ciudad": cities,
                            "salario": salaries
                        };
                        window.GTM.addCustomDataLayer(data);
                    }
                };

                window.GTM.addCallBackClickEvent(saveAlertBtnClick, saveAlertBtn);
            });

            return true;
        }


        var resultContainer = $(".js-results-container");
        resultContainerNotification(resultContainer);
        AddMutatorEvent(resultContainer, resultContainerNotification, false, false);

        // add delete modal tags
        var delAlertModal = $(".js-modal-delete");
        if (delAlertModal.length > 0) {
            var deleteBtn = delAlertModal.find(".js-btn-remove");
            var cancelBtn = delAlertModal.find(".js-btn-cancel");
            var title = delAlertModal.find(".modal-title").text().GetCleanName();

            if (deleteBtn.length > 0) window.GTM.addClickEvent("Crear Alerta", "CrearAlerta - " + title, "{{value}}", deleteBtn);
            if (cancelBtn.length > 0) window.GTM.addClickEvent("Crear Alerta", "CrearAlerta - " + title, "{{value}}", cancelBtn);
        }
    }
}

function AddMyAccountGTM() {
    var container = $(".js-account-container");
    if (container.length > 0) {

        var mainTitle = container.find(".js-title").text().GetCleanName();
        var accountBtns = container.find(".js-goto-resume, .js-go-contact, .js-go-questions");
        $.each(accountBtns, function (key, value) {
            window.GTM.addClickEvent("Configuracion Cuenta", "Mi cuenta - " + mainTitle, "{{value}}", value);
        });


        //add buttons panels tags
        var profilePanel = $(".js-profile-panel");
        $.each(profilePanel, function (key, value) {
            var title = $(value).parent().find(".js-panel-title").text().GetCleanName();
            var subTitle = $(value).find(".js-sub-title").text().GetCleanName();

            var editBtn = $(value).find(".js-btn-edit");
            window.GTM.addClickEvent("Configuracion Cuenta", "Mi cuenta - " + title + " - " + subTitle, "{{value}}", editBtn);

            var cancelBtn = $(value).find(".js-cta-cancel");
            window.GTM.addClickEvent("Configuracion Cuenta", "Mi cuenta - " + title + " - " + subTitle, "{{value}}", cancelBtn);

            //add forms btns tags
            var container = $(value).find("form, .js-delete-resumee-container");
            if (container.length > 0) {

                var formButtons = container.find("button");

                var formButtonsClick = function (e) {

                    //TODO: validate div is not form for delete container
                    if (container.hasClass("js-delete-resumee-container") || container.hasClass("js-hide-resumee-form") || container.valid()) {
                        var btnName = $(e.currentTarget).text().GetCleanName();
                        var title = $(e.currentTarget).closest(".js-profile-panel").parent().find(".js-panel-title").text().GetCleanName();
                        var subTitle = $(e.currentTarget).closest(".js-profile-panel").find(".js-sub-title").text().GetCleanName();

                        var hideResumeeForm = $(e.currentTarget).closest("form").find(".js-hide-resumee");

                        var data = {
                            "event": "ga_event",
                            "category": "Configuracion Cuenta",
                            "action": "EEPW - Mi cuenta - " + title + " - " + subTitle,
                            "label": btnName,
                        };

                        if (hideResumeeForm.length > 0) {
                            var radioValue = hideResumeeForm.find("input:checked").val();
                            data.ocultarCurriculum = radioValue == "1" ? "Si" : "No";
                        }

                        window.GTM.addCustomDataLayer(data);
                    }
                }

                formButtons.bind('click', formButtonsClick);
            }
        });


    }
}

function AddStatisticsGTM() {

    var container = $(".js-ee-stats-tabs");
    if (container.length > 0) {

        var statisticsBtnMutatorEvent = function (targetNode) {

            var tabs = container.find("ul li, .panel-heading");
            $.each(tabs, function (key, value) {
                window.GTM.addClickEvent("Mis estadisticas", "MenuEstadisticas", "{{value}}", value);
            });

            var generateReportBtns = $(".js-record-statistic");
            if (generateReportBtns.length > 0) window.GTM.addClickEvent("Mis estadisticas", "InteraccionEstadisticas", "{{value}}", generateReportBtns);

            return true;
        };

        statisticsBtnMutatorEvent(container);
        AddMutatorEvent(container, statisticsBtnMutatorEvent, false, false);


        var generateReportBtn = $(".js-generate-statistics-graphs");
        if (generateReportBtn.length > 0) window.GTM.addClickEvent("Mis estadisticas", "InteraccionEstadisticas", "{{value}}", generateReportBtn);
    }
}

function AddOfferApplicationGTM() {

    var container = $(".js-record-application-container");
    if (container.length > 0) {


        var orderBy = container.find(".js-order-filter");


        //add order select tag
        var orderChange = function (e) {

            var textValue = $(this).find("option:selected").text();
            var orderGroup = $(this).find("option:selected").parent().attr("label");
            var data = {
                "event": "ga_event",
                "category": "Aplicaciones tablero",
                "action": "EEPW - Filtros",
                "label": "Ordenar por - " + orderGroup,
                "seleccionFiltro": textValue,
            };
            window.GTM.addCustomDataLayer(data);
        };

        window.GTM.addCallBackChangeEvent(orderChange, orderBy);

        var appResultContainer = $(".js-results-container");
        var offerApplicationMutatorEvent = function (targetNode) {

            var recordsaApp = $(".js-results-container tr").not(".js-empty-grid");
            $.each(recordsaApp, function (key, value) {
                var offerLink = $(value).find(".offer-link");
                var companyLink = $(value).find(".js-company-name a");

                window.GTM.addClickEvent("Aplicaciones tablero", "Tablero", "{{value}}", offerLink);
                window.GTM.addClickEvent("Aplicaciones tablero", "Tablero", "{{value}}", companyLink);

                //add actions btns
                var actionsBtn = $(value).find(".js-btn-action");

                var actionBtnClick = function (e) {

                    var btnName = $(e.currentTarget).data("text").GetCleanName();
                    var companyName = $(e.currentTarget).closest("tr").find(".js-company-name").text().GetCleanName();
                    var offerTitle = $(e.currentTarget).closest("tr").find(".offer-link").text().GetCleanName();
                    var applicationDate = $(e.currentTarget).closest("tr").find(".js-application-date").text();
                    var city = $(e.currentTarget).closest("tr").find(".js-city").text();
                    var alertId = $(e.currentTarget).closest("tr").attr("id");

                    var data = {
                        "event": "ga_event",
                        "category": "Aplicaciones tablero",
                        "action": "EEPW - Tablero - Acciones",
                        "label": btnName,
                        "Id": alertId,
                        "tituloAnuncio": offerTitle,
                        "empresa": companyName,
                        "ciudad": city,
                        "publicacion": applicationDate
                    };
                    window.GTM.addCustomDataLayer(data);
                };

                window.GTM.addCallBackClickEvent(actionBtnClick, actionsBtn);

            });
            return true;
        };

        offerApplicationMutatorEvent(appResultContainer);
        AddMutatorEvent(appResultContainer, offerApplicationMutatorEvent, false, false);

        //add delete modal tag
        var deleteBtnModal = $(".js-modal-remove .js-btn-remove");
        var cancelBtnModal = $(".js-modal-remove .js-btn-cancel");
        if (deleteBtnModal.length > 0) window.GTM.addClickEvent("Aplicaciones popup", "Confirmacion aplicaciones", "{{value}}", deleteBtnModal);
        if (cancelBtnModal.length > 0) window.GTM.addClickEvent("Aplicaciones popup", "Confirmacion aplicaciones", "{{value}}", cancelBtnModal);

        //add alert not record aplication tag
        var notRecordApplicationLink = $(".js-alert-offers-link");
        if (notRecordApplicationLink.length > 0) window.GTM.addClickEvent("Aplicaciones notificacion", "Notificacion - Sin vacantes", "{{value}}", notRecordApplicationLink);

    }
}

var cityFilterCurrentValue = "";
function cityFilterChangeEvent() {

    if (cityFilterCurrentValue != this.value) {

        cityFilterCurrentValue = this.value;
        var cityFilterTitle = $(".js-cities-title").text();
        var text = $(this).val();

        var data = {
            "event": "ga_event",
            "category": "Resultados busqueda - Ofertas",
            "action": "EEPW - Filtro - " + cityFilterTitle,
            "label": text
        };
        window.GTM.addCustomDataLayer(data);
    }
};

function areaFilterChangeEvent() {

    var areaFilterTitle = $(".js-area-filter").text();
    var text = $(this).find("option:selected").text().GetCleanName();

    var data = {
        "event": "ga_event",
        "category": "Resultados busqueda - Ofertas",
        "action": "EEPW - Filtro - " + areaFilterTitle,
        "label": text
    };
    window.GTM.addCustomDataLayer(data);
};

function dateFilterChangeEvent() {

    var dateFilterTitle = $(".js-publish-date-title").text();
    var text = $(this).find('input:checked').parent().text().GetCleanName();

    var data = {
        "event": "ga_event",
        "category": "Resultados busqueda - Ofertas",
        "action": "EEPW - Filtro - " + dateFilterTitle,
        "label": text
    };
    window.GTM.addCustomDataLayer(data);
};

function AddJobOfferResultGTM() {

    var container = $(".js-joboffer-result");
    if (container.length > 0) {

        var barFilterContainer = $(".js-filters-bar");


        var barFilterMutatorEvent = function (targetNode) {

            //add salary filter tag
            var salaryTitle = $(".js-salary-title").text();
            var salaryFilters = $(".js-filter-salary :checkbox");
            $.each(salaryFilters, function (key, value) {
                var text = $(value).parent().text().GetCleanName();
                window.GTM.addClickEvent("Resultados busqueda - Ofertas", "Filtro - " + salaryTitle, text, value);
            });


            return true;
        };

        var cityFilter = barFilterContainer.find(".js-filter-cities");
        window.GTM.addCallBackBlurEvent(cityFilterChangeEvent, cityFilter, true);

        var areaFilter = barFilterContainer.find(".js-filter-sector");
        window.GTM.addCallBackChangeEvent(areaFilterChangeEvent, areaFilter, true);

        var dateFilter = barFilterContainer.find(".js-filter-date-published");
        window.GTM.addCallBackChangeEvent(dateFilterChangeEvent, dateFilter, true);

        barFilterMutatorEvent(barFilterContainer);
        AddMutatorEvent(barFilterContainer, barFilterMutatorEvent, false, false);

        //add alert box tag
        var alertBtnClick = function (e) {

            var form = container.find(".js-create-alert-form");
            var btnName = $(e.currentTarget).text().GetCleanName();
            var alertTitle = container.find(".alert-title").text().GetCleanName();

            if (form.valid()) {

                var data = {
                    "event": "ga_event",
                    "category": "Resultados busqueda - Ofertas",
                    "action": "EEPW - ResultadoBusquedaOferta - " + alertTitle,
                    "label": btnName
                };
                window.GTM.addCustomDataLayer(data);
            }

        }

        var alertBtn = container.find(".js-btn-create-alert");
        window.GTM.addCallBackClickEvent(alertBtnClick, alertBtn);

        //add modal alert tag
        var modalAlertBtn = $(".js-confirm-alert .js-btn-confirm-create, .js-register-hv-btn");
        var modalAlertLinkClick = function (e) {

            var alertTitle = $(".js-confirm-alert .modal-title").text();
            var btnName = $(e.currentTarget).text().GetCleanName();

            var modalAlertData = {
                "event": "ga_event",
                "category": "Resultados busqueda - Ofertas",
                "action": "EEPW - ResultadoBusquedaOferta - " + alertTitle,
                "label": btnName
            };
            window.GTM.addCustomDataLayer(modalAlertData);
        }
        window.GTM.addCallBackClickEvent(modalAlertLinkClick, modalAlertBtn);

        //offer results
        var jobOffers = $(".js-results-container .result-item");

        var lastOfferDataImp = {
            "event": "product-list-impressions",
            "ecommerce": {
                'impressions': []
            }
        };

        $.each(jobOffers, function (key, value) {

            var quickViewBtn = $(value).find(".js-quickview");
            var areaBind = $(value).find(".js-area-bind");
            var offerName = $(value).find(".js-offer-title").text().GetCleanName();
            var offerId = quickViewBtn.data("joboffer");
            var companyName = $(value).find(".js-offer-company").text().GetCleanName();
            var rangeSalary = $(value).find(".js-offer-salary").text().GetCleanName();
            var city = $(value).find(".js-offer-city").text().GetCleanName();
            var publishDate = $(value).find(".js-offer-date").text().GetGtmDate();


            var quickOfferSearchData = {
                "event": "productClick",
                "ecommerce": {
                    'click': {
                        "actionField": { 'list': 'ResultadoOfertas' },
                        "products": [
                            {
                                'name': offerName,
                                'id': offerId,
                                'brand': "elempleo",
                                'category': "VistaRapida",
                                'List': 'ResultadoOfertas',
                                'position': key + 1,
                                'dimension7': companyName,
                                "dimension21": rangeSalary,
                                "dimension11": city,
                                "dimension13": publishDate
                            }
                        ]
                    }
                }
            };


            var lastOfferData = {
                "event": "productClick",
                "ecommerce": {
                    'click': {
                        "actionField": { 'list': 'ResultadoOfertas' },
                        "products": [
                            {
                                'name': offerName,
                                'id': offerId,
                                'brand': "elempleo",
                                'category': "BusquedaOfertas",
                                'List': 'ResultadoOfertas',
                                'position': key + 1,
                                'dimension7': companyName,
                                "dimension21": rangeSalary,
                                "dimension11": city,
                                "dimension13": publishDate
                            }
                        ]
                    }
                }
            };

            lastOfferDataImp.ecommerce.impressions.push({
                'name': offerName,
                'id': offerId,
                'brand': "oferta",
                'category': "BusquedaOfertas",
                'position': key + 1,
                'list': 'ResultadoOfertas',
                'dimension7': companyName,
                "dimension21": rangeSalary,
                "dimension11": city,
                "dimension13": publishDate
            });

            window.GTM.addCustomClickEvent(lastOfferData, areaBind);
            window.GTM.addCustomClickEvent(quickOfferSearchData, quickViewBtn);
        });

        window.GTM.addCustomDataLayer(lastOfferDataImp);

        /*start event paginator*/
        var targetNodeJobOfferResult = $(".js-results-container")[0];

        const resultJobOffert = function () {

            var jobOffers = $(".js-results-container .result-item");

            lastOfferDataImp.ecommerce.impressions = [];

            $.each(jobOffers, function (key, value) {

                var quickViewBtn = $(value).find(".js-quickview");
                var areaBind = $(value).find(".js-area-bind");
                var offerName = $(value).find(".js-offer-title").text().GetCleanName();
                var offerId = quickViewBtn.data("joboffer");
                var companyName = $(value).find(".js-offer-company").text().GetCleanName();
                var rangeSalary = $(value).find(".js-offer-salary").text().GetCleanName();
                var city = $(value).find(".js-offer-city").text().GetCleanName();
                var publishDate = $(value).find(".js-offer-date").text().GetGtmDate();

                var pagination = $('.pagination .active a').attr("data-page");

                var quickOfferSearchData = {
                    "event": "productClick",
                    "ecommerce": {
                        'click': {
                            "actionField": { 'list': 'ResultadoOfertas' },
                            "products": [
                                {
                                    'name': offerName,
                                    'id': offerId,
                                    'brand': "elempleo",
                                    'category': "VistaRapida",
                                    'List': 'ResultadoOfertas',
                                    'position': key + 1,
                                    'dimension7': companyName,
                                    "dimension21": rangeSalary,
                                    "dimension11": city,
                                    "dimension13": publishDate
                                }
                            ]
                        }
                    }
                };

                var lastOfferData = {
                    "event": "productClick",
                    "ecommerce": {
                        'click': {
                            "actionField": { 'list': 'ResultadoOfertas' },
                            "products": [
                                {
                                    'name': offerName,
                                    'id': offerId,
                                    'brand': "elempleo",
                                    'category': "BusquedaOfertas",
                                    'List': 'ResultadoOfertas',
                                    'position': key + 1,
                                    'dimension7': companyName,
                                    "dimension21": rangeSalary,
                                    "dimension11": city,
                                    "dimension13": publishDate
                                }
                            ]
                        }
                    }
                };

                lastOfferDataImp.ecommerce.impressions.push({
                    'name': offerName,
                    'id': offerId,
                    'brand': "oferta",
                    'category': "BusquedaOfertas",
                    'position': key + 1,
                    'list': 'ResultadoOfertas - ' + pagination,
                    'dimension7': companyName,
                    "dimension21": rangeSalary,
                    "dimension11": city,
                    "dimension13": publishDate
                });

                window.GTM.addCustomClickEvent(lastOfferData, areaBind);
                window.GTM.addCustomClickEvent(quickOfferSearchData, quickViewBtn);
            });

            window.GTM.addCustomDataLayer(lastOfferDataImp);
        }

        const observerJobOfert = new MutationObserver(resultJobOffert);
        observerJobOfert.observe(targetNodeJobOfferResult, { attributes: true, childList: true, subtree: true });
        /*end event paginator*/

        //add quick view
        var quickViewContainer = $(".js-quickview-content");

        var quickViewBtnClick = function (e) {

            var btnName = $(e.currentTarget).text().GetCleanName();
            var quickViewApplyBtn = quickViewContainer.find(".js-quickview-apply");
            var title = quickViewContainer.find(".js-quick-result-title a").text().GetCleanName();
            var offerId = quickViewApplyBtn.data("joboffer-id");
            var companyName = quickViewContainer.find(".company-name").text().GetCleanName();
            var city = quickViewContainer.find(".info-city").text().GetCleanName();
            var publishDate = quickViewContainer.find(".info-publish-date").text().GetGtmDate();

            var data = {
                "event": "ga_event",
                "category": "Resultados busqueda - Ofertas",
                "action": "EEPW - AplicacionRapida - " + title,
                "label": btnName,
                "empresa": companyName,
                "ciudad": city,
                "idOferta": offerId,
                "publicacion": publishDate
            };
            window.GTM.addCustomDataLayer(data);
        }

        var quickViewMutatorEvent = function (targetNode) {

            var quickViewApplyBtns = targetNode.find(".js-quickview-apply");
            var quickViewOfferBtns = targetNode.find(".js-view-offer");
            var offerTitleLink = quickViewContainer.find(".js-quick-result-title a");

            if (quickViewApplyBtns.length > 0 && quickViewOfferBtns.length > 0 && offerTitleLink.length > 0) {
                window.GTM.addCallBackClickEvent(quickViewBtnClick, quickViewApplyBtns);
                window.GTM.addCallBackClickEvent(quickViewBtnClick, quickViewOfferBtns);
                window.GTM.addCallBackClickEvent(quickViewBtnClick, offerTitleLink);
                return true;
            }
            return false;
        }

        quickViewMutatorEvent(quickViewContainer);
        AddMutatorEvent(quickViewContainer, quickViewMutatorEvent, false, false);

    }
}

function AddMyCompaniesGTM() {

    var container = $(".js-company-registration-container");
    if (container.length > 0) {

        //add notificion link tag
        var alertCompanyLink = $(".js-notifications .js-alert-link");
        if (alertCompanyLink.length > 0) window.GTM.addClickEvent("Registro empresas notificaciones", "Notificacion - Sin base empresas", "{{value}}", alertCompanyLink);

        //add company filters tags
        var searchCompaniesCurrentValue = "";
        function searchCompaniesEvent() {
            if (searchCompaniesCurrentValue != this.value) {

                searchCompaniesCurrentValue = this.value;
                var text = $(this).val();

                var data = {
                    "event": "ga_event",
                    "category": "Registro empresas tablero",
                    "action": "EEPW - Filtros",
                    "label": "empresa:" + text
                };
                window.GTM.addCustomDataLayer(data);
            };
        }

        function sectorFilterEvent() {

            var text = $(this).find("option:selected").text().GetCleanName();

            var data = {
                "event": "ga_event",
                "category": "Registro empresas tablero",
                "action": "EEPW - Filtros",
                "label": "sector:" + text
            };
            window.GTM.addCustomDataLayer(data);
        };

        function withOfferFilterEvent() {

            var value = $(this).prop("checked");

            var data = {
                "event": "ga_event",
                "category": "Registro empresas tablero",
                "action": "EEPW - Filtros",
                "label": "empresas con anuncio:" + value
            };
            window.GTM.addCustomDataLayer(data);
        };
        var searchFilter = container.find(".js-search-company");
        window.GTM.addCallBackBlurEvent(searchCompaniesEvent, searchFilter);

        var sectorFilter = container.find(".js-sector");
        window.GTM.addCallBackChangeEvent(sectorFilterEvent, sectorFilter);

        var whithOffersFilter = container.find(".js-with-offers");
        window.GTM.addCallBackClickEvent(withOfferFilterEvent, whithOffersFilter);

        var whithOffersFilter = container.find(".js-clean-filters");
        window.GTM.addClickEvent("Registro empresas tablero", "Filtros", "{{value}}", whithOffersFilter);

        var orderBy = container.find(".js-order-filter");


        //add order select tag
        var orderBy = container.find(".js-order-filter");
        var orderChange = function (e) {

            var textValue = $(this).find("option:selected").text().GetCleanName();
            var orderGroup = $(this).find("option:selected").parent().attr("label");
            var data = {
                "event": "ga_event",
                "category": "Registro empresas tablero",
                "action": "EEPW - Filtros",
                "label": "Ordenar por - " + orderGroup,
                "seleccionFiltro": textValue,
            };
            window.GTM.addCustomDataLayer(data);
        };

        window.GTM.addCallBackChangeEvent(orderChange, orderBy);

        var appResultContainer = $(".js-results-container");
        var companiesRegistrationMutatorEvent = function (targetNode) {

            var recordsaApp = $(".js-results-container tr").not(".js-empty-grid");
            $.each(recordsaApp, function (key, value) {
                var companyLink = $(value).find(".js-company-name");

                window.GTM.addClickEvent("Registro empresas", "Tablero", "empresa:{{value}}", companyLink);

                //add actions btns
                var actionsBtn = $(value).find(".js-btn-action");

                var actionBtnClick = function (e) {

                    var btnName = $(e.currentTarget).data("text").GetCleanName();

                    var data = {
                        "event": "ga_event",
                        "category": "Registro empresas",
                        "action": "EEPW - Tablero - Acciones",
                        "label": btnName,
                        "empresa": companyLink.text().GetCleanName()
                    };
                    window.GTM.addCustomDataLayer(data);
                };

                window.GTM.addCallBackClickEvent(actionBtnClick, actionsBtn);

            });
            return true;
        };

        companiesRegistrationMutatorEvent(appResultContainer);
        AddMutatorEvent(appResultContainer, companiesRegistrationMutatorEvent, false, false);

        //add delete modal tag
        var deleteBtnModal = $(".js-modal-remove .js-btn-remove");
        var cancelBtnModal = $(".js-modal-remove .js-btn-cancel");
        if (deleteBtnModal.length > 0) window.GTM.addClickEvent("Registro empresas notificaciones", "Notificacion - Confirmación", "{{value}}", deleteBtnModal);
        if (cancelBtnModal.length > 0) window.GTM.addClickEvent("Registro empresas notificaciones", "Notificacion - Confirmación", "{{value}}", cancelBtnModal);

    }
}

function AddStateConfirmation(state, orderId) {

    //add notification try again link
    var tryAgainLink = $(".js-notification-link");

    var data = {
        "event": "ga_event",
        "category": "Mi vip",
        "action": "EEPW - Mi vip - Estado transaccion",
        "label": "",
        "IdTransaccion": orderId
    };

    switch (state) {
        case "GatewayApprovedPayment":
            data.label = "aprobada";
            window.GTM.addCustomDataLayer(data);
            if (tryAgainLink.length > 0) window.GTM.addClickEvent("Mi vip", "Mi vip - aprobado", "{{value}}", tryAgainLink);
            break;
        case "GatewayRejectedPayment":
            data.label = "rechazada";
            window.GTM.addCustomDataLayer(data);
            if (tryAgainLink.length > 0) window.GTM.addClickEvent("Mi vip", "Mi vip - Rechazado", "{{value}}", tryAgainLink);
            break;
        case "GatewayPendingPayment":
            data.label = "confirmacion pendiente";
            window.GTM.addCustomDataLayer(data);
            if (tryAgainLink.length > 0) window.GTM.addClickEvent("Mi vip", "Mi vip - Confirmacion pendiente", "{{value}}", tryAgainLink);
            break;
        case "ExistPendingTransaction":
            data.label = "pendiente";
            window.GTM.addCustomDataLayer(data);
            if (tryAgainLink.length > 0) window.GTM.addClickEvent("Mi vip", "Mi vip - Pendiente", "{{value}}", tryAgainLink);
            break;
    }
}

function AddBuyVipGTM() {

    var container = $(".js-buy-vip-container");
    if (container.length > 0) {


        addToCartBtnClick = function () {

            var productPrice = getPriceNumber($(".js-total-value").text());
            var paymentType = container.find(".js-payment-buttons").text().GetCleanName();

            //add goto gateway button
            var addToCartData = {
                "event": "addToCart",
                "ecommerce": {
                    'currencyCode': 'COP',
                    'add': {
                        'products': [{
                            'name': "producto VIP",
                            'id': "Paquete VIP",
                            'brand': "El empleo VIP",
                            'category': "el empleo VIP por 1 año",
                            'quantity': 1
                        }]
                    }
                }
            };

            window.GTM.addCustomDataLayer(addToCartData);
        }

        var buyVipBtn = $(".js-buy-vip");
        $.each(buyVipBtn, function (key, value) {
            window.GTM.addCallBackClickEvent(addToCartBtnClick, value);
        });

        var transactionType = $(".js-conf");
        if (transactionType.length > 0) {

            var state = transactionType.data("gateway-transaction");
            var orderId = transactionType.data("order-id");
            AddStateConfirmation(state, orderId);
        }

    }
}

function AddBuyVipToGatewayGTM() {

    var container = $(".js-buy-vip-to-gateway");
    if (container.length > 0) {

        var buyVipBtnClick = function (e) {

            var form = $(".js-payment-group");

            if (form.valid()) {

                var userGTM = $("[id$='userGTM']");
                if (userGTM.length > 0 && userGTM.val() == "noLoggedUser") {
                    var text = $(e.currentTarget).find("span:visible").text().GetCleanName();
                    window.GTM.addDataLayer("Mi vip", "Comprar Empleo VIP", text, null, e.currentTarget);
                }
                else {

                    var productPrice = getPriceNumber($(".total-value").text());

                    //$(".js-payment-radios .radio input:checked").prop("checked")
                    var paymentType = container.find(".js-payment-buttons button.active").text().GetCleanName();

                    //add goto gateway button
                    var checkoutData = {
                        "event": "checkout",
                        "ecommerce": {
                            'checkout': {
                                'actionField': { 'step': 1, 'option': paymentType },
                                'products': [{
                                    'name': "producto VIP",
                                    'id': "Paquete VIP",
                                    'price': productPrice,
                                    'brand': "El empleo VIP",
                                    'category': "el empleo VIP por 1 año",
                                    'quantity': 1
                                }]
                            }
                        }
                    };

                    window.GTM.addCustomDataLayer(checkoutData);
                }
            }
        }


        var gotoGatewayBtns = $(".js-shopping-submit");
        window.GTM.addCallBackClickEvent(buyVipBtnClick, gotoGatewayBtns);

        var thankYouModalBtn = $("#thankYouModal .js-modal-btn");
        window.GTM.addClickEvent("Mi asesoría", "Pasos Asesoria", "{{value}}", thankYouModalBtn);
        window.GTM.addCallBackClickEvent(buyVipBtnClick, gotoGatewayBtns);

    }
}

function AddPaymentGatewayGTM() {
    var container = $(".js-payment-gateway-container");
    if (container.length > 0) {

        var idValue = $("input[name$='refVenta']").val() == undefined ? 'OrdenId' : 'refVenta';
        var $refVenta = $("input[name$='" + idValue + "']").val();
        var valor = $("input[name$='refVenta']").val() == undefined ? 'PrecioUnitario' : 'valor';
        var $valor = $("input[name$='" + valor + "']").val();

        var orderId = $refVenta == undefined ? '0' : $refVenta;
        var price = $valor == undefined ? '0' : $valor.split('.')[0];


        var purchaseData = {
            'ecommerce': {
                "purchase": {
                    "actionField": {
                        'id': orderId,                         // Transaction ID. Required for purchases and refunds.
                        'affiliation': 'Empleo VIP',
                        'revenue': price,                     // Total transaction value (incl. tax and shipping)
                    },
                    'products': [{
                        'name': "producto VIP",
                        'id': "Paquete VIP",
                        'price': price,
                        'brand': "El empleo VIP",
                        'category': "el empleo VIP por 1 año",
                        'quantity': 1
                    }]
                }
            }
        };

        window.GTM.addCustomDataLayer(purchaseData);

    }
}

function AddPayAppropriationPaymentGTM() {
    var container = $(".js-pay-apropriation-container");
    if (container.length > 0) {


        var consignmentMail = $(".js-consignment-mail");
        if (consignmentMail.length > 0) window.GTM.addClickEvent("El empleo VIP", "Proceso de compra", "Enviar mail", consignmentMail);

        var actionBtns = $(".btn-actions");
        if (actionBtns.length > 0) window.GTM.addClickEvent("El empleo VIP", "Proceso de compra - Ir a", "{{value}}", actionBtns);


        // add send consignment modal tags
        var sendConsignmentClick = function (e) {

            var form = $(".js-sentPdf-form");
            if (form.is(":visible") && form.valid()) {
                window.GTM.addDataLayer("El empleo VIP", "Enviar consignacion al coreo", "{{value}}", null, e.currentTarget);
            }
        };
        var sendPdfModalBtn = $(".js-sentPdf-modal .btn");
        window.GTM.addCallBackClickEvent(sendConsignmentClick, sendPdfModalBtn);
    }
}

function AddMyVipGTM() {

    var container = $(".js-my-vip-container");
    if (container.length > 0) {

        //user vip btns
        var statusText = container.find(".js-resumee-state").text().GetCleanName();
        var lastResumeeState = container.find(".js-last-resumee-state").text().GetCleanName();
        var vipProductStart = container.find(".js-vip-product-start").text().GetCleanName();
        var vipProductExpiration = container.find(".js-vip-product-expiration").text().GetCleanName();

        var userUpdateData = {
            "event": "ga_event",
            "category": "Mi vip",
            "action": "EEPW - Estado curriculo",
            "label": "{{value}}",
            "estadoCurriculo": statusText,
            "ultimaActualizacion": lastResumeeState,
            "inicioVip": vipProductStart,
            "vencimientoVip": vipProductExpiration
        };

        var userUpdateBtns = container.find(".js-userDataUpdate");
        $.each(userUpdateBtns, function (key, value) {
            window.GTM.addCustomClickEvent(userUpdateData, value);
        });

        //add general buttons tags
        var generalBtns = $(".js-vip-general-btn");
        $.each(generalBtns, function (key, value) {
            var title = $(value).closest(".panel-body").find(".js-title").text().GetCleanName();
            window.GTM.addClickEvent("Mi vip", title, "{{value}}", value);
        });

        // add statistics btns tags
        var statisticsData = {
            "event": "ga_event",
            "category": "Mi vip",
            "action": "EEPW - Estadisticas",
            "label": ""
        };

        var statisticsBtns = $(".js-stats-ttips");
        $.each(statisticsBtns, function (key, value) {
            var text = $(value).clone().children().remove().end().text().GetCleanName();
            var quantity = $(value).find(".statistics-number").text();
            statisticsData.label = statisticsData.label + text + " " + quantity + " - ";
        });

        statisticsData.label = "[" + statisticsData.label.slice(0, -3) + "]";
        window.GTM.addCustomDataLayer(statisticsData);

        var allStatisticsLink = $(".js-statistics");
        window.GTM.addClickEvent("Mi vip", "Estadisticas", "{{value}}", allStatisticsLink);

        var clientServiceBtns = $(".js-go-contact-btn, .js-questions-btn");
        $.each(clientServiceBtns, function (key, value) {
            window.GTM.addClickEvent("Mi vip", "Mi vip - Servicio al cliente", "{{value}}", value);
        });

        //add pda confirmation
        var pdaresultsLink = $(".js-download-pda-results");
        window.GTM.addClickEvent("Prueba PDA", "PDA - Exitoso", "{{value}}", pdaresultsLink);

        //add state confirmation
        var transactionType = $(".js-config");
        if (transactionType.length > 0) {

            var value = transactionType.data("has-transaction");
            if (value.toLowerCase() == "true") {
                var state = "GatewayApprovedPayment";
                var orderId = transactionType.data("order-id");
                AddStateConfirmation(state, orderId);
            }
        }
    }
}

function AddContactView() {
    var container = $(".js-contact-container");
    if (container.length > 0) {

        var sendCommentClick = function (e) {

            var form = $(".contact-form");
            if (form.is(":visible") && form.valid()) {
                window.GTM.addDataLayer("Contacto", "Formulario contacto", "{{value}}", null, sendCommentBtn[0]);
            }
        };
        var sendCommentBtn = $(".js-send-comment");
        window.GTM.addCallBackClickEvent(sendCommentClick, sendCommentBtn);



        //add questions tags
        var questions = container.find(".js-question");
        $.each(questions, function (key, value) {
            var questionLink = $(value).find(".js-question-link");
            var questionText = questionLink.text().GetCleanName();
            var questionCollapseBtn = $(value).find(".js-question-collapse");
            window.GTM.addClickEvent("Contacto", "Preguntas frecuentes", questionText, questionLink);
            window.GTM.addClickEvent("Contacto", "Preguntas frecuentes", questionText, questionCollapseBtn);
        });

        // add all questions link
        var allQuestionsLink = container.find(".js-all-questions-link");
        if (allQuestionsLink.length > 0) window.GTM.addClickEvent("Contacto", "Preguntas frecuentes", "{{value}}", allQuestionsLink);
    }
}

function AddPdaTestGTM() {
    var container = $(".js-pda-container");
    if (container.length > 0) {


        var introductionLink = $(".js-pda-introduction-link");
        window.GTM.addClickEvent("Prueba PDA", "PDA", "{{value}}", introductionLink);

        var changeStepClick = function (e) {
            var step = container.find(".js-pda-step-title:visible").text().GetCleanName();
            window.GTM.addDataLayer("Prueba PDA", "PDA - " + step, "{{value}}", null, e.currentTarget);
        };

        var modalBtnsClick = function (e) {
            var step = container.find(".js-pda-step-title:visible").text().GetCleanName();
            window.GTM.addDataLayer("Prueba PDA", "PDA - Popup - " + step, "{{value}}", null, e.currentTarget);
        };

        var finishBtnClick = function (e) {
            var form = $(".js-pda-form");
            if (form.is(":visible") && form.valid()) {
                var step = container.find(".js-pda-step-title:visible").text().GetCleanName();
                window.GTM.addDataLayer("Prueba PDA", "PDA - " + step, "{{value}}", null, e.currentTarget);
            }
        };

        var buttons = container.find(".js-pda-step, .js-validate-Button");
        window.GTM.addCallBackClickEvent(changeStepClick, buttons);

        var modalBtns = $(".js-pda-step-btn, .js-pda-finish-btn");
        window.GTM.addCallBackClickEvent(modalBtnsClick, modalBtns);

        var finishBtn = $(".js-finish-Button");
        window.GTM.addCallBackClickEvent(finishBtnClick, finishBtn);
    }
}

AddPdaResultPage = function () {

    var container = $(".report-well-download-pdf");
    if (container.length > 0) {

        var links = $(".report-well-download-pdf.js-query-links a");
        window.GTM.addClickEvent("Prueba PDA", "ResultadoPrueba", "{{value}}", links);

        var buyVipBtn = $(".report-well-button a, .js-pda-results-fixed-btn a");
        window.GTM.addClickEvent("Prueba PDA", "ResultadoPrueba", "{{value}}", buyVipBtn);

    }
}

function AdviceGTM() {
    var container = $(".js-advice-container, .js-myadvice-container");
    if (container.length > 0) {

        var purchaseBannerBtn = container.find(".js-omn-btn, .js-purchase-banner-btn");
        var purchaseAdviserBtn = container.find(".js-purchase-adviser-btn");
        var purchaseAddBtn = container.find(".js-purchase-add-btn");
        window.GTM.addClickEvent("Mi asesoría", "Banner Asesoría - Ir a", "{{value}}", purchaseBannerBtn);
        window.GTM.addClickEvent("Mi asesoría", "Asesorate con expertos", "{{value}}", purchaseAdviserBtn);
        window.GTM.addClickEvent("Mi asesoría", "Adquiere Asesoría - Ir a", "{{value}}", purchaseAddBtn);

        var tid = $(".js-transaction-id").val();
        if (tid) {

            var data = {
                event: 'refund',
                ecommerce: {
                    refund: {
                        actionField: { id: tid }
                    }
                }
            }
            window.GTM.addCustomDataLayer(data);
        }

    }
}

function MyAdviceGTM() {
    var container = $(".js-myadvice-container");
    if (container.length > 0) {

        var puarchaseBtn = container.find(".js-purchase-btn");
        window.GTM.addClickEvent("Mi asesoría", "Banner Asesoría - Ir a", "{{value}}", puarchaseBtn);

    }
}

function AddProductClick() {
    var BuyBtn = $('.js-btn-buy-products')

    var appyBtnClickBuyProducts = function (e) {
        var companyList = $('.company-product-list-row');
        var products = [];

        companyList.each(function (key, value) {
            var ProductType = $(value).find(".js-type").val();
            var ProductId = $(value).find(".js-IdProduct").val();
            var ProductName = $(value).find(".js-NameProduct").val();
            //var ProductDescription = $(value).find(".js-Description").val();
            var ProductPrice = $(value).find(".js-Price").val();
            var ProductQuantity = $(`#ProductsCart_${key}__Quantity`).val();

            if (ProductQuantity != 0)
                products.push({
                    'name': ProductName,
                    'id': ProductId,
                    'price': ProductPrice,
                    'brand': "El Empleo",
                    'category': ProductType,
                    'quantity': ProductQuantity
                })
        })

        var quickOfferSearchData = {
            "event": "checkout",
            "ecommerce": {
                'checkout': {
                    "actionField": { 'step': 1, 'option': '{{metodo de pago}}' },
                    "products": products
                }
            }
        };

        window.GTM.addCustomDataLayer(quickOfferSearchData);
    }

    window.GTM.addCallBackClickEvent(appyBtnClickBuyProducts, BuyBtn);
}

function AddFooterGTM() {

    var footerContainer = $(".js-footer");
    if (footerContainer.length > 0) {

        var footerLinks = footerContainer.find(".list-item a");

        $.each(footerLinks, function (key, value) {
            if ($(value).hasClass("js-phone-link")) {
                window.GTM.addClickEvent("Footer", "linea nacional", "{{value}}", value);
            }
            else if ($(value).hasClass("js-contact-link")) {
                if ($(value).attr("href").includes("mailto")) {
                    window.GTM.addClickEvent("Footer", "Contactanos - Email", "Enviar mail", value);
                }
                else {
                    window.GTM.addClickEvent("Footer", "Contactanos", "Quejas y reclamos", value);
                }
            }

            else window.GTM.addClickEvent("Footer", "Footer - Ir A - Portales", "{{value}}", value);
        });

        //var logo = $(".footer-main  [id$='logoLink']");
        //if (logo) window.GTM.addClickEvent("Footer", "Footer Intermedio", "Ir A {{url}}", logo[0]);

        //add social links
        var socialLinks = $("[social-name]");
        $.each(socialLinks, function (key, value) {
            var text = $(value).attr("social-name");
            window.GTM.addClickEvent("Footer", "Redes sociales", "Red Social: " + text, value);
        })

        //add franchises links
        var franchises = $(".js-franchises ul a");
        $.each(franchises, function (key, value) {
            window.GTM.addClickEvent("Footer", "País", "{{value}}", value);
        })

        //add portals links
        var portalLinks = $(".js-portal-links img");
        window.GTM.addClickEvent("Footer", "Portales especializados", "{{alt}}", portalLinks);

    }
}


function getPriceNumber(price) {
    var firstDigit = price.match(/\d/);
    var index = price.indexOf(firstDigit);
    var result = price.substring(index, price.length).GetCleanName().replace(".", "");
    return result;
}

function AddMutatorEvent(targetNode, callback, oneTime, configAttributes, validateRemoveNodes) {

    const config = { attributes: configAttributes, childList: true, subtree: true };
    const mutatorCallback = function (mutationsList, observer) {

        for (var i = 0; i < mutationsList.length; i++) {
            var attrName = mutationsList[i].attributeName;
            var type = mutationsList[i].type;
            var target = mutationsList[i].target;
            var removedNodes = mutationsList[i].removedNodes;

            if (validateRemoveNodes && removedNodes && removedNodes.length > 0) {
                break;
            }

            if (targetNode) {

                if (callback(targetNode)) {
                    if (oneTime) carouselObserver.disconnect();
                    break;
                }
            }
        }
    }
    const carouselObserver = new MutationObserver(mutatorCallback);
    carouselObserver.observe(targetNode[0], config);
}

