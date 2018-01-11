$(document).ready(function(){
  // all, ai, ad, sa, in
	$('#all').click(function(){
		$('#grid').isotope({ filter: '*' });
		toggleoff($('#all'));
		toggleoff($('#ai'));
		toggleoff($('#ad'));
		toggleoff($('#sa'));
		toggleoff($('#in'));
		toggleon($(this));
		effect($('#all'), $('#ai'), $('#ad'), $('#sa'), $('#in'));
	});

	$('#ai').click(function(){
		$('#grid').isotope({ filter: '.ai' })
		toggleoff($('#all'));
		toggleoff($('#ai'));
		toggleoff($('#ad'));
		toggleoff($('#sa'));
		toggleoff($('#in'));
		toggleon($(this));
		effect($('#all'), $('#ai'), $('#ad'), $('#sa'), $('#in'));
	});

	$('#ad').click(function(){
		$('#grid').isotope({ filter: '.ad' })
		toggleoff($('#all'));
		toggleoff($('#ai'));
		toggleoff($('#ad'));
		toggleoff($('#sa'));
		toggleoff($('#in'));
		toggleon($(this));
		effect($('#all'), $('#ai'), $('#ad'), $('#sa'), $('#in'));
	});

	$('#sa').click(function(){
		$('#grid').isotope({ filter: '.sa' })
		toggleoff($('#all'));
		toggleoff($('#ai'));
		toggleoff($('#ad'));
		toggleoff($('#sa'));
		toggleoff($('#in'));
		toggleon($(this));
		effect($('#all'), $('#ai'), $('#ad'), $('#sa'), $('#in'));
	});
	$('#in').click(function(){
		$('#grid').isotope({ filter: '.in' })
		toggleoff($('#all'));
		toggleoff($('#ai'));
		toggleoff($('#ad'));
		toggleoff($('#sa'));
		toggleoff($('#in'));
		toggleon($(this));
		effect($('#all'), $('#ai'), $('#ad'), $('#sa'), $('#in'));
	});


});

function toggleon(x){
	x.removeClass('not-active-button');
	x.addClass('active-button');
}

function toggleoff(x){
	x.removeClass('active-button');
	x.addClass('not-active-button');
}

function effect(aa, bb, cc, dd){
	// var all = table + ' ' + a;
	var work_header = '#main-table .work-header';
	var work_entry = '#main-table .work-entry';
	var school_header = '#main-table .school-header';
	var school_entry = '#main-table .school-entry';
	var personal_header = '#main-table .personal-header';
	var personal_entry = '#main-table .personal-entry';

	if (aa.hasClass('active-button')) {
		$(work_header).show();
		$(work_entry).show();
		$(school_header).show();
		$(school_entry).show();
		$(personal_header).show();
		$(personal_entry).show();
	}
	else{
		$(work_header).hide();
		$(work_entry).hide();
		$(school_header).hide();
		$(school_entry).hide();
		$(personal_header).hide();
		$(personal_entry).hide();
		if(bb.hasClass('active-button')){
			$(work_header).show();
			$(work_entry).show();
		}
		if(cc.hasClass('active-button')){
			$(school_header).show();
			$(school_entry).show();
		}
		if(dd.hasClass('active-button')){
			$(personal_header).show();
			$(personal_entry).show();
		}
	}
}
