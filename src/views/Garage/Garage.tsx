import { Box, Card, CardContent, CardMedia, Grid, Typography } from "@mui/material";

import bike from "../../assets/bike.jpeg"

export default function Garage() {

	const cardData = [
		{
			title: "Rower",
			image: bike
		}
	]

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
