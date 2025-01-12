document.addEventListener("DOMContentLoaded", () => {
    let cart = [];
    const cartBtn = document.getElementById("cart-btn");
    const cartCount = document.getElementById("cart-btn");
    const products = document.querySelectorAll(".add-to-cart");

    // إضافة المنتج للسلة
    products.forEach((button) => {
        button.addEventListener("click", (e) => {
            const productElement = e.target.parentElement;
            const productId = productElement.getAttribute("data-id");
            const productPrice = parseFloat(productElement.getAttribute("data-price"));
            const productName = productElement.querySelector("h3").textContent;

            // أضف المنتج إلى السلة
            cart.push({ id: productId, name: productName, price: productPrice });
            cartCount.textContent = `السلة (${cart.length})`;

            alert(`تم إضافة ${productName} إلى السلة!`);
        });
    });

    // عرض السلة
    cartBtn.addEventListener("click", () => {
        let items = cart.map((item) => `${item.name}: $${item.price}`).join("\n");
        let total = cart.reduce((sum, item) => sum + item.price, 0);

        if (cart.length > 0) {
            alert(`محتويات السلة:\n${items}\nالإجمالي: $${total}`);
            let proceed = confirm("هل تريد متابعة عملية الدفع؟");
            if (proceed) showCheckout(total);
        } else {
            alert("السلة فارغة!");
        }
    });

    // عرض صفحة الدفع
    function showCheckout(total) {
        let name = prompt("أدخل اسمك:");
        let phone = prompt("أدخل رقم هاتفك:");
        let paymentMethod = confirm("هل ترغب بالدفع نقدًا؟ (نعم: نقدًا، إلغاء: عبر البطاقة)");

        if (paymentMethod) {
            alert("تمت عملية الدفع نقدًا بنجاح!");
        } else {
            let cardNumber = prompt("أدخل رقم البطاقة:");
            if (cardNumber) alert("تمت عملية الدفع بنجاح!");
        }

        cart = [];
        cartCount.textContent = "السلة (0)";
    }
});
