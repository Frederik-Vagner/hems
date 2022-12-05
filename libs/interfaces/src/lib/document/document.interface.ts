import { IBase } from '../base.interface';

export interface IDocument extends IBase {
  documentId: string;
  title: string;
  comments?: string;
  lastViewedAt?: Date;
  showOnDashboard: boolean;
  documentName: string;
}

export interface ICreateDocumentRequest {
  title: string;
  comments?: string;
  lastViewedAt?: Date;
  showOnDashboard: boolean;
}

export interface IUpdateDocumentRequest {
  title?: string;
  comments?: string;
  lastViewedAt?: Date;
  showOnDashboard?: boolean;
}
