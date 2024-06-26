import { createTheme } from '@mui/material/styles';

const themes = createTheme({
  root: {
    '& .MuiTextField-root': {
      margin: ({ spacing }) => spacing(1),
    },
  },
  paper: {
    padding: ({ spacing }) => spacing(2),
  },
  form: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  fileInput: {
    width: '97%',
    margin: '10px 0',
  },
  buttonSubmit: {
    marginBottom: 10,
  },
});

export default themes;
