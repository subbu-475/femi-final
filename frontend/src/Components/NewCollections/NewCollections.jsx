import React, { useEffect, useState } from 'react'
import './NewCollections.css'
import new_collection from '../Assets/new_collections'
import Item from '../Item/Item'
import axios from 'axios'
import API_URL from '../../config/global';
import { Button, Grid, Typography, Paper, OutlinedInput, InputLabel, FormControl, Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
// import new_collection from '../Assets/green.jpg'

const NewCollections = () => {

  const [products, setProducts] = useState([]);
  const [openAlert, setOpenAlert] = useState(false);
  const [alertMessage, setAlertMessage] = useState();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        let res = await axios.get(`${API_URL}/master/products`);
        setProducts(res?.data?.products)
      } catch (err) {
        console.log(err);
        setOpenAlert(true);
        setAlertMessage("something went wrong!")
        return;
      }
    };

    fetchProduct();
  }, []);
  return (
    <div className='new-collections'>
      <h1>Femi9 At A Glance</h1>
      <hr />
      <div className="collections">
        {products.map((item, i) => {
          return <Item key={i} id={item._id} name={item.name} image={item.image} new_price={item.newprice} old_price={item.oldprice} size={item.size}/>
        })}
      </div>
      <Dialog
        // fullWidth={true}
        maxWidth='sm'
        open={openAlert}
        onClose={() => setOpenAlert(false)}
      >
        {/* <DialogTitle>Optional sizes</DialogTitle> */}
        <DialogContent sx={{ display: "flex", flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <ErrorOutlineIcon style={{ fontSize: '50px', color: 'red' }} />
          <br />
          <DialogContentText style={{ color: 'black', fontSize: "1.5rem" }}>
            {alertMessage}
          </DialogContentText>


        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpenAlert(false)} style={{ color: 'red' }}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default NewCollections
