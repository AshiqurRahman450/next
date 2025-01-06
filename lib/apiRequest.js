
import toast from "react-hot-toast";

export async function makeApiRequest(setLoading,url,data,entityeName,reset){
    try {
        setLoading(true);
         const baseUrl = "http://localhost:3000";
        const response = await fetch(url,{
          method:"POST",
          headers:{
            "Content-Type":"application/json"
          },
          body:JSON.stringify(data)
        })
        console.log(response)
        if(response.ok){
          console.log(response)
          reset();
          setLoading(false)
          toast.success(`New ${entityeName} Created Sucessfully`)
        }else{
          setLoading(false);
          if(response.status==409){
           
            toast.error('The Giving WareHouse Stock is Not Enough')
          }else{
              toast.error('Something Went Wrong')
          }
        }
        
      } catch (error) {
        setLoading(false)
        console.log(error)
        
      }
    }

export async function makePutRequest(setLoading,url,data,entityeName,redirect,reset){
      try {
          
          setLoading(true);
           const baseUrl = "http://localhost:3000";
          const response = await fetch(url,{
            method:"PUT",
            headers:{
              "Content-Type":"application/json"
            },
            body:JSON.stringify(data)
          })
          if(response.ok){
            console.log(response)
            redirect;
            setLoading(false)
            toast.success(` ${entityeName} Updated Sucessfully`)
          }else{
            setLoading(false);
            if(response.status==409){
             
              toast.error('The Giving WareHouse Stock is Not Enough')
            }else{
                toast.error('Something Went Wrong')
            }
              
             
          }
          
        } catch (error) {
          setLoading(false)
          console.log(error)
          
        }
      }