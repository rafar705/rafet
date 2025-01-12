document.addEventListener('DOMContentLoaded', () => {
    const cartBtn = document.getElementById('cart-btn');
    const productList = document.getElementById('product-list');
    const filterBtns = document.querySelectorAll('.filter-btn');

    let cart = []; // تخزين المنتجات في السلة

    // فلترة المنتجات بناءً على الصنف
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.category;
            const products = document.querySelectorAll('.product');
            products.forEach(product => {
                product.style.display = (category === 'all' || product.dataset.category === category) ? 'block' : 'none';
            });
        });
    });

    // عرض نافذة لتأكيد الشراء وحساب الإجمالي
    cartBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('السلة فارغة!');
            return;
        }

        // حساب إجمالي السعر
        const total = cart.reduce((sum, item) => sum + item.price, 0);

        // إنشاء نافذة تأكيد
        const confirmPurchase = confirm(`إجمالي المشتريات: $${total.toFixed(2)}\nهل ترغب في إتمام الشراء؟`);
        if (confirmPurchase) {
            window.location.href = '2.html'; // الانتقال إلى صفحة الدفع
        }
    });

    // إضافة المنتج إلى السلة
    document.querySelectorAll('.add-to-cart').forEach(btn => {
        btn.addEventListener('click', () => {
            const productElement = btn.closest('.product');
            const priceText = productElement.querySelector('.price').textContent;
            const price = parseFloat(priceText.replace('$', ''));
            const name = productElement.querySelector('h3').textContent;

            // إضافة المنتج إلى السلة
            cart.push({ name, price });

            // تحديث زر السلة
            cartBtn.textContent = `السلة (${cart.length})`;
            alert(`تمت إضافة "${name}" إلى السلة!`);
        });
    });
});
