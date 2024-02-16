import React from 'react'
import {useSelector} from 'react-redux';
import HinhAnhBC from './HinhAnhBC';


function BanChoi() {
    const {danhSachCuoc} = useSelector((state) => state.bauCuaReducer)

  return (
    <div className='row'>
        {danhSachCuoc.map((item) => {
            return(
                <div key={item.ma} className='col-4'>
                    <HinhAnhBC item={item}/>
                </div>
            )
        })}
    </div>
  )
}

export default BanChoi