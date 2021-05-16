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
                        <Link href="#">Home</Link>
                    </ListItem>
                    <ListItem href="#">
                        <Link>Services</Link>
                    </ListItem>
                    <ListItem href="#">
                        <Link>Account</Link>
                    </ListItem>
                    <ListItem href="#">
                        <Link>About</Link>
                    </ListItem>
                    <ListItem href="#">
                        <Link>Developers</Link>
                    </ListItem>
                </List>
            </Container>
        </Nav>
    );
};

export default Navbar;
