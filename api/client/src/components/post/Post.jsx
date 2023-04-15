import './post.css'
import { Link } from 'react-router-dom'

export default function Post({post}) {
  return (
	<div className='post'>
		{post.photo && (
			<img src="https://images.unsplash.com/photo-1646624807990-18ad54729bbd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80" alt="" className="postImg"
			/>
		)}
	  
	  <div className="postInfo">
		<div className="postCats">
			{post.categories.map((c) => (
			  <span className="postCat">{c.name}</span>
			))}
		</div>

		<Link to={`/post/${post._id}`} className='link'>
		<span className="postTitle">{ post.title}</span>
		</Link>


		
		<hr />
		<span className="postDate">{new Date(post.createdAt).toDateString()} </span>
	  </div>
	  <p className="postDesc">
		{}
	  </p>
	</div>
  )
}
