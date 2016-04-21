<?php

require("../view/LoginView.php");

$func = $_POST['func'];

switch($func){

	case 'start':

		LoginView::exibeLogin();

	break;

	case 'login':

		LoginView::exibeAdministrador();

	break;

	case 'logout':

		LoginView::exibeLogin();

	break;

}

?>