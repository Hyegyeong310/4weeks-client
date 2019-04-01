import Link from 'next/link';

const FooterMenu = () => (
  <div className="footer-menu">
    <div className="row">
      <div className="col">
        <Link href="/shop-detail">
          <a>
            <div>
              <i className="fa fa-store fa-lg" />
            </div>
            나의 샵
          </a>
        </Link>
      </div>
      <div className="col">
        <Link href="/shop-chart" as="/shop/chart">
          <a>
            <div>
              <i className="fa fa-chart-line fa-lg" />
            </div>
            통계
          </a>
        </Link>
      </div>
    </div>
    <style jsx>
      {`
        .row {
          margin: 0;
          padding: 10px;
        }
        .col {
          text-align: center;
          font-size: 11px;
        }
      `}
    </style>
  </div>
);

export default FooterMenu;
