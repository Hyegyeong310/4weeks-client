module.exports = {
  style: `{
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Helvetica Neue, Helvetica, Arial, sans-serif;
        color: #333;
        font-size: 14px;
      }
      a {
        text-decoration: none;
        color: #555;
        cursor: pointer;
      }
      h1,
      h4 {
        text-align: center;
      }
      h2 {
        color: #777;
      }
      .wrap {
        width: 100%;
      }
      
      .dropdown-menu {
        min-width: 160px;
        padding: 5px 0;
        margin: 2px 0 0;
        background: #fff;
        background-clip: padding-box;
        border: 1px solid rgba(0, 0, 0, 0.15);
        border-radius: 4px;
        box-shadow: 0 6px 12px rgba(0, 0, 0, 0.175);
        right: 0 !important;
        left: auto;
        cursor: pointer;
      }
      
      ::placeholder {
        color: #333;
        font-weight: 400;
        font-size: 1.2rem;
        text-align: left;
      }
      input:not([type='checkbox']) {
        outline: 0;
        border: 1px solid #ffa0a1;
        background-color: white;
        width: 400px;
        border-radius: 3px;
        padding: 10px 15px;
        margin: 10px auto;
        display: block;
        text-align: center;
        font-size: 1em;
        color: #333;
        transition: 0.25s;
        font-weight: 300;
      }
      input:hover:not([type='checkbox']) {
        background-color: #ffa489;
        box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5);
        color: #fff;
      }
      input:focus:not([type='checkbox']) {
        background-color: #fff;
        width: 420px;
        color: #333;
      }
      p {
        font-size: 1.2rem;
        margin-bottom: 1px;
      }
      .msg {
        padding: 10px;
        width: 640px;
        margin: 0px auto;
        box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.2);
      }
      
      .input {
        display: flex;
        align-items: 'center';
      }
      .na {
        width: 13rem;
        color: #333;
        padding: 10px;
        justify-content: flex-end;
        align-items: center;
      }
      .line {
        width: 640px;
        margin: 0px auto;
        align-items: center;
      }
      
      .submit {
        background-color: #333;
        color: white;
        font-weight: 300;
        padding: 10px;
        width: 640px;
        margin: 20px auto;
        justify-content: center;
      }
      
      .flex {
        display: flex;
      }
      
      .flexCenter {
        justify-content: center;
        align-items: center;
      }
    }`
};
