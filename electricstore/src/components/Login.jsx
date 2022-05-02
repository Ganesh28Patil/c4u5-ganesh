import { useState } from "react";

export const Login = () => {
  const [username, setusername] = useState("")
  const [password, setpassword] = useState("")

  // const {isAuthenticated}=useSelector((state) =>state.login)

  // console.log("here",isAuthenticated)

 
  const [user, setuser] = useState({
   
    username:"",
    password:"",
  })
 
  // const dispatch =useDispatch()
 
 
 
  const handlelogin=()=>{
   
    const payload={

      username,
      password
    }
    console.log('payload:', payload)
   
    // dispatch(loginthunk(payload))
   
  }

  return (
    <div>
      <input
        className="username"
        type="text"
        name="username"
        placeholder="Enter Username" 
        onChange={(e) => {
          setusername(e.target.value);
        }}

      />
      <input
        className="password"
        type="password"
        name="password"
        placeholder="Enter password"
        onChange={(e) => {
          setpassword(e.target.value);
        }}

      />

      {/* On this button click make network req to find user with same username and password */}
      {/* get his role, if role is `admin` take him to `/orders` page otherwise take him to `/neworder` */}
      <button className="submit" onClick={handlelogin}>Login</button>
    </div>
  );
};
