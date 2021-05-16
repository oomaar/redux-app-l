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
                    <ListItem to="/services">
                        <Link>Services</Link>
                    </ListItem>
                    <ListItem to="/account">
                        <Link>Account</Link>
                    </ListItem>
                    <ListItem to="/about">
                        <Link>About</Link>
                    </ListItem>
                    <ListItem to="/developers">
                        <Link>Developers</Link>
                    </ListItem>
                </List>
            </Container>
        </Nav>
    );
};

export default Navbar;
