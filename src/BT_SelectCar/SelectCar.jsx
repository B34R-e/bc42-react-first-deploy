import React, {useState} from 'react'

function SelectCar() {

    const [carImg, setCarImg] = useState('./img/black-car.jpg')

  return (
    <div className='container-fluid'>
        <div className="row">
            <div className="col-md-8">
                <img src={carImg} alt="" width='100%' height='auto'/>
            </div>
            <div className="col-md-4">
                <div className="d-flex">
                    <ul className="list-group">
                        <li onClick={() => setCarImg('./img/black-car.jpg')} className='list-group-item  d-flex'>
                            <img src="./img/icon-black.jpg" alt="" width='50px'/>
                            <h3 className='ms-2'>Crystal Black</h3>
                        </li>
                        <li onClick={() => setCarImg('./img/steel-car.jpg')} className='list-group-item  d-flex'>
                            <img src="./img/icon-steel.jpg" alt="" width='50px'/>
                            <h3 className='ms-2'>Modern Steel</h3>
                        </li>
                        <li onClick={() => setCarImg('./img/silver-car.jpg')} className='list-group-item  d-flex'>
                            <img src="./img/icon-silver.jpg" alt="" width='50px'/>
                            <h3 className='ms-2'>Lunar Silver</h3>
                        </li>
                        <li onClick={() => setCarImg('./img/red-car.jpg')} className='list-group-item  d-flex'>
                            <img src="./img/icon-red.jpg" alt="" width='50px'/>
                            <h3 className='ms-2'>Rallye Red</h3>
                        </li>
                        

                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SelectCar