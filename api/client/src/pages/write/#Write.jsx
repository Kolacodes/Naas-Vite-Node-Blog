import './write.css'

export default function Write() {
  return (
	<div className='write'>
		<img
		className='writeImg'
		 src="https://images.unsplash.com/photo-1453872302360-eed3c5f8ff66?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
		 alt=""
		/>
	  <form className="writeForm">
		<div className="writeFormGroup">
			<label htmlFor="fileInput">
				<i className="writeIcon fas fa-plus"></i>
			</label>
			<input type="file" id='fileInput' style={{display:"none"}} />
			<input type="text" placeholder='Title' className='writeInput' autoFocus={true} />
		</div>
		<div className="writeFormGroup">
			<textarea placeholder='tell your story...' type="text" className='writeInput writeText' ></textarea>
		</div>
		<button className='writeSubmit'>Publish</button>
	  </form>
	</div>
  )
}
