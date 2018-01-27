var projectArray = [
  {
    "title": "Stylee",
    "description": "Book Swap Webpage for Georgia Tech Student",
    "depthDescription": "Facial keypoints include points around the eyes, nose, and mouth on any face and are used in many applications, from facial tracking to emotion recognitionFacial keypoints include points around the eyes, nose, and mouth on any face and are used in many applications, from facial tracking to emotion recognitionFacial keypoints include points around the eyes, nose, and mouth on any face and are used in many applications, from facial tracking to emotion recognitionFacial keypoints include points around the eyes, nose, and mouth on any face and are used in many applications, from facial tracking to emotion recognitionFacial keypoints include points around the eyes, nose, and mouth on any face and are used in many applications, from facial tracking to emotion recognition. Your completed code should be able to take in any image containing faces and identify the location of each face and their facial keypoints, as shown below.",
    "tags": ["ad"],
    "image": "img/stylee.jpg",
    "stacks": ["React Native", "Django RESTful Framework"],
    "contributor": ["John Baek (Me)"],
    "time": 201801,
    "srcCode" : 'https://github.com/jbaek7023/LC2200Processor-1'
  }, {
    "title": "Sudoku Solver",
    "description": "A simple AI using Constraint Propagation and Search to solve Sudoku puzzles.",
    "depthDescription": "Facial keypoints include points around the eyes, nose, and mouth on any face and are used in many applications, from facial tracking to emotion recognition. Your completed code should be able to take in any image containing faces and identify the location of each face and their facial keypoints, as shown below.",
    "tags": ["ai"],
    "image": "img/sudoku.jpg",
    "stacks": ["Python"],
    "contributor": ["John Baek (Me)"],
    "time": 201700,
    "srcCode" : 'https://github.com/jbaek7023/SudokuGameSolver'
  }, {
    "title": "Isolation Game Play Agent",
    "description": "ASDASDASDeorgia Tech Student",
    "depthDescription": "Facial keypoints include points around the eyes, nose, and mouth on any face and are used in many applications, from facial tracking to emotion recognition. Your completed code should be able to take in any image containing faces and identify the location of each face and their facial keypoints, as shown below.",
    "tags": ["ai"],
    "image": "img/isolation.jpg",
    "stacks": ["Java", "C++"],
    "contributor": ["John Baek (Me)"],
    "time": 201700,
    "srcCode" : 'https://github.com/jbaek7023/LC2200Processor-1'
  }, {
    "title": "YEAP Swap",
    "description": "ASDASDASDeorgia Tech Student",
    "depthDescription": "Facial keypoints include points around the eyes, nose, and mouth on any face and are used in many applications, from facial tracking to emotion recognition. Your completed code should be able to take in any image containing faces and identify the location of each face and their facial keypoints, as shown below.",
    "tags": ["ad"],
    "image": "http://lorempixel.com/output/people-q-c-600-200-1.jpg",
    "stacks": ["Java", "C++"],
    "contributor": ["John Baek (Me)"],
    "time": 201700,
    "srcCode" : 'https://github.com/jbaek7023/LC2200Processor-1'
  }
]

$.fn.preload = function() {
    this.each(function(){
        $('<img/>')[0].src = this;
    });
}
var imageArray = projectArray.map((project) => { return project.image });
// Preload image data
$(imageArray).preload();

var sortedProjectArray = projectArray.sort(function(a, b) {
  if(a.time > b.time) { return -1 }
  if(a.time < b.time) { return 1 }
  return 0;
}),

projects = {
    "projects": sortedProjectArray,
    "display": function() {
        projects.projects.forEach(function(project) {
					var tags = project.tags;
					var className = 'grid-item element-item';
          var divg = $('<p>');
          divg.text("Tags: ")
					tags.forEach(function(tag, index) {
						className += " "+tag;
            var tagText = "";
            if(index==0) {
              tagText = ""
            } else {
              tagText = ", "
            }
            if(tag=="ai") {
              tagText += "AI"
            } else if(tag=="ad") {
              tagText += "App Development"
            } else if(tag=="sa") {
              tagText += "Systems"
            } else if(tag=="in") {
              tagText += "Networking"
            }
            divg.append($("<span>").append($("<a>").attr({"href":"#", "class":"btn"}).text(tagText).on( "click", function(e) {
              var domName = '#'+tag;
              ($(domName)).click();
              e.stopPropagation();
            })))
					})

					$('#grid').append(
            $('<div>', {class: className}).on( "click", function() {
              var techStack = ""
              project.stacks.forEach(function(stack, index) {
                if(index==0) {techStack = stack;}
                else { techStack += ", " + stack; }
              });
              var contributor ="";
              project.contributor.forEach(function(con, index) {
                if(index==0) {contributor = con;}
                else { contributor += ", " + con; }
              });
              var content = `
                <img src="${project.image}"/>
                <h4 style="margin-top:17px; margin-left: 8px;">Abstract</h4>
                <p style="margin-top:10px; margin-left: 8px;">${project.depthDescription}</p>
                <p style="font-weight:bold; margin-left: 8px;">Source Code: <a class="git-style" href="${project.srcCode}" target="_blank"><i class="fa fa-github fa-fw" style="font-size: 30px;"></i></a></p>
                <p style="font-weight:bold; margin-left: 8px;">Tech Stacks: <span style="font-weight:normal">${techStack}</span></p>
                <p style="font-weight:bold; margin-left: 8px;">Contributor: <span style="font-weight:normal">${contributor}</span></p>
                <p style="font-weight:bold; margin-left: 8px;">Year: <span style="font-weight:normal">${parseInt(project.time/100)}</span></p>
              `;
              var width = $(window).width();
              boxWidth = '50%';
              if(width < 993) {
                boxWidth = '90%';
              }

              $.confirm({
                theme: 'bootstrap',
                closeIcon: true,
                boxWidth: boxWidth,
                useBootstrap: false,
                backgroundDismiss: 'buttonName',
                content: content,
                title: project.title,
                maxHeight: 200,
                smoothContent: true
              });
            })
              .append(
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

// add DOMS which contains project data
projects.display();

// set the 'fitRows' layout mode
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
