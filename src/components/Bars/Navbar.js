import React, {useState} from 'react'
import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Tabs, 
  Tab,
  Menu,
  MenuItem,
  Avatar,
  styled,
  Box,
} from '@mui/material'
import RunCircleRoundedIcon from '@mui/icons-material/RunCircleRounded';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [value, setValue] = useState();
  const [open, setOpen] = useState(false);

  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",
  });
  
  const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    alignItems: "center",
    gap: "20px",
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  }));
  
  const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  }));

  return (
    <div>
    <Box sx={{ display: 'flex' }}></Box>
      <AppBar 
      position='sticky' 
      sx={{ background:"linear-gradient(90deg, rgba(166,135,187,1) 0%, rgba(233,198,232,1) 33%, rgba(212,235,254,1) 73%, rgba(251,254,189,1) 100%, rgba(211,237,211,1) 100%);" }}>
        
        <StyledToolbar>

          <Typography>
            <RunCircleRoundedIcon />
          </Typography>
          
          <Tabs 
            textColor='inherit' 
            indicatorColor='secondary' 
            value={value} 
            onChange={(e,val)=>setValue(val)}>
            
            <Tab LinkComponent={NavLink} to="/home" label='Home' />
            <Tab LinkComponent={NavLink} to="/add" label='Add Activity' />
            <Tab LinkComponent={NavLink} to="/all" label='All Activities' />
            <Tab LinkComponent={NavLink} to="/stat" label='Stat' />
          </Tabs>

        <Icons>
          <Avatar
            sx={{ width: 30, height: 30 }}
            src="#"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar
            sx={{ width: 35, height: 35 }}
            src="#"
          />
        </UserBox>

        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >

        <MenuItem>My Profile</MenuItem>
        <MenuItem>Logout</MenuItem>
      </Menu>

      </StyledToolbar>
      </AppBar>
    </div>
  )
}

export default Navbar