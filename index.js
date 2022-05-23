function editAddressInfo() {
  let x = document.getElementById("AddressesSelectionViewContainer");
  x.classList.toggle("force-show");
  let y = document.getElementById("AddressesEditContainer");
  y.classList.toggle("force-show");
  //   var y = document.getElementById("userDropdown");
  //   y.classList.toggle("clicked");
}

function addressEditType() {
  let Input1 = document.getElementById("address-edit_address_type_residential");
  let Input2 = document.getElementById("address-edit_address_type_business");
  let field = document.getElementById("addressEditTypeBusiness");
  let Input1Container = document.getElementById(
    "address-edit_address_type_residential-container"
  );
  let Input2Container = document.getElementById(
    "address-edit_address_type_business-container"
  );

  if (Input1.checked) {
    Input1Container.classList.toggle("checked");
  } else if (Input2.checked) {
    Input2Container.classList.toggle("checked");
    field.classList.toggle("force-show");
  }
}
