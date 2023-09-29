function updateRealTime() {
    const currentDate = new Date();
    const day = String(currentDate.getDate()).padStart(2, '0');
    const month = String(currentDate.getMonth() + 1).padStart(2, '0');
    const year = currentDate.getFullYear();
  
    const timeElement = document.querySelector(".day_new");
    timeElement.textContent = `${day}/${month}/${year}`;
  
    setTimeout(updateRealTime, 1000); // Cập nhật thời gian mỗi giây
  }
  
  // Gọi hàm để bắt đầu cập nhật thời gian
  updateRealTime();