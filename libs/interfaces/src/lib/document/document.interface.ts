import { IBase } from '../base.interface';

export interface IDocument extends IBase {
  documentId: string;
  title: string;
  comments?: string;
  lastViewedAt?: Date | null;
  showOnDashboard: boolean;
  documentName: string;
}

export interface IGetDocumentByIdResponse extends IDocument {
  downloadUrl: string;
}

export interface ICreateDocumentRequest {
  title: string;
  comments?: string;
  lastViewedAt?: Date | null;
  showOnDashboard: boolean;
}

export interface IUpdateDocumentRequest {
  title?: string;
  comments?: string;
  lastViewedAt?: Date | null;
  showOnDashboard?: boolean;
}
