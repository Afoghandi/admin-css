import React from 'react';
import './topbar.css';
import { NotificationsNone, Language, Settings } from '@material-ui/icons';

export default function Topbar() {
	return (
		<div className='topbar'>
			<div className='topbarWrapper'>
				<div className='topLeft'>
					<span className='logo'>RafaAdmin</span>
				</div>
				<div className='topRight'>
					<div className='topbarIconContainer'>
						<NotificationsNone />
						<span className='topIconBadge'>2</span>
					</div>
					<div className='topbarIconContainer'>
						<Language />
						<span className='topIconBadge'>2</span>
					</div>{' '}
					<div className='topbarIconContainer'>
						<Settings />
					</div>
					<img
						src='https://media.istockphoto.com/photos/young-pensive-man-looking-away-picture-id1158245369?k=20&m=1158245369&s=612x612&w=0&h=0Uu_YlyW1DRn_UH9IKoUC4ADyKkod4UyeeeHG053csc='
						alt=''
						className='topAvatar'
					/>
				</div>
			</div>
		</div>
	);
}
