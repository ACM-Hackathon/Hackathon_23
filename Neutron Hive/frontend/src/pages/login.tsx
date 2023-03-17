import React,{useState} from "react";
import {BsFacebook} from 'react-icons/bs'
import {FcGoogle} from 'react-icons/fc';
import axios from "axios";  
import { useRouter } from 'next/router';



const Login = ()=>{
     const router = useRouter();
     const [username,setUsername]=useState('');
     const [email,setEmail]=useState('');
     const [password,setPassword]=useState('');     
     const [email2,setEmail2]=useState('');
     const [password2,setPassword2]=useState('');  
     const update=async (URL)=>{
          const data={
               username,
               status:'true'
          }
          console.log(data);
          try {
               await axios({
                 method: 'POST',
                 url: URL,
                 data
               }).then((res) => {
                 console.log(res.data);
               
               });
             } 
             catch (err) {
               console.log(err)
             } 
     
         }   
     const fetchData = async (URL) => {
          const data={
               // "username":"Prajwaasdasdsadsdfasdasdlasdsad1305 Shah",
               // "email":"prajwalshsdadsda2hasdasd13asdasd05.2003@gmail.com",
               // "password":"21223asdfadasd7dfadf3asd1305"
               username,email,password
          }
          console.log(data);
          try {
            await axios({
              method: 'POST',
              url: URL,
              data
            }).then((res) => {
              console.log(res.data);
              if(res.data.success == "true"){
                    console.log("success");
                    router.push('/');
              }
            });
          } 
          catch (err) {
            console.log(err)
          }
     }
     const fetchData2 = async (URL2) => {
          const data={
               // "username":"Prajwaasdasdsadsdfasdasdlasdsad1305 Shah",
               // "email":"prajwalshsdadsda2hasdasd13asdasd05.2003@gmail.com",
               // "password":"21223asdfadasd7dfadf3asd1305"
               username:email2,password:password2
          }
          console.log(data);
          try {
            await axios({
              method: 'POST',
              url: URL2,
              data
            }).then((res) => {
              console.log(res.data);
              if(res.data.success == "true"){
               console.log("success");
               router.push('/');
              }
            });
          } 
          catch (err) {
            console.log(err)
          }
     }
     const URL = "https://web-production-4516.up.railway.app/register/";
     const URL2 = "https://web-production-4516.up.railway.app/login/";
     const handleClick = (e) => {
          e.preventDefault();
          fetchData(URL);
     }
     const handleClick2 = (e) => {
          e.preventDefault();
          const url='https://medirole-api-production.up.railway.app/api/v1/users/update';
          update(url);
          fetchData2(URL2);
     }

    React.useEffect(() => {

        const signUpButton = document.getElementById('signUp') as HTMLButtonElement;  
        const signInButton = document.getElementById('signIn') as HTMLButtonElement;  
        const container = document.getElementById('container') as HTMLDivElement;  

        signUpButton.addEventListener('click', () => {  
            container.classList.add("right-panel-active");  
        });  

        signInButton.addEventListener('click', () => {  
            container.classList.remove("right-panel-active");
        });    
    },[])
    return (

        <>
        <div className="bdy">
     <div id="login" className="modal fade" role="dialog">
           <div className="modal-dialog">
                <div className="modal-content">
                     <div className="modal-body">
                          <a href="/" className="exit">
                               <button data-dismiss="modal" className="close btn">&times;</button>
                          </a>
                          <div className="container1" id="container">
                               <div className="form-container sign-up-container">
                                    <form action="#" method = "post">
                                         <h1>Create Account</h1>
                                         <div className="social-container">
                                         <a href="#" className="social"><BsFacebook color="blue" fontSize={30}/></a>
                                              <a href="#" className="social"><FcGoogle fontSize={30}/></a>
                                         </div>
                                         <span>or use your email for registration</span>
                                         <input type="text" placeholder="Name" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                         <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)}/>
                                         <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                         <button className="btn" onClick={handleClick}>Sign Up</button>
                                    </form>
                               </div>
                               <div className="form-container sign-in-container">
                                    <form action="#" method = "post">
                                         <h1>Sign in</h1>
                                         <div className="social-container">
                                              <a href="#" className="social"><BsFacebook color="blue" fontSize={30}/></a>
                                              <a href="#" className="social"><FcGoogle fontSize={30}/></a>
                                              {/* <a href="#" className="social"><i className="fab fa-linkedin-in"></i></a> */}
                                         </div>
                                         <span>or use your account</span>
                                         <input type="text" placeholder="Username" value={email2} onChange={(e) => setEmail2(e.target.value)}/>
                                         <input type="password" placeholder="Password" value={password2} onChange={(e) => setPassword2(e.target.value)}/>
                                         <a href="#">Forgot your password?</a>
                                         <button className="btn" type="submit" onClick={handleClick2
                                         }>Sign In</button>
                                    </form>
                               </div>
                               <div className="overlay-container">
                                    <div className="overlay2">
                                         <div className="overlay-panel overlay-left">
                                              <h1>Welcome Back!</h1>
                                              <p>To keep connected with us please login with your personal info</p>
                                              <button  className="ghost btn" id="signIn">Sign In</button>
                                         </div>
                                         <div className="overlay-panel overlay-right">
                                              <h1>Hello Rakshak !!</h1>
                                              <p>Enter your personal details and start your journey with us</p>
                                              <button  type="submit" className="ghost btn" id="signUp">Sign Up</button>
                                         </div>
                                    </div>
                               </div>
                          </div>
                     </div>
                </div>
           </div>
      </div>
      </div>
      </>
    );
}

export default Login;
