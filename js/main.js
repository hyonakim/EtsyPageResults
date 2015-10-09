(function () {

 var templateString = $('#itemTemplate').text();

 var templateFunction = _.template(templateString);

 _.each(etsydata.results, function (item) {
  var itemHTML = templateFunction(item);
  $('.container').append(itemHTML);

 });

}());