	// AVISO 2019 THEME JS //

		// NAVIGATION
		// set mobile menu height
		var deskHdrHeight = "180px";
		var menuHeight = document.documentElement.scrollHeight;
		var screenWidth = jQuery(window).width();
		if (screenWidth < 1023){
				jQuery('.primary-nav').css('height',menuHeight);
				jQuery('.submenu').css('height',menuHeight);
				jQuery('.subsubmenu').css('height',menuHeight);
				jQuery('#tab-contact').removeClass('has_children');
				jQuery('#tab-contact').removeClass('has_children_off');
				jQuery('#tab-contact a').attr('href','contact');
		}
		else{
				jQuery('.primary-nav').css('height',deskHdrHeight);
				jQuery('.submenu').css('height','auto');
				jQuery('.subsubmenu').css('height','auto');
		}
		jQuery(window).resize(function(){
			var scr = jQuery(window).width();
			var newMenuHeight = document.documentElement.scrollHeight;
			if (scr > 1023){
				jQuery('.primary-nav').css('height',deskHdrHeight);
				jQuery('.submenu').css('height','auto');
				jQuery('.subsubmenu').css('height','auto');
				jQuery('.nav-toggle-open').hide();
				jQuery('.nav-toggle-closed').hide();
				jQuery('.primary-nav').css('display','flex');
				jQuery('.primary-nav').show();
				jQuery('.submenu').hide();
				jQuery('.subsubmenu').show();
				jQuery('#tab-contact').addClass('has_children');
				jQuery('#tab-contact').addClass('has_children_off');
				jQuery('#tab-contact a').attr('href','#');								
			}
			else {
				jQuery('.primary-nav').css('height',newMenuHeight);
				jQuery('.submenu').css('height',newMenuHeight);
				jQuery('.subsubmenu').css('height',newMenuHeight);
				jQuery('.nav-toggle-open').show();
				jQuery('.nav-toggle-closed').hide();
				jQuery('.primary-nav').css('display','block');
				jQuery('.primary-nav').hide();
				jQuery('.submenu').hide();
				jQuery('.subsubmenu').hide();
				jQuery('#tab-contact').removeClass('has_children');
				jQuery('#tab-contact').removeClass('has_children_off');
				jQuery('#tab-contact a').attr('href','contact');				
			}
		});	
		jQuery('.nav-toggle-open').click(function(){				
			jQuery('.primary-nav').toggle("slide", { direction: "right" }, 250);
			jQuery(this).delay(251).hide(0);
			jQuery('.nav-toggle-closed').delay(251).show(0);
		});
		jQuery('.nav-toggle-closed').click(function(){				
			jQuery('.primary-nav').hide();
			jQuery('.submenu').hide();
			jQuery('.subsubmenu').hide();			
			jQuery(this).hide();
			jQuery('.nav-toggle-open').show();
		});
		jQuery('.menuClose').click(function(){				
			jQuery('.primary-nav').hide();
			jQuery('.submenu').hide();
			jQuery('.subsubmenu').hide();			
			jQuery('.nav-toggle-closed').hide();
			jQuery('.nav-toggle-open').show();
		});
		// dropdown menu
		jQuery('#tab-practice > a').click(function(){
			var scr = jQuery(window).width();
			if (scr > 1023){
				jQuery('#tab-contact .submenu').hide();
				jQuery('#tab-contact').removeClass('has_children_on');
				jQuery('#tab-contact').addClass('has_children_off');
			}
		});
		jQuery('#tab-contact > a').click(function(){
			var scr = jQuery(window).width();
			if (scr > 1023){
				jQuery('#tab-practice .submenu').hide();
				jQuery('#tab-practice').removeClass('has_children_on');
				jQuery('#tab-practice').addClass('has_children_off');
			}
		});
		jQuery('.has_children > a').click(function(){
			var scr = jQuery(window).width();
			if (scr > 1023){
				var parentItem = jQuery(this).parent();
				jQuery(this).next('.submenu').fadeToggle("slow");
				jQuery(parentItem).toggleClass('has_children_on');
				jQuery(parentItem).toggleClass('has_children_off');
			}
			else{
				jQuery('.primary-nav').css('height',menuHeight);
				jQuery('.submenu').css('height',menuHeight);
				jQuery('.subsubmenu').css('height',menuHeight);
				jQuery(this).next('.submenu').toggle("slide", { direction: "right" }, 250);
			}
		});
		// submenu
		jQuery('.submenu a').click(function(){
			var scr = jQuery(window).width();
			if (scr > 1023){
				jQuery(this).next('.subsubmenu').fadeToggle("slow");
			}
			else{
				jQuery('.primary-nav').css('height',menuHeight);
				jQuery('.submenu').css('height',menuHeight);
				jQuery('.subsubmenu').css('height',menuHeight);
				jQuery(this).next('.subsubmenu').toggle("slide", { direction: "right" }, 250);
			}
		});
		jQuery('.back').click(function(){
			jQuery(this).parent().toggle("slide", { direction: "right" }, 250);
		});

		// Attorneys
		jQuery('.ctpro').click(function(){
			jQuery('.ctperson').addClass('bio_off');
			jQuery('.ctprofessional').removeClass('bio_off');
		});
		jQuery('.ctper').click(function(){
			jQuery('.ctprofessional').addClass('bio_off');
			jQuery('.ctperson').removeClass('bio_off');
		});
		jQuery('.rcpro').click(function(){
			jQuery('.rcperson').addClass('bio_off');
			jQuery('.rcprofessional').removeClass('bio_off');
		});
		jQuery('.rcper').click(function(){
			jQuery('.rcprofessional').addClass('bio_off');
			jQuery('.rcperson').removeClass('bio_off');
		});

		// Accordion
		jQuery('.accordion h3').click(function(){
			jQuery(this).toggleClass('expanded');
			jQuery(this).next('.details').slideToggle(500);
		});
		