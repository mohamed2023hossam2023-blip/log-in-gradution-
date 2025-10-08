const form = document.getElementById("loginForm");

form.addEventListener("submit", async (e) => {
  e.preventDefault(); // يمنع تحميل الصفحة

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const loginData = {
    email,
    password,
  };

  try {
    // غيّر اللينك حسب عنوان الـ API عندك في .NET
    const response = await fetch("https://localhost:5001/api/Auth/Login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(loginData),
    });

    if (response.ok) {
      const result = await response.json();
      alert("✅ Login successful!");
      console.log("Server Response:", result);

      // لو السيرفر بيرجع Token مثلاً:
      // localStorage.setItem("token", result.token);

      // بعد تسجيل الدخول ممكن تنقله لصفحة تانية:
      // window.location.href = "/dashboard.html";
    } else {
      const error = await response.text();
      alert("❌ Login failed: " + error);
    }
  } catch (err) {
    console.error(err);
    alert("⚠️ Error connecting to the server.");
  }
});
