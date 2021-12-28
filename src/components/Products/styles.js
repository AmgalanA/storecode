import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    backgroundColor: theme.palette.background.default,
    flex:'1'
  },
  root: {
    flexGrow: 1,
  },
  mainGrid: {
      width: '100%',
  }
}));