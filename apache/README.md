# Apache

## Redirección de dominio

    RewriteEngine On

    RewriteCond %{HTTP_HOST} !^www\. [NC]
    RewriteRule ^(.*)$ https://www.%{HTTP_HOST}%{REQUEST_URI} [R=301,L]
