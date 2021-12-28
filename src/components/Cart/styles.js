import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  title: {
    marginTop: '15%',
    [theme.breakpoints.down('sm')]: {
      marginTop:'23%',
    },
    [theme.breakpoints.down('xs')]: {
      marginTop:'40%',
    },
  },
  emptyButton: {
    maxWidth: 'fit-content',
    fontSize: '19px',
    marginBottom: '10px',
    [theme.breakpoints.down('xs')]: {
      marginBottom: '5px',
    },
    [theme.breakpoints.up('xs')]: {
      marginRight: '20px',
    },
  },
  checkoutButton: {
    fontSize: '19px',
    minWidth: 'fit-content',
  },
  link: {
    textDecoration: 'none',
  },
  cardDetails: {
    display: 'flex',
    marginTop: '10%',
    width: '100%',
    justifyContent: 'space-between',
  },
  emptyCartContainer: {
  },
}));