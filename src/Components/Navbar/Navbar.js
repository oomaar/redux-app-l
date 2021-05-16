import {
    Nav,
    Container,
    MenuBtn,
    MenuIcon,
    NavIcon,
    LogoBox,
    Logo,
    List,
    ListItem,
    Link,
} from "./styledNavbar";

const Navbar = () => {
    return (
        <Nav>
            <Container>
                <LogoBox>
                    <Logo>redux!!!</Logo>
                </LogoBox>
                <MenuBtn id="menu-btn" className="menu-btn" type="checkbox" />
                <MenuIcon htmlFor="menu-btn" for="menu-btn" className="menu-icon">
                    <NavIcon className="nav-icon"></NavIcon>
                </MenuIcon>
                <List>
                    <ListItem>
                        <Link to="/">Home</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/services">Services</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/account">Account</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/about">About</Link>
                    </ListItem>
                    <ListItem>
                        <Link to="/developers">Developers</Link>
                    </ListItem>
                </List>
            </Container>
        </Nav>
    );
};

export default Navbar;
