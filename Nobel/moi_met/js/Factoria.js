angular.module('NobelApp').factory('turnoFactory', ['$filter', function($filter){

var turno = "";
var hora   = $filter('date')(new Date(),'HH:mm');
var hoy= "";
 
   if (hora > "06:01" && hora < "14:00"){

      turno = 'Mañana';
      hoy =  $filter('date')(new Date(),'dd-MM-yyyy');
    var hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

    }else if (hora > "14:01" && hora < "22:00"){

      turno = 'Tarde';
      hoy = $filter('date')(new Date(),'dd-MM-yyyy');
      hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

    }else if (hora > "22:01" && hora < "00:00"){

    console.log('Estoy aqui');
      turno = 'Noche';
      hoy = $filter('date')(new Date(),'dd-MM-yyyy');
      hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

    }else if(hora > "00:01" && hora < "06:00"){

        /**
        *Se resta un dia para el turno de noche
        */

    hoy         = $filter('date')(new Date(),'dd-MM-yyyy');
    hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

     var valores = hoy;

      var values = valores.split(" ");

      var value1 =  valores[0];
      var value2 =  valores[1];

      if (value2 == 0){

        var dia = (value1 - 1) + (value2 - 1);

      }else{

        var dia = value1 + (value2 - 1);
      }

      var mes = valores[3] + valores[4];

      var año = valores[6] + valores[7] + valores[8] + valores[9];

       hoyMysql = año + "-" + mes + "-" + dia;
       
       hoy = (dia) + "-" + mes + "-" + año ;


       turno = 'Noche';
      
      }

      
      return turno;

      //Fin funcion

     



}]);

angular.module('NobelApp').factory('fechaFactory', ['$filter', function($filter){

var turno = "";
var hora   = $filter('date')(new Date(),'HH:mm');
var hoy= "";
 
   if (hora > "06:01" && hora < "14:00"){

      turno = 'Mañana';
      hoy =  $filter('date')(new Date(),'dd-MM-yyyy');
    var hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

    }else if (hora > "14:01" && hora < "22:00"){

      turno = 'Tarde';
      hoy = $filter('date')(new Date(),'dd-MM-yyyy');
      hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

    }else if (hora > "22:01" && hora < "00:00"){

    console.log('Estoy aqui');
      turno = 'Noche';
      hoy = $filter('date')(new Date(),'dd-MM-yyyy');
      hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

    }else if(hora > "00:01" && hora < "06:00"){

        /**
        *Se resta un dia para el turno de noche
        */

    hoy         = $filter('date')(new Date(),'dd-MM-yyyy');
    hoyMysql    = $filter('date')(new Date(),'yyyy-MM-dd');

     var valores = hoy;

      var values = valores.split(" ");

      var value1 =  valores[0];
      var value2 =  valores[1];

      if (value2 == 0){

        var dia = (value1 - 1) + (value2 - 1);

      }else{

        var dia = value1 + (value2 - 1);
      }

      var mes = valores[3] + valores[4];

      var año = valores[6] + valores[7] + valores[8] + valores[9];

       hoyMysql = año + "-" + mes + "-" + dia;
       
       hoy = (dia) + "-" + mes + "-" + año ;


       turno = 'Noche';
      
      }

      
      return hoy;

  }]);