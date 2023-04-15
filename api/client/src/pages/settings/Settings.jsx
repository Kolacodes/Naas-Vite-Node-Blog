import './settings.css'
import Sidebar from '../../components/sidebar/Sidebar'

export default function Settings() {
  return (
	<div className='settings'>
		<div className="settingsWrapper">
			<div className="settingsTitle">
				<span className="settingsUpdateTitle">Update Your Account</span>
				<span className="settingsDeleteTitle">Delete Account</span>
			</div>
			<form className="settingsForm">
				<label htmlFor="">Profile Picture</label>
				<div className="settingsPP">
					<img
					 src="https://plus.unsplash.com/premium_photo-1676977396527-96db41f59b22?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
					 alt=""
					 />
					 <label htmlFor="fileInput">
						<i className="settingsPPIcon far fa-user-circle"></i>
					 </label>
					 <input type="file" id='fileInput' style={{display:"none"}} />
				</div>
				<label>Username</label>
					 <input type="text" placeholder='Abu Zayd..' />
					 <label>Email</label>
					 <input type="email" placeholder='abuzayd@gmail.com' />
					 <label>Password</label>
					 <input type="password" />
					 <button className="settingsSubmit">Submit</button>
			</form>
		</div>
		<Sidebar/>
	</div>
  )
}
