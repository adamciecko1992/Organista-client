import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import staffMain from "../../assets/staff/staffMain.jpeg";
import clinicBG from "../../assets/clinicBackground.jpeg";
import { Link } from "react-router-dom";
import { useTranslationsContext } from "../../i18n/TranslationsContext";

export default function Clinic() {
    const t = useTranslationsContext();
	const cardData = [
		{
			title: t("staff"),
			image: staffMain,
			link: "staff/",
		},
		{
			title: t("storage"),
			image: clinicBG,
			link: "storage/",
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
				className="clinicMain"
			>
				{cardData.map((card, index) => (
					<Grid item key={index} xs={8} sm={3} md={4}>
						{/* <Link to={card.link}> */}
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
										height: "100%",
										width: "100%",
										objectFit: "cover",
									}}
									image={card.image}
									alt={card.title}
								></CardMedia>
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
						{/* </Link> */}
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
