import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    quote: {
        paddingTop:'250px',
        flex: '0.35',
        maxWidth: '300px',
        padding:'15px',
        borderRight:'3px solid black',
        borderLeft:'3px solid black',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    },
    title: {
    }
}));