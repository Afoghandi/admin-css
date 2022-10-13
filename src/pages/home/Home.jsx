import Chart from '../../components/chart/Chart';
import FeauturedInfo from '../featuredInfo/FeauturedInfo';
import './home.css';
import { userData } from '../../DummyData';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';
export default function Home() {
	return (
		<div className='home'>
			<FeauturedInfo />
			<Chart
				data={userData}
				title='User Analytics'
				grid
				dataKey='Active User'
			/>
			<div className='homeWidget'>
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
}
