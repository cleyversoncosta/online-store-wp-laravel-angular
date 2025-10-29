# Online Store (Laravel + Angular + WooCommerce)

This project served as an experiment for an online store, aiming for better performance compared to the traditional WordPress + WooCommerce setup.

The results showed faster and more optimized rendering for users, but with the trade-off of weaker SEO performance compared to traditional WooCommerce.

## What Was Used
Below is a brief description of the tools and technologies implemented.

### Laravel 7 — Base Framework + Additional Packages
1. **correios-consulta** — used for ZIP code lookup and auto-filling the checkout form  
2. **mautic/api-library** — used for creating mailing lists for email marketing  
3. **pagarme/pagarme-php** — integration with the Pagar.me payment gateway  
4. **pixelpeter/laravel5-woocommerce-api-client** — WooCommerce REST API wrapper  
5. **jgrossi/corcel** — wrapper for direct WordPress communication via Eloquent  

### Angular 9
At the time of development, the latest release available was Angular 9. No special packages were added.

### WooCommerce / WordPress
The WooCommerce API and its entire store infrastructure were used. The main focus was on building the front end and handling communication with WooCommerce.

### Communication Flow

**Request:** User → Angular (Front-End) → Laravel API (Back-End) → WooCommerce API (Back-End)  

**Response:** WooCommerce → Laravel → Angular → User

### Demonstration Images


![Loja Online](https://github.com/cleyversoncosta/online-store-wp-laravel-angular/blob/main/images/1.png)

![Loja Online](https://github.com/cleyversoncosta/online-store-wp-laravel-angular/blob/main/images/2.png)

![Loja Online](https://github.com/cleyversoncosta/online-store-wp-laravel-angular/blob/main/images/3.png)

![Loja Online](https://github.com/cleyversoncosta/online-store-wp-laravel-angular/blob/main/images/4.png)
