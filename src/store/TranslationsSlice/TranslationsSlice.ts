import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { defaultDictionary, Dictionary } from "../../i18n/defaultDictionary";
import { polishDictionary } from "../../i18n/polishDictionary";
import { useAppDispatch } from "../useDispatch";
import { useAppSelector } from "../useSelector";
import { ENGLISH_LOCALE, POLISH_LOCALE } from "./constants";
import { Language } from "./types";

export const translationsSlice = createSlice({
  name: "translations",
  initialState: {
    dictionary:
      window.navigator.language === POLISH_LOCALE
        ? polishDictionary
        : defaultDictionary,
  },
  reducers: {
    setLanguage(state, { payload }: PayloadAction<Language>) {
      switch (payload) {
        case POLISH_LOCALE:
          state.dictionary = polishDictionary;
        case ENGLISH_LOCALE:
          state.dictionary = defaultDictionary;
        default:
          throw new Error("Unknown locale");
      }
    },
  },
});

export const { setLanguage } = translationsSlice.actions;

