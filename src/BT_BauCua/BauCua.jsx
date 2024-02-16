import React from "react";
import BanChoi from "./BanChoi";
import XucXac from "./XucXac";
import { useSelector } from "react-redux";

function BauCua() {
    const { tongDiemCuoc } = useSelector((state) => state.bauCuaReducer)

  return (
    <div style={{minHeight: "100vh"}} className="container-fluid bg-dark">
      <h1 className="display-4 text-center text-danger">
        Bầu Cua Vui Vẻ Ngày Tết
      </h1>

      {/* Hiển thị điểm cược */}
      <div className="row">
        <div className="col-12 text-center">
          <div className="text-center mt-5">
            <span
              className="p-3 bg-warning"
              style={{
                fontSize: 25,
                borderRadius: 10,
                border: "5px solid rgb(0, 0, 0)",
              }}
            >
              Tiền thưởng: <span className="text-success">{tongDiemCuoc} điểm</span>
            </span>
          </div>
        </div>
      </div>

      <div className="row mt-5">
        {/* Hiển thị bàn chơi */}
            <div className="col-8">
                <BanChoi/>
            </div>
        {/* Hiển thị xúc xắc */}
            <div className="col-4">
                <XucXac/>
            </div>
      </div>
    </div>
  );
}

export default BauCua;
