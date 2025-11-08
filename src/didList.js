import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function DidList({ didList }) {
    return (
        <>
            <ol>
                {didList.length > 0 ? didList.map((list, index) => {
                    return (
                        <li key={index} className='card mt-2'>
                            <div className='card-body'>
                                <div className='d-flex justify-content-between align-items-center'>
                                    <p className='card-title text-indigo' >{list}</p>
                                </div>
                            </div>
                        </li>
                    );
                }) :  <h2 className='mt-3 p-3' style={{ color: 'red'  ,fontFamily:'Tangerine',fontWeight:'bold',fontSize:'50px'}}>No tasks have been completed.</h2>}
            </ol>
        </>
    );
}
export default DidList;