// $('#grid').isotope({
//   layoutMode: 'cellsByRow',
//   itemSelector: '.grid-item',
//   cellsByRow: {
//     columnWidth: '.grid-sizer',
//     rowHeight: '.grid-sizer',
//   }
// });
var projects = {
    "projects": [{
        "title": "Book Swap",
        "description": "Book Swap Webpage for Georgia Tech Student",
        "tags": ["ai", "ad", "sa", "in"],
        "image": "http://lorempixel.com/output/people-q-c-600-200-1.jpg"
    }, {
			"title": "YEAP Swap",
			"description": "ASDASDASDeorgia Tech Student",
			"tags": ["ai", "sa"],
			"image": "http://lorempixel.com/output/people-q-c-600-200-1.jpg"
    }],
    "display": function() {
        projects.projects.forEach(function(project) {
					var tags = project.tags;
					var className = 'grid-item element-item';
          var divg = $('<p>');
					tags.forEach(function(tag) {
						className += " "+tag;
            divg.append($("<a>").attr({"href":"#", "class":"btn"}).text(tag))
					})

					$('#grid').append(
            $('<div>', {class: className}).append(
  						$("<div>").attr("class","thumbnail").append(
  					    $("<img>").attr("src",project.image)
  					  ).append(
  					    $("<div>").attr("class","caption")
                  .append(
  					      $("<h3>").text(project.title)
                  )
                  .append(
                    $('<p>').text(project.description)
                  )
                  .append(
                    divg
  				        )
					    )
            )
				  );

        }
      );

    }
};

//function calls
projects.display();

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
