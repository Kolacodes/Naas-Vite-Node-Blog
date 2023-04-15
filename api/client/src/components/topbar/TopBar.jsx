import { Link } from 'react-router-dom'
import './topbar.css'

export default function TopBar() {
  const user = false;
  return (
	<div className="top">
	  <div className="topLeft">
	  	<i className="topIcon fa-brands fa-facebook"></i>
		<i className="topIcon fa-brands fa-square-twitter"></i>
		<i className="topIcon fa-brands fa-square-pinterest"></i>
		<i className="topIcon fa-brands fa-square-instagram"></i>
	  </div>
	  <div className="topCenter">
		<ul className="topList">
			<li className="topListItem">
				<Link className='link' to="/">HOME</Link>
			</li>
			<li className="topListItem">
				<Link className='link' to="/about">ABOUT</Link>
			</li>
			<li className="topListItem">
				<Link className='link' to="/contact">CONTACT</Link>
			</li>
			<li className="topListItem">
				<Link className='link' to="/write">WRITE</Link>
			</li>
			<li className="topListItem">
				<Link className='link' to="/logout">{user && "LOGOUT"}</Link>
			</li>
		</ul>
	  </div>
	  <div className="topRight">
		{
			user ? (
		<img
		src="https://plus.unsplash.com/premium_photo-1676977396527-96db41f59b22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="topImg"
		/>
		) : (
			<ul className='topList'>
				<li className='topListItem'>
					<Link className='link' to="/login">LOGIN</Link>
				</li>
				<li className='topListItem'>
					<Link className='link' to="/register">REGISTER</Link>
				</li>
			</ul>
			)
        }
		<i className="fas topSearchIcon fa-search"></i>
	  </div>
	</div>
  )
}
