import { Outlet, NavLink } from "react-router-dom";

export default function MainLayout() {
  return (
    <div style={{display:"grid", gridTemplateRows:"auto 1fr auto", minHeight:"100dvh"}}>
      <header style={{padding:"12px 20px", borderBottom:"1px solid #eee"}}>
        <nav style={{display:"flex", gap:12}}>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </header>

      <main style={{padding:20}}>
        {/* หน้าลูก ๆ จะแสดงตรงนี้ */}
        <Outlet />
      </main>

      <footer style={{padding:"12px 20px", borderTop:"1px solid #eee"}}>
        © 2025
      </footer>
    </div>
  );
}
