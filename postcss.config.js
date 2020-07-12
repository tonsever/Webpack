module.exports = {
  plugins: [
      require('autoprefixer'), //({browsers: ['last 2 versions']}), пример из видео Макса
      require('cssnano')({ // подключили cssnano
          preset: 'default', // выбрали настройки по умолчанию
  })
]
}