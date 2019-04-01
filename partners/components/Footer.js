const Footer = () => (
  <footer>
    <div className="footer">
      <div className="img-logo-grey img-style-footer" />
      <div className="text-style-footer">2019</div>
      <div className="compony">
        <br />
        <br />
        <br />
        <br />
      </div>
    </div>
    <style jsx>
      {`
        .footer {
          background: #f9f9f9;
          clear: both;
          padding-top: 12px;
        }
        .img-logo-grey {
          background-image: url('/static/img/footer_logo.png');
        }
        .img-style-footer {
          margin: 0 auto;
          width: 26px;
          height: 26px;
          background-size: cover;
          background-repeat: no-repeat;
        }
        .text-style-footer {
          margin: 4.5px auto 0;
          font-size: 10px;
          line-height: 1.24;
          text-align: center;
          color: #b2b2b2;
        }
        .compony {
          font-size: 10px;
          text-align: center;
          padding: 10px 20px;
          color: #b2b2b2;
          text-decoration: none;
        }
      `}
    </style>
  </footer>
);

export default Footer;
