import logoImage from "../../assets/logo.jpg";
import { Box, Typography } from "..";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Box
      sx={{
        height: "10vh",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        backgroundColor:"black"
      }}
    >
      <Link to="/" style={{ width: "30%", textDecoration: "none" }}>
        <Box
          sx={{
            minHeight:"10vh",
            height: "100%",
            width: "100%",
            backgroundImage: `url(${logoImage})`,
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "left center",
          }}
        >
        </Box>
      </Link>
      <Typography
        variant="h5"
        component="div"
        sx={{ marginLeft: "1rem", flexGrow: 1 }}
      >
        Header Title
      </Typography>
    </Box>
  );
};
