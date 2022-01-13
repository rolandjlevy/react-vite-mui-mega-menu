import { makeStyles } from '@mui/styles';

export const Styles = makeStyles((theme) => ({
  searchInput: {
    width: 'calc(100vw - 32px)',
    maxWidth: 800,
  },
  popOverWrapper: {
    width: 'calc(100vw - 32px) !important',
    maxWidth: 800,
    height: '50vh',
    maxHeight: 308,
    top: 60,
    left: 0,
    padding: 8,
  },
  cardImage: {
    display:'flex', 
    justifyContent: 'flex-end',
    paddingRight: 8,
    height: 80,
    width: 80,
  },
  cardContent: {
    display:'flex', 
    justifyContent: 'center',
    flexDirection: 'column',
    height: 'calc(100% - 16px)',
    padding: 8,
  },
  showContent: {
    padding: 16,
    borderTop: '1px solid #ddd',
    color: '#999',
  }
}));