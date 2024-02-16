import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


function XucXac() {
  const { xucXac, daDatCuoc } = useSelector((state) => {
    const xucXac = state.bauCuaReducer.xucXac;
    const daDatCuoc = state.bauCuaReducer.danhSachCuoc.some((item) => {
      return (item.diemCuoc > 0)
    })
    return {xucXac, daDatCuoc};
  })

  const dispatch = useDispatch()

  const xocDia = () => {
    dispatch({type: "baucua/xoc"})
  }

  return (
    <div className='h-100 d-flex flex-column justify-content-center align-items-center'>
      {xucXac.map((item) => {
        const imgSrc = `./img/${item}.png`
        
        return(
        <div className="mt-3">
          <img src={imgSrc} style={{width: 70}} alt="" />
        </div>
        )
      })}

      <button className='btn btn-success ps-5 pe-5 mt-5 pt-3 pb-3'
      style={{fontSize: 25}}
      disabled={!daDatCuoc}
      onClick={xocDia}>
        Xóc
      </button>
    </div>
  )
}

export default XucXac