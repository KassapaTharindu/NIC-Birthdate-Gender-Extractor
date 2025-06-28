function extractDetails() {
    const nic = document.getElementById("nicInput").value.trim();
    const output = document.getElementById("output");
    const error = document.getElementById("error");
    output.innerHTML = "";
    error.innerHTML = "";
  
    let year, dayOfYear, gender;
  
    if (/^\d{9}[VvXx]$/.test(nic)) {
      year = 1900 + parseInt(nic.slice(0, 2));
      dayOfYear = parseInt(nic.slice(2, 5));
    } else if (/^\d{12}$/.test(nic)) {
      year = parseInt(nic.slice(0, 4));
      dayOfYear = parseInt(nic.slice(4, 7));
    } else {
      error.innerText = "Invalid NIC format. Please enter a valid 10 or 12 digit NIC.";
      return;
    }
  
    if (dayOfYear < 1 || dayOfYear > 866) {
      error.innerText = "Invalid day number in NIC.";
      return;
    }
  
    gender = (dayOfYear > 500) ? "Female" : "Male";
    if (dayOfYear > 500) dayOfYear -= 500;
  
    const birthDate = new Date(year, 0);
    birthDate.setDate(dayOfYear);
  
    output.innerHTML = `
      <p><strong>Birth Year:</strong> ${year}</p>
      <p><strong>Birthdate:</strong> ${birthDate.toDateString()}</p>
      <p><strong>Gender:</strong> ${gender}</p>
    `;
  }
  