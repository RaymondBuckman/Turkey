import React, { Component } from 'react';

import image1 from '../../images/hagia-sophia-1.jpg';
import image2 from '../../images/basilica-cistern-1.jpg';
import image3 from '../../images/nemrut-1.jpg';
import image4 from '../../images/pamukkale-1.jpg';


class Modal extends Component {
    render() {
        return(
        <div className="modal fade" id="projectsModal" data-easein="slideLeftBigIn"  tabIndex="-1">
         <div className="modal-dialog">
               <div className="modal-content">
                    <div className="modal-header">
                         <header className="modal-title">Quadrocopter (Drone)</header>
                    </div>
                    <div className="modal-body">
                         <div id="myGallery" className="carousel slide" data-interval="false">
                              <div className="carousel-inner">
                                   <div className="item active"> <img src={image1} alt="item0"/>
                                        <div className="carousel-caption">
                                             <h3>Quadrocopter & Controller</h3>
                                        </div>
                                   </div>
                                   <div className="item"> <img src={image2} alt="item1"/>
                                        <div className="carousel-caption">
                                             <h3>Flight Modules</h3>  
                                        </div>
                                   </div>
                                   <div className="item"> <img src={image3} alt="item3"/>
                                        <div className="carousel-caption">
                                             <h3>Project Show Display</h3>
                                        </div>
                                   </div>
                                   <div className="item"> <img src={image4} alt="item4"/>
                                        <div className="carousel-caption">
                                             <h3>Project Board</h3>
                                        </div>
                                   </div>
                              </div> 
                              <a className="left carousel-control fade" href="#myGallery" role="button" data-slide="prev"> <span className="glyphicon glyphicon-chevron-left"></span></a>
                              <a className="right carousel-control fade" href="#myGallery" role="button" data-slide="next"> <span className="glyphicon glyphicon-chevron-right"></span></a>
                         </div> 
                    </div> 
                   <div className="modal-footer">
                     <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                   </div>
               </div>
        </div>
         </div>
        );
    }
}

export default Modal;
