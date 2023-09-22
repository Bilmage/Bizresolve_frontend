import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Contact from "../../components/Contact/Contact";
import ProfileReviews from '../ProfileReviews/ProfileReviews';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}

        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

// function a11yProps(index) {
//     return {
//         id: `full-width-tab-${index}`,
//         'aria-controls': `full-width-tabpanel-${index}`,
//     };
// }

export default function FullWidthTabs() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <>
            <div className="container">
                <Box sx={{
                    bgcolor: 'background.paper', width: {
                        xs: '100%',
                        sm: 800,
                    }, alignItems: 'center', margin: 'auto'
                }}>
                    <AppBar position="static">
                        <Tabs
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            textColor="inherit"
                            variant="fullWidth"
                            aria-label="full width tabs example"
                            style={{ backgroundColor: "#35393cff" }}
                        >
                            <Tab label="About" />
                            <Tab label="Contact" />
                            <Tab label="Ratings" />
                        </Tabs>
                    </AppBar>
                    <SwipeableViews
                        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                        index={value}
                        onChangeIndex={handleChangeIndex}
                        style={{ color: 'black' }}
                    >
                        <TabPanel value={value} index={0} dir={theme.direction}>
                            <h2 style={{
                                color: '#A95B1F',
                                flex: '1',
                                fontFamily: "Helvetica",
                                fontSize: '23.1px',
                                fontWeight: '600',
                                letterSpacing: '0.05em'
                            }}>About Us</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget risus a ligula
                                bibendum posuere. Cras tincidunt, urna nec blandit congue, nisl ipsum tristique odio,
                                at varius libero ex sit amet dolor.
                            </p>
                        </TabPanel>
                        <TabPanel value={value} index={1} dir={theme.direction}>
                            < >
                                <Contact />
                            </>
                        </TabPanel>
                        <TabPanel value={value} index={2} dir={theme.direction}>
                        <h2 style={{
                                color: '#A95B1F',
                                flex: '1',
                                fontFamily: "Helvetica",
                                fontSize: '23.1px',
                                fontWeight: '600',
                                letterSpacing: '0.05em'
                            }}>Ratings</h2>
                         <ProfileReviews />
                        </TabPanel>
                    </SwipeableViews>
                </Box>
            </div>
        </>
    );
}
