import React, {useState} from 'react'
import { 
  AppBar, 
  Toolbar, 
  Tabs, 
  Tab,
  Menu,
  MenuItem,
  Avatar,
  styled,
  Box,
} from '@mui/material'
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
      sx={{ background:"rgb(67, 154, 151)" }}>
        
        <StyledToolbar>
          



          <Tabs 
            textColor='inherit' 
            indicatorColor='primary' 
            value={value} 
            onChange={(e,val)=>setValue(val)}>
            
            <Tab LinkComponent={NavLink} to="/all" label='All Activity' />
            <Tab LinkComponent={NavLink} to="/stats" label='Stats' />
            <Tab LinkComponent={NavLink} to="/add" label='Add Activity' />
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