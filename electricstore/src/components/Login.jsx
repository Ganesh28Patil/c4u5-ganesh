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

 let res;

  const handlelogin=()=>{
   
    const payload={

      username,
      password
    }
    console.log('payload:', payload);

    // fetch("http://localhost:8080/users", {
    //   method: "POST",
    //   body: JSON.stringify(user),
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    // })
    // .then((res) => res.json())
    // .then((res) => console.log(res))
    // .catch((er) => {
    //   console.log(er);
    // });
    fetch("http://localhost:8080/users", {
      method: "GET",
      //body: JSON.stringify(user),
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then((res) => res.json())
    .then((res) => console.log("res",res))
    .catch((er) => {
      console.log(er);
    });
    
   for(let i = 0; i < res.length;i++){
     console.log(res[i]);
   }
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
