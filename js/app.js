var images = {
	man: {
		heading: 'Man Image',
		description: 'Image of a man.',
		path: 'res/images/man.jpg'
	},
	wizard: {
		heading: 'Wizard Image',
		description: 'Image of a wizard.',
		path: 'res/images/wizard.jpg'
	},
	beast: {
		heading: 'Beast Image',
		description: 'Image of a beast.',
		path: 'res/images/beast.jpg'
	}
};

$(document).ready(function() 
{
	$(".treeview-menu").hide();

	$(".content .sidemenu .subnavigation li span.arrow").click(function()
	{
		var target_parent_li = $(this).parent('li');
		var target_ul = $(this).siblings('ul');
		
		if(target_ul.is(':visible'))
		{
			target_ul.slideUp();
			target_parent_li.removeClass("expanded");
		}			
		else 
		{
			target_ul.slideDown();
			target_parent_li.addClass("expanded");
		}
	});

	$(".content .sidemenu .subnavigation li a").click(function()
	{
		var target_parent_li = $(this).parent('li');
		var target_ul = $(this).siblings('ul');
		
		if(target_ul.is(':visible'))
		{
			target_ul.slideUp();
			target_parent_li.removeClass("expanded");
		}			
		else 
		{
			target_ul.slideDown();
			target_parent_li.addClass("expanded");
		}
	});

	$(".content .headings p").ready(function()
	{
		var paragraph1 = "Lorem ipsum dolor amet, consectetur adipiscing elit. Quisque maximus interdum rhoncus. Curabitur dictum est sit amet turpis auctor facilisis. Phasellus nec suscipit mi. In eget egestas risus. Aliquam erat volutpat. Duis euismod scelerisque orci, nec imperdiet lacus laoreet ac. Integer auctor massa tristique neque tincidunt blandit vel in augue."
		var paragraph2 = "Morbi vel diam vel arcu tincidunt rhoncus eget id mi. Vivamus sit amet semper nunc. Sed eget massa nec nulla labortis vulputate sed id fellis. Aenean finibus mattis lorem, eget laoreet orci ornare quis. Praesent ac mattis purus, ut porttitor tortor. Cras et condimentum velit."
		var paragraph3 = "Donec viverra sem eu sapien feugiat accumsan. Vivamus ullamcorper augue tempor sem daphibus pulvinar. Pellentesque ac nunc euismod, lobortis eros vitae, bibendum ex. Aliquam vitae justo turpis. Praesent ex orci, ullamcorper et eros in, euismod gravida tellus. Nullam sed sapien dictum, eleifend mauris et, placerat odio. Aliquam quis sapien nisi."

		document.getElementById("paragraph1").innerHTML = paragraph1;
		document.getElementById("paragraph2").innerHTML = paragraph2;
		document.getElementById("paragraph3").innerHTML = paragraph3;
	});

	$(".content .headings .album").ready(function()
	{
		var buttonMan = document.getElementById("buttonMan");
		var buttonManTitle = document.getElementById("buttonManTitle");
		var buttonManDesc = document.getElementById("buttonManDescription");
		var buttonWizard = document.getElementById("buttonWizard");
		var buttonWizardTitle = document.getElementById("buttonWizardTitle");
		var buttonWizardDesc = document.getElementById("buttonWizardDescription");
		var buttonBeast = document.getElementById("buttonBeast");
		var buttonBeastTitle = document.getElementById("buttonBeastTitle");
		var buttonBeastDesc = document.getElementById("buttonBeastDescription");

		buttonManTitle.innerHTML = images.man.heading;
		buttonManDesc.innerHTML = images.man.description;
		buttonMan.style.backgroundImage = "url(" + images.man.path + ")";
	
		buttonWizardTitle.innerHTML = images.wizard.heading;
		buttonWizardDesc.innerHTML = images.wizard.description;
		buttonWizard.style.backgroundImage = "url(" + images.wizard.path + ")";
	
		buttonBeastTitle.innerHTML = images.beast.heading;
		buttonBeastDesc.innerHTML = images.beast.description;
		buttonBeast.style.backgroundImage = "url(" + images.beast.path + ")";
	});
});