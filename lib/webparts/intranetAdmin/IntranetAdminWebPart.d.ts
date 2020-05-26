import { Version } from '@microsoft/sp-core-library';
import { IPropertyPaneConfiguration } from '@microsoft/sp-property-pane';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
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
    siteName: string;
}
export default class IntranetAdminWebPart extends BaseClientSideWebPart<IIntranetAdminWebPartProps> {
    _getListDataSite(): Promise<Site>;
    private _renderListAsync;
    private _renderList;
    render(): void;
    protected readonly dataVersion: Version;
    protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration;
}
//# sourceMappingURL=IntranetAdminWebPart.d.ts.map