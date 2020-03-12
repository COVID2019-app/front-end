import React from 'react';
//import { Link } from 'react-router-dom';

function Footer(props) {
    return (
        <footer>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-sm-4 align-self-center">
                        <div className="text-center">
                            <a className="btn btn-social-icon btn-instagram" href="https://instagram.com/"><i className="fa fa-instagram"></i></a>

                            <a className="btn btn-social-icon btn-facebook" href="https://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                            <a className="btn btn-social-icon btn-twitter" href="https://twitter.com/"><i className="fa fa-twitter"></i></a>
                            <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-center">
                    <div className="col-auto">
                        <p>©<b id="copy"> </b>Join the team!</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;