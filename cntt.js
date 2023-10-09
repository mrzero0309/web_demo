// function updateRealTime() {
//     const currentDate = new Date();
//     const day = String(currentDate.getDate()).padStart(2, '0');
//     const month = String(currentDate.getMonth() + 1).padStart(2, '0');
//     const year = currentDate.getFullYear();
  
//     const timeElement = document.querySelectorAll(".day_new");
//     timeElement.textContent = `${day}/${month}/${year}`;
//     setTimeout(updateRealTime, 10000); // Cập nhật thời gian mỗi giây
//     console.log(timeElement)
//   }
  
//   // Gọi hàm để bắt đầu cập nhật thời gian
  // updateRealTime();

  // Dark mode 
 
  const themeSlider = document.getElementById('themeSlider');
    const body = document.body;

    // Kiểm tra trạng thái chế độ tối từ localStorage
    let isDarkMode = localStorage.getItem('darkMode') === 'true';

    // Cập nhật trạng thái ban đầu của thanh trượt
    themeSlider.value = isDarkMode ? "1" : "0";

    // Cập nhật giao diện ngay khi trang web được tải lên
    updateTheme();

    // Xử lý sự kiện khi người dùng di chuyển thanh trượt
    themeSlider.addEventListener('input', () => {
      isDarkMode = themeSlider.value === "1";
      localStorage.setItem('darkMode', isDarkMode);
      updateTheme();
    });

    function updateTheme() {
      if (isDarkMode) {
        enableDarkMode();
      } else {
        enableLightMode();
      }
    }
    
    function enableDarkMode(){
      darkBackgound.classList.add('background_dark_mode');
    }
    function enableDarkMode() {
      body.classList.add('dark-mode');
      body.classList.remove('light-mode');
      
      
    }
    
    function enableLightMode() {
      body.classList.remove('dark-mode');
      body.classList.add('light-mode');
      
    }
  