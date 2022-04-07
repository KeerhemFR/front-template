import React from 'react';

import { SFooter } from '~components/footer/SFooter';

import deliveryPicto from '~assets/images/deliveryPicto.png';
import samplePicto from '~assets/images/samplePicto.png';
import personalisationPicto from '~assets/images/personalisationPicto.png';
import twitterIcon from '~assets/images/twitterIcon.png';
import facebookIcon from '~assets/images/facebookIcon.png';
import instagramIcon from '~assets/images/instagramIcon.png';
import youtubeIcon from '~assets/images/youtubeIcon.png';

/**
 * Footer
 * @return {React.ReactElement} Footer with infos, footer menu and a form
 */
export const Footer = React.memo(() => {
  return (
    <SFooter>
      <section className="footerTopBanner">
        <h2>Online advantages</h2>
        <div className="rowContainer">
          <div className="bannerItem">
            <div className="bannerPicto">
              <img src={deliveryPicto} alt="Delivery picto" />
            </div>
            <p>
              We are offering complimentary next day delivery on all orders over
              when you order by 3pm and our returns policy has extended to 30
              days. Find out more here
            </p>
          </div>
          <div className="bannerItem">
            <div className="bannerPicto">
              <img src={samplePicto} alt="Sample picto" />
            </div>
            <p>
              3 samples offered* to discover Guerlain's expertise in skincare,
              makeup, and fragrance
              <br />
              *While stocks last
            </p>
          </div>
          <div className="bannerItem">
            <div className="bannerPicto">
              <img src={personalisationPicto} alt="Personalisation picto" />
            </div>
            <p>
              Your products are presented with the greatest care in an elegant
              box
            </p>
          </div>
        </div>
      </section>

      <section className="footerContent">
        <div className="footerInfos">
          <div className="infosCol">
            <div className="infosBloc">
              <p>Need Help?</p>
              <hr />
              <ul className="infosList">
                <li>Store Locator</li>
                <li>FAQ</li>
              </ul>
            </div>
            <div className="infosBloc">
              <p>Contact Us</p>
              <hr />
              <ul className="infosList">
                <li>Contact Us</li>
                <li>Careers</li>
              </ul>
            </div>
          </div>
          <div className="infosCol">
            <div className="infosBloc">
              <p>Legal</p>
              <hr />
              <ul className="infosList">
                <li>Legal terms</li>
                <li>Privacy Policy</li>
                <li>Notice about cookie management</li>
                <li>Cookies Settings</li>
                <li>General Terms and Conditions of Sales</li>
              </ul>
            </div>
            <div className="infosBloc">
              <p>Follow Us</p>
              <hr />
              <ul className="socialIcons">
                <li>
                  <a href="https://twitter.com/Guerlain" target="_blank">
                    <img src={twitterIcon} />
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/Guerlain" target="_blank">
                    <img src={facebookIcon} />
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/guerlain/" target="_blank">
                    <img src={instagramIcon} />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/channel/UCeHcEArSCMt-0vB47KaahQQ"
                    target="_blank"
                  >
                    <img src={youtubeIcon} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footerForm">
          <p>Country / Region</p>
          <span>France</span>
          <form>
            <label>Newsletter</label>
            <input
              className="textInput"
              type="email"
              placeholder="Enter your e-mail"
            />
            <p>
              GUERLAIN is responsible for processing your personal data. The
              information collected above is used to send our personalized
              offers, news and events. You have, amongst others, the right to
              access and correct your personal data and to request erasure. For
              more information about how we protect your personal data, please
              read our Privacy Policy or contact our data protection officer by
              e-mail at the following address dpo@guerlain.fr
            </p>
            <div className="checkboxContainer">
              <input type="checkbox" />
              <label>
                I want to subscribe to Guerlain's Newsletter to receive
                personalized offers and news by email.
              </label>
            </div>
            <input className="submitForm" type="submit" value="Subscribe" />
          </form>
        </div>
      </section>
    </SFooter>
  );
});
