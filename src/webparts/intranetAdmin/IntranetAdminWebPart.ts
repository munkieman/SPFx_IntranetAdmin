import { Version } from '@microsoft/sp-core-library';
import { SPComponentLoader } from '@microsoft/sp-loader';

import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import {  
  SPHttpClient, 
  SPHttpClientResponse, 
  ISPHttpClientOptions
} from '@microsoft/sp-http';

import {
  Environment,
  EnvironmentType
} from '@microsoft/sp-core-library';

import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import { escape } from '@microsoft/sp-lodash-subset';

import styles from './IntranetAdminWebPart.module.scss';

import * as strings from 'IntranetAdminWebPartStrings';

require('popper.js');
import 'jquery';
import 'bootstrap';
import './styles/custom.css';

export interface IIntranetAdminWebPartProps {
  description: string;
}

export interface Site {
  value: Site[];
}

export interface Site {
  siteName : string;
}

export default class IntranetAdminWebPart extends BaseClientSideWebPart <IIntranetAdminWebPartProps> {

  public _getListDataSite(): Promise<Site> {
    return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + `/_api/web/title`, SPHttpClient.configurations.v1)
        .then((response: SPHttpClientResponse) => {                
            return response.json();
        });
  }

  //private _getListDataLinks(): Promise<ISPList> {
  //  return this.context.spHttpClient.get(this.context.pageContext.web.absoluteUrl + "/_api/web/lists/GetByTitle('Useful Links')/Id",SPHttpClient.configurations.v1)
  //    .then((response: SPHttpClientResponse) => {
  //      return response.json();
  //    });
  //}

  private _renderListAsync(): void {
    // Local environment
  if (Environment.type == EnvironmentType.SharePoint ||
          Environment.type == EnvironmentType.ClassicSharePoint) {
      this._getListDataSite()
        .then((response) => {
          this._renderList(response.value);
        });
    }
  }

  private _renderList(items: Site[]): void {
    //let siteTitle:string ="";
    
  }

  public render(): void {
    let currentWebUrl = this.context.pageContext.web.absoluteUrl;
    let siteTitle = this.context.pageContext.web.title;
    let hubName = this.context.pageContext.legacyPageContext.hubTitle; 
    let faqID = "";
    let bootstrapCssURL = "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css";
    let fontawesomeCssURL = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/regular.min.css";
    SPComponentLoader.loadCss(bootstrapCssURL);
    SPComponentLoader.loadCss(fontawesomeCssURL);

    let domainURL = "https://"+currentWebUrl.split('/')[2]+"/sites/";
    let BUName = "";
    console.log(siteTitle);

    switch(siteTitle) { 
      case 'IT':
      case 'HR':    
        BUName="CS";     
        break; 
      
      case 'Operations': 
        BUName="CHDA";  
        break;        
   }

   let siteURL = domainURL + BUName + "/" + siteTitle;
   let knowledgeURL = domainURL + BUName + "/Knowledge";
   
   //let knowledgeManagement = knowledgeURL + "Management/"
   //let knowledgeGuides = knowledgeURL + "Guides/"
   //let knowledgePolicies = knowledgeURL + "Policies/"
   //let knowledgeProcedures = knowledgeURL + "Procedures/"
   //let knowledgeForms = knowledgeURL + "Forms/"
   //let knowledgeGeneral = knowledgeURL + "General/"
  
   console.log("siteURL="+siteURL); 

    this.domElement.innerHTML = `
    <h3><u>${siteTitle} Intranet Admin</u></h3>
		<ul class="nav nav-pills">
			<li class="nav-item"><a class="nav-link active" data-toggle="pill" href="#tab1">Home Page</a></li>
			<li class="nav-item"><a class="nav-link" data-toggle="pill" href="#tab2">Sidebar App</a></li>
			<li class="nav-item"><a class="nav-link" data-toggle="pill" href="#tab3">Knowledge Library</a></li>
			<li class="nav-item"><a class="nav-link" data-toggle="pill" href="#tab4">Permissions</a></li>
    </ul>

    <div class="tab-content">
      <div id="tab1" class="tab-pane active">
        <div class="row">
          <div class="col-9">                            
            <h4>Welcome Text</h4>
            <p>This is the main text on the Team Intranet Home page</p>
          </div>
          <div class="col-3">
            <a href="${siteURL}/Lists/WelcomeMessage/" target="_blank" role="button" class="btn customBtn">Edit Text</a >        
          </div>
        </div>

        <div class="row">
          <div class="col-9">
            <h4>News</h4>
            <p>Add or Edit the articles displayed in the Team News page.</p>
            <span id="news"></span>
          </div>
          <div class="col-3">
            <a href="${siteURL}/Lists/News/" target="_blank" role="button" class="btn customBtn">Edit Items</a >        
          </div>
        </div> 

        <div class="row">
          <div class="col-9">        
            <h4>FAQs</h4>
            <p>This is the list of FAQs displayed on that page.</p>                
            <p>The FAQ list has the following fields;</p>
            <ol>
              <li><b>Category</b>: used for the tabs at the top of the page.</li>
              <li><b>Question</b>: single line of text</li>
              <li><b>Answer</b>: Rich Text field - can contain images, links, text formatting</li>
            </ol>
          </div>
          <div class="col-3">
            <a href="${siteURL}/Lists/FAQs/" target="_blank" role="button" class="btn customBtn">Edit List</a>
          </div>
        </div>  

        <div class="row">
          <div class="col-9">
            <h4>Site Contacts</h4>
            <p>To display the Site Owners and Power Users in the 
            accordion menu, shown on the Team Intranet Home page under the Contacts tab.
            </p>            
          </div>
          <div class="col-3">
            <a href="${siteURL}/Lists/contacts/" target="_blank" role="button" class="btn customBtn">Edit List</a>
          </div>
        </div>

      </div>

      <div id="tab2" class="tab-pane fade">
        <div class="row">
          <div class="col-9">
            <h4>Useful Links</h4>
            <p>
              <i>Nb: The useful links on the front door pages are 
              controlled by the Communications team.</i><br />
            </p>
          </div>
          <div class="col-3">
            <a href="${siteURL}/Lists/UsefulLinks/" target="_blank" role="button" class="btn customBtn">Edit Links</a>  			                        	
          </div>
        </div>

        <div class="row">
          <div class="col-9">
            <h3>Metro Tiles</h3>
            <p>
              These are the 9 tiles on the Front Door pages. <br/> 
              Tiles 1 to 5 are compulsory, 6 to 9 can be customised.<br/>
            </p>                               			                
          </div>
          <div class="col-3">
            <a href="${siteURL}/Lists/Metrotiles/" target="_blank" role="button" class="btn customBtn">Edit Tiles</a>         					 					                          
          </div>
        </div>
      </div>

      <div id="tab3" class="tab-pane fade">
        <p>The documents uploaded to these libraries are for 
        all within the business unit to see. Do not upload documents which are for team 
        only use here add them to your MS Teams team.</p>

        <div class="row">
          <div class="col-9">
            <h3>Policies</h3>			                
            <p>The documents used for the Knowledge Policies Library</p>
          </div>
          <div class="col-3">
            <a href="${knowledgeURL}/Policies/Forms/${siteTitle}.aspx" target="_blank" role="button" class="btn customBtn">Edit Files</a>        
          </div>
        </div>
        
        <div class="row">
          <div class="col-9">
            <h3>Procedures</h3>			                
            <p>The documents used for the Knowledge Procedures Library</p>
          </div>
          <div class="col-3">
            <a href="${knowledgeURL}/Procedures/Forms/${siteTitle}.aspx" target="_blank" role="button" class="btn customBtn">Edit Files</a>        
          </div>
        </div>
        
        <div class="row">
          <div class="col-9">
            <h3>Forms</h3>			                
            <p>The documents used for the Knowledge Form Library</p>
          </div>
          <div class="col-3">
            <a href="${knowledgeURL}/Forms/Forms/${siteTitle}.aspx" target="_blank" role="button" class="btn customBtn">Edit Files</a>        
          </div>
        </div>

        <div class="row">
          <div class="col-9">
            <h3>Guides</h3>			                
            <p>The documents used for the Knowledge GuidesLibrary</p>
          </div>
          <div class="col-3">
            <a href="${knowledgeURL}/Guides/Forms/${siteTitle}.aspx" target="_blank" role="button" class="btn customBtn">Edit Files</a>        
          </div>
        </div>
          
        <div class="row">
          <div class="col-9">
            <h3>General Documents</h3>
            <p>The team related documents for the Knowledge Document 
            Library, which are all other documents that are not 
            Guides, Policies, Procedures or Forms.</p>
          </div>
          <div class="col-3">
            <a href="${knowledgeURL}/General/Forms/${siteTitle}.aspx" target="_blank" role="button" class="btn customBtn">Edit Files</a>        
          </div>
        </div>
          
        <div class="row">
          <div class="col-9">
            <h3>Management Documents</h3>
            <p>The team related documents for the Knowledge Document 
            Library, which are for Managers eyes only.</p>
          </div>
          <div class="col-3">
            <a href="${knowledgeURL}/Management/Forms/${siteTitle}.aspx" target="_blank" role="button" class="btn customBtn">Edit Files</a>        
          </div>
        </div>
          
        <div class="row">
          <div class="col-9">
            <h3>Team Document Categories</h3>
            <p>The team related documents for the Knowledge Document 
            Library, which are the team custom categories.</p>
          </div>
          <div class="col-3">
            <a href="${knowledgeURL}/Documents/Forms/${siteTitle}.aspx" target="_blank" role="button" class="btn customBtn">Edit Files</a>        
          </div>
        </div>
                  
      </div>

      <div id="tab4" class="tab-pane fade">
        <p>Permission groups used for this site fall into the following groups;</p>
        <h4>Owners</h4>
        <p>The people in this group approve items and create alerts for the site</p>
        <h4>Power Users</h4>
        <p>The people in this group can add new items to lists & libraries</p>
        <p>The Owners and Power User groups are controlled by the SharePoint Admins / Business Unit Owners</p>
        <p><b>Note</b>: All users added to this site MUST be 
        added to a group. No user is to be added with direct 
        permissions. This is keep the management of the site 
        permissions clean and easy.<br/><br/>
        </p>     
      <div>
    </div>
    `;

    this._renderListAsync();        

  }

  protected get dataVersion(): Version {
  return Version.parse('1.0');
}

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
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
}
}
