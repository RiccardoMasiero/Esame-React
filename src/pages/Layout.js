const Layout = () => {
    return (
      <>
        <nav>
          <ul>
            <li><Link to="Page2">Le novità più interessanti</Link></li>
            <li><Link to="Page3">I prodotti del momento</Link></li>
          </ul>
        </nav>
  
        <Outlet />
      </>
    )
  }

  export default Layout;