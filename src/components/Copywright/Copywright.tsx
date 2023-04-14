import { Link, Typography } from "@mui/material";

export function Copyright(props: any) {
	return (
		<Typography
			variant="body2"
			color="text.secondary"
			align="center"
			{...props}
		>
			<Link color="inherit" href="https://mui.com/">
				{"Copyright © "}Organista {new Date().getFullYear()}
			</Link>
		</Typography>
	);
}
