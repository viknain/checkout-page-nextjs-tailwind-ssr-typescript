module.exports = {
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Circular Std"', 'Helvetica', 'Arial', 'sans-serif'],
        secondary: ['"Albra"', 'Helvetica', 'sans-serif'],
        body: ['"Gotham"', 'Helvetica', 'sans-serif']
      },
      stroke: (theme) => ({
        active: theme('colors.white'),
        DEFAULT: '#999',
        primary: '#3e4743'
      }),
      fill: {
        current: 'currentColor',
        active: '#fff',
        none: 'none',
        DEFAULT: '#999'
      },
      rotate: {
        270: '270deg'
      },
      fontSize: {
        'rv-exs-0': '0.6875rem',
        'rv-exs': '0.75rem',
        'rv-exss': '0.8125rem',
        'rv-xs': '0.917rem',
        'rv-sm': '1.083rem',
        'rv-sm-x': '1.125rem',
        'rv-sm-plus': '1.250rem',
        'rv-md': '1.417rem',
        'rv-lg': '1.750rem',
        'rv-xl': '2.250rem',
        'rv-xxl': '2.667rem',
        'rv-hero': '3.333rem',
        // ====== Style guide font sizes
        'rv-h1': '2rem',
        'rv-h2': '1.3125rem',
        'rv-h3': '1.5625rem',
        'rv-h4': '1.6875rem',
        'rv-subheading': '1.0625rem',
        'rv-p': '	0.875rem',
        'rv-p-sm': '0.6875rem',
        'rv-overline': '0.6875rem',
        'rv-xxxl': '3.063rem',
        'rv-xxxxl': '4.5rem'
      },
      lineHeight: {
        'rv-lead-xs': '0.875rem',
        'rv-lead-0': '1.167rem',
        'rv-lead-p': '1.125rem',
        'rv-lead-1': '1.1875rem',
        'rv-lead-2': '1.333rem',
        'rv-lead-p-2': '1.375rem',
        'rv-lead-3': '1.417rem',
        'rv-lead-4': '1.500rem',
        'rv-lead-5': '1.583rem',
        'rv-lead-5-p': '1.625rem',
        'rv-lead-6': '1.667rem',
        'rv-lead-7': '1.750rem',
        'rv-lead-8': '1.833rem',
        'rv-lead-9': '2.167rem',
        'rv-lead-10': '2.500rem',
        'rv-lead-11': '2.833rem'
      },
      colors: {
        primary: {
          light: '#99AFA6',
          DEFAULT: '#85C1A3',
          dark: '#2FBB89'
        },
        accent: {
          light: '#fafafa',
          DEFAULT: '#FBA131',
          dark: '#F07A28'
        },
        background: {
          secondary: '#676767F8'
        },
        alert: {
          DEFAULT: '#DD5421'
        },
        page: {
          DEFAULT: '#F4FAFB'
        },
        link: {
          DEFAULT: '#5846f9'
        },
        neutral: {
          lightest: '#FFF',
          light: '#E5E5E5',
          DEFAULT: '#3E4743',
          dark: '#878F8C',
          lightDark: '#707070',
          darker: '#1F2421'
        }
      },
      spacing: {
        'rv-s-1': '0.5rem',
        'rv-s-1.2': '0.625rem',
        'rv-s-2': '0.75rem',
        'rv-s-3': '0.937rem',
        'rv-s-4': '1.5rem',
        'rv-s-5': '2em',
        'rv-s-6': '3rem'
      },
      letterSpacing: {
        'rv-track-0': '0.009rem',
        'rv-track-1': '0.012rem',
        'rv-track-2': '0.018rem',
        'rv-track-3': '0.022rem',
        'rv-track-4': '0.083rem',
        'rv-track-4-md': '0.125rem',
        'rv-track-5': '0.167rem',
        'rv-track-6': '0.250rem',
        'rv-track-7': '0.333rem',
        'rv-track-8': '1.583rem'
      },
      borderRadius: {
        'rv-sm': '0.583rem',
        'rv-sm-plus': '0.625rem',
        'rv-md': '0.833rem'
      },
      borderWidth: {
        'rv-1': '1px'
      },
      listStyleType: {
        'rv-type-0': 'none',
        'rv-type-1': 'square',
        'rv-type-2': 'circle',
        'rv-type-3': 'disc',
        'rv-type-4': 'lower-alpha',
        'rv-type-5': 'decimal'
      }
    },
    screens: {
      xs: '320px',
      //mobile extra smaller screen Iphone SE

      sm: '640px',
      // => @media (min-width: 640px) { ... }
      //mobile screen moto g4, s5, iphone 7,8,9 X

      md: '768px',
      //md: [{ min: '768px' }, { min: '811px' }],
      // => @media (min-width: 768px) { ... }
      //Tablet ipad smaller, iphone-x

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      //Tablet ipad larger

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      //desktop

      xxl: '1536px'
      // => @media (min-width: 1536px) { ... }
      //desktop larger resolution
    }
  },
  variants: {
    extend: {}
  }
}
