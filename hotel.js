
  function showToast(message, success = true) {
    const toast = document.createElement("div");
    toast.textContent = message;
    toast.className = success ? "toast toast-success" : "toast toast-error";
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  document.getElementById("bookBtn").addEventListener("click", function (e) {
    e.preventDefault();

    let location = document.getElementById("location").value.trim();
    let checkin = document.getElementById("checkin").value.trim();
    let checkout = document.getElementById("checkout").value.trim();
    let guests = document.getElementById("guests").value.trim();

    if (!location || !checkin || !checkout || !guests) {
      showToast("⚠️ Please fill all fields before booking.", false);
      return;
    }

    // Validate date order
    if (new Date(checkout) <= new Date(checkin)) {
      showToast("⚠️ Check-out must be after check-in.", false);
      return;
    }

    // Show confirmation message
    showToast(`✅ Booking Confirmed for ${guests} guest(s) at ${location} from ${checkin} to ${checkout}.`);
    
    // Clear form fields
    document.getElementById("location").value = "";
    document.getElementById("checkin").value = "";
    document.getElementById("checkout").value = "";
    document.getElementById("guests").value = "";
  });

const counters = document.querySelectorAll('.counter');

counters.forEach(counter => {
  counter.innerText = '0';

  const updateCounter = () => {
    const target = +counter.getAttribute('data-target');
    const current = +counter.innerText;
    const increment = target / 200;

    if (current < target) {
      counter.innerText = `${Math.ceil(current + increment)}`;
      setTimeout(updateCounter, 10);
    } else {
      counter.innerText = target.toLocaleString(); // adds commas like 10,000
    }
  };

  updateCounter();
});
// nav link logic
const infoBox = document.getElementById("infoBox");
  const infoTitle = document.getElementById("infoTitle");
  const infoText = document.getElementById("infoText");
  const closeBtn = document.getElementById("closeInfo");

  const navInfo = {
    Home: {
      title: "Welcome to Grandvrio Ocean Resort",
      text: "Experience luxury, comfort, and nature at our premium beachfront resort. Enjoy spa treatments, international cuisine, and world-class hospitality."
    },
    Services: {
      title: "Our Premium Services",
      text: "From 24/7 room service and spa treatments to airport shuttles, pools, and customized tours — we provide everything to make your stay memorable."
    },
    "About Us": {
      title: "Who We Are",
      text: "Grandvrio Ocean Resort is a 5-star hospitality brand serving guests worldwide for over a decade, known for luxury, hygiene, and personalized experiences."
    },
    "Contact Details": {
      title: "Contact Us",
      text: "📞 +91 9876543210  |  📧 support@grandvrio.com  |  📍 Danang, Vietnam. Feel free to reach out with any inquiries!"
    }
  };

  // Target all nav <a> links
  document.querySelectorAll(".nav_links a").forEach(link => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // stop jumping to #
      const label = this.innerText.trim();
      const info = navInfo[label];

      if (info) {
        infoTitle.textContent = info.title;
        infoText.textContent = info.text;
        infoBox.classList.remove("hidden");
      }
    });
  });

  // Close button functionality
  closeBtn.addEventListener("click", () => {
    infoBox.classList.add("hidden");
  });

  // Click outside to close
  window.addEventListener("click", (e) => {
    if (e.target === infoBox) {
      infoBox.classList.add("hidden");
    }
  });
  // DOM element
const darkToggle = document.getElementById("darkModeToggle");

// Check saved preference on load
if (localStorage.getItem("darkMode") === "enabled") {
  document.body.classList.add("dark-mode");
  darkToggle.checked = true;
}

// Event listener for toggle switch
darkToggle.addEventListener("change", () => {
  if (darkToggle.checked) {
    document.body.classList.add("dark-mode");
    localStorage.setItem("darkMode", "enabled");
  } else {
    document.body.classList.remove("dark-mode");
    localStorage.setItem("darkMode", "disabled");
  }
});
const modal = document.getElementById("rewardsModal");
const closeModal = document.querySelector(".close-modal");
const joinBtn = document.querySelector(".reward_btn");

joinBtn.addEventListener("click", () => {
  modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.add("hidden");
  }
});

// Optional: handle form submission
document.getElementById("rewardsForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!name || !email) {
    alert("Please enter your name and email.");
    return;
  }

  // Simulate success (you can replace with real backend/API call)
  alert(`🎉 Thanks ${name}! You’ve joined the rewards program.`);
  modal.classList.add("hidden");

  // Optionally clear form
  e.target.reset();
});

