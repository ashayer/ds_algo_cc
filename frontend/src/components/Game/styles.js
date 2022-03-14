import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paperQuestion: {
    width: "2000px",
    justifyContent: 'space-between',
  },
  paperContent: {
    width: "2000px",
    margin: '10px 0',
    height: '25vh',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: "all 0.25s ease",
  },
  textContent:{
    color: "blue", 
    padding: '0vh',
    transition: "all 0.25s ease",
  },
  contentArrayContainer: {
    position: 'relative',
    top: "12.5vh",
    transition: "all 0.25s ease",
    justifyContent: 'space-evenly'
  }
}));