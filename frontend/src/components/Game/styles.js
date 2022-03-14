import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  paperQuestion: {
    height: '11vh',
    width: "2000px",
    marginLeft: "0",
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    
  },
  paperAnswers: {
    width: "2000px",
    height: '45vh',
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
    width: "700px",
    position: 'relative',
    top: "12.5vh",
    transition: "all 0.25s ease",
  }
}));