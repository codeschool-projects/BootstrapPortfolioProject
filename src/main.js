$(function() {
  $.ajax({
    url: 'https://www.codeschool.com/users/rgordon95.json',
    dataType: 'jsonp',
    success: function(response) {
      //for each course completed returned by the response
      for (let i = 0; i < response.courses.completed.length; i++) {
        //create a div, add class .course, append to #badges
        let title = response.courses.completed[i].title;
        let url = response.courses.completed[i].url;
        let badge = response.courses.completed[i].badge;
        $('#badges').append('<div class="course"><h3>' + title + ' </h3><img src= "' + badge + '"><a href="' + url + '" target="_blank" class="btn btn-primary">' + 'See Course' + '</a></div>');
      } //end for loop
    } // end success function
  }); //end ajax call

}); //end doc ready function

// https://www.codeschool.com/users/rgordon95.json
