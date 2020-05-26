var __extends = (this && this.__extends) || (function () {
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
import { Version } from '@microsoft/sp-core-library';
import { SPComponentLoader } from '@microsoft/sp-loader';
import { PropertyPaneTextField } from '@microsoft/sp-property-pane';
import { SPHttpClient } from '@microsoft/sp-http';
import { Environment, EnvironmentType } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import * as strings from 'IntranetAdminWebPartStrings';
require('popper.js');
import 'jquery';
import 'bootstrap';
import './styles/custom.css';
var IntranetAdminWebPart = /** @class */ (function (_super) {
    __extends(IntranetAdminWebPart, _super);
    function IntranetAdminWebPart() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    IntranetAdminWebPart.prototype._getListDataSite = function () {
        return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/title", SPHttpClient.configurations.v1)
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
        if (Environment.type == EnvironmentType.SharePoint ||
            Environment.type == EnvironmentType.ClassicSharePoint) {
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
        SPComponentLoader.loadCss(bootstrapCssURL);
        SPComponentLoader.loadCss(fontawesomeCssURL);
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
            return Version.parse('1.0');
        },
        enumerable: true,
        configurable: true
    });
    IntranetAdminWebPart.prototype.getPropertyPaneConfiguration = function () {
        return {
            pages: [
                {
                    header: {
                        description: strings.PropertyPaneDescription
                    },
                    groups: [
                        {
                            groupName: strings.BasicGroupName,
                            groupFields: [
                                PropertyPaneTextField('description', {
                                    label: strings.DescriptionFieldLabel
                                })
                            ]
                        }
                    ]
                }
            ]
        };
    };
    return IntranetAdminWebPart;
}(BaseClientSideWebPart));
export default IntranetAdminWebPart;
//# sourceMappingURL=IntranetAdminWebPart.js.map