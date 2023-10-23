/*
    Assignment 05
*/

$(document).ready(function () {
    const contentList = $("#content-item-list");

    // Defining ContentItem objects
    const contentItems = [
      new ContentItem(0, "Item 1", "Description 1", "Category 1"),
      new ContentItem(1, "Item 2", "Description 2", "Category 2"),
      new ContentItem(2, "Item 3", "Description 3", "Category 3"),
      new ContentItem(3, "Item 4", "Description 4", "Category 4"),
      new ContentItem(4, "Item 5", "Description 5", "Category 5"),
    ];
  
    // Function to add a ContentItem to the page
    function addContentItem(item) {
      const itemHtml = item.toString();
      contentList.append(itemHtml);
    }
  
    // Applying CSS styles to content item wrappers
    $(".content-item-wrapper").css({
      border: "10px solid #333",
      width: "400px",
      padding: "5px",
      margin: "25px auto",
    });
  
    // Button for a successful update
  $("#update-success").on("click", function () {
    // Updating the second ContentItem successfully 
    contentItems[1].updateContentItem(1, "Updated Name", "Updated Description", "Updated Category");
    // Re-add the updated ContentItem to the page
    contentList.empty(); // Clear the list
    contentItems.forEach(addContentItem);
    $(".content-item-wrapper").css({
      border: "10px solid #333",
      width: "400px",
      padding: "5px",
      margin: "25px auto",
    });
    });

     // Button for an unsuccessful update
  $("#update-unsuccessful").on("click", function () {
    // Try to update a ContentItem with an incorrect ID (unsuccessful)
    contentItems[0].updateContentItem(99, "New Name", "New Description", "New Category");
    // Re-add the original ContentItems to the page (no updates)
    contentList.empty(); // Clear the list
    contentItems.forEach(addContentItem);
    $(".content-item-wrapper").css({
      border: "10px solid #333",
      width: "400px",
      padding: "5px",
      margin: "25px auto",
    });
  });

  contentItems.forEach(addContentItem);
});




