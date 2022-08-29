import React from 'react';
import './index.css';
import { makeStyles} from "@mui/styles"
import { Grid } from '@mui/material';
import ChatList from "./ChatList"
import Messagelist from "./Messagelist"



const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}))

const App = () => {
    const classes = useStyles()

 return (
    <div className={classes.root}>
        <Grid container={true} spacing={3}>
            <Grid item={true} xs={6}>
                <ChatList/>
            </Grid>
            <Grid item={true} xs={6}>
                <Messagelist/>
            </Grid>
        </Grid>

    </div>
 )
 }

 export default App