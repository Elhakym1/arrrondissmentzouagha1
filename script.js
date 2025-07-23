document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-link");
    const main = document.getElementById("main-content");
  
    async function loadPage(page) {
      try {
        const res = await fetch(`pages/${page}.html`);
        const html = await res.text();
        main.innerHTML = html;
      } catch (e) {
        main.innerHTML = "<p style='color:red; text-align:center;'>خطأ في تحميل الصفحة.</p>";
      }
    }
  
    // تحميل الصفحة الرئيسية فالبداية
    loadPage("home");
  
    // تغيير المحتوى عند الضغط على الروابط
    links.forEach(link => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        links.forEach(l => l.classList.remove("active"));
        link.classList.add("active");
  
        const page = link.getAttribute("data-page");
        loadPage(page);
      });
    });
  });
  