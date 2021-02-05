import {Link} from 'react-router-dom';

function Nav() {
    return (
      <div className="Nav">
        <header className="Nav-header">
          <ul className="Nav-ul">
            <li className="Nav-li">
                <Link to="/search">검색</Link>
                </li>
            <li className="Nav-li">
            <Link to="/manage">관리</Link>
            </li>
            <li className="Nav-li">
            <Link to="/setting">설정</Link>
            </li>  
          </ul>
        </header>
      </div>
    );
  }
  
  export default Nav;
  