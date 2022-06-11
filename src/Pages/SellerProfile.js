import React,{useState,useEffect} from 'react';
import axios from 'axios';

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

    useEffect(() => {
        callGetSelledProductsApi();
      }, [])
      
  return (
      <>
    <div class=" mt-2">
    <form class="row g-3 gy-2 gx-3 align-items-center">
    


                                       
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
            <select class="form-control" id="exampleFormControlSelect1">
            <option selected>Select</option>
            <option>Bed Room</option>
            <option>Living Room</option>
            <option>Vehicles</option>
            <option>Electronics</option>
            <option>Appliances</option>
            <option>Kitchen</option>
            </select>


            <label for="inputProduct" class="form-label">Product Name</label>
                <input type="product" class="form-control" id="inputProduct" placeholder="Enter Product Name"/>


            <div class="input-group ">
              <label class="input-group-text" for="inputGroupFile01">Product Image</label>
             <input type="file" class="form-control" id="inputGroupFile01"/>
            </div>

            </div>

        
           
            
            <div className="col-md-6" style ={{marginTop:"30px"}}>
            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Product Description</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter Product Description..."></textarea>

            </div>
            <label for="inputProduct" class="form-label">Product per Month</label>
                <input type="product" class="form-control" id="inputProduct" placeholder=" Product price in rupees"/>               


            <label for="exampleFormControlSelect1">Total Product</label>
            <select class="form-control" id="exampleFormControlSelect1">
            <option selected>Select</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            
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