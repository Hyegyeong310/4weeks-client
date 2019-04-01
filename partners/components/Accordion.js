import { Accordion, AccordionItem } from 'react-sanfona';
import { Component } from 'react';

class AccordionMenu extends Component {
  rawMarkup(answer) {
    return { __html: answer };
  }
  render() {
    return (
      <div>
        <Accordion>
          {this.props.data.map(
            ({ code, category, question, answer }, index) => {
              const customTitle = (
                <div
                  style={{
                    paddingLeft: '23px',
                    borderBottom: 'solid 1px #d6d6d6',
                    cursor: 'pointer'
                  }}
                >
                  <div className="faqCategory">{category}</div>
                  <div ref="Arrow" className={`faqArrow fa fa-angle-down`} />
                  <div className="faqTitle">{question}</div>
                </div>
              );
              return (
                <AccordionItem key={index} title={customTitle} code={code}>
                  <div
                    className="faqDesc"
                    dangerouslySetInnerHTML={this.rawMarkup(answer)}
                  />
                </AccordionItem>
              );
            }
          )}
        </Accordion>
        <style jsx>
          {`
            .faqCategory {
              font-size: 14px;
              font-weight: 400;
              line-height: 1;
              letter-spacing: -0.3px;
              color: #888888;
              padding-top: 12px;
            }
            .faqArrow {
              float: right;
              margin-right: 23px;
              margin-top: -2px;
            }
            .faqTitle {
              font-size: 16px;
              font-weight: normal;
              font-style: normal;
              line-height: 1.29;
              letter-spacing: -0.5px;
              padding-top: 3px;
              padding-bottom: 10px;
              color: #353535;
            }

            .faqDesc {
              background: #fdf4f4;
              height: 100%;
              padding: 15px 23px;
              border-bottom: solid 1px #d6d6d6;
            }
          `}
        </style>
      </div>
    );
  }
}

export default AccordionMenu;
