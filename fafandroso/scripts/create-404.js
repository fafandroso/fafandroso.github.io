const fs = require('fs');

fs.copyFile('dist/fafandroso/index.html', 'dist/fafandroso/404.html', (err) => {
    if (err) {
        console.error('Error copiando index.html to 404.html');
        throw err;
    }
});
