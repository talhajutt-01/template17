const title = document.getElementById('title');

const h0 = document.getElementById('h0');
const h1 = document.getElementById('h1');
const h2 = document.getElementById('h2');
const h3 = document.getElementById('h3');
const h4 = document.getElementById('h4');
const h5 = document.getElementById('h5');
const h6 = document.getElementById('h6');
const h7 = document.getElementById('h7');
const h8 = document.getElementById('h8');

const nav0 = document.getElementById('nav0');
const nav1 = document.getElementById('nav1');
const nav2 = document.getElementById('nav2');
const nav3 = document.getElementById('nav3');
const nav4 = document.getElementById('nav4');

const c0 = document.getElementById('c0');
const c1 = document.getElementById('c1');
const c2 = document.getElementById('c2');
const c3 = document.getElementById('c3');
const c4 = document.getElementById('c4');
const c5 = document.getElementById('c5');
const c6 = document.getElementById('c6');
const c7 = document.getElementById('c7');
const c8 = document.getElementById('c8');
const c9 = document.getElementById('c9');
const c10 = document.getElementById('c10');
const c11 = document.getElementById('c11');

const b0 = document.getElementById('b0');
const b1 = document.getElementById('b1');
const b2 = document.getElementById('b2');
const b3 = document.getElementById('b3');

const p0 = document.getElementById('p0');
const p1 = document.getElementById('p1');
const p2 = document.getElementById('p2');
const p3 = document.getElementById('p3');
const p4 = document.getElementById('p4');
const p5 = document.getElementById('p5');

const u0 = document.getElementById('u0');
const u1 = document.getElementById('u1');
const u2 = document.getElementById('u2');
const u3 = document.getElementById('u3');
const u4 = document.getElementById('u4');
const u5 = document.getElementById('u5');
const u6 = document.getElementById('u6');
const u7 = document.getElementById('u7');
const u8 = document.getElementById('u8');
const u9 = document.getElementById('u9');
const u10 = document.getElementById('u10');
const u11 = document.getElementById('u11');

const n0 = document.getElementById('n0');
const n1 = document.getElementById('n1');
const n2 = document.getElementById('n2');

const f0 = document.getElementById('f0');
const f1 = document.getElementById('f1');
const f2 = document.getElementById('f2');
const f3 = document.getElementById('f3');
const f4 = document.getElementById('f4');
const f5 = document.getElementById('f5');
const f6 = document.getElementById('f6');
const f7 = document.getElementById('f7');
const f8 = document.getElementById('f8');
const f9 = document.getElementById('f9');

const g0 = document.getElementById('nav');
const g1 = document.getElementById('category');
const g2 = document.getElementById('beauty');
const g3 = document.getElementById('product');
const g4 = document.getElementById('client');
const g5 = document.getElementById('newsletter');
const g6 = document.getElementById('footer');


const img1 = document.getElementById('img1');
const img2 = document.getElementById('img2');
const img3 = document.getElementById('img3');
const img4 = document.getElementById('img4');
const img5 = document.getElementById('img5');
const img6 = document.getElementById('img6');
const img7 = document.getElementById('img7');
const img8 = document.getElementById('img8');
const img9 = document.getElementById('img9');
const img10 = document.getElementById('img10');
const img11 = document.getElementById('img11');
const img12 = document.getElementById('img12');
const img13 = document.getElementById('img13');
const img14 = document.getElementById('img14');
const img15 = document.getElementById('img15');


// Function to update content for a specific element
function updateContent(element, newValue) {
    // Update content for the element
    element.textContent = newValue;
  }
  
  // Function to update content for an <a> tag
  function updateLinkContent(linkElement, newValue) {
    // Update content for the <a> tag
    linkElement.innerText = newValue;
  }

  function updateImageSrc(imageElement, newSrc) {
    // Update the src attribute of the image element
    imageElement.src = newSrc;
}

function updateBackgroundColor(element, newColor) {
  // Update the background color for the element
  element.style.backgroundColor = newColor;
}

  
  // Fetch JSON data from the text file
  function updatePageContent(pageName) {
    console.log('Updating content for page:', pageName);
    const fetchJson1 = fetch('t.txt')
    .then(response => response.json());

// Fetch the second JSON file
const fetchJson2 = fetch('image.txt')
    .then(response => response.json());

// Wait for both fetch operations to complete
Promise.all([fetchJson1, fetchJson2])
    .then(jsonDataArray => {
        // Merge the data from both JSON files
        const mergedData = Object.assign({}, ...jsonDataArray);
            
           
           
            // Extract the filename from the path
            const fileName = pageName.split('/').pop();

            if (fileName === 'index.html' || fileName === '') {

                updateContent(title, mergedData.title.title);


                updateLinkContent(nav0, mergedData.nav.nav0);
                updateLinkContent(nav1, mergedData.nav.nav1);
                updateLinkContent(nav2, mergedData.nav.nav2);
                updateLinkContent(nav3, mergedData.nav.nav3);
                updateLinkContent(nav4, mergedData.nav.nav4);

                
                updateContent(h0, mergedData.banner.h0);
                updateContent(h1, mergedData.banner.h1);
                updateContent(h2, mergedData.banner.h2);
                updateContent(h3, mergedData.banner.h3);
                updateContent(h4, mergedData.banner.h4);
                updateContent(h5, mergedData.banner.h5);
                updateContent(h6, mergedData.banner.h6);
                updateContent(h7, mergedData.banner.h7);
                updateContent(h8, mergedData.banner.h8);

                updateContent(c0, mergedData.category.c0);
                updateContent(c1, mergedData.category.c1);
                updateContent(c2, mergedData.category.c2);
                updateContent(c3, mergedData.category.c3);
                updateContent(c4, mergedData.category.c4);
                updateContent(c5, mergedData.category.c5);
                updateContent(c6, mergedData.category.c6);
                updateContent(c7, mergedData.category.c7);
                updateContent(c8, mergedData.category.c8);
                updateContent(c9, mergedData.category.c9);
                updateContent(c10, mergedData.category.c10);
                updateContent(c11, mergedData.category.c11);

                updateContent(b0, mergedData.beauty.b0);
                updateContent(b1, mergedData.beauty.b1);
                updateContent(b2, mergedData.beauty.b2);
                updateContent(b3, mergedData.beauty.b3);
    
                updateContent(p0, mergedData.product.p0);
                updateContent(p1, mergedData.product.p1);
                updateContent(p2, mergedData.product.p2);
                updateContent(p3, mergedData.product.p3);
                updateContent(p4, mergedData.product.p4);
                updateContent(p5, mergedData.product.p5);

                updateContent(u1, mergedData.client.u1);
                updateContent(u2, mergedData.client.u2);
                updateContent(u3, mergedData.client.u3);
                updateContent(u4, mergedData.client.u4);
                updateContent(u5, mergedData.client.u5);
                updateContent(u6, mergedData.client.u6);
                updateContent(u7, mergedData.client.u7);
                updateContent(u8, mergedData.client.u8);
                updateContent(u9, mergedData.client.u9);
                updateContent(u10, mergedData.client.u10);
                updateContent(u11, mergedData.client.u11);
    
                updateContent(n0, mergedData.newsletter.n0);
                updateContent(n1, mergedData.newsletter.n1);
                updateContent(n2, mergedData.newsletter.n2);

            
                updateContent(f0, mergedData.footer.f0);
                updateContent(f1, mergedData.footer.f1);
                updateContent(f2, mergedData.footer.f2);
                updateContent(f3, mergedData.footer.f3);
                updateContent(f4, mergedData.footer.f4);
                updateContent(f5, mergedData.footer.f5);
                updateContent(f6, mergedData.footer.f6);
                updateContent(f7, mergedData.footer.f7);
                updateContent(f8, mergedData.footer.f8);
                updateContent(f9, mergedData.footer.f9);

    
                updateBackgroundColor(g0, mergedData.color.nav);
                updateBackgroundColor(g1, mergedData.color.category);
                updateBackgroundColor(g2, mergedData.color.beauty);
                updateBackgroundColor(g3, mergedData.color.product);
                updateBackgroundColor(g4, mergedData.color.client);
                updateBackgroundColor(g5, mergedData.color.newsletter);
                updateBackgroundColor(g6, mergedData.color.footer);
             
                updateImageSrc(img1, mergedData.images.img1);
                updateImageSrc(img2, mergedData.images.img2);
                updateImageSrc(img3, mergedData.images.img3);
                updateImageSrc(img4, mergedData.images.img4);
                updateImageSrc(img5, mergedData.images.img5);
                updateImageSrc(img6, mergedData.images.img6);
                updateImageSrc(img7, mergedData.images.img7);
                updateImageSrc(img8, mergedData.images.img8);
                updateImageSrc(img9, mergedData.images.img9);
                updateImageSrc(img10, mergedData.images.img10);
                updateImageSrc(img11, mergedData.images.img11);
                updateImageSrc(img12, mergedData.images.img12);
                updateImageSrc(img13, mergedData.images.img13);
                updateImageSrc(img14, mergedData.images.img14);
                updateImageSrc(img15, mergedData.images.img15);
        

            }   else if (fileName === 'contact.html') {
                updateLinkContent(nav0, mergedData.nav.nav0);
                updateLinkContent(nav1, mergedData.nav.nav1);
                updateLinkContent(nav2, mergedData.nav.nav2);
                updateLinkContent(nav3, mergedData.nav.nav3);
                updateLinkContent(nav4, mergedData.nav.nav4);
                updateContent(f0, mergedData.footer.f0);
                updateContent(f1, mergedData.footer.f1);
                updateContent(f2, mergedData.footer.f2);
                updateContent(f3, mergedData.footer.f3);
                updateContent(f4, mergedData.footer.f4);
                updateContent(f5, mergedData.footer.f5);
                updateContent(f6, mergedData.footer.f6);
                updateContent(f7, mergedData.footer.f7);
                updateContent(f8, mergedData.footer.f8);
                updateContent(f9, mergedData.footer.f9);
                updateBackgroundColor(g0, mergedData.color.nav);
                updateBackgroundColor(g6, mergedData.color.footer);

            } else if (fileName === 'category.html') {
                updateLinkContent(nav0, mergedData.nav.nav0);
                updateLinkContent(nav1, mergedData.nav.nav1);
                updateLinkContent(nav2, mergedData.nav.nav2);
                updateLinkContent(nav3, mergedData.nav.nav3);
                updateLinkContent(nav4, mergedData.nav.nav4);
                updateContent(c0, mergedData.category.c0);
                updateContent(c1, mergedData.category.c1);
                updateContent(c2, mergedData.category.c2);
                updateContent(c3, mergedData.category.c3);
                updateContent(c4, mergedData.category.c4);
                updateContent(c5, mergedData.category.c5);
                updateContent(c6, mergedData.category.c6);
                updateContent(c7, mergedData.category.c7);
                updateContent(c8, mergedData.category.c8);
                updateContent(c9, mergedData.category.c9);
                updateContent(c10, mergedData.category.c10);
                updateContent(c11, mergedData.category.c11);
                updateContent(f0, mergedData.footer.f0);
                updateContent(f1, mergedData.footer.f1);
                updateContent(f2, mergedData.footer.f2);
                updateContent(f3, mergedData.footer.f3);
                updateContent(f4, mergedData.footer.f4);
                updateContent(f5, mergedData.footer.f5);
                updateContent(f6, mergedData.footer.f6);
                updateContent(f7, mergedData.footer.f7);
                updateContent(f8, mergedData.footer.f8);
                updateContent(f9, mergedData.footer.f9);
                updateBackgroundColor(g0, mergedData.color.nav);
                updateBackgroundColor(g1, mergedData.color.category);
                updateBackgroundColor(g6, mergedData.color.footer);

            } else if (fileName === 'clients.html') {
                updateLinkContent(nav0, mergedData.nav.nav0);
                updateLinkContent(nav1, mergedData.nav.nav1);
                updateLinkContent(nav2, mergedData.nav.nav2);
                updateLinkContent(nav3, mergedData.nav.nav3);
                updateLinkContent(nav4, mergedData.nav.nav4);
                updateContent(u1, mergedData.client.u1);
                updateContent(u2, mergedData.client.u2);
                updateContent(u3, mergedData.client.u3);
                updateContent(u4, mergedData.client.u4);
                updateContent(u5, mergedData.client.u5);
                updateContent(u6, mergedData.client.u6);
                updateContent(u7, mergedData.client.u7);
                updateContent(u8, mergedData.client.u8);
                updateContent(u9, mergedData.client.u9);
                updateContent(u10, mergedData.client.u10);
                updateContent(u11, mergedData.client.u11);
                updateContent(f0, mergedData.footer.f0);
                updateContent(f1, mergedData.footer.f1);
                updateContent(f2, mergedData.footer.f2);
                updateContent(f3, mergedData.footer.f3);
                updateContent(f4, mergedData.footer.f4);
                updateContent(f5, mergedData.footer.f5);
                updateContent(f6, mergedData.footer.f6);
                updateContent(f7, mergedData.footer.f7);
                updateContent(f8, mergedData.footer.f8);
                updateContent(f9, mergedData.footer.f9);
                updateBackgroundColor(g0, mergedData.color.nav);
                updateBackgroundColor(g4, mergedData.color.client);
                updateBackgroundColor(g6, mergedData.color.footer);

            } else if (fileName === 'product.html') {
                updateLinkContent(nav0, mergedData.nav.nav0);
                updateLinkContent(nav1, mergedData.nav.nav1);
                updateLinkContent(nav2, mergedData.nav.nav2);
                updateLinkContent(nav3, mergedData.nav.nav3);
                updateLinkContent(nav4, mergedData.nav.nav4);
                updateContent(p0, mergedData.product.p0);
                updateContent(p1, mergedData.product.p1);
                updateContent(p2, mergedData.product.p2);
                updateContent(p3, mergedData.product.p3);
                updateContent(p4, mergedData.product.p4);
                updateContent(p5, mergedData.product.p5);
                updateContent(f0, mergedData.footer.f0);
                updateContent(f1, mergedData.footer.f1);
                updateContent(f2, mergedData.footer.f2);
                updateContent(f3, mergedData.footer.f3);
                updateContent(f4, mergedData.footer.f4);
                updateContent(f5, mergedData.footer.f5);
                updateContent(f6, mergedData.footer.f6);
                updateContent(f7, mergedData.footer.f7);
                updateContent(f8, mergedData.footer.f8);
                updateContent(f9, mergedData.footer.f9);
                updateBackgroundColor(g0, mergedData.color.nav);
                updateBackgroundColor(g3, mergedData.color.product);
                updateBackgroundColor(g6, mergedData.color.footer);

            }
        })
        .catch(error => console.error('Error fetching or parsing JSON:', error));
}

// Call the function to update content when the page loads
window.addEventListener('load', function () {
    console.log('page loaded');
    // Get the current page URL
    const currentPage = window.location.pathname;

    // Update content based on the current page
    updatePageContent(currentPage);
});