import {
	Typography,
	Grid,
	Box,
	Card,
	CardMedia,
	CardContent,

} from "../../components";
import clinicImg from "../../assets/clinic.jpg";
import garageImg from "../../assets/garage.jpg";
import shopImg from "../../assets/shop.jpg";
import { useTranslationsContext } from "../../i18n/TranslationsContext";

import "../../styles/dashboard.scss";
import { Link } from "react-router-dom";

export const Dashboard = () => {
	const t = useTranslationsContext();
	const cardData = [
		{
			title: t("dashboard_garage"),
			image: garageImg,
			link: "garage/",
		},
		{
			title: t("dashboard_clinic"),
			image: clinicImg,
			link: "clinic/",
		},
		{
			title: t("dashboard_shop"),
			image: shopImg,
			link: "shop/",
		},
	];

	return (
		<Box
			sx={{
				paddingY: "10%",
				height: "80%",
				width: "100%",
				display: "flex",
				justifyContent: "center",
				alignItems: "center",
			}}
		>
			<Grid
				container
				spacing={3}
				justifyContent="center"
				className="dashboardMain"
			>
				{cardData.map((card, index) => (
					<Grid item key={index} xs={12} sm={6} md={4}>
						<Link to={card.link}>
							<Card
								sx={{
									height: "100%",
									display: "flex",
									flexDirection: "column",
									justifyContent: "space-between",
								}}
								id="options"
							>
								<CardMedia
									component="img"
									sx={{
										height: "60%",
										width: "100%",
										objectFit: "cover",
									}}
									image={card.image}
									alt={card.title}
								/>
								<CardContent>
									<Typography
										gutterBottom
										variant="h5"
										component="p"
										textAlign="center"
									>
										{card.title}
									</Typography>
								</CardContent>
							</Card>
						</Link>
					</Grid>
				))}
			</Grid>
		</Box>
	);
};
