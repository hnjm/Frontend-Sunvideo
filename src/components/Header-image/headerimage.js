import React from 'react'
import "./headersimage.scss"
import { makeStyles } from "@material-ui/core/styles"
import Typography from "@material-ui/core/Typography"
import Paper from "@material-ui/core/Paper"
import Divider from "@material-ui/core/Divider"
import Grid from "@material-ui/core/Grid"
import data from "../../data.json"
import Button from "@material-ui/core/Button"

const useStyles = makeStyles((theme) => ({
    container: {
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gridGap: theme.spacing(3)
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
        backgroundColor: "black",
        marginTop: "5%",
        marginLeft: "5%",
        width: "50%"

    },
    paper2: {
        padding: theme.spacing(1),
        textAlign: 'center',
        whiteSpace: 'nowrap',
        marginBottom: theme.spacing(1),
        backgroundColor: "black",
        marginTop: "25%",
        marginRight: "150%"

    },
    divider: {
        margin: theme.spacing(2, 0),
    },
    image: {
        width: "560px",
        height: "350px",
        top: "150px",
        left: "80px"
    },
    text : {
        color: "white",
    },
    margin: {
        margin: theme.spacing(1)
    }
}));


function Headerimage() {

    const classes = useStyles();
    const WallPaper = data.Wallpaper;
    const Description = data.Description;

    return (
        <div className="headerimage">
            <Grid container spacing={3}>
                <Grid item xs={8}>
                    <Paper className={classes.paper}>
                        {WallPaper.map(s => (
                            <img src={s} className={classes.image}></img>
                        ))}
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper className={classes.paper2}>
                       {Description.map(p => (
                           <div className={classes.text}>
                               <h1>{p.title}</h1>
                               <h4>{p.description}</h4>
                               <span>{p.release}</span><br/>
                               <Button variant="contained" size="medium" className={classes.margin}>Play</Button>
                               <Button variant="contained" size="medium" color="secondary" className={classes.margin}>Trailer</Button>
                           </div>
                       ))}
                    </Paper>
                </Grid>
            </Grid>
        </div>
    )
}

export default Headerimage
