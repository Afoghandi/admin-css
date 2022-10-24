import './user.css';
import { Link, Navigate } from 'react-router-dom';
import {
	PermIdentity,
	CalendarToday,
	PhoneAndroid,
	MailOutline,
	LocationSearching,
	Publish,
} from '@material-ui/icons';

export default function User() {
	return (
		<div className='user'>
			<div className='userTitleContainer'>
				<h1 className='userTitle'>Edit User</h1>
				<Link to='/newUser'>
					<button className='userAddButton'>Create</button>
				</Link>
			</div>
			<div className='userContainer'>
				<div className='userShow'>
					<div className='userShowTop'>
						<img
							src='https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
							alt=''
							className='userShowImg'
						/>
						<div className='userShowTopTitle'>
							<span className='userShowUsername'>Arya Stark</span>
							<span className='userShowUserTitle'>SoftWare Engineer</span>
						</div>
					</div>
					<div className='userShowBottom'>
						<span className='userShowTitle'>Account Details</span>
						<div className='userShowInfo'>
							<PermIdentity className='userShowIcon' />
							<span className='userShowInfoTitle'>arya999</span>
						</div>
						<div className='userShowInfo'>
							<CalendarToday className='userShowIcon' />
							<span className='userShowInfoTitle'>10.09.2000</span>
						</div>
						<span className='userShowTitle'>Contact Details</span>
						<div className='userShowInfo'>
							<PhoneAndroid className='userShowIcon' />
							<span className='userShowInfoTitle'>+44 0906554 567</span>
						</div>
						<div className='userShowInfo'>
							<MailOutline className='userShowIcon' />
							<span className='userShowInfoTitle'>arya999@gmail.com</span>
						</div>
						<div className='userShowInfo'>
							<LocationSearching className='userShowIcon' />
							<span className='userShowInfoTitle'>London | England</span>
						</div>
					</div>
				</div>
				<div className='userUpdate'>
					<span className='userUpdateTitle'>Edit</span>
					<form action='' className='userUpdateForm'>
						<div className='userUpdateLeft'>
							<div className='userUpdateItem'>
								<label>Username</label>
								<input
									type='text'
									placeholder='arrrya999'
									className='userUpdateInput'
								/>
							</div>
							<div className='userUpdateItem'>
								<label>Full Name</label>
								<input
									type='text'
									placeholder='Arya Stark'
									className='userUpdateInput'
								/>
							</div>
							<div className='userUpdateItem'>
								<label>Email</label>
								<input
									type='text'
									placeholder='arya999@gmail.com'
									className='userUpdateInput'
								/>
							</div>
							<div className='userUpdateItem'>
								<label>Phone</label>
								<input
									type='text'
									placeholder='+44 0906554 567'
									className='userUpdateInput'
								/>
							</div>
							<div className='userUpdateItem'>
								<label>Address</label>
								<input
									type='text'
									placeholder='London | England'
									className='userUpdateInput'
								/>
							</div>
						</div>
						<div className='userUpdateRight'>
							<div className='userUpdateUpload'>
								<img
									src='https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
									alt=''
									className='userUpdateImg'
								/>
								<label htmlFor='file'>
									<Publish className='userUpdateIcon' />{' '}
								</label>
								<input type='file' id='file' style={{ display: 'none' }} />
							</div>
							<button className='userUpdateButton'>Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}
