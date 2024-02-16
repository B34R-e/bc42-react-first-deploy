import { configureStore } from "@reduxjs/toolkit";
import countReducer from "./reducersList/countReducer";
import toDoReducer from "./reducersList/toDoReducer";
import bauCuaReducer from "./reducersList/bauCuaReducer"

// Hàm reducer nhận vào 2 tham số: giá trị hiện tại của state và action sau đó return về giá trị state mới. (state, action) => newState
// - Khi hàm reducer chạy lần đầu tiên lúc khởi tạo store, thì giá trị đầu tiên của state là undefined, nên ta cần tạo giá trị mặc định cho state bằng default params
// Thông thường thì state sẽ là một object/array, ta không được thay đổi giá trị trực tiếp của state mà cần tạo ra một object/array mới và return về 

const store = configureStore({
    reducer: {
        countReducer,
        toDoReducer, 
        bauCuaReducer,}
})


// store.subcribe(callBackFunction): Hàm theo dõi sự thay đổi của state, bất cứ khi nào state thay đổi, nó sẽ gọi tới hàm callback 
store.subscribe(() => {
// store.getState(): Hàm dùng để lấy ra state hiện tại của store
console.log('Giá trị state của store', store.getState());
})


// Cách duy nhất để cập nhật state trong store là dùng hàm dispatch để gửi một action
// action là một plain object, có 1 key bắt buộc là type dùng để mô tả ta muốn thay đổi state như thế nào

// store.dispatch({type: 'increment'}); // {count: 1}
// store.dispatch({type: 'increment'}); // {count: 2}
// store.dispatch({type: 'decrement'}); // {count: 1}

export default store;
