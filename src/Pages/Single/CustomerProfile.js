import React,{useState,useEffect} from 'react'
import axios from 'axios';

const CustomerProfile = ({Id}) => {

    const [boughtProducts, setBroughtProducts] = useState([]);

    const callgetRentedProductsApiForCustomer = () => {
        let data = {
            id:Id,
            isCustomer:true
        }
        axios.post(`http://127.0.0.1:8080/Rentalle/v1/product/getRentedProducts`,data).then((res)=>{
            
            setBroughtProducts(res.data.data);
            

        }).catch((err)=>{
            console.log(err.response.data)
        })
    }

    useEffect(() => {
        callgetRentedProductsApiForCustomer();
      }, [])
      
  return (
    <>
        <div class=" mt-2">
    
    


                                       
        <div className="" style={{marginTop:"20px"}}>

        <div className="selled-products-details d-flex flex-row justify-content-center align-items-center">
            <table>
                        <thead>
                        <tr className=''>
                        <th>Seller Email</th>
                        <th>Product Name</th>
                        <th>Due Date</th>
                        <th>Rented Date</th>
                    </tr>
                    </thead>

                    <tbody>
                        {
                            boughtProducts?.map((array,index)=>{
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

                

    
                                     
               

            </div>


       

           
        
    
                 
       
    </div>  
    </>
  )
}

export default CustomerProfile