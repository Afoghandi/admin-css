import './product.css';
import { Link } from 'react-router-dom';
import Chart from '../../components/chart/Chart';
import { productData } from '../../DummyData';
import { Publish } from '@material-ui/icons';

export default function Product() {
	return (
		<div className='product'>
			<div className='productTitleContaner'>
				<h1 className='productTitle'>Product</h1>
				<Link to='/newProduct'>
					<button className='productAddButton'>Create</button>
				</Link>
			</div>
			<div className='productTop'>
				<div className='productTopLeft'>
					<Chart data={productData} dataKey='Sales' title='Sales Performance' />
				</div>
				<div className='productTopRight'>
					<div className='productInfoTop'>
						<img
							src='https://images.pexels.com/photos/9528216/pexels-photo-9528216.jpeg?auto=compress&cs=tinysrgb&w=1600'
							alt=''
							className='productInfoImg'
						/>
						<span className='productName'>Apple Airpods</span>
					</div>
					<div className='productInfoBottom'>
						<div className='productInfoItem'>
							<span className='productInfoKey'>id:</span>
							<span className='productInfoValue'>456</span>
						</div>
						<div className='productInfoItem'>
							<span className='productInfoKey'>sales:</span>
							<span className='productInfoValue'>4565</span>
						</div>
						<div className='productInfoItem'>
							<span className='productInfoKey'>Active:</span>
							<span className='productInfoValue'>yes</span>
						</div>
						<div className='productInfoItem'>
							<span className='productInfoKey'>in stock:</span>
							<span className='productInfoValue'>no</span>
						</div>
					</div>
				</div>
			</div>
			<div className='productBottom'>
				<form className='productForm'>
					<div className='productFormLeft'>
						<label>Product Name</label>
						<input type='text' placeholder='Apple Airpod' />
						<label>In Stock</label>
						<select name='inStock' id='idStock'>
							<option value='yes'>Yes</option>
							<option value='no'>No</option>
						</select>
						<label>Active</label>
						<select name='active' id='active'>
							<option value='yes'>Yes</option>
							<option value='no'>No</option>
						</select>
					</div>
					<div className='productFormRight'>
						<div className='productUpload'>
							<img
								src='https://images.pexels.com/photos/9528216/pexels-photo-9528216.jpeg?auto=compress&cs=tinysrgb&w=1600'
								alt=''
								className='productUploadImg'
							/>
							<label htmlFor='file'>
								<Publish />
							</label>
							<input type='file' id='file' style={{ display: 'none' }} />
						</div>
						<button className='productButton'>Update</button>
					</div>
				</form>
			</div>
		</div>
	);
}
