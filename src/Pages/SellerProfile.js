import React,{useState,useEffect} from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
const SellerProfile = ({Id}) => {

    const [selledProducts, setSelledProducts] = useState([]);

    const callGetSelledProductsApi = () => {
        let data = {
            id:Id,
            isCustomer:false
        }
        axios.post(`http://127.0.0.1:8080/Rentalle/v1/product/getRentedProducts`,data).then((res)=>{
            
            setSelledProducts(res.data.data);
            

        }).catch((err)=>{
            console.log(err.response.data)
        })
    }

    const uploadProduct = (e) => {
        e.preventDefault();
        console.log(e.target.category.value);
        let data = {
                CategoryID : e.target.category.value,
                ProductName: e.target.proName.value,
                ProductDescription: e.target.desc.value,
                TotalProduct: e.target.totalProduct.value,
                PhotoUpload: e.target.proLink.value,
                PricePerMonth: e.target.pricePerMonth.value,
                SellerID: Id
        }
        console.log(data);
        axios.post(`http://127.0.0.1:8080/Rentalle/v1/product/upload`,data).then((res)=>{
            
            toast.success(res.data.message, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });
            

        }).catch((err)=>{
            toast.error(err.response, {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                dark:true,
                progress: undefined,
                theme:"light",
                });
        })
    }

    useEffect(() => {
        callGetSelledProductsApi();
      }, [])
      
  return (
      <>
    <div class=" mt-2">
    <form class="row g-3 gy-2 gx-3 align-items-center" method = "post" onSubmit={(e) => {uploadProduct(e)}}>
    


                                       
        <div className="" style={{marginTop:"20px"}}>
       
  
            <div className="selled-products-details d-flex flex-row justify-content-center align-items-center">
            <table>
                        <thead>
                        <tr className=''>
                        <th>Buyer Email</th>
                        <th>Product Name</th>
                        <th>Due Date</th>
                        <th>Rented Date</th>
                    </tr>
                    </thead>

                    <tbody>
                        {
                            selledProducts?.map((array,index)=>{
                                return (
                                <>
                                <tr className=''>
                                    <td>{array.email}</td>
                                    <td>{array.productName}</td>
                                    <td>{array.dueDate == null ? "N/A" : array.dueDate}</td>
                                    <td>{array.rentedDate == null ? "N/A" : array.rentedDate}</td>
                                    
                                </tr>
                                </>
                                )
                            })}
                                                    
    
                    </tbody>
             
              </table>
            </div>

           
            
                

            <div class="col-md-6" style ={{marginTop:"30px"}}>

            <label for="exampleFormControlSelect1">Category</label>
            <select class="form-control" id="exampleFormControlSelect1" name = "category">
            <option selected>Select</option>
            <option value= '1'>Bed Room</option>
            <option value= '2'>Living Room</option>
            <option value= '3'>Vehicles</option>
            <option value= '4'>Purifiers</option>
            <option value= '5'>air conditioner</option>
            <option value= '6'>Kitchen Appliances</option>
         
            <option value= '7'>washing machine</option>
            </select >


            <label for="inputProduct" class="form-label">Product Name</label>
                <input type="product" class="form-control" id="inputProduct" name = "proName" placeholder="Enter Product Name"/>


            <div class="input-group ">
              <label class="input-group-text" for="inputGroupFile01" >Product Image Link</label>
             <input type="text" class="form-control" id="inputGroupFile01" name = "proLink"/>
            </div>

            </div>

        
           
            
            <div className="col-md-6" style ={{marginTop:"30px"}}>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Product Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Product Description..." name = "desc"></textarea>

            </div>
            <label for="inputProduct" class="form-label">Product per Month</label>
                <input type="product" class="form-control" id="inputProduct" name = "pricePerMonth" placeholder=" Product price in rupees"/>               


            <label for="exampleFormControlSelect1">Total Product</label>
            <select class="form-control" id="exampleFormControlSelect1" name = "totalProduct">
            <option selected>Select</option>
            <option value = '1'>1</option>
            <option value = '2'>2</option>
            <option value = '3'>3</option>
            <option value = '4'>4</option>
            <option value = '5'>5</option>
            <option value = '6'>6</option>
            <option value = '7'>7</option>
            <option value = '8'>8</option>
            <option value = '9'>9</option>
            <option value = '10'>10</option>
            
            </select>
  
        
            </div>

           

            <div className="mb-3 col-md-12">

            
                </div>

                    <div className="col-md-12">

                    <button  type="submit" class="btn btn-primary">Submit</button>

                    </div>
                                     
               

            </div>                 
        </form>
    </div>  
    </>
  )
}

export default SellerProfile