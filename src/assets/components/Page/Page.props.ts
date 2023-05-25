export type MetaInfo = {
	pageTitle: string;
	pageDescription?: string;
	keywords?: string;
};

export interface PageProps {
	meta: MetaInfo;
}
