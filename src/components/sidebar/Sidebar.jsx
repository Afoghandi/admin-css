import React from 'react';
import './sidebar.css';
import {
	LineStyle,
	Timeline,
	TrendingUp,
	PermIdentityOutlined,
	StorefrontOutlined,
	AttachMoney,
	BarChart,
	EmailOutlined,
	DynamicFeed,
	ChatBubbleOutline,
	Report,
	WorkOutline,
} from '@material-ui/icons';

export default function Sidebar() {
	return (
		<div className='sidebar'>
			<div className='sidebarWrapper'>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Dashboard</h3>
					<ul className='sidebarList'>
						<li className='sidebarListItem active'>
							<LineStyle className='sidebarIcon' />
							Home
						</li>
						<li className='sidebarListItem'>
							<Timeline className='sidebarIcon' />
							Analytics
						</li>
						<li className='sidebarListItem'>
							<TrendingUp className='sidebarIcon' />
							Sales
						</li>
					</ul>
				</div>

				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Quick Menu</h3>
					<ul className='sidebarList'>
						<li className='sidebarListItem '>
							<PermIdentityOutlined className='sidebarIcon' />
							Users
						</li>
						<li className='sidebarListItem'>
							<StorefrontOutlined className='sidebarIcon' />
							Products
						</li>
						<li className='sidebarListItem'>
							<AttachMoney className='sidebarIcon' />
							Transactions
						</li>
						<li className='sidebarListItem'>
							<BarChart className='sidebarIcon' />
							Reports
						</li>
					</ul>
				</div>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Notifications</h3>
					<ul className='sidebarList'>
						<li className='sidebarListItem active'>
							<EmailOutlined className='sidebarIcon' />
							Home
						</li>
						<li className='sidebarListItem'>
							<DynamicFeed className='sidebarIcon' />
							Analytics
						</li>
						<li className='sidebarListItem'>
							<ChatBubbleOutline className='sidebarIcon' />
							Sales
						</li>
					</ul>
				</div>
				<div className='sidebarMenu'>
					<h3 className='sidebarTitle'>Staff</h3>
					<ul className='sidebarList'>
						<li className='sidebarListItem'>
							<WorkOutline className='sidebarIcon' />
							Home
						</li>
						<li className='sidebarListItem'>
							<Timeline className='sidebarIcon' />
							Analytics
						</li>
						<li className='sidebarListItem'>
							<Report className='sidebarIcon' />
							Sales
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
}
