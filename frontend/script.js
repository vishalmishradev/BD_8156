async function loadUsers() {
  const tableBody = document.querySelector("tbody");

  try {
    const response = await axios.get("http://localhost:1234/api/users");

    const users = response.data.user;
    tableBody.innerHTML = "";

    users.forEach((user) => {
      const row = `
                <tr>
                    <td>${user.id}</td>
                    <td>${user.name}</td>
                    <td>${user.email}</td>
                    <td>${user.phone}</td>
                </tr>
            `;

      tableBody.innerHTML += row;
    });
  } catch (error) {
    console.error("Error:", error);
    tableBody.innerHTML = `<tr><td colspan="4" style="color: red;">Error loading users.</td></tr>`;
  }
}

window.addEventListener("DOMContentLoaded", loadUsers);