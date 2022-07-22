import CircularProgress from '@mui/material/CircularProgress';
// import Box from '@mui/material/Box';
import "./style.css";

const Loader=()=>{
    return(
        <div style={{display:'flex', justifyContent:'center'}}>
            <CircularProgress sx={{margin:1}}/>
        </div>
    );
}
export {Loader};