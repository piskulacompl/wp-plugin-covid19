<?php
/*
Plugin Name: Covid-19 Status Widget
Description: Prosta wtyczka umożliwiająca dodanie na stronę informacji o aktualnej ilości osób zarażonych i śmierci z powodu COVID-19
Version: 1.0
Author: Patrycja (Patka) Piskuła
Author URI: https://github.com/piskulacompl/
*/

class CovidStatus extends WP_Widget {

    public function __construct() {
        $widget_id = 'covid19_status';
	    $widget_name = __('Covid-19 Status', 'Covid-19 Status');
	    $widget_opt = array('description'=>'Informacja o aktualnej ilości osób zarażonych i śmierci z powodu COVID-19');

	    parent::__construct($widget_id, $widget_name, $widget_opt);
    }

    public function widget( $args, $instance ) {
        echo $args['before_widget'];
        
		echo "<div id='covid' style='text-align:center;'>Wczytywanie danych . . .</div>";

        echo $args['after_widget'];
    }

    public function form( $instance ) {
    }

    public function update( $new_instance, $old_instance ) {
        $instance = $old_instance;

        return $instance;
    }
}

function cov_register() {
	register_widget( 'CovidStatus' );
}

add_action( 'widgets_init', 'cov_register' );

function cov_enqueue() {
    wp_enqueue_script(
        'covid',
        plugin_dir_url(__FILE__).'covid-api.js'
    );
}

add_action('wp_enqueue_scripts', 'cov_enqueue');

?>