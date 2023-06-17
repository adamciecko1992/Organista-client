import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Grid,
	Typography,
} from "@mui/material";
import tool1 from "../../assets/tools/tool1.jpeg";
import tool2 from "../../assets/tools/tool2.jpeg";
import tool3 from "../../assets/tools/tool3.jpeg";
import tool4 from "../../assets/tools/tool4.jpeg";
import tool5 from "../../assets/tools/tool5.jpeg";
import tool6 from "../../assets/tools/tool6.jpeg";
import { useTranslationsContext } from "../../i18n/TranslationsContext";

export default function Shop() {
	const t = useTranslationsContext();
	const cardData = [
		{
			title: t("tool1"),
			image: tool1,
		},
		{
			title: t("tool2"),
			image: tool2,
		},
		{
			title: t("tool3"),
			image: tool3,
		},
		{
			title: t("tool4"),
			image: tool4,
		},
		{
			title: t("tool5"),
			image: tool5,
		},
		{
			title: t("tool6"),
			image: tool6,
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
				spacing={6}
				justifyContent="center"
				className="ShopMain"
			>
				{cardData.map((card, index) => (
					<Grid item key={index} xs={6} sm={3} md={2}>
						<Card
							sx={{
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
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
