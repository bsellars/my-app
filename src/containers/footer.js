import React from "react";
import Footer from "../components/footer";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import GitHubIcon from '@mui/icons-material/GitHub';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { Divider } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';
import PhoneIcon from '@mui/icons-material/Phone';

export function FooterContainer() {
    return(
        <Footer>
            <Footer.Wrapper>
                <Footer.Row>
                <Footer.Column>
                    <Footer.Titles>About Us</Footer.Titles>
                    <Footer.Link> <a className="footerLink" href="#">Story</a></Footer.Link>
                    <Footer.Link> <a className="footerLink" href="#">Clients</a></Footer.Link>
                    <Footer.Link> <a className="footerLink" href="#">Testimonials</a></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Titles>Links</Footer.Titles>
                    <Footer.Link> <a className="footerLink" href="https://www.tsilhqotin.ca/" target='_blank'>Tŝilhqot’in National Government</a></Footer.Link>
                    <Footer.Link> <a className="footerLink" href="https://tsilhqotinlanguage.ca/" target='_blank'>Tŝilhqot’in Language</a></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Titles>Contact Us</Footer.Titles>
                    <Footer.Link> <a className="footerLink" href="#"> Address <br/> 79A 3rd Ave N Williams Lake, BC V2G 4T4</a></Footer.Link>
                    <Footer.Link> <a className="footerLink" href="#">  Number <PhoneIcon /> <br/>778-412-1112</a></Footer.Link>
                </Footer.Column>
                <Footer.Column>
                    <Footer.Titles>Social</Footer.Titles>
                    <Footer.Link> <a className="footerLink" href="https://www.facebook.com/TsilhqotinNationalGovernment/"> <FacebookRoundedIcon/>Facebook</a></Footer.Link>
                    <Footer.Link> <a className="footerLink" href="https://github.com/Tsilhqot-in-National-Government"> <GitHubIcon/>Github</a></Footer.Link>
                    <Footer.Link> <a className="footerLink" href="https://www.youtube.com/channel/UC2-7dFH9j_3CoOf-Wl0EmeA/featured"><YouTubeIcon/>Youtube</a></Footer.Link>
                    <Footer.Link> <a className="footerLink" href="https://twitter.com/tsilhqotin"><TwitterIcon/>Twitter</a></Footer.Link>
                </Footer.Column>
                </Footer.Row>
                <Divider sx={{background:'white'}}/> 
                <div className="copyright"><CopyrightIcon />2022 Tŝilhqotin National Government. All Rights Reserved</div>
           </Footer.Wrapper>
        </Footer>
    )
}