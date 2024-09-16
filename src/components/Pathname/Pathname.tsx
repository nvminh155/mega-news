import { useLocation } from "react-router-dom";

export const Pathname = () => {
  const location = useLocation();
  const path = "Home" + location.pathname; // Thêm Home vào trước pathname

  // Tách đường dẫn theo dấu "/"
  const parts = path.split("/").filter(Boolean); // Xóa bỏ các chuỗi rỗng

  // Lấy phần cuối cùng (ví dụ: "index")
  const lastPart = parts.pop();

  return (
    <p>
      <strong>
        {parts.join(" > ")} {parts.length > 0 ? ">" : ""}&nbsp;
      </strong>
      {lastPart}
    </p>
  );
};
