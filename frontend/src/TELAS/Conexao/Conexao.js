// import React from 'react';
// import InputLabel from '@mui/material/InputLabel';
// import MenuItem from '@mui/material/MenuItem';
// import FormControl from '@mui/material/FormControl';
// import Select from '@mui/material/Select';
// import logoaplicativo from '../../assets/LogoAplicativo.jpg'
// import { Stack } from '@mui/system';
// import { Button } from '@mui/material';

// function Conexão (){

//     const [age, setAge] = React.useState('');
    
//     const handleChange = (event) => {
//       setAge(event.target.value);
//     };
//     return(
//         <>
//         <img src={logoaplicativo} alt='Logo do Aplicativo' title='ImagemLogo'/>

//         <div className='Ola'>OLÁ!</div>
//         <div className='Profissional'>DESEJA CONECTAR-SE COM QUAL PROFISSIONAL?</div>


//     <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
//       <InputLabel id="demo-select-small-label">NOME</InputLabel>
//       <Select labelId="demo-select-small-label" id="demo-select-small" value={age} label="Age" onChange={handleChange}>
//         <MenuItem value=""><em>None</em></MenuItem>
//         <MenuItem value={10}>Ten</MenuItem>
//         <MenuItem value={20}>Twenty</MenuItem>
//         <MenuItem value={30}>Thirty</MenuItem>
//       </Select>
//     </FormControl>

//     <Stack spacing={2} direction="row">
//              <Button variant="contained">VAMOS!</Button>
//     </Stack>
//         </>
//     )
// }

// export default Conexão;