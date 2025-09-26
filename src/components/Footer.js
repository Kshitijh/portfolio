import React from "react";

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div style={{display:"flex", alignItems:"center", justifyContent:"space-between", gap:12}}>
          <div style={{fontSize:14}}>© {new Date().getFullYear()} Kshitij H. — Built with React</div>
          <div style={{fontSize:14}} className="small">Made with ❤</div>
        </div>
      </div>
    </footer>
  );
}
