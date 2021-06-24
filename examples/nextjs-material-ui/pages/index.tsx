import { makeStyles } from '@material-ui/core';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        border: '1px solid red',
        width: 200,
        height: 100,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));

export default function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Button color="primary" variant="contained">
                button
            </Button>
        </div>
    );
}
