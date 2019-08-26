const Layout = props => (
  <div className="index-page text-center">
    <h2 className="logo">Papers N' Parchments</h2>
    {props.children}
    <style jsx global>
      {`
        @import url('/static/css/style.css');
      `}
    </style>
  </div>
);

export default Layout;