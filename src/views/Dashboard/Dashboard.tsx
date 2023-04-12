import { Typography, Grid, Box, Card, CardMedia,CardContent } from "../../components";
import { useTranslationsContext } from "../../i18n/TranslationsContext";

export const Dashboard = () => {
  const t = useTranslationsContext();
  const cardData = [
    {
      title: t("dashboard_garage"),
      image: "https://via.placeholder.com/150",
    },
    {
      title: t("dashboard_clinic"),
      image: "https://via.placeholder.com/150",
    },
    {
      title: t("dashboard_shop"),
      image: "https://via.placeholder.com/150",
    },
  ];

  return (
   
      <Box
        sx={{
          paddingY:"10%",
          height: '80%',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid container spacing={3} justifyContent="center">
          {cardData.map((card, index) => (
            <Grid item key={index} xs={12} sm={6} md={4}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                <CardMedia
                  component="img"
                  sx={{ height: '60%', width: '100%', objectFit: 'cover' }}
                  image={card.image}
                  alt={card.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="p" textAlign="center" >
                    {card.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    );
};
