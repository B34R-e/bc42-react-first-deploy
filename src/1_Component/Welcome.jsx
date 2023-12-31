// Vì JSX bản chất là JavaScript nên có một số cú pháp trong html bị thay đổi
// - class => className
// - for => htmlFor
// - Các thuộc tính ở dạng snake-case sẽ được chuyển thành camelCase
// tab-index: tabIndex,...

import './welcome.css';

function Welcome(){
    return(
        <div className="title">
            <h1>Hello ReactJs</h1>
        </div>
    );
}

// Ngoài ra ta có thể tạo component bằng class, tuy nhiên hiện nay cách này khá ít được sử dụng
// import React from "react";
// class Welcome extends React.Component{
//     render(){
//         return (
//             <div>
//                 <h1>Hello Reactjs</h1>
//             </div>
//         )
//     }
// }

export default Welcome;