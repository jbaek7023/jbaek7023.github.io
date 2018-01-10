// $('#grid').isotope({
//   layoutMode: 'cellsByRow',
//   itemSelector: '.grid-item',
//   cellsByRow: {
//     columnWidth: '.grid-sizer',
//     rowHeight: '.grid-sizer',
//   }
// });
$('#grid').isotope({
  layoutMode: 'fitRows',
  itemSelector: '.grid-item',
  percentPosition: true,
  layoutMode: 'fitRows',
  itemSelector: '.grid-item',
  percentPosition: true,
  fitRows: {
    gutter: '.gutter-sizer'
  }
});

// $('.grid').isotope({
//   itemSelector: '.grid-item',
//   percentPosition: true,
//   masonry: {
//     columnWidth: '.grid-sizer'
//   }
// });
