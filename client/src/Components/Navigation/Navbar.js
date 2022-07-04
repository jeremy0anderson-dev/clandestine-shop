import {AppBar, Box, Drawer, IconButton, Toolbar, Button, Link} from "@mui/material";
import {Menu} from '@mui/icons-material';
import {Component} from 'react';
import brand from '../../images/brand.png';
import {Link as RLink} from 'react-router-dom';



class Navbar extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state={
            drawerOpen: this.props.drawerOpen,
            menuOpen: false
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }
    componentDidMount() {

    }
    shouldComponentUpdate(nextProps, nextState, nextContext) {
        if (this.props === nextProps || this.state === nextState || this.context===nextContext){
            return false;
        }
        return true;
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(this.state);
    }
    componentWillUnmount() {

    }
    toggleDrawer(){
        this.setState({
            ...this.state,
            drawerOpen: !this.props.drawerOpen
        })
    }

    render(){
        return(
            <Box>
                <Box>
                    <AppBar color={"transparent"} sx={{display: "flex"}}>
                        <Toolbar>
                            <IconButton onClick={this.props.toggleDrawer}>
                                <Menu/>
                            </IconButton>
                            <RLink to={"/"}
                                  style={{
                                      maxHeight: "60px",
                                      position: "absolute",
                                      left: "calc(50vw - 60px)"
                                  }}>
                                <img src={brand} alt={"brand"} style={{height: "60px", width: "120px"}}/>
                            </RLink>
                            {this.props.children}
                        </Toolbar>
                    </AppBar>
                </Box>
            </Box>
        )
    }

}
export class Sidebar extends Component{
    constructor(props) {
        super(props);
        this.props = props;
        this.state = {
            open: this.props.open
        }
        this.toggleDrawer = this.toggleDrawer.bind(this);
    }
    toggleDrawer(){
        this.setState({
            ...this.state,
            open: !this.props.open
        })
    }
    render(){
        return (
            <Box>
                <Drawer open={this.props.open}
                        onClose={this.props.onClose}>
                    {this.props.children}
                </Drawer>
            </Box>
        )
    }

}
export default Navbar;