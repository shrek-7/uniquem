import React from 'react';
import { Scene, Router } from 'react-native-router-flux';
import LandingPage from './src/pages/landing-page';
import LoginPage from './src/pages/login-page';
import Dashboard from './src/pages/dashboard';
import CartPage from './src/pages/cart-page';
import close from './src/assets/left.png';
// import Draw from './src/components/drawer';

const RouterComponent = () => {
    return(
        <Router>
            <Scene key="root">
                {/* <Scene key="auth" hideNavBar>
                    <Scene key='login' component={LoginPage} title="Login"  hideNavBar={false}/>
                </Scene> */}
                <Scene key="main" hideNavBar>
                    <Scene key='landingpage' component={LandingPage} hideNavBar direction="vertical"/>
                    <Scene key='dashboard' component={Dashboard} hideNavBar direction="vertical"/>
                    <Scene key='cartPage' leftButtonStyle={{width: 50}} backButtonImage={close} titleStyle={styles.navbarTitleStyle} navigationBarStyle={styles.navbarStyle} component={CartPage} title="Shopping Cart" hideNavBar={false} direction="vertical"/>
                </Scene>
                {/* <Scene key="cart" hideNavBar> */}
                    
                {/* </Scene> */}
            </Scene>
        </Router>
    );
}

const styles = {
    navbarStyle : {
        backgroundColor:'#00B8D4',
        padding:5
    },
    navbarTitleStyle : {
        color:'#fff',
        marginLeft:0
    }
}

export default RouterComponent;