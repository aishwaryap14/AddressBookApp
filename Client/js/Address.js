window.addEventListener('DOMContentLoaded', (event) => {
    createInnerHtml();
  });


  const createInnerHtml = () => {
    const tableData =`""`;
    let addressbook = createEmployeePayrollJSON()[0];
    const innerHtml = `${tableData}
    <td><img class="profile" src="${addressbook.fname}" alt=""></td>
    <td>${addressbook.lname}</td>
    <td>${addressbook.email}</td>
    <td><div class="dept-label">${addressbook.city}</div></td>
    <td>${addressbook.zip}</td>
    <td>${addressbook.state}</td>`
  ;
  document.querySelector('#table-display').innerHtml = innerHtml;
}

const createEmployeePayrollJSON = () => {
  let empPayrollListLocal = [
      {
      fname: 'Narayan',
      lname: 'Mahadevan',
      email: "email@gmail.com",
      pwd: '500000',
      address: 'Datta Mandir Nashik',
      city: "Nashik",
      zip: "222444",
      state: "Maharashtra",
  }]
  return empPayrollListLocal;
}
