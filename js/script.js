wow = new WOW({
  boxClass: "wow", // default
  animateClass: "animated", // default
  offset: 0, // default
  mobile: true, // default
  live: true, // default
});
wow.init();

$(document).ready(function () {
  var itemsToShow = 4; // number of items to show initially
  var itemsIncrement = 4; // number of items to show on each load more click
  var $content = $('.content'); // select all the content elements
  var $loadMore = $('#loadMore');

  // hide all the content elements except the first itemsToShow
  $content.slice(itemsToShow).hide();

  // when the "Load More" button is clicked
  $loadMore.on('click', function (e) {
    e.preventDefault();

    // show the next itemsIncrement content elements that are hidden
    $content.slice(itemsToShow, itemsToShow + itemsIncrement).slideDown();

    // update the itemsToShow variable to the new value
    itemsToShow += itemsIncrement;

    // if there are no more hidden content elements, disable the "Load More" button
    if ($content.filter(':hidden').length === 0) {
      $loadMore.text('No more content').addClass('disabled');
    }
  });
});


