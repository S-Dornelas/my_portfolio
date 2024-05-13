import { useState } from 'react';
import { AppBar, Toolbar, styled, Link, Grid, Container, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';

const NavBar = () => {
  const [openDrawer, setOpenDrawer] = useState(false);

  const StyledToolbar = styled(Toolbar)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
        padding: theme.spacing(3),
    },
    [theme.breakpoints.up('md')]: {
        padding: theme.spacing(2),
    }
  }));

  const StyledLinkContainer = styled('div')({
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    gap: "10px",
  });

  const StyledLink = styled(Link)(({ theme }) => ({
    color: theme.palette.primary.contrastText,
    transition: "color 0.3s",
    '&:hover': {
      color: theme.palette.secondary.main,
    },
  }));

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Container maxWidth="lg">
          <Grid container alignItems="center" justifyContent="space-between">
            <Grid item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerOpen}
                sx={{ display: { xs: 'block', sm: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={openDrawer}
                onClose={handleDrawerClose}
              >
                <List>
                  <ListItem button onClick={() => { handleDrawerClose(); scrollToSection('hero'); }}>
                    <ListItemText>
                      Início
                    </ListItemText>
                  </ListItem>
                  <ListItem button onClick={() => { handleDrawerClose(); scrollToSection('about'); }}>
                    <ListItemText>
                      Sobre
                    </ListItemText>
                  </ListItem>
                  <ListItem button onClick={() => { handleDrawerClose(); scrollToSection('projects'); }}>
                    <ListItemText>
                      Projetos
                    </ListItemText>
                  </ListItem>
                  <ListItem button onClick={() => { handleDrawerClose(); scrollToSection('skills'); }}>
                    <ListItemText>
                      Expertises
                    </ListItemText>
                  </ListItem>
                  <ListItem button onClick={() => { handleDrawerClose(); scrollToSection('contacts'); }}>
                    <ListItemText>
                      Contatos
                    </ListItemText>
                  </ListItem>
                </List>
                <Grid container justifyContent="center" style={{ marginTop: '10px' }}>
                    <Link href="https://github.com/S-Dornelas" target="_blank" rel="noopener noreferrer" sx={{ marginLeft: '10px', color: 'black', textDecoration: 'none' }}>
                        <GitHubIcon sx={{ fontSize: 20 }} />
                    </Link>
                    <Link href="https://www.linkedin.com/in/sandrodornelas/" target="_blank" rel="noopener noreferrer" sx={{ marginLeft: '10px', color: 'black', textDecoration: 'none' }}>
                        <LinkedInIcon sx={{ fontSize: 20 }} />
                    </Link>
                    <Link href="https://wa.me/5581994332276" target="_blank" rel="noopener noreferrer" sx={{ marginLeft: '10px', color: 'black', textDecoration: 'none' }}>
                        <WhatsAppIcon sx={{ fontSize: 20 }} />
                    </Link>
                </Grid>
              </Drawer>
            </Grid>
            <Grid item>
              <StyledLinkContainer sx={{ display: { xs: 'none', sm: 'flex' } }}>
                <StyledLink color="inherit" underline="none" onClick={() => { handleDrawerClose(); scrollToSection('hero'); }}>
                  Início
                </StyledLink>
                <StyledLink color="inherit" underline="none" onClick={() => { handleDrawerClose(); scrollToSection('about'); }}>
                  Sobre
                </StyledLink>
                <StyledLink color="inherit" underline="none" onClick={() => { handleDrawerClose(); scrollToSection('projects'); }}>
                  Projetos
                </StyledLink>
                <StyledLink color="inherit" underline="none" onClick={() => { handleDrawerClose(); scrollToSection('skills'); }}>
                  Expertises
                </StyledLink>
                <StyledLink color="inherit" underline="none" onClick={() => { handleDrawerClose(); scrollToSection('contacts'); }}>
                  Contatos
                </StyledLink>
              </StyledLinkContainer>
            </Grid>
          </Grid>
        </Container>
      </StyledToolbar>
    </AppBar>
  );
}

export default NavBar;
