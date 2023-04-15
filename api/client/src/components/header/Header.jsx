import './header.css';

export default function Header() {
  return (
	<div className='header'>
	  <div className="headerTitles">
		<span className="headerTitleSm">React & Node</span>
		<span className="headerTitleLg">Blog</span>
	  </div>
	  <img src="https://plus.unsplash.com/premium_photo-1676977396527-96db41f59b22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" alt="" className="headerImg" />
	</div>
  )
}
