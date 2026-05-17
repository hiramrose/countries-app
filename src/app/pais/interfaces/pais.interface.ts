export interface Country {
  name:          CountryName;
  tld?:          string[];
  cca2:          string;
  ccn3?:         string;
  cca3:          string;
  cioc?:         string;
  independent?:  boolean;
  status:        string;
  unMember:      boolean;
  currencies?:   { [code: string]: CurrencyV3 };
  idd?:          Idd;
  capital?:      string[];
  altSpellings:  string[];
  region:        string;
  subregion?:    string;
  languages?:    { [code: string]: string };
  translations:  { [code: string]: Translation };
  latlng:        number[];
  landlocked:    boolean;
  borders?:      string[];
  area:          number;
  demonyms?:     { [lang: string]: Demonym };
  flag:          string;
  population:    number;
  gini?:         { [year: string]: number };
  timezones:     string[];
  continents:    string[];
  flags:         Flags;
  startOfWeek:   string;
  capitalInfo?:  { latlng?: number[] };
}

export interface CountryName {
  common:      string;
  official:    string;
  nativeName?: { [lang: string]: { official: string; common: string } };
}

export interface CurrencyV3 {
  name:   string;
  symbol: string;
}

export interface Idd {
  root?:     string;
  suffixes?: string[];
}

export interface Translation {
  official: string;
  common:   string;
}

export interface Demonym {
  f: string;
  m: string;
}

export interface Flags {
  png:  string;
  svg:  string;
  alt?: string;
}
