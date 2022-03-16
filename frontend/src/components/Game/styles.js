import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  topRow: {
    justifyContent: "space-around",
    alignItems:"center",
    border: "3px solid red"
  },
  paperQuestion: {
    width: "2000px",
    justifyContent: 'space-between',
    border: '4px solid blue',
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
    border: '4px solid blue',
  },
  paperAnswers: {
    border: '4px solid blue',
  },
  textContent:{
    color: "blue", 
    padding: '0vh',
    transition: "all 0.25s ease",
  },
  contentArrayContainer: {
    width: "55vw",
    position: 'relative',
    top: "12.5vh",
    transition: "all 0.25s ease",
    justifyContent: 'space-evenly'
  }
}));