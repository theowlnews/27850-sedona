// Form appearing

var formOpener = document.querySelector(".form-opener"),
  searchForm = document.querySelector(".search-form");

searchForm.classList.add("search-form-hidden");

formOpener.addEventListener("click", function (evt) {
  evt.preventDefault();
  searchForm.classList.remove("search-form-hidden");
});

// Form validation

searchForm.addEventListener("submit", function (evt) {
  evt.preventDefault();

  var checkInValue = document.querySelector("#checkin").value,
    checkOutValue = document.querySelector("#checkout").value,
    adultsValue = document.querySelector("#adults").value,
    childrenValue = document.querySelector("#children").value;

  if ( checkInValue && checkOutValue && adultsValue && childrenValue ) {
    searchForm.submit();
  }
});
