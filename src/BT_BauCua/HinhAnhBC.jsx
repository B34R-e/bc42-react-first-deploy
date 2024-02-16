import React from "react";
import { useDispatch, useSelector } from "react-redux";

function HinhAnhBC({item}) {
    const imgSrc = `./img/${item.ma}.png`;

    const {tongDiemCuoc} = useSelector((state) => state.bauCuaReducer)

    const dispatch = useDispatch();

    const tangCuoc = () => {
        // Truyền action type và mã con vật muốn tăng cược
        dispatch({type: "baucua/tang_cuoc", payload: item.ma})
    }

    const giamCuoc = () => {
        // Truyền action type và mã con vật muốn giảm cược
        dispatch({type: "baucua/giam_cuoc", payload: item.ma})
    }

  return (
    <div className="text-center mt-5">
      <img
        src={imgSrc}
        alt=""
        style={{ width: 250 }}
      />
      <br />
      <br />
      <span
        className="p-3 pl-5 pr-5 bg-warning mt-2"
        style={{ borderRadius: "5%", fontSize: 25, }}
      >
        Cược:
        <button className="btn btn-success ml-2 mr-2" style={{ fontSize: 20 }}
        onClick={tangCuoc}
        disabled={tongDiemCuoc == 0}>
            +
        </button>
        <span className="text-success"> {item.diemCuoc} </span>
        <button className="btn btn-success ml-2 mr-2" style={{ fontSize: 20 }}
        onClick={giamCuoc}
        disabled={item.diemCuoc == 0}>
          -
        </button>
      </span>
    </div>
  );
}

export default HinhAnhBC;
