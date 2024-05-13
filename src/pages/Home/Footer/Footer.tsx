import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar>
        <Typography variant="body1" color="inherit" align="center" sx={{ width: '100%' }}>
          © {new Date().getFullYear()} Sandro Dornelas. Todos os direitos reservados.
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Footer;