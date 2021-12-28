import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    quote: {
        paddingTop:'250px',
        flex: '0.35',
        maxWidth: '300px',
        padding:'15px',
        height: '100%',
        position: 'sticky',
        zIndex: 100,
        top: '0',
        borderRight:'3px solid black',
        borderLeft:'3px solid black',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        }
    },
    title: {
    }
}));