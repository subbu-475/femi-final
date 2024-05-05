// import React, { useContext, useEffect, useRef, useState } from 'react'
// import './Navbar.css'
// import logo from '../Assets/logo.png'
// import cart_icon from '../Assets/cart_icon.png'
// import nav_dropdown from '../Assets/nav_dropdown.png'
// import { Link } from 'react-router-dom'
// import { ShopContext } from '../../Context/ShopContext'
// import { useNavigate } from 'react-router-dom'
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import API_URL from '../../config/global';

// const Navbar1 = () => {



//   const [menu, setMenu] = useState("shop");
//   const [isUserAuthenticated, setIsUserAuthenticated] = useState("false");
//   const { getTotalCartItems } = useContext(ShopContext);
//   const menuRef = useRef();
//   const [userDetails, setUserDetails] = useState({});

//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };


//   const dropdown_toggle = (e) => {
//     menuRef.current.classList.toggle('nav-menu-visible');
//     e.target.classList.toggle('open');
//   }

//   const [cartCount, setCartCount] = useState(0); // State to manage cart count

//   useEffect(() => {
//     const fetchData = async () => {
//       let token = localStorage.getItem('token');
//       if (!!token) {
//         try {
//           let response = await axios.post(`${API_URL}/auth/users`, { token });
//           let data = response?.data?.singleUser;
//           setUserDetails({
//             ...userDetails,
//             ...data,
//           });
//           let respon = await axios.get(`${API_URL}/cart/cartitems`);
//           let allCartItems = respon?.data?.items;
//           let filteredDataByUserID = allCartItems.filter(
//             (data) => data?.userid == response?.data?.singleUser?._id
//           );
//           setCartCount(filteredDataByUserID?.length); // Update cart count
//         } catch (error) {
//           console.error(error);
//         }
//       }
//       setIsUserAuthenticated(!!token);
//     };

//     fetchData();
//   }, [localStorage.getItem('token')]);

//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     localStorage.removeItem('token');
//     setIsUserAuthenticated(false);
//     navigate('/');
//   }

//   return (


//     <>
//       <Navbar expand="lg" className="bg-body-tertiary mt-0">
//         <Container fluid className="mt-0">
//           <Navbar.Brand href="/" onClick={() => { setMenu("shop") }}>
//             <img src={logo} alt="Logo" id='img-logo' style={{ width: '150px' }} /> {/* Adjust the width as per your requirement */}
//           </Navbar.Brand>
//           <Navbar.Toggle aria-controls="navbarScroll" />
//           <Navbar.Collapse id="navbarScroll">
//             <Nav
//               className="me-auto my-2 my-lg-0"
//               style={{ maxHeight: '100px' }}
//               navbarScroll
//             >
//               <Nav.Link href="/" style={{ fontSize: '18px', color: '#12372A', transition: 'color 0.3s', fontWeight: "bold" }} onMouseEnter={(e) => { e.target.style.color = '#b58b69' }} onMouseLeave={(e) => e.target.style.color = '#12372A'}>Home</Nav.Link>
//               <Nav.Link href="/shop" style={{ fontSize: '18px', color: '#12372A', transition: 'color 0.3s', fontWeight: "bold" }} onMouseEnter={(e) => e.target.style.color = '#b58b69'} onMouseLeave={(e) => e.target.style.color = '#12372A'}>Shop</Nav.Link>
//               <Nav.Link href="/about" style={{ fontSize: '18px', color: '#12372A', transition: 'color 0.3s', fontWeight: "bold" }} onMouseEnter={(e) => e.target.style.color = '#b58b69'} onMouseLeave={(e) => e.target.style.color = '#12372A'}>About</Nav.Link>
//               <Nav.Link href="/contact" style={{ fontSize: '18px', color: '#12372A', transition: 'color 0.3s', fontWeight: "bold" }} onMouseEnter={(e) => e.target.style.color = '#b58b69'} onMouseLeave={(e) => e.target.style.color = '#12372A'}>Contact</Nav.Link>

//               {/* <Nav.Link href="#" disabled>
//                 Link
//               </Nav.Link> */}
//             </Nav>
//             <div className="nav-login-cart">
//               {isUserAuthenticated ?
//                 <>

//                   <NavDropdown title={userDetails.name?.substring(0, 10)} id="get-name">
//                     <NavDropdown.Item href={`/userdetails/${userDetails._id}`} className='profile-dropdown'>My Account</NavDropdown.Item>
//                     <NavDropdown.Item href='/placedorders' className='profile-dropdown'>
//                       My orders
//                     </NavDropdown.Item>
//                     <NavDropdown.Item href='/cart' className='profile-dropdown'>
//                       My Cart
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action5" onClick={handleLogout} className='profile-dropdown'>
//                       Logout
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                   <Link to='/cart'><img src={cart_icon} alt="" /></Link>
//                   <div className="nav-cart-count">{cartCount}</div>



//                 </> :
//                 <>
//                   <Link to='/login'><img src={cart_icon} alt="" /></Link>
//                   <div className="nav-cart-count">0</div>
//                   <Link to='/login'><button>Login</button></Link>
//                 </>
//               }


//             </div>

//           </Navbar.Collapse>
//         </Container>
//       </Navbar >
//     </>
//   )
// }

// export default Navbar1;


// import React, { useContext, useEffect, useState } from 'react';
// import './Navbar.css';
// import logo from '../Assets/logo.png';
// import cart_icon from '../Assets/cart_icon.png';
// import { Link } from 'react-router-dom';
// import { ShopContext } from '../../Context/ShopContext';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Button from '@mui/material/Button';
// import Drawer from '@mui/material/Drawer';
// import List from '@mui/material/List';
// import ListItem from '@mui/material/ListItem';
// import ListItemText from '@mui/material/ListItemText';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import IconButton from '@mui/material/IconButton';
// import MenuIcon from '@mui/icons-material/Menu';
// import Divider from '@mui/material/Divider';
// import API_URL from '../../config/global';
// import { Typography, colors, useMediaQuery } from '@mui/material';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import { makeStyles } from '@mui/styles';
// import Grid from '@mui/material/Grid';


// const useStyles = makeStyles((theme) => ({
//   drawer: {
//     width: '50%',
//     background:'yellow'
//   },
//   listItem: {
//     '&:hover': {
//       color: "blue"
//     },
//   },
//   listItem: {
//     width: '100%',
//   },
// }));

// const Navbar1 = () => {
//   const classes = useStyles();
//   const [menu, setMenu] = useState('shop');
//   const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
//   const { getTotalCartItems } = useContext(ShopContext);
//   const [userDetails, setUserDetails] = useState({});
//   const [cartCount, setCartCount] = useState(0);
//   const navigate = useNavigate();
//   const [drawerOpen, setDrawerOpen] = useState(false);

//   useEffect(() => {
//     const fetchData = async () => {
//       let token = localStorage.getItem('token');
//       if (!!token) {
//         try {
//           let response = await axios.post(`${API_URL}/auth/users`, { token });
//           let data = response?.data?.singleUser;
//           setUserDetails({
//             ...userDetails,
//             ...data,
//           });
//           let respon = await axios.get(`${API_URL}/cart/cartitems`);
//           let allCartItems = respon?.data?.items;
//           let filteredDataByUserID = allCartItems.filter((data) => data?.userid === response?.data?.singleUser?._id);
//           setCartCount(filteredDataByUserID?.length);
//         } catch (error) {
//           console.error(error);
//         }
//       }
//       setIsUserAuthenticated(!!token);
//     };

//     fetchData();
//   }, []);

//   const handleLogout = async () => {
//     localStorage.removeItem('token');
//     setIsUserAuthenticated(false);
//     navigate('/');
//   };

//   const isMobile = useMediaQuery('(max-width:600px)');

//   const toggleDrawer = (open) => (event) => {
//     setDrawerOpen(open);
//   };

//   const closeDrawer = () => {
//     setDrawerOpen(false);
//   };

//   const drawerStyles = {
//     width: 250,
//     backgroundColor: '#2b2b2b',
//     color: '#ffffff',
//   };

//   const listItemStyles = {
//     '&:hover': {
//       backgroundColor: '#444',
//     },
//   };

//   if (isMobile) {
//     return (
//       <>
//         <Grid container alignItems="center" justifyContent="space-between" style={{ width: '100%', background: 'linear-gradient(90deg,#f5f5dc, #12372A 120%)', padding: '5px 10px' }}>
//           <Grid item>
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               onClick={toggleDrawer(true)}
//               sx={{ paddingLeft: '20px' }}
//             >
//               <MenuIcon />
//             </IconButton>
//           </Grid>
//           <Grid item>
//             {isUserAuthenticated && <Typography sx={{ margin: '0', padding: '5px 10px', borderRadius: '10px', border: '1px solid #f5f5dc', color: '#f5f5dc' }}>{userDetails.name?.substring(0, 10)}</Typography>}
//           </Grid>
//         </Grid>

//         <Drawer
//           anchor="left"
//           open={drawerOpen}
//           onClose={toggleDrawer(false)}
//           className={classes.drawer}

//         >
//           <List sx={{ background: 'linear-gradient(90deg,#f5f5dc, #12372A 120%)',width:'100%' }}>
//             <ListItem  component={Link} to="/" onClick={closeDrawer} className={classes.listItem}>
//               <ListItemText primary="Home" />
//             </ListItem>
//             <ListItem  component={Link} to="/shop" onClick={closeDrawer} className={classes.listItem}>
//               <ListItemText primary="Shop" />
//             </ListItem>
//             <ListItem component={Link} to="/about" onClick={closeDrawer} className={classes.listItem}>
//               <ListItemText primary="About" />
//             </ListItem>
//             <ListItem component={Link} to="/contact" onClick={closeDrawer} className={classes.listItem}>
//               <ListItemText primary="Contact" />
//             </ListItem>
//           </List>
//           <List sx={{ background: 'linear-gradient(90deg,#f5f5dc, #12372A 120%)' }}>
//             {isUserAuthenticated ? (
//               <>
//                 <ListItem component={Link} to={`/userdetails/${userDetails._id}`} onClick={closeDrawer} className={classes.listItem}>
//                   <ListItemText primary="My Account" />
//                 </ListItem>
//                 <ListItem component={Link} to="/placedorders" onClick={closeDrawer} className={classes.listItem}>
//                   <ListItemText primary="My Orders" />
//                 </ListItem>
//                 <ListItem component={Link} to="/cart" onClick={closeDrawer} className={classes.listItem}>
//                   <ListItemText primary="My Cart" />
//                 </ListItem>
//                 <ListItem onClick={() => { handleLogout(); closeDrawer(); }} className={classes.listItem}>
//                   <ListItemText primary="Logout" />
//                 </ListItem>
//               </>
//             ) : (
//               <ListItem button component={Link} to="/login" onClick={closeDrawer} className={classes.listItem}>
//                 <ListItemText primary="Login" />
//               </ListItem>
//             )}
//           </List>
//         </Drawer>
//       </>
//     );
//   } else {
//     return (
//       <>
//         <Navbar expand="lg" className="bg-body-tertiary mt-0">
//           <Container fluid className="mt-0">
//             <Navbar.Brand href="/" onClick={() => { setMenu("shop") }}>
//               <img src={logo} alt="Logo" id='img-logo' style={{ width: '150px' }} /> {/* Adjust the width as per your requirement */}
//             </Navbar.Brand>
//             <Navbar.Toggle aria-controls="navbarScroll" />
//             <Navbar.Collapse id="navbarScroll">
//               <Nav
//                 className="me-auto my-2 my-lg-0"
//                 style={{ maxHeight: '100px' }}
//                 navbarScroll
//               >
//                 <Nav.Link href="/" style={{ fontSize: '18px', color: '#12372A', transition: 'color 0.3s', fontWeight: "bold" }} onMouseEnter={(e) => { e.target.style.color = '#b58b69' }} onMouseLeave={(e) => e.target.style.color = '#12372A'}>Home</Nav.Link>
//                 <Nav.Link href="/shop" style={{ fontSize: '18px', color: '#12372A', transition: 'color 0.3s', fontWeight: "bold" }} onMouseEnter={(e) => e.target.style.color = '#b58b69'} onMouseLeave={(e) => e.target.style.color = '#12372A'}>Shop</Nav.Link>
//                 <Nav.Link href="/about" style={{ fontSize: '18px', color: '#12372A', transition: 'color 0.3s', fontWeight: "bold" }} onMouseEnter={(e) => e.target.style.color = '#b58b69'} onMouseLeave={(e) => e.target.style.color = '#12372A'}>About</Nav.Link>
//                 <Nav.Link href="/contact" style={{ fontSize: '18px', color: '#12372A', transition: 'color 0.3s', fontWeight: "bold" }} onMouseEnter={(e) => e.target.style.color = '#b58b69'} onMouseLeave={(e) => e.target.style.color = '#12372A'}>Contact</Nav.Link>

//                 {/* <Nav.Link href="#" disabled>
//                 Link
//               </Nav.Link> */}
//               </Nav>
//               <div className="nav-login-cart">
//                 {isUserAuthenticated ?
//                   <>

//                     <NavDropdown title={userDetails.name?.substring(0, 10)} id="get-name">
//                       <NavDropdown.Item href={`/userdetails/${userDetails._id}`} className='profile-dropdown'>My Account</NavDropdown.Item>
//                       <NavDropdown.Item href='/placedorders' className='profile-dropdown'>
//                         My orders
//                       </NavDropdown.Item>
//                       <NavDropdown.Item href='/cart' className='profile-dropdown'>
//                         My Cart
//                       </NavDropdown.Item>
//                       <NavDropdown.Divider />
//                       <NavDropdown.Item href="#action5" onClick={handleLogout} className='profile-dropdown'>
//                         Logout
//                       </NavDropdown.Item>
//                     </NavDropdown>
//                     <Link to='/cart'><img src={cart_icon} alt="" /></Link>
//                     <div className="nav-cart-count">{cartCount}</div>



//                   </> :
//                   <>
//                     <Link to='/login'><img src={cart_icon} alt="" /></Link>
//                     <div className="nav-cart-count">0</div>
//                     <Link to='/login'><button>Login</button></Link>
//                   </>
//                 }


//               </div>

//             </Navbar.Collapse>
//           </Container>
//         </Navbar >
//       </>
//     );
//   }
// };

// export default Navbar1;



import React, { useContext, useEffect, useState } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import cart_icon from '../Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Button from '@mui/material/Button';
import { Typography, colors, useMediaQuery } from '@mui/material';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { makeStyles } from '@mui/styles';
import Grid from '@mui/material/Grid';
import API_URL from '../../config/global';
import Offcanvas from 'react-bootstrap/Offcanvas';


const Navbar1 = () => {
  const [menu, setMenu] = useState('shop');
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);
  const { getTotalCartItems } = useContext(ShopContext);
  const [userDetails, setUserDetails] = useState({});
  const [cartCount, setCartCount] = useState(0);
  const navigate = useNavigate();
  const [isMobile, setIsMobile] = useState(false);
  const [drawerOpen, setDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      let token = localStorage.getItem('token');
      if (!!token) {
        try {
          let response = await axios.post(`${API_URL}/auth/users`, { token });
          let data = response?.data?.singleUser;
          setUserDetails({
            ...userDetails,
            ...data,
          });
          let respon = await axios.get(`${API_URL}/cart/cartitems`);
          let allCartItems = respon?.data?.items;
          let filteredDataByUserID = allCartItems.filter((data) => data?.userid === response?.data?.singleUser?._id);
          setCartCount(filteredDataByUserID?.length);
        } catch (error) {
          console.error(error);
        }
      }
      setIsUserAuthenticated(!!token);
    };

    fetchData();
    setIsMobile(window.innerWidth <= 600);
    window.addEventListener('resize', () => setIsMobile(window.innerWidth <= 600));
    return () => {
      window.removeEventListener('resize', () => setIsMobile(window.innerWidth <= 600));
    };
  }, []);

  const handleLogout = async () => {
    localStorage.removeItem('token');
    setIsUserAuthenticated(false);
    navigate('/');
  };

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  return (
    <>
      {isMobile ? (
        <>
          <Navbar expand="lg" className="bg-body-tertiary mt-0">
            <Container fluid className="mt-0">
              <Navbar.Brand href="/" onClick={() => setMenu('shop')}>
                <img src={logo} alt="Logo" id="img-logo" style={{ width: '150px' }} />{' '}
                {/* Adjust the width as per your requirement */}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={toggleDrawer} />
            </Container>
          </Navbar>
          <Offcanvas show={drawerOpen} onHide={toggleDrawer} placement="start" style={{ width: '50%' ,background: 'linear-gradient(90deg,#f5f5dc, #12372A 120%)',color:'black !important'}}>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title>Menu</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="flex-column">
                <Nav.Link href="/" onClick={toggleDrawer}>
                  Home
                </Nav.Link>
                <Nav.Link href="/shop" onClick={toggleDrawer}>
                  Shop
                </Nav.Link>
                <Nav.Link href="/about" onClick={toggleDrawer}>
                  About
                </Nav.Link>
                <Nav.Link href="/contact" onClick={toggleDrawer}>
                  Contact
                </Nav.Link>
                {isUserAuthenticated ? (
                  <>
                    <Nav.Link href={`/userdetails/${userDetails._id}`} onClick={toggleDrawer} >
                      My Account
                    </Nav.Link>
                    <Nav.Link href="/placedorders" onClick={toggleDrawer}>
                      My Orders
                    </Nav.Link>
                    <Nav.Link href="/cart" onClick={toggleDrawer}>
                      My Cart
                    </Nav.Link>
                    <Nav.Link onClick={() => { handleLogout(); toggleDrawer(); }}>Logout</Nav.Link>
                    <br/>
                    <Typography sx={{border:'2px solid #f5f5dc',borderRadius:'20px',padding:'0 0 0 10px',fontWeight:'600',color:'#12372A'}}>{userDetails?.name?.substring(0, 10)}</Typography>
                  </>
                ) : (
                  <Nav.Link href="/login" onClick={toggleDrawer}>
                    Login
                  </Nav.Link>
                )}
              </Nav>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      ) : (
        <Navbar expand="lg" className="bg-body-tertiary mt-0">
          <Container fluid className="mt-0">
            <Navbar.Brand href="/" onClick={() => setMenu('shop')}>
              <img src={logo} alt="Logo" id="img-logo" style={{ width: '150px' }} />{' '}
              {/* Adjust the width as per your requirement */}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/" onMouseEnter={() => setMenu('home')} style={{ fontSize: '18px' }}>
                  Home
                </Nav.Link>
                <Nav.Link href="/shop" onMouseEnter={() => setMenu('shop')} style={{ fontSize: '18px' }}>
                  Shop
                </Nav.Link>
                <Nav.Link href="/about" onMouseEnter={() => setMenu('about')} style={{ fontSize: '18px' }}>
                  About
                </Nav.Link>
                <Nav.Link href="/contact" onMouseEnter={() => setMenu('contact')} style={{ fontSize: '18px' }}>
                  Contact
                </Nav.Link>
              </Nav>
              <div className="nav-login-cart">
                {isUserAuthenticated ? (
                  <NavDropdown title={userDetails.name?.substring(0, 10)} id="get-name">
                    <NavDropdown.Item href={`/userdetails/${userDetails._id}`} className="profile-dropdown">
                      My Account
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/placedorders" className="profile-dropdown">
                      My orders
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/cart" className="profile-dropdown">
                      My Cart
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" onClick={handleLogout} className="profile-dropdown">
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                ) : (
                  <>
                    <Link to="/login">
                      <img src={cart_icon} alt="" />
                    </Link>
                    <div className="nav-cart-count">0</div>
                    <Link to="/login">
                      <button>Login</button>
                    </Link>
                  </>
                )}
              </div>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      )}
    </>
  );
};

export default Navbar1;



