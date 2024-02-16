// Setup state cho bài tập Bầu Cua

// Khai báo giá trị khởi tạo của state
const initialState = {
    tongDiemCuoc: 500,
    danhSachCuoc: [
        {ma: "bau", diemCuoc: 0},
        {ma: "cua", diemCuoc: 0},
        {ma: "tom", diemCuoc: 0},
        {ma: "ca", diemCuoc: 0},
        {ma: "nai", diemCuoc: 0},
        {ma: "ga", diemCuoc: 0},
    ],
    xucXac: ["bau", "bau", "bau"],
}

const mangXucXac = ['bau', 'cua', 'tom', 'ca', 'ga', 'nai']

function bauCuaReducer(state = initialState, action){
    switch(action.type){
        case "baucua/tang_cuoc":{
            let tongDiemCuocMoi = state.tongDiemCuoc;
            const danhSachCuocMoi = state.danhSachCuoc.map((item) => {
                if(item.ma == action.payload && state.tongDiemCuoc > 0){
                    const diemCuocMoi = item.diemCuoc + 100;
                    tongDiemCuocMoi -= 100;
                    return {...item, diemCuoc: diemCuocMoi};
                }
                return item;
            })
            return {...state, danhSachCuoc: danhSachCuocMoi, tongDiemCuoc: tongDiemCuocMoi};
        }
        case "baucua/giam_cuoc":{
            let tongDiemCuocMoi = state.tongDiemCuoc;
            const danhSachCuocMoi = state.danhSachCuoc.map((item) => {
                if(item.ma == action.payload && item.diemCuoc > 0){
                    const diemCuocMoi = item.diemCuoc - 100;
                    tongDiemCuocMoi += 100;
                    return {...item, diemCuoc: diemCuocMoi};
                }
                return item;
            })
            return {...state, danhSachCuoc: danhSachCuocMoi, tongDiemCuoc: tongDiemCuocMoi};
        }
        case "baucua/xoc":{
            // B1: random ra 3 xúc xắc mới
            const xucXac = state.xucXac.map(() => {
                // random 0 -> 5: Math.random() * (max - min) + min
                const index = Math.floor(Math.random() * 6);
                console.log(mangXucXac[index]);
                return mangXucXac[index];
            })
            let tongDiemCuocMoi = state.tongDiemCuoc;
            const danhSachCuocMoi = state.danhSachCuoc.map((item) => {
                if(item.diemCuoc > 0){
                    if(xucXac.includes(item.ma)){
                        tongDiemCuocMoi += item.diemCuoc;
                    }
                }
                return {...item, diemCuoc: 0}
            })
            
            return {...state, xucXac: xucXac, tongDiemCuoc: tongDiemCuocMoi, danhSachCuoc: danhSachCuocMoi};
        }
        default:
            return state;
    }
}

export default bauCuaReducer;