import { makeStyles } from '@mui/styles';

export const Styles = makeStyles((theme) => ({
  searchContainer: {
    width: 'calc(100vw - 32px)',
    maxWidth: 800,
  },
  formContainer: {
    position: "relative", 
    display: 'inline-block',
  },
  popOverWrapper: {
    position: "absolute",
    top: 55,
    right: 0,
    left: 0,
    width: 'calc(100vw - 32px) !important',
    maxWidth: 800,
    height: 'auto',
    padding: '0 8px',
    zIndex: 1,
    border: '1px solid #ccc',
    borderRadius: '0 0 8px 8px',
    backgroundColor: '#ffffff',
    opacity: 0,
    display: 'none',
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
  contentContainer: {
    borderLeft: '1px solid #ccc',
    padding: '8px 0',
  },
  showContent: {
    padding: 16,
    borderTop: '1px solid #ccc',
    color: '#666',
  },
  fadeIn: {
    animation: '$fadeInAnimation ease-in 0.15s',
    animationIterationCount: 1, 
    animationFillMode: 'forwards',
  },
  fadeOut: {
    animation: '$fadeOutAnimation ease-in 0.15s',
    animationIterationCount: 1, 
    animationFillMode: 'forwards',
  },
  '@keyframes fadeInAnimation': {
    '0%': {
      opacity: 0,
      display: 'none',
    },
    '100%': {
      opacity: 1,
      display: 'block',
    }
  },
  '@keyframes fadeOutAnimation': {
    '0%': {
      opacity: 1,
      display: 'none',
    },
    '100%': {
      opacity: 0,
      display: 'block',
    }
  },
}));