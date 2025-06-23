document.addEventListener('DOMContentLoaded', function () {
    const filters = document.querySelectorAll('.item');
    const products = document.querySelectorAll('.San_Pham > div[data-category]');
  
    filters.forEach(filter => {
      filter.addEventListener('click', () => {
        // Xoá active cũ, thêm active mới
        filters.forEach(f => f.classList.remove('active'));
        filter.classList.add('active');
  
        const selectedCategory = filter.getAttribute('data-category');
  
        products.forEach(product => {
          const productCategory = product.getAttribute('data-category');
          if (selectedCategory === 'All' || selectedCategory === productCategory) {
            product.style.display = 'block';
          } else {
            product.style.display = 'none';
          }
        });
      });
    });
  });
  