import React from 'react';
import './Header.css';
import ReactDOM from 'react-dom';

import { SocialIcon } from 'react-social-icons';


export default function Footer() {
  return (
    <> 
      
    <div className="content-wrapper" style={{minHeight: 'auto'}}>
        <footer className="main-footer" style={{backgroundColor: '#feb062'}}>
        <div className="container">
            <div className="col-md-5 pull-left">
            <table width="100%" style={{marginRight: '15%'}}>
                <tbody>
                <tr>
                    <td colSpan={2} align="center">
                    <h3><b>Contact Us</b></h3>
                    </td>
                </tr>
                <tr>
                    <td width="25%"><b>Address :</b></td>
                    <td>

                   
                        <a href='https://goo.gl/maps/ycpf8MfpZ53Xxei67' target='_blank' style={{color: '#424949'}} > 4th Floor KMBA Members' Center Building <br />#5 Matimpiin St. Brgy. Pinyahan Quezon City 1100</a>
                        </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className="col-md-4 pull-center">
            <table width="100%" style={{marginTop: '16%'}}>
                <tbody>
                <tr>
                    <td width="25%"><b>Email :</b></td>
                    <td>kcoop022016@gmail.com</td>
                </tr>
                <tr>
                    <td width="25%"><b>Tel # :</b></td>
                    <td>5310-2470</td>
                </tr>
                <tr>
                    <td rowSpan={2} width="27%"><b>Ulat Hotline :</b></td>
                    <td>0917-531-4335 (GLOBE) </td>
                </tr>
                <tr>
                    <td>0947-812-9197 (SMART) </td>
                </tr>
                </tbody>
            </table>
            </div>
            <div className="col-md-3 pull-right">
            <table width="100%">
                <tbody>
                <tr>
                    <td colSpan={2} align="center">
                    <h3><b>Connect With Us</b></h3>
                    </td>
                </tr>
                <tr>
                    
                    <td width="15%">

                        {/* <h1 align="right" style={{marginRight: '5%', marginTop: '-5%'}}><a href="https://www.facebook.com/KasaganakaCoopOfficial/" target="_blank" style={{color: 'gray'}}><i className="fa fa-facebook-square" /></a> </h1>
                        */}
                        <SocialIcon url="https://www.facebook.com/KasaganakaCoopOfficial/" target="_blank" bgColor="#808080" style={{ height: 35, width: 35, color: 'gray' }} />
                    </td>
                    <td><a href="https://www.facebook.com/KasaganakaCoopOfficial/" target="_blank" style={{color: 'gray'}}>@KasaganakaCoopOfficial</a></td>
                
                    
                </tr>
                <br/>
                    
                <tr>
                    <td width="15%">
                    {/*<h1 align="right" style={{marginRight: '5%', marginTop: '-5%'}}><a href="https://www.youtube.com/channel/UCs0LgP65FzdxrByek1uNsZA" target="_blank" style={{color: 'gray'}}><i className="fa fa-youtube" /></a> </h1>
                    */}
                    <SocialIcon url="https://www.youtube.com/channel/UCs0LgP65FzdxrByek1uNsZA" target="_blank" bgColor="#808080" style={{ height: 35, width: 35, color: 'gray' }} />
                    </td>
                    <td><a href="https://www.youtube.com/channel/UCs0LgP65FzdxrByek1uNsZA" target="_blank" style={{color: 'gray'}}>@KasaganakaCoopTV</a></td>
                </tr>
                </tbody>
            </table>
            </div>
        </div>
        </footer>
    </div>
          
   
    </>  
      
  )
}
