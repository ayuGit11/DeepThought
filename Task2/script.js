document.addEventListener("DOMContentLoaded", () => {
  const taskContainer = document.getElementById("taskContainer");
  const sidebar = document.getElementById("sidebar");
  const expandSidebarIcon = document.getElementById("expandSidebar");
  const sidebarContent = document.getElementById("sidebarContent");

  // Example JSON data (replace with actual fetched JSON)
  const jsonData = {
    tasks: [
      {
        task_id: 18882,
        task_title: "Explore the world of management",
        assets: [
          {
            asset_id: 18883,
            asset_title: "Technical Project Management",
            asset_description:
              "Story of Alignment\r\nScope of Agility\r\nSpecific Accountable \r\nStaggering Approach\r\n\r\n",
            asset_content: "https://www.youtube.com/embed/TiMRwri1xJ8",
            asset_type: "display_asset",
            asset_content_type: "video",
          },
          {
            asset_id: 18884,
            asset_title: "Threadbuild",
            asset_description:
              "Watch the video and thread build, and jot out key threads while watching that video.",
            asset_content: "",
            asset_type: "input_asset",
            asset_content_type: "threadbuilder",
          },
          {
            asset_id: 18885,
            asset_title: "Structure you pointers ",
            asset_description:
              "Write a 400-500 word article, from your thread. Publish your understanding, and showcase your learning to the entire world.",
            asset_content: "",
            asset_type: "input_asset",
            asset_content_type: "article",
          },
          {
            asset_id: 18886,
            asset_title: "4SA Method",
            asset_description: "To explore more read more",
            asset_content:
              "https://dtthon.deepthought.education/sharer?id=01aa3cff-db8e-8d9d-afc0-1671715937878",
            asset_type: "display_asset",
            asset_content_type: "article",
          },
        ],
      },
    ],
  };

  // Function to render each asset
  function renderAsset(asset) {
    let assetHTML = `
          <div class="asset">
            <h3>${asset.asset_title}</h3>
            <p>${asset.asset_description}</p>
        `;

    if (asset.asset_content_type === "video") {
      assetHTML += `
            <iframe src="${asset.asset_content}" frameborder="0" allowfullscreen></iframe>
          `;
    } else if (
      asset.asset_content_type === "threadbuilder" ||
      asset.asset_content_type === "article"
    ) {
      assetHTML += `
            <textarea placeholder="Enter your ${asset.asset_content_type} here"></textarea>
          `;
    }

    assetHTML += `</div>`;
    return assetHTML;
  }

  // Function to render assets for a given task
  function renderTaskAssets(task) {
    task.assets.forEach((asset) => {
      const assetHTML = renderAsset(asset);
      taskContainer.innerHTML += assetHTML;
    });
  }

  // Render assets for the first task in the JSON data
  renderTaskAssets(jsonData.tasks[0]);

  // Event listener for clicking on the expand icon
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
