function loadFAQs() {
  const container = document.getElementById("faqContainer");
  if (!container) {
    console.error("FAQ container not found");
    return;
  }

  const faqs = [
    {
      question: "Enim sed faucibus turpis in eu mi bibendum neque egestas?",
      answer:
        "Mattis ullamcorper velit sed ullamcorper morbi tincidunt. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Diam quis enim lobortis scelerisque fermentum dui faucibus. Urna nunc id cursus metus aliquam eleifend mi. Gravida quis blandit turpis cursus in hac.",
    },
    {
      question:
        "Amet consectetur adipiscing elit pellentesque habitant morbi tristique?",
      answer:
        "Mattis ullamcorper velit sed ullamcorper morbi tincidunt. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Diam quis enim lobortis scelerisque fermentum dui faucibus. Urna nunc id cursus metus aliquam eleifend mi. Gravida quis blandit turpis cursus in hac.",
    },
    {
      question: "Elit pellentesque habitant morbi tristique senectus?",
      answer:
        "Mattis ullamcorper velit sed ullamcorper morbi tincidunt. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Diam quis enim lobortis scelerisque fermentum dui faucibus. Urna nunc id cursus metus aliquam eleifend mi. Gravida quis blandit turpis cursus in hac.",
    },
    {
      question:
        "Gravida quis blandit turpis cursus in hac. Mi ipsum faucibus vitae aliquet nec?",
      answer:
        "Mattis ullamcorper velit sed ullamcorper morbi tincidunt. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Diam quis enim lobortis scelerisque fermentum dui faucibus. Urna nunc id cursus metus aliquam eleifend mi. Gravida quis blandit turpis cursus in hac.",
    },
    {
      question:
        "Est pellentesque elit ullamcorper dignissim cras. In pellentesque massa placerat?",
      answer:
        "Mattis ullamcorper velit sed ullamcorper morbi tincidunt. In metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Diam quis enim lobortis scelerisque fermentum dui faucibus. Urna nunc id cursus metus aliquam eleifend mi. Gravida quis blandit turpis cursus in hac.",
    },
  ];

  const faqHTML = faqs
    .map(
      (faq, index) => `
          <div class="faq-item ${
            index === 0 ? "active" : ""
          }" id="faq-item-${index}">
              <div class="faq-question" onclick="toggleFAQ(${index})">
                  <div class="faq-title">
                      <img src="../assets/icon/question.png" alt="Question Icon" />
                      <p>${faq.question}</p>
                  </div>
                  <img src="../assets/icon/${
                    index === 0 ? "upArrow" : "downArrow"
                  }.png" class="faq-arrow" alt="Toggle Icon" />
              </div>
              <div class="faq-answer" style="max-height: ${
                index === 0 ? "200px" : "0"
              }; padding: ${index === 0 ? "10px" : "0"};">
                  ${faq.answer}
              </div>
          </div>
          `
    )
    .join("");

  container.innerHTML = `<div class="faq-container">${faqHTML}</div>`;
}

function toggleFAQ(index) {
  const allItems = document.querySelectorAll(".faq-item");
  const allAnswers = document.querySelectorAll(".faq-answer");
  const allArrows = document.querySelectorAll(".faq-arrow");

  allItems.forEach((item, i) => {
    const answer = allAnswers[i];
    const arrow = allArrows[i];

    if (i === index) {
      item.classList.add("active");
      answer.style.maxHeight = answer.scrollHeight + "px";
      answer.style.padding = "10px";
      arrow.src = "../assets/icon/upArrow.png";
    } else {
      item.classList.remove("active");
      answer.style.maxHeight = "0";
      answer.style.padding = "0";
      arrow.src = "../assets/icon/downArrow.png";
    }
  });
}

document.addEventListener("DOMContentLoaded", loadFAQs);
