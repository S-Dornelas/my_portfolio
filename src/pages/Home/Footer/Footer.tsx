import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0, py: 2 }}>
      <Toolbar>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="100%"
        >
          <Typography variant="body1" color="inherit" align="center">
            © {new Date().getFullYear()} Sandro Dornelas. Todos os direitos reservados.
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;
