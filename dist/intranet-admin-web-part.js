define("248dd781-d9b8-49d6-bebc-dfb91c202345_0.0.1", ["@microsoft/sp-property-pane","popper.js","@microsoft/sp-loader","bootstrap","@microsoft/sp-core-library","IntranetAdminWebPartStrings","@microsoft/sp-webpart-base","@microsoft/sp-http","jquery"], function(__WEBPACK_EXTERNAL_MODULE__26ea__, __WEBPACK_EXTERNAL_MODULE__27z4__, __WEBPACK_EXTERNAL_MODULE_I6O9__, __WEBPACK_EXTERNAL_MODULE_StVt__, __WEBPACK_EXTERNAL_MODULE_UWqr__, __WEBPACK_EXTERNAL_MODULE_ai8Y__, __WEBPACK_EXTERNAL_MODULE_br4S__, __WEBPACK_EXTERNAL_MODULE_vlQI__, __WEBPACK_EXTERNAL_MODULE_xeH2__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "BZAj");
/******/ })
/************************************************************************/
/******/ ({

/***/ "26ea":
/*!**********************************************!*\
  !*** external "@microsoft/sp-property-pane" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__26ea__;

/***/ }),

/***/ "27z4":
/*!****************************!*\
  !*** external "popper.js" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__27z4__;

/***/ }),

/***/ "3o+B":
/*!***************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/postcss-loader/src??postcss!./lib/webparts/intranetAdmin/styles/custom.css ***!
  \***************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "JPst")(false);
// Module
exports.push([module.i, "*{box-sizing:content-box}.red{border:1px solid red;border-radius:10px}.blue,.red{height:100px;width:100px;margin:5px}.blue{border:1px solid #00f;border-radius:10px}.green{border:1px solid green;height:100px;width:100px;margin:5px;border-radius:10px}.panel-heading{background-color:#ddddeb!important}.panel-heading h4{text-decoration:none;color:#545487!important}.panel :hover{background-color:#7676b8!important;text-decoration:none!important}.panel :hover .panel-title{color:#fff!important;text-decoration:none!important}.panel :hover .panel-body{background-color:#fff!important;color:#545487!important}.row{border-bottom:1px solid #ddddeb;margin-bottom:5px}.customBtn{color:#545487!important;background-color:#ddddeb!important;border-radius:10px}.customBtn:hover{color:#fff!important;background-color:#7676b8!important}.nav{margin-bottom:10px!important}.nav-pills .nav-link.active{color:#545487!important;background-color:transparent!important;border-bottom:3px solid #7676b8}.nav-pills .nav-link{border-radius:0!important}.nav-link{padding:.2rem 1rem!important}.nav-link:hover{color:#545487!important;border-bottom:3px solid #ca5c28}.nav-item a{color:#545487}", ""]);



/***/ }),

/***/ "BZAj":
/*!************************************************************!*\
  !*** ./lib/webparts/intranetAdmin/IntranetAdminWebPart.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @microsoft/sp-core-library */ "UWqr");
/* harmony import */ var _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @microsoft/sp-loader */ "I6O9");
/* harmony import */ var _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @microsoft/sp-property-pane */ "26ea");
/* harmony import */ var _microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @microsoft/sp-http */ "vlQI");
/* harmony import */ var _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @microsoft/sp-webpart-base */ "br4S");
/* harmony import */ var _microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var IntranetAdminWebPartStrings__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! IntranetAdminWebPartStrings */ "ai8Y");
/* harmony import */ var IntranetAdminWebPartStrings__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(IntranetAdminWebPartStrings__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "xeH2");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! bootstrap */ "StVt");
/* harmony import */ var bootstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(bootstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/custom.css */ "R0ss");
/* harmony import */ var _styles_custom_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_custom_css__WEBPACK_IMPORTED_MODULE_8__);
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();







__webpack_require__(/*! popper.js */ "27z4");



var IntranetAdminWebPart = /** @class */ (function (_super) {
    __extends(IntranetAdminWebPart, _super);
    function IntranetAdminWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntranetAdminWebPart.prototype._getListDataSite = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/title", _microsoft_sp_http__WEBPACK_IMPORTED_MODULE_3__["SPHttpClient"].configurations.v1)
            .then(function (response) {
            return response.json();
        });
    };
    //private _getListDataLinks(): Promise<ISPList> {
    //  return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/GetByTitle('Useful Links')/Id",SPHttpClient.configurations.v1)
    //    .then((response: SPHttpClientResponse) => {
    //      return response.json();
    //    });
    //}
    IntranetAdminWebPart.prototype._renderListAsync = function () {
        var _this = this;
        // Local environment
        if (_microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Environment"].type == _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["EnvironmentType"].SharePoint ||
            _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Environment"].type == _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["EnvironmentType"].ClassicSharePoint) {
            this._getListDataSite()
                .then(function (response) {
                _this._renderList(response.value);
            });
        }
    };
    IntranetAdminWebPart.prototype._renderList = function (items) {
        //let siteTitle:string ="";
    };
    IntranetAdminWebPart.prototype.render = function () {
        var currentWebUrl = this.context.pageContext.web.absoluteUrl;
        var siteTitle = this.context.pageContext.web.title;
        var hubName = this.context.pageContext.legacyPageContext.hubTitle;
        var faqID = "";
        var bootstrapCssURL = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css";
        var fontawesomeCssURL = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/regular.min.css";
        _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__["SPComponentLoader"].loadCss(bootstrapCssURL);
        _microsoft_sp_loader__WEBPACK_IMPORTED_MODULE_1__["SPComponentLoader"].loadCss(fontawesomeCssURL);
        var domainURL = "https://" + currentWebUrl.split('/')[2] + "/sites/";
        var BUName = "";
        console.log(siteTitle);
        switch (siteTitle) {
            case 'IT':
            case 'HR':
                BUName = "CS";
                break;
            case 'Operations':
                BUName = "CHDA";
                break;
        }
        var siteURL = domainURL + BUName + "/" + siteTitle;
        var knowledgeURL = domainURL + BUName + "/Knowledge";
        //let knowledgeManagement = knowledgeURL + "Management/"
        //let knowledgeGuides = knowledgeURL + "Guides/"
        //let knowledgePolicies = knowledgeURL + "Policies/"
        //let knowledgeProcedures = knowledgeURL + "Procedures/"
        //let knowledgeForms = knowledgeURL + "Forms/"
        //let knowledgeGeneral = knowledgeURL + "General/"
        console.log("siteURL=" + siteURL);
        this.domElement.innerHTML = "\n    <h3><u>" + siteTitle + " Intranet Admin</u></h3>\n\t\t<ul class=\"nav nav-pills\">\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link active\" data-toggle=\"pill\" href=\"#tab1\">Home Page</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"pill\" href=\"#tab2\">Sidebar App</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"pill\" href=\"#tab3\">Knowledge Library</a></li>\n\t\t\t<li class=\"nav-item\"><a class=\"nav-link\" data-toggle=\"pill\" href=\"#tab4\">Permissions</a></li>\n    </ul>\n\n    <div class=\"tab-content\">\n      <div id=\"tab1\" class=\"tab-pane active\">\n        <div class=\"row\">\n          <div class=\"col-9\">                            \n            <h4>Welcome Text</h4>\n            <p>This is the main text on the Team Intranet Home page</p>\n          </div>\n          <div class=\"col-3\">\n            <a href=\"" + siteURL + "/Lists/WelcomeMessage/\" target=\"_blank\" role=\"button\" class=\"btn customBtn\">Edit Text</a >        \n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-9\">\n            <h4>News</h4>\n            <p>Add or Edit the articles displayed in the Team News page.</p>\n            <span id=\"news\"></span>\n          </div>\n          <div class=\"col-3\">\n            <a href=\"" + siteURL + "/Lists/News/\" target=\"_blank\" role=\"button\" class=\"btn customBtn\">Edit Items</a >        \n          </div>\n        </div> \n\n        <div class=\"row\">\n          <div class=\"col-9\">        \n            <h4>FAQs</h4>\n            <p>This is the list of FAQs displayed on that page.</p>                \n            <p>The FAQ list has the following fields;</p>\n            <ol>\n              <li><b>Category</b>: used for the tabs at the top of the page.</li>\n              <li><b>Question</b>: single line of text</li>\n              <li><b>Answer</b>: Rich Text field - can contain images, links, text formatting</li>\n            </ol>\n          </div>\n          <div class=\"col-3\">\n            <a href=\"" + siteURL + "/Lists/FAQs/\" target=\"_blank\" role=\"button\" class=\"btn customBtn\">Edit List</a>\n          </div>\n        </div>  \n\n        <div class=\"row\">\n          <div class=\"col-9\">\n            <h4>Site Contacts</h4>\n            <p>To display the Site Owners and Power Users in the \n            accordion menu, shown on the Team Intranet Home page under the Contacts tab.\n            </p>            \n          </div>\n          <div class=\"col-3\">\n            <a href=\"" + siteURL + "/Lists/contacts/\" target=\"_blank\" role=\"button\" class=\"btn customBtn\">Edit List</a>\n          </div>\n        </div>\n\n      </div>\n\n      <div id=\"tab2\" class=\"tab-pane fade\">\n        <div class=\"row\">\n          <div class=\"col-9\">\n            <h4>Useful Links</h4>\n            <p>\n              <i>Nb: The useful links on the front door pages are \n              controlled by the Communications team.</i><br />\n            </p>\n          </div>\n          <div class=\"col-3\">\n            <a href=\"" + siteURL + "/Lists/UsefulLinks/\" target=\"_blank\" role=\"button\" class=\"btn customBtn\">Edit Links</a>  \t\t\t                        \t\n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-9\">\n            <h3>Metro Tiles</h3>\n            <p>\n              These are the 9 tiles on the Front Door pages. <br/> \n              Tiles 1 to 5 are compulsory, 6 to 9 can be customised.<br/>\n            </p>                               \t\t\t                \n          </div>\n          <div class=\"col-3\">\n            <a href=\"" + siteURL + "/Lists/Metrotiles/\" target=\"_blank\" role=\"button\" class=\"btn customBtn\">Edit Tiles</a>         \t\t\t\t\t \t\t\t\t\t                          \n          </div>\n        </div>\n      </div>\n\n      <div id=\"tab3\" class=\"tab-pane fade\">\n        <p>The documents uploaded to these libraries are for \n        all within the business unit to see. Do not upload documents which are for team \n        only use here add them to your MS Teams team.</p>\n\n        <div class=\"row\">\n          <div class=\"col-9\">\n            <h3>Policies</h3>\t\t\t                \n            <p>The documents used for the Knowledge Policies Library</p>\n          </div>\n          <div class=\"col-3\">\n            <a href=\"" + knowledgeURL + "/Policies/Forms/" + siteTitle + ".aspx\" target=\"_blank\" role=\"button\" class=\"btn customBtn\">Edit Files</a>        \n          </div>\n        </div>\n        \n        <div class=\"row\">\n          <div class=\"col-9\">\n            <h3>Procedures</h3>\t\t\t                \n            <p>The documents used for the Knowledge Procedures Library</p>\n          </div>\n          <div class=\"col-3\">\n            <a href=\"" + knowledgeURL + "/Procedures/Forms/" + siteTitle + ".aspx\" target=\"_blank\" role=\"button\" class=\"btn customBtn\">Edit Files</a>        \n          </div>\n        </div>\n        \n        <div class=\"row\">\n          <div class=\"col-9\">\n            <h3>Forms</h3>\t\t\t                \n            <p>The documents used for the Knowledge Form Library</p>\n          </div>\n          <div class=\"col-3\">\n            <a href=\"" + knowledgeURL + "/Forms/Forms/" + siteTitle + ".aspx\" target=\"_blank\" role=\"button\" class=\"btn customBtn\">Edit Files</a>        \n          </div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-9\">\n            <h3>Guides</h3>\t\t\t                \n            <p>The documents used for the Knowledge GuidesLibrary</p>\n          </div>\n          <div class=\"col-3\">\n            <a href=\"" + knowledgeURL + "/Guides/Forms/" + siteTitle + ".aspx\" target=\"_blank\" role=\"button\" class=\"btn customBtn\">Edit Files</a>        \n          </div>\n        </div>\n          \n        <div class=\"row\">\n          <div class=\"col-9\">\n            <h3>General Documents</h3>\n            <p>The team related documents for the Knowledge Document \n            Library, which are all other documents that are not \n            Guides, Policies, Procedures or Forms.</p>\n          </div>\n          <div class=\"col-3\">\n            <a href=\"" + knowledgeURL + "/General/Forms/" + siteTitle + ".aspx\" target=\"_blank\" role=\"button\" class=\"btn customBtn\">Edit Files</a>        \n          </div>\n        </div>\n          \n        <div class=\"row\">\n          <div class=\"col-9\">\n            <h3>Management Documents</h3>\n            <p>The team related documents for the Knowledge Document \n            Library, which are for Managers eyes only.</p>\n          </div>\n          <div class=\"col-3\">\n            <a href=\"" + knowledgeURL + "/Management/Forms/" + siteTitle + ".aspx\" target=\"_blank\" role=\"button\" class=\"btn customBtn\">Edit Files</a>        \n          </div>\n        </div>\n          \n        <div class=\"row\">\n          <div class=\"col-9\">\n            <h3>Team Document Categories</h3>\n            <p>The team related documents for the Knowledge Document \n            Library, which are the team custom categories.</p>\n          </div>\n          <div class=\"col-3\">\n            <a href=\"" + knowledgeURL + "/Documents/Forms/" + siteTitle + ".aspx\" target=\"_blank\" role=\"button\" class=\"btn customBtn\">Edit Files</a>        \n          </div>\n        </div>\n                  \n      </div>\n\n      <div id=\"tab4\" class=\"tab-pane fade\">\n        <p>Permission groups used for this site fall into the following groups;</p>\n        <h4>Owners</h4>\n        <p>The people in this group approve items and create alerts for the site</p>\n        <h4>Power Users</h4>\n        <p>The people in this group can add new items to lists & libraries</p>\n        <p>The Owners and Power User groups are controlled by the SharePoint Admins / Business Unit Owners</p>\n        <p><b>Note</b>: All users added to this site MUST be \n        added to a group. No user is to be added with direct \n        permissions. This is keep the management of the site \n        permissions clean and easy.<br/><br/>\n        </p>     \n      <div>\n    </div>\n    ";
        this._renderListAsync();
    };
    Object.defineProperty(IntranetAdminWebPart.prototype, "dataVersion", {
        get: function () {
            return _microsoft_sp_core_library__WEBPACK_IMPORTED_MODULE_0__["Version"].parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    IntranetAdminWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: IntranetAdminWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["PropertyPaneDescription"]
                    },
                    groups: [
                        {
                            groupName: IntranetAdminWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["BasicGroupName"],
                            groupFields: [
                                Object(_microsoft_sp_property_pane__WEBPACK_IMPORTED_MODULE_2__["PropertyPaneTextField"])('description', {
                                    label: IntranetAdminWebPartStrings__WEBPACK_IMPORTED_MODULE_5__["DescriptionFieldLabel"]
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return IntranetAdminWebPart;
}(_microsoft_sp_webpart_base__WEBPACK_IMPORTED_MODULE_4__["BaseClientSideWebPart"]));
/* harmony default export */ __webpack_exports__["default"] = (IntranetAdminWebPart);


/***/ }),

/***/ "I6O9":
/*!***************************************!*\
  !*** external "@microsoft/sp-loader" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_I6O9__;

/***/ }),

/***/ "JPst":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "R0ss":
/*!******************************************************!*\
  !*** ./lib/webparts/intranetAdmin/styles/custom.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/postcss-loader/src??postcss!./custom.css */ "3o+B");
var loader = __webpack_require__(/*! ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js */ "ruv1");

if(typeof content === "string") content = [[module.i, content]];

// add the styles to the DOM
for (var i = 0; i < content.length; i++) loader.loadStyles(content[i][1], true);

if(content.locals) module.exports = content.locals;

/***/ }),

/***/ "StVt":
/*!****************************!*\
  !*** external "bootstrap" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_StVt__;

/***/ }),

/***/ "UWqr":
/*!*********************************************!*\
  !*** external "@microsoft/sp-core-library" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_UWqr__;

/***/ }),

/***/ "ai8Y":
/*!**********************************************!*\
  !*** external "IntranetAdminWebPartStrings" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_ai8Y__;

/***/ }),

/***/ "br4S":
/*!*********************************************!*\
  !*** external "@microsoft/sp-webpart-base" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_br4S__;

/***/ }),

/***/ "ruv1":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/@microsoft/loader-load-themed-styles/node_modules/@microsoft/load-themed-styles/lib/index.js ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {
/**
 * An IThemingInstruction can specify a rawString to be preserved or a theme slot and a default value
 * to use if that slot is not specified by the theme.
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
// Store the theming state in __themeState__ global scope for reuse in the case of duplicate
// load-themed-styles hosted on the page.
var _root = (typeof window === 'undefined') ? global : window; // tslint:disable-line:no-any
// Nonce string to inject into script tag if one provided. This is used in CSP (Content Security Policy).
var _styleNonce = _root && _root.CSPSettings && _root.CSPSettings.nonce;
var _themeState = initializeThemeState();
/**
 * Matches theming tokens. For example, "[theme: themeSlotName, default: #FFF]" (including the quotes).
 */
// tslint:disable-next-line:max-line-length
var _themeTokenRegex = /[\'\"]\[theme:\s*(\w+)\s*(?:\,\s*default:\s*([\\"\']?[\.\,\(\)\#\-\s\w]*[\.\,\(\)\#\-\w][\"\']?))?\s*\][\'\"]/g;
var now = function () { return (typeof performance !== 'undefined' && !!performance.now) ? performance.now() : Date.now(); };
function measure(func) {
    var start = now();
    func();
    var end = now();
    _themeState.perf.duration += end - start;
}
/**
 * initialize global state object
 */
function initializeThemeState() {
    var state = _root.__themeState__ || {
        theme: undefined,
        lastStyleElement: undefined,
        registeredStyles: []
    };
    if (!state.runState) {
        state = __assign({}, (state), { perf: {
                count: 0,
                duration: 0
            }, runState: {
                flushTimer: 0,
                mode: 0 /* sync */,
                buffer: []
            } });
    }
    if (!state.registeredThemableStyles) {
        state = __assign({}, (state), { registeredThemableStyles: [] });
    }
    _root.__themeState__ = state;
    return state;
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load
 * event is fired.
 * @param {string | ThemableArray} styles Themable style text to register.
 * @param {boolean} loadAsync When true, always load styles in async mode, irrespective of current sync mode.
 */
function loadStyles(styles, loadAsync) {
    if (loadAsync === void 0) { loadAsync = false; }
    measure(function () {
        var styleParts = Array.isArray(styles) ? styles : splitStyles(styles);
        var _a = _themeState.runState, mode = _a.mode, buffer = _a.buffer, flushTimer = _a.flushTimer;
        if (loadAsync || mode === 1 /* async */) {
            buffer.push(styleParts);
            if (!flushTimer) {
                _themeState.runState.flushTimer = asyncLoadStyles();
            }
        }
        else {
            applyThemableStyles(styleParts);
        }
    });
}
exports.loadStyles = loadStyles;
/**
 * Allows for customizable loadStyles logic. e.g. for server side rendering application
 * @param {(processedStyles: string, rawStyles?: string | ThemableArray) => void}
 * a loadStyles callback that gets called when styles are loaded or reloaded
 */
function configureLoadStyles(loadStylesFn) {
    _themeState.loadStyles = loadStylesFn;
}
exports.configureLoadStyles = configureLoadStyles;
/**
 * Configure run mode of load-themable-styles
 * @param mode load-themable-styles run mode, async or sync
 */
function configureRunMode(mode) {
    _themeState.runState.mode = mode;
}
exports.configureRunMode = configureRunMode;
/**
 * external code can call flush to synchronously force processing of currently buffered styles
 */
function flush() {
    measure(function () {
        var styleArrays = _themeState.runState.buffer.slice();
        _themeState.runState.buffer = [];
        var mergedStyleArray = [].concat.apply([], styleArrays);
        if (mergedStyleArray.length > 0) {
            applyThemableStyles(mergedStyleArray);
        }
    });
}
exports.flush = flush;
/**
 * register async loadStyles
 */
function asyncLoadStyles() {
    return setTimeout(function () {
        _themeState.runState.flushTimer = 0;
        flush();
    }, 0);
}
/**
 * Loads a set of style text. If it is registered too early, we will register it when the window.load event
 * is fired.
 * @param {string} styleText Style to register.
 * @param {IStyleRecord} styleRecord Existing style record to re-apply.
 */
function applyThemableStyles(stylesArray, styleRecord) {
    if (_themeState.loadStyles) {
        _themeState.loadStyles(resolveThemableArray(stylesArray).styleString, stylesArray);
    }
    else {
        registerStyles(stylesArray);
    }
}
/**
 * Registers a set theme tokens to find and replace. If styles were already registered, they will be
 * replaced.
 * @param {theme} theme JSON object of theme tokens to values.
 */
function loadTheme(theme) {
    _themeState.theme = theme;
    // reload styles.
    reloadStyles();
}
exports.loadTheme = loadTheme;
/**
 * Clear already registered style elements and style records in theme_State object
 * @param option - specify which group of registered styles should be cleared.
 * Default to be both themable and non-themable styles will be cleared
 */
function clearStyles(option) {
    if (option === void 0) { option = 3 /* all */; }
    if (option === 3 /* all */ || option === 2 /* onlyNonThemable */) {
        clearStylesInternal(_themeState.registeredStyles);
        _themeState.registeredStyles = [];
    }
    if (option === 3 /* all */ || option === 1 /* onlyThemable */) {
        clearStylesInternal(_themeState.registeredThemableStyles);
        _themeState.registeredThemableStyles = [];
    }
}
exports.clearStyles = clearStyles;
function clearStylesInternal(records) {
    records.forEach(function (styleRecord) {
        var styleElement = styleRecord && styleRecord.styleElement;
        if (styleElement && styleElement.parentElement) {
            styleElement.parentElement.removeChild(styleElement);
        }
    });
}
/**
 * Reloads styles.
 */
function reloadStyles() {
    if (_themeState.theme) {
        var themableStyles = [];
        for (var _i = 0, _a = _themeState.registeredThemableStyles; _i < _a.length; _i++) {
            var styleRecord = _a[_i];
            themableStyles.push(styleRecord.themableStyle);
        }
        if (themableStyles.length > 0) {
            clearStyles(1 /* onlyThemable */);
            applyThemableStyles([].concat.apply([], themableStyles));
        }
    }
}
/**
 * Find theme tokens and replaces them with provided theme values.
 * @param {string} styles Tokenized styles to fix.
 */
function detokenize(styles) {
    if (styles) {
        styles = resolveThemableArray(splitStyles(styles)).styleString;
    }
    return styles;
}
exports.detokenize = detokenize;
/**
 * Resolves ThemingInstruction objects in an array and joins the result into a string.
 * @param {ThemableArray} splitStyleArray ThemableArray to resolve and join.
 */
function resolveThemableArray(splitStyleArray) {
    var theme = _themeState.theme;
    var themable = false;
    // Resolve the array of theming instructions to an array of strings.
    // Then join the array to produce the final CSS string.
    var resolvedArray = (splitStyleArray || []).map(function (currentValue) {
        var themeSlot = currentValue.theme;
        if (themeSlot) {
            themable = true;
            // A theming annotation. Resolve it.
            var themedValue = theme ? theme[themeSlot] : undefined;
            var defaultValue = currentValue.defaultValue || 'inherit';
            // Warn to console if we hit an unthemed value even when themes are provided, but only if "DEBUG" is true.
            // Allow the themedValue to be undefined to explicitly request the default value.
            if (theme && !themedValue && console && !(themeSlot in theme) && "boolean" !== 'undefined' && true) {
                console.warn("Theming value not provided for \"" + themeSlot + "\". Falling back to \"" + defaultValue + "\".");
            }
            return themedValue || defaultValue;
        }
        else {
            // A non-themable string. Preserve it.
            return currentValue.rawString;
        }
    });
    return {
        styleString: resolvedArray.join(''),
        themable: themable
    };
}
/**
 * Split tokenized CSS into an array of strings and theme specification objects
 * @param {string} styles Tokenized styles to split.
 */
function splitStyles(styles) {
    var result = [];
    if (styles) {
        var pos = 0; // Current position in styles.
        var tokenMatch = void 0; // tslint:disable-line:no-null-keyword
        while (tokenMatch = _themeTokenRegex.exec(styles)) {
            var matchIndex = tokenMatch.index;
            if (matchIndex > pos) {
                result.push({
                    rawString: styles.substring(pos, matchIndex)
                });
            }
            result.push({
                theme: tokenMatch[1],
                defaultValue: tokenMatch[2] // May be undefined
            });
            // index of the first character after the current match
            pos = _themeTokenRegex.lastIndex;
        }
        // Push the rest of the string after the last match.
        result.push({
            rawString: styles.substring(pos)
        });
    }
    return result;
}
exports.splitStyles = splitStyles;
/**
 * Registers a set of style text. If it is registered too early, we will register it when the
 * window.load event is fired.
 * @param {ThemableArray} styleArray Array of IThemingInstruction objects to register.
 * @param {IStyleRecord} styleRecord May specify a style Element to update.
 */
function registerStyles(styleArray) {
    if (typeof document === 'undefined') {
        return;
    }
    var head = document.getElementsByTagName('head')[0];
    var styleElement = document.createElement('style');
    var _a = resolveThemableArray(styleArray), styleString = _a.styleString, themable = _a.themable;
    styleElement.setAttribute('data-load-themed-styles', 'true');
    styleElement.type = 'text/css';
    if (_styleNonce) {
        styleElement.setAttribute('nonce', _styleNonce);
    }
    styleElement.appendChild(document.createTextNode(styleString));
    _themeState.perf.count++;
    head.appendChild(styleElement);
    var ev = document.createEvent('HTMLEvents');
    ev.initEvent('styleinsert', true /* bubbleEvent */, false /* cancelable */);
    ev.args = {
        newStyle: styleElement
    };
    document.dispatchEvent(ev);
    var record = {
        styleElement: styleElement,
        themableStyle: styleArray
    };
    if (themable) {
        _themeState.registeredThemableStyles.push(record);
    }
    else {
        _themeState.registeredStyles.push(record);
    }
}
//# sourceMappingURL=index.js.map
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../../../webpack/buildin/global.js */ "yLpj")))

/***/ }),

/***/ "vlQI":
/*!*************************************!*\
  !*** external "@microsoft/sp-http" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_vlQI__;

/***/ }),

/***/ "xeH2":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_xeH2__;

/***/ }),

/***/ "yLpj":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })

/******/ })});;
//# sourceMappingURL=intranet-admin-web-part.js.map