import React, { useContext } from "react";
import { useAppSelector } from "../store/useSelector";
import { Dictionary } from "./defaultDictionary";

export type Tranlator = (key: keyof Dictionary) => string;

export const TranslationsContext = React.createContext<Tranlator| null>(null);

export const TranslationsManager = ({ children }: React.PropsWithChildren) => {
  const t = (key: keyof Dictionary) =>
    useAppSelector((s) => s.translations.dictionary[key]);

  return (
    <TranslationsContext.Provider value={t}>
      {children}
    </TranslationsContext.Provider>
  );
};


export const useTranslationsContext = () => {
  const t = useContext(TranslationsContext);
  if(!t){
    throw new Error("Impossibruuu");
  }
  return t;
}