import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';

const Header = () => {
    return(
        <header>
            <Navbar className='header'>
                <NavbarBrand href='/'>React Library</NavbarBrand>
                <Nav className='ml-auto' navbar>
                    <NavLink href='https://github.com/blahblah'>
                        GitHub
                    </NavLink>
                </Nav>
            </Navbar>
        </header>
    );
};

export default Header;