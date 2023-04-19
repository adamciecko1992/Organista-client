import logoImage from "../../assets/logo.jpg";
import { Box, Typography } from "..";
import { Link, useNavigate } from "react-router-dom";
import { Button, useTheme } from "@mui/material";
import { useAppSelector } from "../../store/useSelector";
import { useAppDispatch } from "../../store";
import { deauthenticate } from "../../store/AuthSlice/AuthSlice";

export const Header = () => {
	const isAuthenticated = useAppSelector((s) => s.auth.isAuthenticated);
	const dispatch = useAppDispatch();
	const theme = useTheme();
	const nav = useNavigate();

	const handleLogOut = () => {
		dispatch(deauthenticate());
		nav("/");
	};

	return (
		<Box
			sx={{
				height: "10vh",
				width: "100%",
				display: "flex",
				alignItems: "center",
				justifyContent: "flex-start",
				backgroundColor: theme.palette.primary.main,
			}}
		>
			<Link
				to="/dashboard/"
				style={{ width: "30%", textDecoration: "none" }}
			>
				<Box
					sx={{
						minHeight: "10vh",
						height: "100%",
						width: "100%",
						backgroundImage: `url(${logoImage})`,
						backgroundSize: "contain",
						backgroundRepeat: "no-repeat",
						backgroundPosition: "left center",
					}}
				></Box>
			</Link>
			<Typography
				variant="h5"
				component="div"
				sx={{ marginLeft: "1rem", flexGrow: 1 }}
			>
				Header Title
			</Typography>
			{isAuthenticated && (
				<Button onClick={handleLogOut} color="secondary" variant="text">
					Log out
				</Button>
			)}
		</Box>
	);
};
