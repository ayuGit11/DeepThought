document.addEventListener("DOMContentLoaded", () => {
  const sidebar = document.getElementById("sidebar");
  const expandSidebarIcon = document.getElementById("expandSidebar");
  const sidebarContent = document.getElementById("sidebarContent");

  expandSidebarIcon.addEventListener("click", () => {
    if (sidebar.classList.contains("expanded")) {
      // Collapse sidebar
      sidebar.classList.remove("expanded");
      expandSidebarIcon.innerHTML = '<i class="fa-solid fa-arrow-right"></i>';
      sidebarContent.innerHTML = "<button>1</button>";
    } else {
      // Expand sidebar
      sidebar.classList.add("expanded");
      expandSidebarIcon.innerHTML = '<i class="fa-solid fa-arrow-left"></i>';
      sidebarContent.innerHTML = `
          <ul>
          <li><h4>Explore the World of management</h4></li>
            <li>Technical Project Management</li>
            <li>Thread build</li>
            <li>Structure you pointers</li>
            <li>4SA Method</li>
          </ul>
        `;
    }
  });
});
