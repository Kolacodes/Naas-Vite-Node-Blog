import { useEffect, useState } from 'react';
import './sidebar.css';
import axios from 'axios';

export default function Sidebar() {
	const [ cats, setCats ] = useState([]);

	useEffect(() => {
		const getCats = async () =>
		{
			const res = await axios.get("http://localhost:5000/api/categories")
			setCats(res.data)
		}
		getCats()
	}, [])
  return (
	<div className='sidebar'>
	  <div className="sidebarItem">
		<span className="sidebarTitle">ABOUT ME</span>
		<img src="https://plus.unsplash.com/premium_photo-1679987344430-655e6581b33f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80" alt="" className="sidebarImg" />
		<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam cumque laboriosam temporibus repellendus error ab fugiat, quasi eum, et nulla doloribus perspiciatis incidunt quae at ex enim autem? Ratione necessitatibus ex dolorum sunt corrupti beatae id dolores, eveniet aspernatur animi eos? Quis, eius? Ipsum facere rem nobis, nisi iure eveniet!</p>
	  </div>
	  <div className="sidebarItem">
		<span className="sidebarTitle">CATEGORIES</span>
		<ul className="sidebarList">
			{cats.map((c) => (
				<li className="sidebarListItem">{c.name}</li>
			))}
		</ul>
	  </div>
	  <div className="sidebarItem">
		<span className="sidebarTitle">FOLLOW US</span>
	  </div>
	  <div className="sidebarSocial">
	  	<i className="sidebarIcon fa-brands fa-facebook"></i>
		<i className="sidebarIcon fa-brands fa-square-twitter"></i>
		<i className="sidebarIcon fa-brands fa-square-pinterest"></i>
		<i className="sidebarIcon fa-brands fa-square-instagram"></i>
	  </div>
	</div>
  )
}
