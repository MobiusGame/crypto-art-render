export type TokenId = number;
export type LeverId = number;

export interface TokenSingleLever {
  minValue: number;
  maxValue: number;
  currValue: number;
}

export enum Platform {
  EOS = 'eos',
  ETH = 'eth'
}

export interface ChainAPI {
  cacheToken: Map<TokenId, Token>;
  getAvailableTokenId(contract: string): Promise<TokenId>;
  getToken(contract: string, tokenId: TokenId): Promise<Token>;
  getCurrValueByLeverId(contract: string, leverId: LeverId, tokenId: TokenId): Promise<number>;
  mintArtwork(contract: string, masterId: TokenId, issuer: string, artist: string, uri: string, collaborators: Array<string>);
  setuptoken(contract: string, tokenHolder: string, tokenId: TokenId, minValues: number[], maxValues: number[], currValues: number[]);
  updatetoken(contract: string, tokenHolder: string, tokenId: TokenId, leverIds: number[], newValues: number[]);
}

export interface Token {
  id: TokenId;
  uri: string;
  symbol: string;
}

export interface ControlToken {
  id: TokenId;
  leversNum: number;
  isSetup: boolean;
  masterId: TokenId;
  minValues: number[];
  maxValues: number[];
  currValues: number[];
}

export const TOKEN_TABLE = 'tokens';
export const CONTROL_TOKEN_TABLE = 'ctltokens';
