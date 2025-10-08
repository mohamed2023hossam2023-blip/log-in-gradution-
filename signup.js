const form = document.getElementById("signupForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // يمنع إعادة تحميل الصفحة

  const fullName = document.getElementById("fullName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // البيانات اللي هتتبعت
  const userData = {
    fullName,
    email,
    password,
  };

  try {
    const response = await fetch("https://localhost:5001/api/Auth/Register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    });

    if (response.ok) {
      const result = await response.json();
      alert("✅ Sign Up Successful!");
      console.log("Server Response:", result);
      // ممكن هنا تعمل redirect:
      // window.location.href = "/login.html";
    } else {
      const error = await response.text();
      alert("❌ Sign Up Failed: " + error);
    }
  } catch (err) {
    console.error(err);
    alert("⚠️ Error connecting to the server.");
  }
});
