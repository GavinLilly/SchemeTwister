export interface IKeywordSummary {
  name: string;
  summary?: string;
}

export interface IKeyword extends IKeywordSummary {
  description: string;
}
