/*
    Assignment 05
*/

$(document).ready(function () {
    const contentList = $("#content-item-list");

    // Defining ContentItem objects
    const contentItems = [
      new ContentItem(0, "Sidhu Moosewala", "A young well-known Punjabi boy from a small town of Punjab, India done his work so well in music industry that Hollywood actors want to do collaboration with him.Unfortunatelly, group of gangsters attacked him and he died in hin 20's", "Category: Singer and Actor"),
      new ContentItem(1, "Bhagwant Singh Maan", "Bhagwant Maan, now, is Cheif Minister  of Punjab State in India. But, initailly made his space in the punabi movie industry as a comedian. Then he persued his career in the industry as a singer and actor.", "Category: Singer, Actor and Politician"),
      new ContentItem(2, "Milkha Singh", "He is the only athlete in punjab who has numerous Worlds Records on his name and who was also invites by ministery of Punjab, Pakistan to run even after partition of both countries.", "Category:Athlete"),
      new ContentItem(3, "Manmohan Singh", "He is the only sikh Ex Prime Minister of India who had ruled over 10-15 years. He was very kind and generous to people during his charge.", "Category: Politician"),
      new ContentItem(4, "Diljit Dosanjh", "Most famous Punjabi singer of the time who also did debut as a actor in Hollywood. He is the only singer who took Punjabi music industry to next level.", "Category: Singer and Actors."),
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




