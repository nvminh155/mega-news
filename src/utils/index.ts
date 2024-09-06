export function capitalizeTitle(title: string): string {
    return title
      .toLowerCase() // Chuyển toàn bộ chuỗi thành chữ thường
      .split(" ") // Tách các từ trong chuỗi thành mảng
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Viết hoa chữ cái đầu của mỗi từ
      .join(" "); // Ghép lại thành chuỗi
  }
