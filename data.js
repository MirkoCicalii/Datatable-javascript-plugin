var url = 'http://localhost:8080/Frontend-backend/index.php';
var nexId = 10006;
var next;
var last;
var prev;
var first;
var response = null;
var id;

$(document).ready(function () {

  $(document).ready(function () {
    $('#example').DataTable({
      "processing": true,
      "serverSide": true,
      "ajax": {
        "url": "http://localhost:8080/Frontend-backend/index.php?page=0&size=20",
        "type": "POST"
      },
      "columns": [
        { "data": "first_name" },
        { "data": "last_name" },
        { "data": "position" },
        { "data": "office" },
        { "data": "start_date" },
        { "data": "salary" }
      ]
    });
  });
});
