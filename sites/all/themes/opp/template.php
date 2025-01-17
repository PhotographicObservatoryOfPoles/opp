<?php

/**
 * @file
 * This file is empty by default because the base theme chain (Alpha & Omega) provides
 * all the basic functionality. However, in case you wish to customize the output that Drupal
 * generates through Alpha & Omega this file is a good place to do so.
 * 
 * Alpha comes with a neat solution for keeping this file as clean as possible while the code
 * for your subtheme grows. Please read the README.txt in the /preprocess and /process subfolders
 * for more information on this topic.
 */

function opp_preprocess_html(&$variables) {
	// Add conditional stylesheets for IE
	drupal_add_css(path_to_theme() . '/css/ie/ie-lte-9.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'lte IE 9', '!IE' => FALSE), 'preprocess' => FALSE, 'weight' => 200));
	//drupal_add_css(path_to_theme() . '/css/ie/ie-lte-8.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'lte IE 8', '!IE' => FALSE), 'preprocess' => FALSE));
	//drupal_add_css(path_to_theme() . '/css/ie/ie-lte-7.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'lte IE 7', '!IE' => FALSE), 'preprocess' => FALSE));
	//drupal_add_css(path_to_theme() . '/css/ie/ie-6.css', array('group' => CSS_THEME, 'browsers' => array('IE' => 'IE 6', '!IE' => FALSE), 'preprocess' => FALSE));
}

function opp_form_alter(&$form, &$form_state, $form_id) {
	if($form_id == 'search_block_form') {
	    //$form['search_block_form']['#title'] = t('Search'); // Change the text on the label element
	    //$form['search_block_form']['#title_display'] = 'invisible'; // Toggle label visibilty
	    //$form['search_block_form']['#size'] = 40;  // define size of the textfield
	    //$form['search_block_form']['#default_value'] = t('Search'); // Set a default value for the textfield
	    //$form['actions']['submit']['#value'] = t('GO!'); // Change the text on the submit button
	    $form['actions']['submit'] = array('#type' => 'image_button', '#src' => base_path() . path_to_theme() . '/img/search-button.png');

	    // Add extra attributes to the text box
	    //$form['search_block_form']['#attributes']['onblur'] = "if (this.value == '') {this.value = 'Search';}";
	    //$form['search_block_form']['#attributes']['onfocus'] = "if (this.value == 'Search') {this.value = '';}";
	    // Prevent user from searching the default text
	    //$form['#attributes']['onsubmit'] = "if(this.search_block_form.value=='Search'){ alert('Please enter a search'); return false; }";

	    // Alternative (HTML5) placeholder attribute instead of using the javascript
	    $form['search_block_form']['#attributes']['placeholder'] = t('Search');
	}
}

?>