import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
    root: {
        cursor: 'pointer',
        marginTop:'40px',
        margin: '10px',
        [theme.breakpoints.down('sm')]: {
          marginTop:'20px',
        }
      },
      firstRoot: {
        marginTop: '140px',
        margin: '10px',
        cursor: 'pointer',
      },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
      },
      cardActions: {
        display: 'flex',
        justifyContent: 'flex-end',
      },
      cardContent: {
        display: 'flex',
        justifyContent: 'space-between',
      },
      cardContentName: {
        [theme.breakpoints.down('xs')]: {
          fontSize:'0.8em',
        }
      },
      cardContentDescription: {
        [theme.breakpoints.down('xs')]: {
          display:'none',
        }
      },
      cardContentPrice: {
        [theme.breakpoints.down('xs')]: {
          fontSize:'0.7em',
        }
      },
      spinner: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:'100px',
        paddingTop:'0px',
        paddingBottom:'50px'
      },
}));