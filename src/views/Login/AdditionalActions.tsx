import { Grid, Link } from "../../components";
import { useTranslationsContext } from "../../i18n/TranslationsContext";

export const AdditionalActions = () => {
  const t = useTranslationsContext();
  return (
    <Grid container>
      <Grid item xs>
        <Link href="#" variant="body2">
          {t("forgot_password")}
        </Link>
      </Grid>
      <Grid item>
        <Link href="#" variant="body2">
          {t("prompt_register")}
        </Link>
      </Grid>
    </Grid>
  );
};
