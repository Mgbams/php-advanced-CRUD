// function for pagination
function pagination(totalPages, currentPages) {
  let pageList = "";
  if (totalPages > 1) {
    currentPages = parseInt(currentPages);

    pageList += `<ul class="pagination justify-content-center">`;
    const prevClass = currentPages === 1 ? "disabled" : "";

    pageList += ` <li class="page-item ${prevClass}"><a class="page-link" href="#" data-page="${currentPages - 1}">Previous</a></li>`;

    for (let p = 1; p <= totalPages; p++) {
      const activeClass = currentPages === p ? "active" : "";
      pageList += `<li class="page-item ${activeClass}"><a class="page-link" href="#" data-page="{p}">${p}</a></li>`;
    }

    const nextClass = currentPages === totalPages ? "disabled" : "";
    pageList += `<li class="page-item ${nextClass}"><a class="page-link" href="#" data-page="${currentPages + 1}">Next</a></li>`;

    pageList += `</ul>`;
  }
  $("#pagination").html(pageList);
}

// function to get users from database
function getuserrow(user) {
  let userRow = "";
  if (user) {
    userRow = `
       <tr>
        <td><img src=uploads/${user.photo} /></td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.mobile}</td>
        <td>
            <a href="#" class="mr-3 profile" data-target="#userViewModal" data-toggle="modal" title="View Profile" data-id=${user.id}>
                <i class="fas fa-eye text-success"></i>
            </a>
            <a href="#" class="mr-3 edituser" title="Edit" data-target="#usermodal" data-toggle="modal" data-id=${user.id}>
                <i class="fas fa-edit text-info"></i>
            </a>
            <a href="#" class="mr-3 deleteuser" title="Delete" data-id=${user.id}><i class="fas fa-trash-alt text-danger"></i></a>
        </td>
       </tr>`;
  }

  return userRow;
}

// get users function
function getusers() {
  let pageno = $("#currentpage").val();
  $.ajax({
    url: "/PREMIERVISION/PHPADVANCE/ajax.php",
    type: "GET",
    dataType: "json",
    data: { page: pageno, action: "getallusers" },
    beforeSend: function () {
      console.log("wait.... Data is loading");
    },
    success: function (row) {
      console.log(row);
      if (row.players) {
        var userslist = "";
        $.each(row.players, function (index, user) {
          userslist += getuserrow(user);
        });
        $("#usertable tbody").html(userslist);
        let totalUsers = rows.count;
        let totalPages = Math.ceil(parseInt(totalUsers) / 4);
        const currentPages = $("#currentpage").val();
        pagination(totalPages, currentPages);
      }
    },
    error: function (request, error) {
      console.log(arguments);
      console.log("Error: " + error);
    },
  });
}

// loading document

$(document).ready(function () {
  // adding users
  $(document).on("submit", "#addform", function (event) {
    event.preventDefault();
    //ajax
    $.ajax({
      url: "/PREMIERVISION/PHPADVANCE/ajax.php",
      type: "POST",
      dataType: "json",
      data: new FormData(this),
      processData: false,
      contentType: false,
      beforeSend: function () {
        console.log("wait.... Data is loading");
      },
      success: function (response) {
        console.log(response);
        if (response) {
          $("#usermodal").modal("hide");
          $("#addform")[0].reset();
          getusers();
        }
      },
      error: function (request, error) {
        console.log(arguments);
        console.log("OOps! Something went wrong!");
        console.log("Error: " + error);
      },
    });
  });
   // onclick event for pagination
    $(document).on("click", "ul.pagination li a", function (event) {
        event.preventDefault();
        const  pageNum = $(this).data("page");
        $("#currentpage").val(pageNum);
        getusers();
        $(this).parent().siblings().removeClass("active");
        $(this).parent().addClass("active");
    })
  // calling getusers() function
  getusers();
});
