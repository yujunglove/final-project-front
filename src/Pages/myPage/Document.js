import { useEffect } from "react";
import DocumentCSS from '../../components/main/Document.css';

function Document() {
  useEffect(() => {
    const menuItems = document.querySelectorAll(".menu-item");
    const contents = document.querySelectorAll(".content");

    const handleClick = (index) => {
      menuItems.forEach(function (menuItem) {
        menuItem.classList.remove("active");
      });
      menuItems[index].classList.add("active");

      contents.forEach(function (content) {
        content.classList.remove("active");
      });
      contents[index].classList.add("active");
    };

    menuItems.forEach(function (item, index) {
      item.addEventListener("click", function () {
        handleClick(index);
      });
    });

    // Default: Show the first menu and content
    menuItems[0].classList.add("active");
    contents[0].classList.add("active");

    // Cleanup: Remove event listeners when the component is unmounted
    return () => {
      menuItems.forEach(function (item) {
        item.removeEventListener("click", handleClick);
      });
    };
  }, []);

  return (
    <div className={DocumentCSS}>
      <body>
        <div class="document-container">
          <div class="menu-wrapper">
            <div class="menu-item active">휴가 신청</div>
            <div class="menu-item">휴직 신청</div>
            <div class="menu-item">퇴직 신청</div>
          </div>


          <div class="content">
            <form>
            <div class="title">휴가 신청</div>
            <div class="modi0">
                    신청하기
                </div>
              
        <label htmlFor="name" style={{ marginLeft: "40px",padding: "10px", fontSize: "20px" }}>신청인 이름: 김상엽 </label><br/><br/>
    

        <label htmlFor="reason" style={{ marginLeft: "50px", fontSize: "20px" }}>신청사유:</label><br/><br/>

        <textarea id="reason" name="reason" rows="32" cols="95" required style={{ backgroundColor: "lightgray", border: "none",marginLeft: "40px" }}></textarea><br />
      
      </form>  
      <div class="cal">
                    휴가 날짜 :
                </div> 
          </div>



          <div class="content">
          <form>
            <div class="title">휴직 신청</div>
            <div class="modi0">
                    신청하기
                </div>
              
        <label htmlFor="name" style={{ marginLeft: "40px",padding: "10px", fontSize: "20px" }}>신청인 이름: 김상엽 </label><br/><br/>
    

        <label htmlFor="reason" style={{ marginLeft: "50px", fontSize: "20px" }}>신청사유:</label><br/><br/>

        <textarea id="reason" name="reason" rows="32" cols="95" required style={{ backgroundColor: "lightgray", border: "none",marginLeft: "40px" }}></textarea><br />
      
      </form> 
      <div class="cal">
                    휴직 날짜 :
                </div> 
          </div>


          <div class="content">
          <form>
            <div class="title">퇴직 신청</div>
            <div class="modi0">
                    신청하기
                </div>
              
        <label htmlFor="name" style={{ marginLeft: "40px",padding: "10px", fontSize: "20px" }}>신청인 이름: 김상엽 </label><br/><br/>
    

        <label htmlFor="reason" style={{ marginLeft: "50px", fontSize: "20px" }}>신청사유:</label><br/><br/>

        <textarea id="reason" name="reason" rows="32" cols="95" required style={{ backgroundColor: "lightgray", border: "none",marginLeft: "40px" }}></textarea><br />
      
      </form>   
             <div class="cal">
                    퇴직 날짜 :
                </div>
          </div>
        </div>


      </body>
    </div>
  );
}

export default Document;
