import { IBase } from '../base.interface';

export interface IDocument extends IBase {
  documentId: string;
  title: string;
  comments?: string;
  lastViewedAt?: Date;
  showOnDashboard: boolean;
  documentUrl: string;
}

export interface ICreateDocumentRequest {
  title: string;
  comments?: string;
  lastViewedAt?: Date;
  showOnDashboard: boolean;
  documentUrl: string;
}

export interface IUpdateDocumentRequest {
  title?: string;
  comments?: string;
  lastViewedAt?: Date;
  showOnDashboard?: boolean;
  documentUrl?: string;
}
