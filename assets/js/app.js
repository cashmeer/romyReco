$(document).ready(function() {
  var tabItem;
  tabItem = $('.tabs li');
  return tabItem.on('click', function(e) {
    var tab;
    e.preventDefault();
    tabItem.removeClass('active');
    tab = e.currentTarget.dataset.section;
    $('.content-tab.main').removeClass('main');
    $('.content-tab.' + tab).addClass('main');
    return $(this).addClass('active');
  });
});
