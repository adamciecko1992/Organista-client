import { Box, Container, CssBaseline, Footer, Header } from "../index";

type LayoutProps = {
  children: React.ReactNode;
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <CssBaseline />
      <Box sx={{ minHeight: "100vh" }}>
        <Header />
        <Container sx={{ minHeight: "80vh" }}>{children}</Container>
        <Footer />
      </Box>
    </>
  );
};
