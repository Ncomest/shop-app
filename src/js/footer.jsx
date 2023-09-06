import styles from "../css/style";
import style from "../css/style";
import phone from "../image/phone.png";
import {
  Faceb,
  whatsup,
  inst,
  skype,
  youtube,
  card1,
  card2,
  card3,
  card4,
  card5,
} from "../image";

function Footer() {
  return (
    <div style={styles.footContainer}>
      <div style={styles.signContainer}>
        <div style={style.flexAlignJustRow}>
          <svg
            style={{ paddingRight: "30px" }}
            width="60"
            height="60"
            viewBox="0 0 60 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15 19.5C15 19.1022 15.158 18.7206 15.4393 18.4393C15.7206 18.158 16.1022 18 16.5 18H37.5C37.8978 18 38.2794 18.158 38.5607 18.4393C38.842 18.7206 39 19.1022 39 19.5C39 19.8978 38.842 20.2794 38.5607 20.5607C38.2794 20.842 37.8978 21 37.5 21H16.5C16.1022 21 15.7206 20.842 15.4393 20.5607C15.158 20.2794 15 19.8978 15 19.5ZM31.5 27C31.1022 27 30.7206 27.158 30.4393 27.4393C30.158 27.7206 30 28.1022 30 28.5C30 28.8978 30.158 29.2794 30.4393 29.5607C30.7206 29.842 31.1022 30 31.5 30H37.5C37.8978 30 38.2794 29.842 38.5607 29.5607C38.842 29.2794 39 28.8978 39 28.5C39 28.1022 38.842 27.7206 38.5607 27.4393C38.2794 27.158 37.8978 27 37.5 27H31.5ZM30 37.5C30 37.1022 30.158 36.7206 30.4393 36.4393C30.7206 36.158 31.1022 36 31.5 36H37.5C37.8978 36 38.2794 36.158 38.5607 36.4393C38.842 36.7206 39 37.1022 39 37.5C39 37.8978 38.842 38.2794 38.5607 38.5607C38.2794 38.842 37.8978 39 37.5 39H31.5C31.1022 39 30.7206 38.842 30.4393 38.5607C30.158 38.2794 30 37.8978 30 37.5ZM16.5 27C16.1022 27 15.7206 27.158 15.4393 27.4393C15.158 27.7206 15 28.1022 15 28.5V37.5C15 37.8978 15.158 38.2794 15.4393 38.5607C15.7206 38.842 16.1022 39 16.5 39H25.5C25.8978 39 26.2794 38.842 26.5607 38.5607C26.842 38.2794 27 37.8978 27 37.5V28.5C27 28.1022 26.842 27.7206 26.5607 27.4393C26.2794 27.158 25.8978 27 25.5 27H16.5ZM18 36V30H24V36H18ZM6 15C6 13.4087 6.63214 11.8826 7.75736 10.7574C8.88258 9.63214 10.4087 9 12 9H42C43.5913 9 45.1174 9.63214 46.2426 10.7574C47.3679 11.8826 48 13.4087 48 15V18C49.5913 18 51.1174 18.6321 52.2426 19.7574C53.3679 20.8826 54 22.4087 54 24V40.5C54 42.4891 53.2098 44.3968 51.8033 45.8033C50.3968 47.2098 48.4891 48 46.5 48H13.5C11.5109 48 9.60322 47.2098 8.1967 45.8033C6.79018 44.3968 6 42.4891 6 40.5V15ZM45 15C45 14.2044 44.6839 13.4413 44.1213 12.8787C43.5587 12.3161 42.7957 12 42 12H12C11.2044 12 10.4413 12.3161 9.87868 12.8787C9.31607 13.4413 9 14.2044 9 15V40.5C9 41.6935 9.47411 42.8381 10.318 43.682C11.1619 44.5259 12.3065 45 13.5 45H46.5C47.6935 45 48.8381 44.5259 49.682 43.682C50.5259 42.8381 51 41.6935 51 40.5V24C51 23.2044 50.6839 22.4413 50.1213 21.8787C49.5587 21.3161 48.7957 21 48 21V40.5C48 40.8978 47.842 41.2794 47.5607 41.5607C47.2794 41.842 46.8978 42 46.5 42C46.1022 42 45.7206 41.842 45.4393 41.5607C45.158 41.2794 45 40.8978 45 40.5V15Z"
              fill="#E73C17"
            />
          </svg>
          <div style={style.flexJustContColm}>
            <h5 style={style.joinNews}>Join our newsletter and get offers</h5>
            <p style={style.signIn}>Sign up our newsletter</p>
          </div>
        </div>
        <div>
          <input
            style={style.inputSign}
            type="text"
            placeholder="Enter your email"
          />
          <button style={style.inputBtn}>subcribe</button>
        </div>
      </div>
      <div style={styles.footBlock}>
        <div>
          <h5 style={styles.Footh5}>About Us</h5>
          <p style={styles.aboutFoottext}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit fugit
            delectus dolor quam facilis deserunt omnis sequi earum nam fugiat!
          </p>
          <div style={styles.footerMeta}>
            <img src={Faceb} alt="Faceb" />
            <img src={whatsup} alt="whatsup" />
            <img src={inst} alt="insta" />
            <img src={skype} alt="skype" />
            <img src={youtube} alt="youtube" />
          </div>
        </div>
        <div>
          <h5 style={styles.Footh5}>Information</h5>
          <p>About</p>
          <p>Delivery information</p>
          <p>Privacy Policy</p>
          <p>Sales</p>
          <p>Terms & Conditions </p>
          <p>EMI Payment</p>
        </div>
        <div>
          <h5 style={styles.Footh5}>ACCOUNT</h5>
          <p>My Account</p>
          <p>My Orders</p>
          <p>Returns</p>
          <p>Shipping</p>
          <p>Wishlist</p>
          <p>Account Details</p>
        </div>
        <div>
          <h5 style={styles.Footh5}>Store</h5>
          <p>Affiliate</p>
          <p>Discounts</p>
          <p>Sale</p>
          <p>Contact</p>
          <p>All Collections</p>
        </div>
        <div>
          <h5 style={styles.Footh5}>CONTACT US</h5>
          <p style={styles.contWidth}>
            If you have any query, please contact us needus24@gmail.com
          </p>
          <div style={styles.flex}>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 21.6665C22.7614 21.6665 25 19.4279 25 16.6665C25 13.9051 22.7614 11.6665 20 11.6665C17.2386 11.6665 15 13.9051 15 16.6665C15 19.4279 17.2386 21.6665 20 21.6665Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M20 3.33325C16.4638 3.33325 13.0724 4.73801 10.5719 7.23849C8.07145 9.73898 6.66669 13.1304 6.66669 16.6666C6.66669 19.8199 7.33669 21.8833 9.16669 24.1666L20 36.6666L30.8334 24.1666C32.6634 21.8833 33.3334 19.8199 33.3334 16.6666C33.3334 13.1304 31.9286 9.73898 29.4281 7.23849C26.9276 4.73801 23.5362 3.33325 20 3.33325V3.33325Z"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            <p>California, USA</p>
          </div>
          <div style={styles.flex}>
            <img src={phone} alt="phone" />
            <p>+12012987481</p>
          </div>
        </div>
      </div>
      <div>
        <div style={styles.cardPos}>
          <img src={card1} alt="card1" />
          <img src={card2} alt="card2" />
          <img src={card3} alt="card3" />
          <img src={card4} alt="card4" />
          <img src={card5} alt="card5" />
        </div>
        <p style={styles.copyright}>Copyright.2022.All Right Reserved</p>
      </div>
    </div>
  );
}

export default Footer;
