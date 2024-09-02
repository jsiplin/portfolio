function createCalendarMonth(monthnumber,year){
    const montharray=["Undefined","January","February","March","April","May","June","July","August","September","October","November","December"]
    var _table= "<span><h2>" + montharray[monthnumber] + " " + year +"</h2></span>";
    var rows= 5;
     var cols=6;
    var c= 1;
    var daysMonth =30;
    for(var r=0; r<rows; r++){
      _table+= "<tr>";
          for(var i=0; i<=cols; i++){
          if(c<=daysMonth){
              _table+= "<td>" + c +"</td>";
          }else{
          break;
          }
  
            c++;
        // each col should display number at i
      }
  
  
  _table+= "</tr>";
  
   }
   document.getElementById('calendar').innerHTML = '<table><h1>Kobucha Kalendar</h1>' + _table +'</table>';
  
  };
createCalendarMonth(9,2024);
