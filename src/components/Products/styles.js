import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    flex:'0.85'
  },
  root: {
    flexGrow: 1,
  },
  mainGrid: {
    
  }
}));