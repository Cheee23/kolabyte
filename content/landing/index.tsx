import {
  Activity, Devices, Flash, Lock, Magic, Scale, Sparkle, Sun, TagUser
} from "@components";

export default {
  topFeatures: [
    {
      title: "Expertise",
      description:
        "Tim Kolabyte terdiri dari para ahli di bidang agensi digital kreatif, yang memiliki pengetahuan dan pengalaman untuk membantu klien sukses secara online.",
      icon: <TagUser fill="#FF4ECD" />,
    },
    {
      title: "Cost-Effective",
      description:
        "Dengan mengeluarkan kebutuhan agensi digital kepada Kolabyte, klien dapat menghemat biaya perekrutan dan pelatihan staf internal.",
      icon: <Flash fill="#FF4ECD" />,
    },
    {
      title: "Increased Online Visibility",
      description:
        "Kolabyte dapat membantu klien meningkatkan visibilitas online dan menjangkau lebih banyak calon pelanggan.",
      icon: <Magic fill="#FF4ECD" />,
    },
    {
      title: "Comprehensive Services",
      description:
        "Kolabyte menawarkan berbagai jenis layanan, mulai dari desain dan pengembangan website, spesialis media sosial, email pemasaran, optimasi mesin pencari (SEO), iklan bayar per klik (PPC) dan pembuatan merek bisnis Anda.",
      icon: <Devices fill="#FF4ECD" />,
    },
  ],
  fullFeatures: [
    {
      title: "Customized Solutions",
      description:
        "Kolabyte menawarkan solusi yang dapat disesuaikan dengan kebutuhan unik setiap klien. Kami bekerja dengan Anda untuk memahami tujuan bisnis Anda dan memberikan solusi yang sesuai untuk membantu Anda mencapai tujuan anda.",
      icon: <Magic fill="#FF4ECD" />,
    },
    {
      title: "Continuous Optimization",
      description:
        "Kolabyte terus mengoptimalkan website dan kampanye pemasaran klien untuk memastikan kinerja yang terbaik, sehingga mencapai hasil yang optimal.",
      icon: <Activity fill="#FF4ECD" />,
    },
    {
      title: "Scalability",
      description:
        "Kolabyte bisa menyesuaikan layanan mereka sesuai dengan kebutuhan yang semakin meningkat dari klien saat bisnis mereka berkembang.",
      icon: <Scale fill="#FF4ECD" />,
    },
    {
      title: "Strong Relationships",
      description:
        "Kolabyte menghargai hubungan yang kuat dengan klien untuk memahami kebutuhan bisnis dan mencapai tujuan yang lebih baik.",
      icon: <Lock fill="#FF4ECD" />,
    },
    {
      title: "Future-Proof",
      description:
        "Layanan Kolabyte dapat disesuaikan dengan tren dan teknologi terbaru di bidang pemasaran digital, sehingga klien siap menghadapi masa depan.",
      icon: <Sun fill="#FF4ECD" />,
    },
    {
      title: "Time-Saving",
      description: "Kolabyte menangani seluruh aspek dari pemasaran digital, sehingga klien dapat fokus pada mengelola bisnis mereka sementara Kolabyte menangani aspek digitalnya.",
      icon: <Flash fill="#FF4ECD" />,
    },
    {
      title: "Branding",
      description:
        "Kolabyte dapat membantu klien membuat identitas brand yang kuat dan konsisten di seluruh platform digital, meningkatkan kredibilitas dan daya tarik bisnis klien di mata calon pelanggan.",
      icon: <Sparkle fill="#FF4ECD" />,
    },
    {
      title: "Engagement",
      description:
        "Kolabyte membantu klien meningkatkan interaksi dengan audiens yang dituju melalui platform digital seperti media sosial, email, dan website dan meningkatkan kesadaran brand",
      icon: <Devices fill="#FF4ECD" />,
    },
  ],
  themingCode: `import { createTheme } from '@nextui-org/react';

const lightTheme = createTheme({
  type: 'light',
});

return (
  <ShopCard className={lightTheme} />
);


const darkTheme = createTheme({
  type: 'dark',
});

return (
  <ShopCard className={darkTheme} />
);



const lightModernTheme = createTheme({
  type: 'light',
  className: 'light-modern',
  theme: {
    colors: {
      primary: '#7928CA',
      primaryLight: '#d9c2f0',
      success: '#FF1CF7'
    }
  }
});

return (
  <ShopCard className={lightModernTheme}/>
)

const darkModernTheme = createTheme({
  type: 'dark',
  className: 'dark-modern',
  theme: {
    colors: {
      primary: '#7928CA',
      primaryLight: '#582A87',
      success: '#FF1CF7'
    }
  }
});

return (
  <ShopCard className={darkModernTheme} />
);

const lightElegantTheme = createTheme({
  type: 'light',
  className: 'light-elegant',
  theme: {
    colors: {
      primary: '#000000',
      primaryLight: '#AAAAAA',
      success: '#a2a2a2'
    },
    radii: {
      md: '4px'
    }
  }
});

return (
  <ShopCard className={lightElegantTheme}/>
);

const darkElegantTheme = createTheme({
  type: 'dark',
  className: 'dark-elegant',
  theme: {
    colors: {
      primary: '#ffffff',
      primaryLight: '#222222',
      success: '#a2a2a2'
    },
    radii: {
      md: '4px'
    }
  }
});

return (
  <ShopCard className={darkElegantTheme}/>
);


const lightRetroTheme = createTheme({
  type: 'light',
  className: 'light-retro',
  theme: {
    colors: {
      primary: '#FFD34E',
      primaryLight: 'transparent',
      error: '#EE457E'
    }
  }
});

return (
  <ShopCard className={lightRetroTheme}/>
);

const darkRetroTheme = createTheme({
  type: 'dark',
  className: 'dark-retro',
  theme: {
    colors: {
      primary: '#FFD34E',
      primaryLight: 'transparent',
      error: '#EE457E'
    }
  }
});

return (
  <ShopCard className={darkRetroTheme}/>
);


`,
  comparativeCode: {
    nextui: `import * as React from 'react';
import { Input } from '@nextui-org/react';

const MyComponent = () => {
  return (
    <Input.Password bordered labelPlaceholder="Password" />
  );
};

export default MyComponent
`,
    others: `import * as React from 'react';
import ButtonIcon from '@other-library/ButtonIcon';
import InputOutlined from '@other-library/InputOutlined';
import LabelInput from '@other-library/LabelInput';
import AdornmentInput from '@other-library/AdornmentInput';
import ControlForm from '@other-library/ControlForm';
import EyeIcon from '@other-library/icons/EyeIcon';
import EyeIconOff from '@other-library/icons/EyeIconOff';

const MyComponent = () => {
  const [values, setValues] = React.useState({
    password: '',
    showPassword: false
  });

  const handleChange = (event) => {
    setValues({ ...values, password: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <ControlForm sx={{ m: 1, width: '25ch' }} variant="outlined">
      <LabelInput htmlFor="outlined-adornment-password">Password</LabelInput>
      <InputOutlined
        id="outlined-adornment-password"
        type={values.showPassword ? 'text' : 'password'}
        value={values.password}
        onChange={handleChange}
        endAdornment={
          <AdornmentInput position="end">
            <ButtonIcon
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
            >
              {values.showPassword ? <EyeIcon /> : <EyeIconOff />}
            </ButtonIcon>
          </AdornmentInput>
        }
        label="Password"
      />
    </ControlForm>
  );
};

export default MyComponent;`,
  },
  darkModeCode: `// 1. Import createTheme
import { createTheme, NextUIProvider } from "@nextui-org/react"

// 2. Call createTheme and pass your custom values
const darkTheme = createTheme({
  type: 'dark',
  theme: {
    colors: {...},
  }
})

// 3. Apply dark theme
// Entry point of your app
const App = () => {
  return (
    <NextUIProvider theme={darkTheme}>
      <App />
    </NextUIProvider>
  )
}

export default App;
`,
  customizationCode: `
  Welcome to Our Store - Exclusive Discount Inside!
  
  Dear User,
  We are thrilled to welcome you to our brand new e-commerce 
  store! As a special thank you for signing up, we're offering 
  you a one-time 15% discount on your first purchase. Simply 
  use the code WELCOME15 at checkout.

  At kolabyte, we strive to bring you the latest in fashion, home decor, 
  and more. We believe that every day is an opportunity to look and feel 
  your best, and we are here to help you achieve that.
  Take a look around our store, and if you have any questions, please don't 
  hesitate to reach out to our customer support team.
  
  Thank you for choosing kolabyte, and happy shopping!

  Best regards,
  kolabyte


  Don't miss out on exclusive deals and promotions
  `,
  stitchesUtilitiesCode: `export const utils = {
  p: (value) => ({
    padding: value
  }),
  m: (value) => ({
    margin: value
  }),
  w: (value) => ({ width: value }),
  h: (value) => ({ height: value }),

  dflex: (value) => ({
    display: 'flex',
    alignItems: value,
    justifyContent: value
  }),
  sizeMin: (value) => ({
    minWidth: value,
    minHeight: value,
    width: value,
    height: value
  }),
  textGradient: (value) => ({
    backgroundImage: 'linear-gradient(value)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent'
  }),


  bg: (value) => ({
    background: value
  }),
  bgBlur: (value) => ({
    bf: 'saturate(180%) blur(10px)',
    bg: value
  }),
  bgColor: (value) => ({
    backgroundColor: value
  }),
  backgroundClip: (value) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value
  }),
  bgClip: (value) => ({
    WebkitBackgroundClip: value,
    backgroundClip: value
  }),

}`,
};
