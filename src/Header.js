const Title = () => (
  <>
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="https://th.bing.com/th/id/OIP.5g7g-Qnr_bnxkbw_eQaoMwHaEp?w=243&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
      />
    
    </a>
     
   </>
     
  );
  
  const Header = () => {
    return (
      <div className="header">
       
        <Title />
  
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Dsta</li>
          </ul>
        </div>
      </div>
    );
  };
  
  export default Header;