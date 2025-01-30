import React, { Component } from 'react';
import './App.css';
class App extends Component {
     signn(){
        let pp=document.getElementById("pop-up")
        pp.style.display="flex"
        let spm=document.getElementById("pop-up1")
        spm.style.display="none"
     }
     removepopup(){
        let rem=document.getElementById("pop-up")
        rem.style.display="none"
        let spm=document.getElementById("pop-up1")
        spm.style.display="none"
     }
     sigup(){
        let sp=document.getElementById("pop-up1")
        sp.style.display="flex"
        let rem=document.getElementById("pop-up")
        rem.style.display="none"
     }

    render() {
        return (
            <div id='HomePage'>
                   <div id="pop-up1">
                        <div className="remove-popup-window" onClick={this.removepopup}></div>
                        <div id="popup-window">
                           <form >
                                <img src="./close.png" alt="" className='close' onClick={this.removepopup} />
                                <div class="login-head"><h1>Sign Up </h1></div>
                                <div class="login-info">
                                    <input type="text" placeholder="" required />
                                    <label >Username</label>
                                    <i class='bx bx-user' ></i>
                                </div>
                                <div class="login-info">
                                    <input type="text" placeholder="" required />
                                    <label >Email</label>
                                    <i class='bx bx-envelope' ></i>
                                </div>
                                <div class="select-role">
                                    <label >Select role</label>
                                    <select  id="role">
                                        <option value=" "></option>
                                        <option value="1">Admin</option>
                                        <option value="2">Employeer</option>
                                        <option value="3">Job seeker</option>
                                    </select>
                                </div>
                               <div class="login-info">
                                    <input type="password" placeholder="" required />
                                    <label >Password</label>
                                    <i class='bx bxs-keyboard'></i>
                               </div>
                               <div class="login-info">
                                    <input type="password" placeholder="" required />
                                    <label >Conform Password</label>
                                    <i class='bx bxs-keyboard'></i>
                               </div>
                                <div class="login-button">
                                     <button type="submit"> Sign Up</button>
                                </div>  
                                <div class="register">
                                     <p>All  ready have an account?   <a onClick={this.signn}>Login</a></p>
                                </div>
                          </form>
                        </div>
                   </div>
                  <div id="pop-up" >
                    <div className="remove-popup-window" onClick={this.removepopup}></div>
                    <div id="popup-window" >
                           <form >
                                <img src="./close.png" alt="" className='close' onClick={this.removepopup} />
                                <div class="login-head"><h1>Login </h1></div>
                                <div class="login-info">
                                    <input type="text" placeholder="" required />
                                    <label >Username</label>
                                    <i class='bx bx-user' ></i>
                                </div>
                               <div class="login-info">
                                    <input type="password" placeholder="" required />
                                    <label >Password</label>
                                    <i class='bx bxs-keyboard'></i>
                               </div>
                               <div class="forget-remember" >
                                     <label>
                                     <input type="checkbox" /> Remember me 
                                     </label><a href="#">Forget Password?</a>
                                </div>
                                <div class="login-button">
                                     <button type="submit" > Login</button>
                                </div>  
                                <div class="register">
                                     <p>Dont have the account?   <a onClick={this.sigup}>Register</a></p>
                                </div>
                          </form>
                    </div>
                </div>
                <div id='header'>
                    <img className='logo' src="logo.png" alt="logo" />
                    <div className="logoText"><span>Job </span>Portal</div>
                    <button className='signinText' onClick={this.sigup}>SignUp</button>
                </div>
                <div id="content">
                    <div className="text1">
                        INDIA'S #1 JOB PLATFORM
                    </div>
                    <div className="text2">
                        <h1>Your Job Search Ends Here</h1>
                    </div>
                    <div className="text3">
                        Discover career opportunities
                    </div>
                    <div className="searchBar">
                        <input type="search" className="sjobText" placeholder='Search job by "Skill" '/>
                        <input type="search" className="slocationText" placeholder='Job Location' />
                        <button className='sbtn'>Search jobs</button>
                    </div>
                </div>
                <div id="footer">
                    <label className='copyText'>Copyright @ 2024,All rights reserved.</label>
                    <div className='footersocdiv'>
                        <img className='socicon' src="linkedin.png" alt="linkedin" />
                        <img className='socicon' src="twitter.png" alt="linkedin" />
                        <img className='socicon' src="facebook.png" alt="linkedin" />
                    </div>
                    
                </div>

            </div>
        );
    }
}

export default App;
