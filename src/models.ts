export interface User {
  name: string;
}

export interface BookApiResponse {
  kind: string;
  items: BookItem[];

  totalItems: number;
}

export interface BookItem {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
}

export interface VolumeInfo {
  title: string;
  authors: string[];
  averageRating: string;
  imageLinks?: {
    smallThumbnail?: string;
    thumbnail?: string;
  };
  description: string;
}
