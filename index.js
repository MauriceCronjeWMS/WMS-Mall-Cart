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

function paymentOptionType() {
  let Input1 = document.getElementById("paymentTypeCredit");
  let Input2 = document.getElementById("paymentTypePayFast");
  let Input1Container = document.getElementById("paymentTypeCreditContainer");
  let Input2Container = document.getElementById("paymentTypePayFastContainer");

  if (Input1.checked) {
    Input1Container.classList.toggle("checked");
  } else if (Input2.checked) {
    Input2Container.classList.toggle("checked");
  }
}

function paymentOptionTypeForm() {
  let x = document.getElementById("PaymentOptionsContainer");
  let y = document.getElementById("PaymentOptionsTypeContainer");

  x.classList.toggle("force-show");
  y.classList.toggle("force-show");
}
