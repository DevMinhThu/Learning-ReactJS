/* eslint-disable react-hooks/rules-of-hooks */
const { override, useBabelRc } = require("customize-cra");

module.exports = override(useBabelRc());

/* 
    ============== FLOW ==============
    - Khi chạy dự án (yarn start) => câu lệnh: react-app-rewired start sẽ chạy.
    - Sau đó nó sẽ đọc file "config-overrides.js" => nếu có cấu hình webpack mk tự config thì nó sẽ ghi đè cấu hình webpack của create-react-app mà mình tạo dự án ban đầu. (create-react-app webpack của tk này sẽ bị ẩn đi trong dự án)
    - Trong file "config-overrides.js" mình có sử dụng tk override của thư viện "customize-cra" => thì tk "override" sẽ trả đúng webpack mà mình tạo dự án ban đầu từ create-react-app. Nếu cần ghi đè config thì viết vào trong override()
*/
