import axios from 'axios';

  const Fetchticket=async()=>{
   const {data}= await axios.get("http://localhost:5000/ticket")
   return data
}
export default Fetchticket