function check(e) {
  if (first.value == "")
  {
    alert("Enter your first name");
    e.preventDefault();
    return false;
  }
  else  if (second.value == "")
  {
    alert("Enter your second name");
    e.preventDefault();
    return false;
  }
  else  if (email.value == "")
  {
    alert("Enter your email");
    e.preventDefault();
    return false;
  }
  else  if (phone.value == "")
  {
    alert("Enter your phone number");
    e.preventDefault();
    return false;
  }
  else
  {
    alert("Thank you for joining with us!");
    return ture;
  }
